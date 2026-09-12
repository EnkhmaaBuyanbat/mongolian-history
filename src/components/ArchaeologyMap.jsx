import { useMemo, useState } from 'react'
import { sites } from '../data/sites'
import { getLocalizedEntity } from '../data/entityLocalization'
import { formatTemplate } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'

const MAP_WIDTH = 1000
const MAP_HEIGHT = 600
const MAP_PADDING = 90

const siteLabels = {
  'site-noyon-uul-noin-ula': 'Noyon Uul',
  'site-gol-mod': 'Gol Mod I',
  'site-gol-mod-ii': 'Gol Mod II',
  'site-duurlig-nars': 'Duurlig Nars',
  'site-takhiltyn-khotgor': 'Takhiltiin Khotgor',
}

const labelOffsets = {
  'site-noyon-uul-noin-ula': { x: 18, y: -18, anchor: 'start' },
  'site-gol-mod': { x: -18, y: -18, anchor: 'end' },
  'site-gol-mod-ii': { x: -18, y: 24, anchor: 'end' },
  'site-duurlig-nars': { x: -18, y: -18, anchor: 'end' },
  'site-takhiltyn-khotgor': { x: 18, y: 25, anchor: 'start' },
}

function projectCoordinates(siteRecords) {
  const longitudes = siteRecords.map((site) => site.coordinates.lng)
  const latitudes = siteRecords.map((site) => site.coordinates.lat)
  const minLng = Math.min(...longitudes)
  const maxLng = Math.max(...longitudes)
  const minLat = Math.min(...latitudes)
  const maxLat = Math.max(...latitudes)
  const lngRange = maxLng - minLng || 1
  const latRange = maxLat - minLat || 1
  const usableWidth = MAP_WIDTH - MAP_PADDING * 2
  const usableHeight = MAP_HEIGHT - MAP_PADDING * 2

  return siteRecords.map((site) => ({
    ...site,
    x: MAP_PADDING + ((site.coordinates.lng - minLng) / lngRange) * usableWidth,
    y: MAP_HEIGHT - MAP_PADDING - ((site.coordinates.lat - minLat) / latRange) * usableHeight,
  }))
}

function ArchaeologyMap({ siteIds, selectedSiteId, onSiteSelect }) {
  const { localeSection } = useLocale()
  const ui = localeSection('chapters').ui
  const entityUi = localeSection('entities').ui
  const entityLocale = localeSection('entities')
  const [internalSelectedId, setInternalSelectedId] = useState(siteIds[0])
  const mapSites = useMemo(
    () => projectCoordinates(
      siteIds
        .map((siteId) => sites.find((site) => site.id === siteId))
        .filter((site) => site?.coordinates)
        .map((site) => getLocalizedEntity(site, entityLocale)),
    ),
    [siteIds, entityLocale],
  )
  const selectedId = selectedSiteId ?? internalSelectedId
  const selectedSite = mapSites.find((site) => site.id === selectedId) ?? mapSites[0]

  if (!mapSites.length) {
    return null
  }

  const selectSite = (siteId) => {
    setInternalSelectedId(siteId)
    onSiteSelect?.(siteId)
  }

  const selectedLabel = selectedSite.id === 'site-noyon-uul-noin-ula' ? ui.noyonUulSujigt : siteLabels[selectedSite.id]
  const statusLabel = selectedSite.status === 'verified' ? entityUi.sourceBacked : (entityUi[selectedSite.status] ?? selectedSite.status)

  return (
    <div className="archaeology-map-module">
      <div className="archaeology-map-heading">
        <p className="section-label">{ui.archaeologyMapLabel}</p>
        <h3>{ui.archaeologyMapTitle}</h3>
        <p>{ui.archaeologyMapIntro}</p>
      </div>

      <div className="archaeology-map-layout">
        <div className="archaeology-map-frame">
          <svg
            className="archaeology-map"
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            role="img"
            aria-label={ui.archaeologyMapAria}
          >
            <defs>
              <pattern id="map-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(228, 212, 183, 0.12)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#map-grid)" />
            <path
              className="mongolia-silhouette"
              d="M78 245 L142 196 L242 177 L350 145 L475 132 L594 145 L710 136 L825 177 L925 238 L913 294 L861 330 L838 380 L754 402 L683 442 L566 449 L475 470 L365 452 L275 465 L184 431 L112 389 L76 325 Z"
              aria-hidden="true"
            />
            <path
              className="map-contour"
              d="M135 245 C275 180 410 190 540 165 S790 185 875 270 M120 355 C270 300 410 320 555 285 S790 300 895 350 M240 445 C390 395 540 410 710 375"
              aria-hidden="true"
            />
            {mapSites.map((site) => {
              const isSelected = site.id === selectedSite.id
              const markerLabel = site.id === 'site-noyon-uul-noin-ula' ? ui.noyonUulSujigt : siteLabels[site.id]
              const label = siteLabels[site.id]
              const offset = labelOffsets[site.id]
              return (
                <g key={site.id} className={`map-marker${isSelected ? ' is-selected' : ''}`}>
                  <circle cx={site.x} cy={site.y} r={isSelected ? 22 : 16} className="map-marker-ring" aria-hidden="true" />
                  <circle
                    cx={site.x}
                    cy={site.y}
                    r={isSelected ? 20 : 16}
                    className="map-marker-hit"
                    tabIndex={0}
                    role="button"
                    aria-label={formatTemplate(ui.selectSite, { name: markerLabel })}
                    onClick={() => selectSite(site.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        selectSite(site.id)
                      }
                    }}
                  />
                  <circle cx={site.x} cy={site.y} r={isSelected ? 8 : 6} className="map-marker-dot" aria-hidden="true" />
                  <line x1={site.x} y1={site.y} x2={site.x + offset.x * 0.72} y2={site.y + offset.y * 0.72} className="map-marker-leader" aria-hidden="true" />
                  <text x={site.x + offset.x} y={site.y + offset.y} textAnchor={offset.anchor} className="map-marker-label">{label}</text>
                </g>
              )
            })}
          </svg>
          <div className="archaeology-map-caption">{ui.mapContextPresentDay}</div>
        </div>

        <aside className="archaeology-map-panel" aria-live="polite">
          <p className="section-label">{ui.selectedArchaeologicalSite}</p>
          <h4>{selectedLabel}</h4>
          {selectedSite.location ? <p className="map-panel-location">{selectedSite.location}</p> : null}
          <dl>
            <div>
              <dt>{ui.type}</dt>
              <dd>{selectedSite.type}</dd>
            </div>
            <div>
              <dt>{ui.status}</dt>
              <dd>{statusLabel}</dd>
            </div>
            <div>
              <dt>{ui.coordinates}</dt>
              <dd>{selectedSite.coordinates.lat.toFixed(6)}° N · {selectedSite.coordinates.lng.toFixed(6)}° E</dd>
            </div>
          </dl>
          <p className="map-panel-summary">{selectedSite.summary}</p>
          {selectedSite.id === 'site-noyon-uul-noin-ula' ? (
            <p className="map-panel-note">{ui.noyonUulMapNote}</p>
          ) : null}
          <p className="map-panel-action">{ui.detailedSiteComingSoon}</p>
        </aside>
      </div>

      <div className="archaeology-map-footer">
        <div className="map-legend">
          <span><i className="legend-dot selected" /> {ui.legendSelectedSite}</span>
          <span><i className="legend-dot" /> {ui.legendArchaeologicalSite}</span>
        </div>
        <p>{ui.archaeologyMapFooter}</p>
      </div>
    </div>
  )
}

export default ArchaeologyMap
