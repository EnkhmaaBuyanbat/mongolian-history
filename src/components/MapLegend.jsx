import GeographicConfidenceBadge from './GeographicConfidenceBadge'

function MapLegend() {
  return (
    <aside className="map-legend">
      <h2>Geographic Evidence</h2>
      <p><GeographicConfidenceBadge value="LOCATED" /> Known archaeological or historic anchor</p>
      <p><GeographicConfidenceBadge value="APPROXIMATE" /> Broad spatial reconstruction</p>
      <p><GeographicConfidenceBadge value="SCHEMATIC" /> Teaching representation, not a precise route</p>
      <p><GeographicConfidenceBadge value="DISPUTED" /> Location or spatial interpretation contested</p>
      <small>Political spheres are approximate reconstructions, not surveyed medieval borders. Geographic precision is separate from historical claim treatment.</small>
    </aside>
  )
}

export default MapLegend
