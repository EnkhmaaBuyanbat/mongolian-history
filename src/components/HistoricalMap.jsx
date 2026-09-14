'use client'

import { useEffect, useMemo, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { mapPlaces } from '../data/mapPlaces'
import { mapCampaigns } from '../data/mapCampaigns'
import { mapRegions } from '../data/mapRegions'
import { campaigns } from '../data/campaigns'

const TILE_URL = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
const TILE_ATTRIBUTION = 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, SRTM | Map style © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'

function toLeafletLatLng(coordinates) {
  const [lng, lat] = coordinates
  return [lat, lng]
}

function isValidCoordinate(coordinates) {
  return Array.isArray(coordinates)
    && coordinates.length === 2
    && Number.isFinite(coordinates[0])
    && Number.isFinite(coordinates[1])
    && coordinates[0] >= -180
    && coordinates[0] <= 180
    && coordinates[1] >= -90
    && coordinates[1] <= 90
}

function buildSnapshotData(snapshot) {
  const visiblePlaces = mapPlaces.filter(
    (place) => snapshot.visiblePlaceIds.includes(place.id)
      && isValidCoordinate(place.coordinates),
  )
  const placeByEntityId = new Map(mapPlaces.map((place) => [place.entityId, place]))
  const activeCampaigns = mapCampaigns.filter(
    (campaign) => snapshot.activeCampaignIds.includes(campaign.campaignId),
  )
  const activeRegions = mapRegions.filter((region) => snapshot.visibleRegionIds.includes(region.id))

  const campaignSegments = activeCampaigns.flatMap((campaign) => (
    campaign.segments.flatMap(([fromId, toId]) => {
      const from = placeByEntityId.get(fromId)
      const to = placeByEntityId.get(toId)
      if (!from || !to || !isValidCoordinate(from.coordinates) || !isValidCoordinate(to.coordinates)) {
        return []
      }
      return [{ campaign, from, to }]
    })
  ))

  return { visiblePlaces, activeCampaigns, campaignSegments, activeRegions }
}

function setGroupVisibility(map, group, visible) {
  if (visible && !map.hasLayer(group)) group.addTo(map)
  if (!visible && map.hasLayer(group)) map.removeLayer(group)
}

function renderHistoricalLayers(holder, data, layers, selection, onSelect, snapshotYear) {
  const { map, regionsLayer, placesLayer, sitesLayer, campaignsLayer } = holder
  regionsLayer.clearLayers()
  placesLayer.clearLayers()
  sitesLayer.clearLayers()
  campaignsLayer.clearLayers()

  for (const region of data.activeRegions) {
    if (!region.geometry) continue
    const selected = selection?.kind === 'region' && selection.record.id === region.id
    const claimant = region.representation === 'CLAIMANT_SPHERE'
    L.geoJSON(region.geometry, {
      pane: 'politicalRegionsPane',
      style: {
        color: claimant ? '#8e5d43' : '#8f7139',
        weight: selected ? 2 : 1.25,
        opacity: selected ? 0.8 : 0.55,
        fillColor: claimant ? '#8e5d43' : '#b78a3a',
        fillOpacity: selected ? 0.2 : 0.11,
        dashArray: claimant ? '6 6' : null,
      },
      onEachFeature: (_, layer) => layer.on('click', () => onSelect({ kind:'region', record:region, snapshotYear })),
    }).addTo(regionsLayer)
  }

  for (const place of data.visiblePlaces) {
    const selected = selection?.kind === 'place' && selection.record.id === place.id
    const isSite = place.entityType === 'SITE'
    const marker = L.circleMarker(toLeafletLatLng(place.coordinates), {
      pane: isSite ? 'historicalSitesPane' : 'historicalPlacesPane',
      radius: selected ? 10 : isSite ? 9 : 8,
      color: isSite ? '#651d19' : '#e4d4b7',
      weight: 3,
      opacity: 1,
      fillColor: selected ? '#f0d596' : isSite ? '#b78a3a' : '#651d19',
      fillOpacity: 1,
    })
    marker.on('click', () => onSelect({ kind: 'place', record: place }))
    marker.addTo(isSite ? sitesLayer : placesLayer)
  }

  for (const segment of data.campaignSegments) {
    const selected = selection?.kind === 'campaign'
      && selection.record.campaignId === segment.campaign.campaignId
    const line = L.polyline([
      toLeafletLatLng(segment.from.coordinates),
      toLeafletLatLng(segment.to.coordinates),
    ], {
      pane: 'historicalCampaignsPane',
      color: selected ? '#f0d596' : '#b78a3a',
      weight: selected ? 4 : 3,
      opacity: selected ? 0.95 : 0.78,
      dashArray: '8 7',
      lineCap: 'butt',
    })
    line.on('click', () => onSelect({ kind: 'campaign', record: segment.campaign }))
    line.addTo(campaignsLayer)
  }

  setGroupVisibility(map, regionsLayer, layers.politicalWorlds)
  setGroupVisibility(map, placesLayer, layers.places)
  setGroupVisibility(map, sitesLayer, layers.sites)
  setGroupVisibility(map, campaignsLayer, layers.campaigns)

  const anchors = data.visiblePlaces.filter(
    (place) => layers[place.entityType === 'SITE' ? 'sites' : 'places'],
  )
  if (anchors.length) {
    const bounds = L.latLngBounds(anchors.map((place) => toLeafletLatLng(place.coordinates)))
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 4.5, animate: false })
  }
}

