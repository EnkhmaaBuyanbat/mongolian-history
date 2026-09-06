function GeographicConfidenceBadge({ value }) {
  return value ? <span className={`geo-confidence geo-confidence-${value.toLowerCase()}`}>{value}</span> : null
}

export default GeographicConfidenceBadge
