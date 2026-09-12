import { getPersonHref } from '../data/entityRoutes'
import { eras } from '../data/eras'
import ConfidenceBadge from './ConfidenceBadge'
import { useLocale } from '../i18n/useLocale'

function FamilyList({ label, records }) {
  if (!records.length) return null
  return <div><dt>{label}</dt><dd>{records.map((person) => <a key={person.id} href={getPersonHref(person)}>{person.title}</a>)}</dd></div>
}

function FamilyTreeDetails({ person, family, sources }) {
  const { localeSection } = useLocale()
  const ui = localeSection('familyTree').ui
  const branches = localeSection('people').branches
  const personEraIds = person.eraIds ?? [person.eraId]
  const personEras = eras.filter((era) => personEraIds.includes(era.id))

  return (
    <aside className="family-tree-details" aria-live="polite">
      <p className="section-label">{ui.selected}</p>
      <h2>{person.title}</h2>
      <p className="family-tree-details-period">{person.periodDisplay ?? person.period ?? ui.datesUnknown}</p>
      <p className="family-tree-details-role">{person.role}</p>
      <p className="family-tree-branch-label">{person.dynasticBranch ? branches[person.dynasticBranch] : ui.founding}</p>
      {personEras.length ? <div className="family-tree-era-badges" aria-label={ui.historicalEras}>{personEras.map((era) => <span key={era.id}>{localeSection('people').ui.era} {era.numeral}</span>)}</div> : null}

      <section><h3>{ui.shortHistory}</h3><p>{person.shortBio}</p></section>

      <section>
        <h3>{ui.family}</h3>
        <dl className="family-tree-family-list">
          <FamilyList label={ui.parents} records={family.parents} />
          <FamilyList label={ui.spouse} records={family.spouses} />
          <FamilyList label={ui.children} records={family.children} />
        </dl>
      </section>

      {person.householdContext ? <section><h3>{ui.householdContext}</h3><p><strong>{ui.householdRoles?.[person.householdContext.role] ?? person.householdContext.role}</strong></p><p>{person.householdContext.summary}</p></section> : null}

      {person.characterAndReputation ? (
        <section>
          <h3>{ui.character}</h3>
          <p>{person.characterAndReputation.overview}</p>
          <div className="family-tree-traits">
            {person.characterAndReputation.traits.map((trait) => <article key={trait.label}><strong>{trait.label}</strong><ConfidenceBadge label={trait.treatment} /><p>{trait.summary}</p></article>)}
          </div>
          <p className="family-tree-caution">{person.characterAndReputation.caution}</p>
        </section>
      ) : null}

      {sources.length ? <details className="family-tree-sources"><summary>{ui.viewSources}</summary><ul>{sources.map((source) => <li key={source.id}>{source.title}</li>)}</ul></details> : null}
      <a className="family-tree-biography-link" href={getPersonHref(person)}>{ui.viewBiography} →</a>
    </aside>
  )
}

export default FamilyTreeDetails
