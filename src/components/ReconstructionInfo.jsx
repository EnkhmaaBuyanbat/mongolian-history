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
          {reconstruction.knownEvidence?.length ? <div><strong>Known evidence</strong><ul>{reconstruction.knownEvidence.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          {reconstruction.uncertainElements?.length ? <div><strong>Uncertain elements</strong><ul>{reconstruction.uncertainElements.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          <div><strong>Caution</strong><p>{reconstruction.historicalCaution}</p></div>
          {reconstruction.sourceRefs?.length ? <small>Source records: {reconstruction.sourceRefs.join(', ')}</small> : null}
        </>
      ) : null}
    </aside>
  )
}

export default ReconstructionInfo
