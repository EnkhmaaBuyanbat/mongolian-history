import ConfidenceBadge from './ConfidenceBadge'

function HistoricalRelationships({ personId, relationships, people }) {
  const personRelationships = relationships.filter((item) => item.personId === personId)
  if (!personRelationships.length) {
    return null
  }

  const person = people.find((item) => item.id === personId)

  return (
    <section className="historical-relationships">
      <div className="person-section-heading">
        <p className="section-label">Historical Relationships</p>
        <h2>People around {person?.title ?? 'this figure'}</h2>
      </div>
      <div className="relationship-visualization">
        <article className="relationship-person relationship-related-person">
          <strong>{personRelationships[0].relatedPersonId === personId ? person?.title : people.find((item) => item.id === personRelationships[0].relatedPersonId)?.title}</strong>
          <span>{personRelationships[0].label}</span>
        </article>
        <div className="relationship-connector" aria-hidden="true">↓</div>
        <article className="relationship-person relationship-focus-person">
          <strong>{person?.title}</strong>
          <span>Subject of this story</span>
        </article>
        <div className="relationship-connector" aria-hidden="true">↓</div>
        <article className="relationship-person relationship-related-person">
          <strong>{people.find((item) => item.id === personRelationships[1]?.relatedPersonId)?.title}</strong>
          <span>{personRelationships[1]?.label}</span>
        </article>
      </div>
      <div className="relationship-notes">
        {personRelationships.map((relationship) => (
          <div key={relationship.relatedPersonId}>
            <span>{relationship.type}</span>
            <ConfidenceBadge label={relationship.confidence} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HistoricalRelationships
