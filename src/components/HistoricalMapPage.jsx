import { useCallback, useMemo, useState } from 'react'
import HistoricalMap from './HistoricalMap'
import MapInfoPanel from './MapInfoPanel'
import MapLayerControl from './MapLayerControl'
import MapLegend from './MapLegend'
import MapTimeControl from './MapTimeControl'
import { mapSnapshots } from '../data/mapSnapshots'
import { MeanderLine } from './Ornament'

function HistoricalMapPage() {
  const [selectedYear, setSelectedYear] = useState(1221)
  const [layers, setLayers] = useState({ places:true,sites:true,campaigns:true,politicalWorlds:true })
  const [selection, setSelection] = useState(null)
  const snapshot = useMemo(() => mapSnapshots.find((item) => item.year === selectedYear) ?? mapSnapshots[0], [selectedYear])
  const selectFeature = useCallback((value) => setSelection(value), [])

  function selectYear(year) {
    setSelectedYear(year)
    setSelection(null)
  }

  return (
    <article className="historical-map-page">
      <header className="historical-map-header"><div className="section-inner"><p className="section-label">Era III Historical Map</p><h1>Space, Time & Evidence</h1><p>Ten educational snapshots trace selected places and campaign contexts without imposing precise medieval borders or GPS routes.</p><MeanderLine className="entity-meander" /></div></header>
      <section className="historical-map-workspace section-inner">
        <div className="map-snapshot-intro"><div><p className="section-label">{snapshot.year}</p><h2>{snapshot.title}</h2><p>{snapshot.summary}</p></div><aside><strong>{snapshot.historicalTreatment}</strong><p>{snapshot.caution}</p></aside></div>
        <MapTimeControl snapshots={mapSnapshots} selectedYear={selectedYear} onSelect={selectYear} />
        <div className="historical-map-controls"><MapLayerControl layers={layers} onChange={(layer) => setLayers((current) => ({...current,[layer]:!current[layer]}))} /><MapLegend /></div>
        <div className="historical-map-layout"><HistoricalMap snapshot={snapshot} layers={layers} selection={selection} onSelect={selectFeature} /><MapInfoPanel selection={selection} activeCampaignIds={snapshot.activeCampaignIds} /></div>
      </section>
    </article>
  )
}

export default HistoricalMapPage
