import { getPersonHref } from '../data/entityRoutes'
import { getPersonPresentation } from '../data/personPresentation'

function PersonCard({ person }) {
  const presentation = getPersonPresentation(person)
  const collectionLabel = person.storyId ? 'HISTORICAL BIOGRAPHY' : presentation.isDossier ? 'DETAILED PROFILE' : presentation.depth.label
  return (
    <a href={getPersonHref(person)} className="person-card">
      <div className="person-card-topline"><span>{collectionLabel}</span>{person.sourceRefs?.length ? <span>SOURCE-BACKED</span> : null}</div>
      <h2>{person.title}</h2>
      {person.alternativeNames?.length ? <p className="person-card-alias">Also known as {person.alternativeNames.slice(0, 2).join(', ')}</p> : null}
      <p className={`person-card-period${presentation.periodEstablished ? '' : ' is-uncertain'}`}>{presentation.period}</p>
      {person.role ? <p className="person-card-role">{person.role}</p> : null}
      <div className="person-card-context">
        {presentation.eras.map((era) => <span key={era.id}>Era {era.numeral}</span>)}
        {person.dynasticBranch ? <span>{person.dynasticBranch}</span> : null}
        {presentation.polities.slice(0, 2).map((polity) => <span key={polity.id}>{polity.title}</span>)}
      </div>
      {person.shortBio || person.summary ? <p className="person-card-summary">{person.shortBio ?? person.summary}</p> : null}
      <div className="person-card-footer"><span>{presentation.evidence.label}</span><strong>{presentation.depth.action} →</strong></div>
    </a>
  )
}

export default PersonCard