function HistoricalMap({ snapshot, layers, selection, onSelect }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const snapshotData = useMemo(() => buildSnapshotData(snapshot), [snapshot])
  const snapshotDataRef = useRef(snapshotData)
  const layersRef = useRef(layers)
  const selectionRef = useRef(selection)
  const onSelectRef = useRef(onSelect)
  const snapshotYearRef = useRef(snapshot.year)

  useEffect(() => {
    snapshotDataRef.current = snapshotData
    layersRef.current = layers
    selectionRef.current = selection
    onSelectRef.current = onSelect
    snapshotYearRef.current = snapshot.year

    if (mapRef.current) {
      renderHistoricalLayers(mapRef.current, snapshotData, layers, selection, onSelect, snapshot.year)
    }
  }, [snapshotData, layers, selection, onSelect, snapshot.year])

  useEffect(() => {
    if (!containerRef.current) return undefined

    const map = L.map(containerRef.current, {
      center: [44, 81],
      zoom: 3.4,
      zoomControl: true,
      attributionControl: true,
    })
    L.tileLayer(TILE_URL, {
      attribution: TILE_ATTRIBUTION,
      maxZoom: 17,
      subdomains: 'abc',
    }).addTo(map)

    map.createPane('politicalRegionsPane').style.zIndex = 300
    map.createPane('historicalCampaignsPane').style.zIndex = 410
    map.createPane('historicalPlacesPane').style.zIndex = 420
    map.createPane('historicalSitesPane').style.zIndex = 430

    const holder = {
      map,
      regionsLayer: L.layerGroup().addTo(map),
      placesLayer: L.layerGroup().addTo(map),
      sitesLayer: L.layerGroup().addTo(map),
      campaignsLayer: L.layerGroup().addTo(map),
    }
    mapRef.current = holder
    renderHistoricalLayers(
      holder,
      snapshotDataRef.current,
      layersRef.current,
      selectionRef.current,
      onSelectRef.current,
      snapshotYearRef.current,
    )

    const resizeObserver = new ResizeObserver(() => map.invalidateSize())
    resizeObserver.observe(containerRef.current)
    holder.resizeObserver = resizeObserver

    return () => {
      resizeObserver.disconnect()
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div className="historical-map-stage">
      <div
        ref={containerRef}
        className="historical-map-canvas"
        aria-label={`Historical map for ${snapshot.year}: ${snapshot.title}`}
      />
      {layers.campaigns && snapshotData.activeCampaigns.length ? (
        <div className="map-campaign-selector" aria-label="Active campaigns">
          {snapshotData.activeCampaigns.map((spatial) => (
            <button
              key={spatial.campaignId}
              type="button"
              onClick={() => onSelect({ kind: 'campaign', record: spatial })}
            >
              {campaigns.find((campaign) => campaign.id === spatial.campaignId)?.title}
            </button>
          ))}
        </div>
      ) : null}
      {layers.politicalWorlds && snapshotData.activeRegions.length ? (
        <div className="map-region-selector" aria-label="Political worlds">
          {snapshotData.activeRegions.map((region) => (
            <button key={region.id} type="button" onClick={() => onSelect({ kind:'region', record:region, snapshotYear:snapshot.year })}>{region.name}{region.geometry ? '' : ' · metadata'}</button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default HistoricalMap
