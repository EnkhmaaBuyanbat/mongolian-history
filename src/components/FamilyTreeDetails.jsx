import { getPersonHref } from '../data/entityRoutes'
import { eras } from '../data/eras'
import ConfidenceBadge from './ConfidenceBadge'

function FamilyList({ label, records }) {
  if (!records.length) return null
  return <div><dt>{label}</dt><dd>{records.map((person) => <a key={person.id} href={getPersonHref(person)}>{person.title}</a>)}</dd></div>
}

function FamilyTreeDetails({ person, family, sources }) {
  const personEraIds = person.eraIds ?? [person.eraId]
  const personEras = eras.filter((era) => personEraIds.includes(era.id))

  return (
    <aside className="family-tree-details" aria-live="polite">
      <p className="section-label">Selected Person</p>
      <h2>{person.title}</h2>
      <p className="family-tree-details-period">{person.periodDisplay ?? person.period ?? 'Dates not securely established'}</p>
      <p className="family-tree-details-role">{person.role}</p>
      <p className="family-tree-branch-label">{person.dynasticBranch ? `${person.dynasticBranch} branch` : 'Founding generation'}</p>
      {personEras.length ? <div className="family-tree-era-badges" aria-label="Historical eras">{personEras.map((era) => <span key={era.id}>Era {era.numeral}</span>)}</div> : null}

      <section><h3>Short History</h3><p>{person.shortBio}</p></section>

      <section>
        <h3>Family</h3>
        <dl className="family-tree-family-list">
          <FamilyList label="Parents" records={family.parents} />
          <FamilyList label="Spouse / consort" records={family.spouses} />
          <FamilyList label="Children" records={family.children} />
        </dl>
      </section>

      {person.householdContext ? <section><h3>Household Context</h3><p><strong>{person.householdContext.role.replaceAll('_',' ')}</strong></p><p>{person.householdContext.summary}</p></section> : null}

      {person.characterAndReputation ? (
        <section>
          <h3>Character &amp; Reputation</h3>
          <p>{person.characterAndReputation.overview}</p>
          <div className="family-tree-traits">
            {person.characterAndReputation.traits.map((trait) => <article key={trait.label}><strong>{trait.label}</strong><ConfidenceBadge label={trait.treatment} /><p>{trait.summary}</p></article>)}
          </div>
          <p className="family-tree-caution">{person.characterAndReputation.caution}</p>
        </section>
      ) : null}

      {sources.length ? <details className="family-tree-sources"><summary>View sources</summary><ul>{sources.map((source) => <li key={source.id}>{source.title}</li>)}</ul></details> : null}
      <a className="family-tree-biography-link" href={getPersonHref(person)}>View full biography →</a>
    </aside>
  )
}

export default FamilyTreeDetails
