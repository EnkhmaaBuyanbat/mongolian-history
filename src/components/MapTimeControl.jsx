function MapTimeControl({ snapshots, selectedYear, onSelect }) {
  return (
    <nav className="map-time-control" aria-label="Era III historical snapshots">
      {snapshots.map((snapshot) => <button key={snapshot.year} type="button" aria-pressed={snapshot.year === selectedYear} onClick={() => onSelect(snapshot.year)}><strong>{snapshot.year}</strong><span>{snapshot.title}</span></button>)}
    </nav>
  )
}

export default MapTimeControl
