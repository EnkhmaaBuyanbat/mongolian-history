import ConfidenceBadge from './ConfidenceBadge'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'

function HistoricalRelationships({ personId, relationships, people, label, title, subjectLabel }) {
  const { localeSection } = useLocale()
  const evidence = localeSection('evidence')
  const personRelationships = relationships.filter((item) => item.personId === personId)
  if (!personRelationships.length) {
    return null
  }

  const person = people.find((item) => item.id === personId)

  return (
    <section className="historical-relationships">
      <div className="person-section-heading">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <div className="relationship-visualization">
        <article className="relationship-person relationship-related-person">
          <strong>{personRelationships[0].relatedPersonId === personId ? person?.title : people.find((item) => item.id === personRelationships[0].relatedPersonId)?.title}</strong>
          <span>{personRelationships[0].displayLabel}</span>
        </article>
        <div className="relationship-connector" aria-hidden="true">↓</div>
        <article className="relationship-person relationship-focus-person">
          <strong>{person?.title}</strong>
          <span>{subjectLabel}</span>
        </article>
        <div className="relationship-connector" aria-hidden="true">↓</div>
        <article className="relationship-person relationship-related-person">
          <strong>{people.find((item) => item.id === personRelationships[1]?.relatedPersonId)?.title}</strong>
          <span>{personRelationships[1]?.displayLabel}</span>
        </article>
      </div>
      <div className="relationship-notes">
        {personRelationships.map((relationship) => (
          <div key={relationship.relatedPersonId}>
            <span>{relationship.displayType}</span>
            <ConfidenceBadge label={evidence[toEvidenceCode(relationship.confidence)] ?? relationship.confidence} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HistoricalRelationships
