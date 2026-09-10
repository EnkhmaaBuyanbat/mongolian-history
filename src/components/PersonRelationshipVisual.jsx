import { getPersonHref } from '../data/entityRoutes'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedPerson, getLocalizedRelationship } from '../data/personLocalization'

function PersonRelationshipVisual({ person, relationships, label }) {
  const { localeSection } = useLocale()
  const peopleLocale = localeSection('people')
  const relationshipLocale = localeSection('personRelationships')
  const displayPerson = getLocalizedPerson(person, peopleLocale)
  if (!relationships.length) return null
  return (
    <div className="person-relationship-visual" aria-label={`${label}: ${displayPerson.title}`}>
      <div className="person-relationship-focus"><span>{peopleLocale.ui.selectedPerson}</span><strong>{displayPerson.title}</strong></div>
      <div className="person-relationship-line" aria-hidden="true" />
      <div className="person-relationship-nodes">
        {relationships.map((relationship) => {
          const localized = getLocalizedRelationship(relationship, relationshipLocale)
          const relatedPerson = getLocalizedPerson(relationship.person, peopleLocale)
          return <a key={`${relationship.personId}-${relationship.relatedPersonId}-${relationship.type}`} href={getPersonHref(relationship.person)}>
            <span>{localized.displayLabel}</span><strong>{relatedPerson.title}</strong><small>{localeSection('evidence')[relationship.confidence?.replaceAll(' ', '_')] ?? relationship.confidence?.replaceAll('_', ' ')}</small>
          </a>
        })}
      </div>
    </div>
  )
}

export default PersonRelationshipVisual
