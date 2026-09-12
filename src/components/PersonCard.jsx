import { getPersonHref } from '../data/entityRoutes'
import { getPersonPresentation } from '../data/personPresentation'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedEntity } from '../data/entityLocalization'

function PersonCard({ person }) {
  const { localeSection } = useLocale()
  const peopleLocale = localeSection('people')
  const ui = peopleLocale.ui
  const presentation = getPersonPresentation(person)
  const collectionLabel = person.storyId ? ui.historicalBiography : presentation.isDossier ? ui.detailedProfile : ui[presentation.depth.key]
  const action = { story:ui.readStory, extended:ui.readBiography, profile:ui.viewProfile, reference:ui.viewReference }[presentation.depth.key]
  const aliases = person.localizedAlternativeNames?.length ? person.localizedAlternativeNames : person.canonicalAlternativeNames ?? person.alternativeNames
  return (
    <a href={getPersonHref(person)} className="person-card">
      <div className="person-card-topline"><span>{collectionLabel}</span>{person.sourceRefs?.length ? <span>{ui.sourceBacked}</span> : null}</div>
      <h2>{person.title}</h2>
      {aliases?.length ? <p className="person-card-alias">{ui.alsoKnownAs} {aliases.slice(0, 2).join(', ')}</p> : null}
      <p className={`person-card-period${presentation.periodEstablished ? '' : ' is-uncertain'}`}>{presentation.periodEstablished ? presentation.period : ui.datesUnknown}</p>
      {person.role ? <p className="person-card-role">{person.role}</p> : null}
      <div className="person-card-context">
        {presentation.eras.map((era) => <span key={era.id}>{ui.era} {era.numeral}</span>)}
        {person.dynasticBranch ? <span>{peopleLocale.branches[person.dynasticBranch] ?? person.dynasticBranch}</span> : null}
        {presentation.polities.slice(0, 2).map((polity) => <span key={polity.id}>{getLocalizedEntity(polity, localeSection('entities')).title}</span>)}
      </div>
      {person.shortBio || person.summary ? <p className="person-card-summary">{person.shortBio ?? person.summary}</p> : null}
      <div className="person-card-footer"><span>{localeSection('evidence')[presentation.evidence.code] ?? presentation.evidence.label}</span><strong>{action} →</strong></div>
    </a>
  )
}

export default PersonCard
