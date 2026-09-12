import ConfidenceBadge from './ConfidenceBadge'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'

function PersonTimeline({ items, label, title }) {
  const { localeSection } = useLocale()
  const evidence = localeSection('evidence')
  return (
    <section id="life-timeline" className="person-timeline-section">
      <div className="person-section-heading">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <ol className="person-timeline">
        {items.map((item) => (
          <li key={item.id} className={`person-timeline-item${item.sourceAccount ? ' is-source-account' : ''}`}>
            <div className="person-timeline-marker" aria-hidden="true" />
            <div className="person-timeline-content">
              <p className="person-timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ConfidenceBadge label={evidence[toEvidenceCode(item.confidence)] ?? item.confidence} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PersonTimeline
