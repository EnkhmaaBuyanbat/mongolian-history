function ReconstructionInfo({ reconstruction, compact = false }) {
  if (!reconstruction) return null

  return (
    <aside className={`reconstruction-info${compact ? ' is-compact' : ''}`}>
      <p className="section-label">{reconstruction.evidenceLabel ?? 'Historical Reconstruction'}</p>
      <h2>{reconstruction.title}</h2>
      <p>{reconstruction.period}</p>
      <p>{reconstruction.summary}</p>
      {!compact ? (
        <>
          <div><strong>Historical basis</strong><p>{reconstruction.historicalBasis}</p></div>
          <div><strong>Caution</strong><p>{reconstruction.historicalCaution}</p></div>
          {reconstruction.sourceRefs?.length ? <small>Source records: {reconstruction.sourceRefs.join(', ')}</small> : null}
        </>
      ) : null}
    </aside>
  )
}

export default ReconstructionInfo
