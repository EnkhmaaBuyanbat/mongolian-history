import { getPersonHref } from '../data/entityRoutes'

function PersonRelationshipVisual({ person, relationships, label }) {
  if (!relationships.length) return null
  return (
    <div className="person-relationship-visual" aria-label={`${label} connections for ${person.title}`}>
      <div className="person-relationship-focus"><span>Selected person</span><strong>{person.title}</strong></div>
      <div className="person-relationship-line" aria-hidden="true" />
      <div className="person-relationship-nodes">
        {relationships.map((relationship) => (
          <a key={`${relationship.personId}-${relationship.relatedPersonId}-${relationship.type}`} href={getPersonHref(relationship.person)}>
            <span>{relationship.label}</span><strong>{relationship.person.title}</strong><small>{relationship.confidence?.replaceAll('_', ' ')}</small>
          </a>
        ))}
      </div>
    </div>
  )
}

export default PersonRelationshipVisual
