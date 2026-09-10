import { sources } from '../data/sources'
import { getEvidenceState } from '../data/personPresentation'
import HistoricalMedia from './HistoricalMedia'
import { useLocale } from '../i18n/useLocale'

function PersonEvidencePanel({ person }) {
  const { localeSection } = useLocale()
  const ui = localeSection('people').ui
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
        <HistoricalMedia key={record.id} media={record} heading={ui.associatedEvidence} />
      )) : (
        <div className="person-no-portrait">
          <span>◇</span>
          <div><p className="section-label">{ui.visualEvidence}</p><h3>{localeSection('evidence')[evidence.code] ?? evidence.label}</h3><p>{ui.noPortraitExplanation}</p></div>
        </div>
      )}
      {evidence.media.length ? <p className="person-evidence-caution">{ui.evidenceCaution}</p> : null}
      {evidenceSources.length ? <details className="person-evidence-sources"><summary>{ui.viewEvidenceSources}</summary><ul>{evidenceSources.map((source) => <li key={source.id}>{source.title}</li>)}</ul></details> : null}
    </div>
  )
}

export default PersonEvidencePanel
