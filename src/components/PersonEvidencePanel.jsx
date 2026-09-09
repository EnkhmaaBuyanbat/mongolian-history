import { sources } from '../data/sources'
import { getEvidenceState } from '../data/personPresentation'
import HistoricalMedia from './HistoricalMedia'

function PersonEvidencePanel({ person }) {
  const evidence = getEvidenceState(person)
  const sourceIds = new Set([
    ...(person.sourceRefs ?? []),
    ...(person.portrait?.sourceIds ?? []),
    ...evidence.media.flatMap((record) => record.sourceRefs ?? []),
  ])
  const evidenceSources = sources.filter((source) => sourceIds.has(source.id))

  return (
    <div className="person-evidence-panel">
      {evidence.media.length ? evidence.media.map((record) => (
        <HistoricalMedia key={record.id} media={record} heading="Associated visual evidence" />
      )) : (
        <div className="person-no-portrait">
          <span>◇</span>
          <div><p className="section-label">Visual Evidence</p><h3>{evidence.label}</h3><p>No reliable likeness is currently documented in this project. This is an evidence finding, not a missing-image error.</p></div>
        </div>
      )}
      {evidence.media.length ? <p className="person-evidence-caution">Associated evidence provides historical context; it is not presented as the person’s physical likeness.</p> : null}
      {evidenceSources.length ? <details className="person-evidence-sources"><summary>View evidence sources</summary><ul>{evidenceSources.map((source) => <li key={source.id}>{source.title}</li>)}</ul></details> : null}
    </div>
  )
}

export default PersonEvidencePanel
