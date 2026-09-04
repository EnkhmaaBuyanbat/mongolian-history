function ConfidenceBadge({ label }) {
  if (!label) {
    return null
  }

  return <span className="confidence-badge">{label}</span>
}

export default ConfidenceBadge
