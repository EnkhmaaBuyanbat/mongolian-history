import ConfidenceBadge from './ConfidenceBadge'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'

function PersonStorySection({ section }) {
  const { localeSection } = useLocale()
  const evidence = localeSection('evidence')
  const evidenceLabel = (value) => evidence[toEvidenceCode(value)] ?? value
  if (section.sourceAccount) {
    return (
      <section id={section.id} className="person-story-section person-source-section">
        <div className="person-readable-column">
          <p className="person-section-number">{section.number}</p>
          <p className="section-label">{localeSection('people').ancientSourceAccount}</p>
          <h2>{section.title}</h2>
          {section.subtitle ? <p className="person-section-subtitle">{section.subtitle}</p> : null}
          {section.lead ? <p className="person-section-lead">{section.lead}</p> : null}
          <div className="person-section-body">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {section.callouts?.map((callout) => (
            <aside key={callout.label} className="person-callout">
              <p className="person-callout-label">{callout.label}</p>
              <p>{callout.text}</p>
              <ConfidenceBadge label={evidenceLabel(callout.confidence)} />
            </aside>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id={section.id} className="person-story-section">
      <div className="person-readable-column">
        <p className="person-section-number">{section.number}</p>
        <h2>{section.title}</h2>
        {section.period ? <p className="person-section-period">{section.period}</p> : null}
        {section.lead ? <p className="person-section-lead">{section.lead}</p> : null}
        <div className="person-section-body">
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {section.callouts?.map((callout) => (
          <aside key={callout.label} className="person-callout">
            <p className="person-callout-label">{callout.label}</p>
            <p>{callout.text}</p>
            <ConfidenceBadge label={evidenceLabel(callout.confidence)} />
          </aside>
        ))}
      </div>
    </section>
  )
}

export default PersonStorySection
