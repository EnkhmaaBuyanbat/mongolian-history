import { toEvidenceCode } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'

function ConfidenceBadge({ label }) {
  const { localeSection } = useLocale()
  if (!label) {
    return null
  }

  const evidence = localeSection('evidence')
  const mapped = evidence[toEvidenceCode(label)] ?? evidence[label] ?? label
  return <span className="confidence-badge">{mapped}</span>
}

export default ConfidenceBadge
