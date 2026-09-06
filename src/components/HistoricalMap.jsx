import { useEffect, useMemo, useRef, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import { mapPlaces } from '../data/mapPlaces'
import { mapCampaigns } from '../data/mapCampaigns'
import { campaigns } from '../data/campaigns'

const baseStyle = 'https://tiles.openfreemap.org/styles/liberty'
const emptyFeatureCollection = {type:'FeatureCollection',features:[]}
const SOURCE_IDS = {places:'historical-places',sites:'historical-sites',campaigns:'historical-campaigns'}
const LAYER_IDS = {places:'historical-places-layer',sites:'historical-sites-layer',campaigns:'historical-campaign-links'}
const customLayerIds = [LAYER_IDS.campaigns,LAYER_IDS.places,LAYER_IDS.sites]

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

function createHistoricalGeoJSON(snapshot, layers, selection) {
  const visible = mapPlaces.filter((place) => snapshot.visiblePlaceIds.includes(place.id) && layers[place.entityType === 'SITE' ? 'sites' : 'places'] && isValidCoordinate(place.coordinates))
  const pointFeature = (place) => ({type:'Feature',id:place.id,properties:{id:place.id,name:place.label,entityType:place.entityType,geographicConfidence:place.geographicConfidence,selected:selection?.kind === 'place' && selection.record.id === place.id},geometry:{type:'Point',coordinates:place.coordinates}})
  const placeData = {type:'FeatureCollection',features:visible.filter(({entityType}) => entityType === 'PLACE').map(pointFeature)}
  const siteData = {type:'FeatureCollection',features:visible.filter(({entityType}) => entityType === 'SITE').map(pointFeature)}
  const placeByEntity = new Map(mapPlaces.map((place) => [place.entityId,place]))
  const activeSpatial = mapCampaigns.filter((campaign) => snapshot.activeCampaignIds.includes(campaign.campaignId))
  const campaignFeatures = layers.campaigns ? activeSpatial.flatMap((campaign) => campaign.segments.flatMap(([fromId,toId]) => {
    const from=placeByEntity.get(fromId),to=placeByEntity.get(toId)
    return from&&to&&isValidCoordinate(from.coordinates)&&isValidCoordinate(to.coordinates)?[{type:'Feature',id:`${campaign.campaignId}-${fromId}-${toId}`,properties:{campaignId:campaign.campaignId,selected:selection?.kind === 'campaign' && selection.record.campaignId === campaign.campaignId},geometry:{type:'LineString',coordinates:[from.coordinates,to.coordinates]}}]:[]
  })) : []
  return {placeData,siteData,campaignData:{type:'FeatureCollection',features:campaignFeatures},visible,visibility:{places:layers.places,sites:layers.sites,campaigns:layers.campaigns}}
}

function installHistoricalLayers(map) {
  try {
    for (const id of Object.values(SOURCE_IDS)) {
      if (!map.getSource(id)) map.addSource(id,{type:'geojson',data:emptyFeatureCollection})
    }
    if (!map.getLayer(LAYER_IDS.campaigns)) {
      map.addLayer({id:LAYER_IDS.campaigns,type:'line',source:SOURCE_IDS.campaigns,layout:{visibility:'visible'},paint:{'line-color':'#b78a3a','line-width':5,'line-opacity':1,'line-dasharray':[2,2]}})
    }
    if (!map.getLayer(LAYER_IDS.places)) {
      map.addLayer({id:LAYER_IDS.places,type:'circle',source:SOURCE_IDS.places,layout:{visibility:'visible'},paint:{'circle-radius':10,'circle-color':'#651d19','circle-opacity':1,'circle-stroke-width':3,'circle-stroke-color':'#e4d4b7','circle-stroke-opacity':1}})
    }
    if (!map.getLayer(LAYER_IDS.sites)) {
      map.addLayer({id:LAYER_IDS.sites,type:'circle',source:SOURCE_IDS.sites,layout:{visibility:'visible'},paint:{'circle-radius':11,'circle-color':'#b78a3a','circle-opacity':1,'circle-stroke-width':3,'circle-stroke-color':'#17100c','circle-stroke-opacity':1}})
    }
    for (const id of customLayerIds) map.moveLayer(id)
    return {success:true,error:''}
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Historical overlay installation error:',error)
    return {success:false,error:message}
  }
}

function sourceFeatureCount(map, id) {
  const data = map.getStyle().sources?.[id]?.data
  return data?.type === 'FeatureCollection' ? data.features.length : 0
}

function sourceData(map, id) {
  const data = map.getStyle().sources?.[id]?.data
  return data?.type === 'FeatureCollection' ? data : emptyFeatureCollection
}

async function setGeoJsonData(map, key, data, setStats) {
  setStats((current) => ({...current,[key]:{calls:current[key].calls+1,lastFeatureCount:data.features.length}}))
  await map.getSource(SOURCE_IDS[key]).setData(data)
}

async function populateHistoricalSources(map, data, setStats) {
  const sources = Object.fromEntries(Object.entries(SOURCE_IDS).map(([key,id]) => [key,map.getSource(id)]))
  const missing = Object.entries(sources).filter(([,source]) => !source).map(([key]) => SOURCE_IDS[key])
  if (missing.length) throw new Error(`Historical source infrastructure missing: ${missing.join(' / ')}`)
  await Promise.all([
    setGeoJsonData(map,'places',data.placeData,setStats),
    setGeoJsonData(map,'sites',data.siteData,setStats),
    setGeoJsonData(map,'campaigns',data.campaignData,setStats),
  ])
}

async function populateAndInspect(map, data, setStats) {
  await populateHistoricalSources(map,data,setStats)
  map.setLayoutProperty(LAYER_IDS.places,'visibility',data.visibility.places?'visible':'none')
  map.setLayoutProperty(LAYER_IDS.sites,'visibility',data.visibility.sites?'visible':'none')
  map.setLayoutProperty(LAYER_IDS.campaigns,'visibility',data.visibility.campaigns?'visible':'none')
  for (const id of customLayerIds) map.moveLayer(id)
  return {...inspectHistoricalStyle(map,data.visible),inputPlaces:data.placeData.features.length,inputSites:data.siteData.features.length,inputCampaigns:data.campaignData.features.length}
}

function nextFrames() {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}

function withProofTimeout(promise) {
  return Promise.race([promise,new Promise((_,reject) => setTimeout(() => {
    const error = new Error('Source proof exceeded five seconds.')
    error.name = 'ProofTimeout'
    reject(error)
  },5000))])
}

function layerRuntime(map, id, properties) {
  const layer = (map.getStyle().layers ?? []).find((item) => item.id === id)
  if (!layer) return null
  return {
    source:layer.source,
    type:layer.type,
    visibility:map.getLayoutProperty(id,'visibility') ?? 'visible',
    minzoom:layer.minzoom ?? 'none',
    maxzoom:layer.maxzoom ?? 'none',
    filter:map.getFilter(id) ?? 'none',
    paint:Object.fromEntries(properties.map((property) => [property,map.getPaintProperty(id,property)])),
  }
}

function inspectHistoricalStyle(map, visiblePlaces) {
  const style = map.getStyle()
  const layerIds = (style.layers ?? []).map(({id}) => id)
  const placeData = sourceData(map,SOURCE_IDS.places)
  const siteData = sourceData(map,SOURCE_IDS.sites)
  const campaignData = sourceData(map,SOURCE_IDS.campaigns)
  const renderedCount = (id) => map.queryRenderedFeatures({layers:[id]}).length
  const renderedNear = (place, id) => {
    if (!place) return 0
    const point = map.project(place.coordinates)
    return map.queryRenderedFeatures([[point.x-20,point.y-20],[point.x+20,point.y+20]],{layers:[id]}).length
  }
  const otrar = visiblePlaces.find(({label}) => label === 'Otrar')
  const karakorum = visiblePlaces.find(({label}) => label === 'Karakorum')
  return {
    placesSource:Boolean(style.sources?.[SOURCE_IDS.places]),
    placesFeatures:sourceFeatureCount(map,SOURCE_IDS.places),
    sitesSource:Boolean(style.sources?.[SOURCE_IDS.sites]),
    sitesFeatures:sourceFeatureCount(map,SOURCE_IDS.sites),
    campaignSource:Boolean(style.sources?.[SOURCE_IDS.campaigns]),
    campaignFeatures:sourceFeatureCount(map,SOURCE_IDS.campaigns),
    placesLayer:Boolean(map.getLayer(LAYER_IDS.places)),
    sitesLayer:Boolean(map.getLayer(LAYER_IDS.sites)),
    campaignLayer:Boolean(map.getLayer(LAYER_IDS.campaigns)),
    campaignIndex:layerIds.indexOf(LAYER_IDS.campaigns),
    placesIndex:layerIds.indexOf(LAYER_IDS.places),
    sitesIndex:layerIds.indexOf(LAYER_IDS.sites),
    placeRuntime:layerRuntime(map,LAYER_IDS.places,['circle-radius','circle-color','circle-opacity','circle-stroke-width','circle-stroke-color','circle-stroke-opacity']),
    siteRuntime:layerRuntime(map,LAYER_IDS.sites,['circle-radius','circle-color','circle-opacity','circle-stroke-width','circle-stroke-color','circle-stroke-opacity']),
    campaignRuntime:layerRuntime(map,LAYER_IDS.campaigns,['line-width','line-color','line-opacity','line-dasharray']),
    sourceQueryPlaces:map.querySourceFeatures(SOURCE_IDS.places).length,
    sourceQuerySites:map.querySourceFeatures(SOURCE_IDS.sites).length,
    sourceQueryCampaigns:map.querySourceFeatures(SOURCE_IDS.campaigns).length,
    renderedPlaces:renderedCount(LAYER_IDS.places),
    renderedSites:renderedCount(LAYER_IDS.sites),
    renderedCampaigns:renderedCount(LAYER_IDS.campaigns),
    placeSample:placeData.features[0]?.properties ?? null,
    siteSample:siteData.features[0]?.properties ?? null,
    campaignSample:campaignData.features[0]?.properties ?? null,
    campaignGeometry:campaignData.features[0]?.geometry ?? null,
    otrarFeature:placeData.features.find(({properties}) => properties.name === 'Otrar') ?? null,
    karakorumFeature:siteData.features.find(({properties}) => properties.name === 'Karakorum') ?? null,
    firstCampaignFeature:campaignData.features[0] ?? null,
    renderedNearOtrar:renderedNear(otrar,LAYER_IDS.places),
    renderedNearKarakorum:renderedNear(karakorum,LAYER_IDS.sites),
    projected:Object.fromEntries(visiblePlaces.map((place) => {
      const point = map.project(place.coordinates)
      return [place.label,{x:point.x,y:point.y}]
    })),
  }
}

function HistoricalMap({ snapshot, layers, selection, onSelect }) {
  const currentHistoricalData = useMemo(() => createHistoricalGeoJSON(snapshot,layers,selection),[snapshot,layers,selection])
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const historicalDataRef = useRef(currentHistoricalData)
  const sourceProofRunningRef = useRef(false)
  const onSelectRef = useRef(onSelect)
  const [cameraState, setCameraState] = useState({longitude:78,latitude:44,zoom:2.25})
  const [overlayState, setOverlayState] = useState(null)
  const [lifecycleState, setLifecycleState] = useState({styleLoadCount:0,installCalls:0,installResult:'NOT RUN',installError:'',installVerification:'NOT RUN',populationResult:'WAITING FOR HISTORICAL INFRASTRUCTURE',lastMapError:'none'})
  const [setDataState, setSetDataState] = useState({places:{calls:0,lastFeatureCount:0},sites:{calls:0,lastFeatureCount:0},campaigns:{calls:0,lastFeatureCount:0}})
  const [debugPointState, setDebugPointState] = useState({status:'NOT RUN',renderedCount:0,restoredPlaces:0})
  const [sourceProofRunning, setSourceProofRunning] = useState(false)

  useEffect(() => {
    onSelectRef.current = onSelect
  }, [onSelect])

  function updateCameraState(map) {
    const center = map.getCenter()
    setCameraState({longitude:center.lng,latitude:center.lat,zoom:map.getZoom()})
  }

  function fitExact1221() {
    const holder = mapRef.current
    if (!holder) return
    const bounds = new holder.maplibregl.LngLatBounds([59.1417,39.6667],[102.85,47.479214])
    holder.map.fitBounds(bounds,{padding:40,duration:0})
  }

  async function runSourceProof() {
    if (sourceProofRunningRef.current) return
    const holder = mapRef.current
    if (!holder || !historicalDataRef.current) return
    const map = holder.map
    if (!map.getSource(SOURCE_IDS.places)) {
      setDebugPointState({status:'BLOCKED — HISTORICAL SOURCE NOT INSTALLED',renderedCount:0,restoredPlaces:0})
      return
    }
    const realPlaceData = historicalDataRef.current.placeData
    const debugData = {type:'FeatureCollection',features:[{type:'Feature',id:'debug-point',properties:{id:'debug-point',name:'DEBUG POINT'},geometry:{type:'Point',coordinates:[81,44]}}]}
    let restored = false
    sourceProofRunningRef.current = true
    setSourceProofRunning(true)
    try {
      setDebugPointState({status:'RUNNING',renderedCount:0,restoredPlaces:0})
      await withProofTimeout(setGeoJsonData(map,'places',debugData,setSetDataState))
      map.jumpTo({center:[81,44],zoom:4})
      await nextFrames()
      const point = map.project([81,44])
      const renderedCount = map.queryRenderedFeatures([[point.x-20,point.y-20],[point.x+20,point.y+20]],{layers:[LAYER_IDS.places]}).length
      await withProofTimeout(setGeoJsonData(map,'places',realPlaceData,setSetDataState))
      restored = true
      await nextFrames()
      setDebugPointState({status:renderedCount>0?'VISIBLE':'NOT VISIBLE',renderedCount,restoredPlaces:realPlaceData.features.length})
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      setDebugPointState({status:error?.name === 'ProofTimeout'?'TIMEOUT':`FAILURE: ${message}`,renderedCount:0,restoredPlaces:0})
      setLifecycleState((current) => ({...current,lastMapError:message}))
      console.error('Historical source proof error:',error)
    } finally {
      if (!restored) {
        try {
          await withProofTimeout(setGeoJsonData(map,'places',realPlaceData,setSetDataState))
          setDebugPointState((current) => ({...current,restoredPlaces:realPlaceData.features.length}))
        } catch (error) {
          console.error('Historical places restoration error:',error)
        }
      }
      sourceProofRunningRef.current = false
      setSourceProofRunning(false)
    }
  }

  useEffect(() => {
    let cancelled = false
    import('maplibre-gl').then((maplibregl) => {
      if (cancelled || !containerRef.current) return
      let map
      try {
        map = new maplibregl.Map({container:containerRef.current,style:baseStyle,center:[78,44],zoom:2.25,attributionControl:true})
      } catch (error) {
        console.error('Historical map initialization error:', error)
        return
      }
      mapRef.current = {map,maplibregl}
      map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right')
      const installAndPopulate = async () => {
        const result = installHistoricalLayers(map)
        const sourceChecks = Object.values(SOURCE_IDS).map((id) => Boolean(map.getSource(id)))
        const layerChecks = Object.values(LAYER_IDS).map((id) => Boolean(map.getLayer(id)))
        const verified = result.success && sourceChecks.every(Boolean) && layerChecks.every(Boolean)
        setLifecycleState((current) => ({...current,installCalls:current.installCalls+1,installResult:verified?'SUCCESS':'FAILURE',installError:result.error,installVerification:`sources ${sourceChecks.map((value) => value?'YES':'NO').join('/')} · layers ${layerChecks.map((value) => value?'YES':'NO').join('/')}`}))
        if (!verified) return
        try {
          const diagnostic = await populateAndInspect(map,historicalDataRef.current,setSetDataState)
          setOverlayState(diagnostic)
          setLifecycleState((current) => ({...current,populationResult:'SUCCESS'}))
          map.once('idle',() => setOverlayState({...inspectHistoricalStyle(map,historicalDataRef.current.visible),inputPlaces:historicalDataRef.current.placeData.features.length,inputSites:historicalDataRef.current.siteData.features.length,inputCampaigns:historicalDataRef.current.campaignData.features.length}))
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error)
          setLifecycleState((current) => ({...current,populationResult:'FAILURE',installError:message}))
          console.error('Historical source population error:',error)
        }
      }
      map.on('style.load',() => {
        setLifecycleState((current) => ({...current,styleLoadCount:current.styleLoadCount+1}))
        for (const layer of map.getStyle().layers ?? []) {
          if (layer.type === 'symbol') map.setLayoutProperty(layer.id,'visibility','none')
        }
        void installAndPopulate()
        map.resize()
      })
      if (map.loaded()) void installAndPopulate()
      map.on('moveend',() => updateCameraState(map))
      map.on('click',(event) => {
        const queryLayers = [LAYER_IDS.sites,LAYER_IDS.places].filter((id) => map.getLayer(id))
        if (!queryLayers.length) return
        const feature = map.queryRenderedFeatures(event.point,{layers:queryLayers})[0]
        const record = feature ? mapPlaces.find(({id}) => id === feature.properties.id) : null
        if (record) onSelectRef.current({kind:'place',record})
      })
      map.on('mousemove',(event) => {
        const queryLayers = [LAYER_IDS.sites,LAYER_IDS.places].filter((id) => map.getLayer(id))
        map.getCanvas().style.cursor = queryLayers.length && map.queryRenderedFeatures(event.point,{layers:queryLayers}).length ? 'pointer' : ''
      })
      map.on('error',(event) => {
        const error = event.error ?? event
        const message = error instanceof Error ? error.message : String(error)
        setLifecycleState((current) => ({...current,lastMapError:message}))
        console.error('Historical map rendering error:',error)
      })
      const resizeObserver = new ResizeObserver(() => map.resize())
      resizeObserver.observe(containerRef.current)
      mapRef.current.resizeObserver = resizeObserver
    }).catch((error) => console.error('Historical map module error:',error))
    return () => { cancelled=true; mapRef.current?.resizeObserver?.disconnect(); mapRef.current?.map.remove(); mapRef.current=null }
  }, [])

  useEffect(() => {
    historicalDataRef.current = currentHistoricalData
    const map = mapRef.current?.map
    if (!map || sourceProofRunningRef.current) return
    const sourcesReady = Object.values(SOURCE_IDS).every((id) => Boolean(map.getSource(id)))
    if (!sourcesReady) {
      setLifecycleState((current) => ({...current,populationResult:'WAITING FOR HISTORICAL INFRASTRUCTURE'}))
      return
    }
    void populateAndInspect(map,currentHistoricalData,setSetDataState).then((diagnostic) => {
      setOverlayState(diagnostic)
      setLifecycleState((current) => ({...current,populationResult:'SUCCESS'}))
    }).catch((error) => {
      const message = error instanceof Error ? error.message : String(error)
      setLifecycleState((current) => ({...current,populationResult:'FAILURE',installError:message}))
      console.error('Historical overlay data update error:',error)
    })
  }, [currentHistoricalData])

  const activeSpatial = mapCampaigns.filter((campaign) => snapshot.activeCampaignIds.includes(campaign.campaignId))
  const yesNo = (value) => value ? 'YES' : 'NO'
  return <div className="historical-map-shell"><div className="map-camera-test"><strong>CAMERA TEST</strong><div><button type="button" onClick={fitExact1221}>FIT EXACT 1221</button><button type="button" onClick={runSourceProof} disabled={sourceProofRunning || lifecycleState.installResult !== 'SUCCESS'}>{sourceProofRunning?'RUNNING…':'RUN SOURCE PROOF'}</button></div><small>Current center: Lng {cameraState.longitude.toFixed(2)} / Lat {cameraState.latitude.toFixed(2)} · Current zoom: {cameraState.zoom.toFixed(2)}</small></div><div className="map-overlay-test"><strong>INSTALL TEST</strong><small>Style loads: {lifecycleState.styleLoadCount} · Installs: {lifecycleState.installCalls} · Result: {lifecycleState.installResult}<br />Verification: {lifecycleState.installVerification}<br />Error: {lifecycleState.installError || 'none'}</small><strong>OVERLAY TEST</strong><small>Population: {lifecycleState.populationResult}<br />Sources P/S/C: {overlayState?.placesFeatures ?? 0}/{overlayState?.sitesFeatures ?? 0}/{overlayState?.campaignFeatures ?? 0} · Layers P/S/C: {yesNo(overlayState?.placesLayer)}/{yesNo(overlayState?.sitesLayer)}/{yesNo(overlayState?.campaignLayer)} · Rendered P/S/C: {overlayState?.renderedPlaces ?? 0}/{overlayState?.renderedSites ?? 0}/{overlayState?.renderedCampaigns ?? 0}<br />SETDATA last P/S/C: {setDataState.places.lastFeatureCount}/{setDataState.sites.lastFeatureCount}/{setDataState.campaigns.lastFeatureCount} · Last error: {lifecycleState.lastMapError}<br />Source proof: {debugPointState.status} · Query {debugPointState.renderedCount}</small></div><div className="historical-map-stage"><div ref={containerRef} className="historical-map-canvas" aria-label={`Historical map for ${snapshot.year}: ${snapshot.title}`} />{layers.campaigns && activeSpatial.length ? <div className="map-campaign-selector" aria-label="Active campaigns">{activeSpatial.map((spatial) => <button key={spatial.campaignId} type="button" onClick={() => onSelect({kind:'campaign',record:spatial})}>{campaigns.find((campaign) => campaign.id === spatial.campaignId)?.title}</button>)}</div> : null}</div></div>
}

export default HistoricalMap
