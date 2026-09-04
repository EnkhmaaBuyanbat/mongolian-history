import ConfidenceBadge from './ConfidenceBadge'

function EvidenceNote({ claim, sourceBasis, evidenceType, treatment, confidence, caution }) {
  return (
    <aside className="chapter-callout evidence-note">
      <p className="chapter-callout-label">How Do We Know This?</p>
      <dl>
        <div><dt>Claim</dt><dd>{claim}</dd></div>
        <div><dt>Source basis</dt><dd>{sourceBasis}</dd></div>
        <div><dt>Evidence type</dt><dd>{evidenceType}</dd></div>
        <div><dt>Historical treatment</dt><dd>{treatment}</dd></div>
      </dl>
      {caution ? <p className="chapter-callout-text">{caution}</p> : null}
      {confidence ? <ConfidenceBadge label={confidence} /> : null}
    </aside>
  )
}

export default EvidenceNote
