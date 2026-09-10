import ConfidenceBadge from './ConfidenceBadge'
import { useLocale } from '../i18n/useLocale'

function EvidenceNote({ claim, sourceBasis, evidenceType, treatment, confidence, caution }) {
  const { localeSection } = useLocale()
  const { ui } = localeSection('chapters')
  return (
    <aside className="chapter-callout evidence-note">
      <p className="chapter-callout-label">{ui.howKnow}</p>
      <dl>
        <div><dt>{ui.claim}</dt><dd>{claim}</dd></div>
        <div><dt>{ui.sourceBasis}</dt><dd>{sourceBasis}</dd></div>
        <div><dt>{ui.evidenceType}</dt><dd>{evidenceType}</dd></div>
        <div><dt>{ui.historicalTreatment}</dt><dd>{treatment}</dd></div>
      </dl>
      {caution ? <p className="chapter-callout-text">{caution}</p> : null}
      {confidence ? <ConfidenceBadge label={confidence} /> : null}
    </aside>
  )
}

export default EvidenceNote
