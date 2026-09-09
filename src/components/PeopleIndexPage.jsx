import { useMemo, useState } from 'react'
import { people } from '../data/people'
import { eras } from '../data/eras'
import { dossierPersonIds, getPersonPresentation, getRoleCategory } from '../data/personPresentation'
import { familyTreePersonIds } from '../data/familyTreePeople'
import PersonCard from './PersonCard'

function PeopleIndexPage() {
  const [query, setQuery] = useState('')
  const [eraId, setEraId] = useState('all')
  const [branch, setBranch] = useState('all')
  const [roleCategory, setRoleCategory] = useState('all')
  const [polityId, setPolityId] = useState('all')
  const visiblePeople = useMemo(() => people.filter(
    (person) => person.status === 'researched' || person.status === 'verified',
  ), [])
  const presentations = useMemo(() => new Map(visiblePeople.map((person) => [person.id, getPersonPresentation(person)])), [visiblePeople])
  const availableBranches = [...new Set(visiblePeople.filter((person) => eraId === 'all' || (person.eraIds ?? [person.eraId]).includes(eraId)).map((person) => person.dynasticBranch).filter(Boolean))]
  const selectEra = (nextEraId) => {
    const nextBranches = new Set(visiblePeople.filter((person) => nextEraId === 'all' || (person.eraIds ?? [person.eraId]).includes(nextEraId)).map((person) => person.dynasticBranch).filter(Boolean))
    setEraId(nextEraId)
    if (branch !== 'all' && !nextBranches.has(branch)) setBranch('all')
  }
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const roleCategories = [...new Set(visiblePeople.map(getRoleCategory).filter(Boolean))]
  const politicalContexts = [...new Map(visiblePeople.flatMap((person) => presentations.get(person.id).polities).map((polity) => [polity.id, polity])).values()]
    .sort((a, b) => a.title.localeCompare(b.title))
  const filteredPeople = visiblePeople.filter((person) => {
    const searchable = [person.title, ...(person.alternativeNames ?? []), ...(person.nameVariants ?? []), person.role].filter(Boolean).join(' ').toLocaleLowerCase()
    const personEraIds = person.eraIds ?? [person.eraId]
    return (!normalizedQuery || searchable.includes(normalizedQuery))
      && (eraId === 'all' || personEraIds.includes(eraId))
      && (branch === 'all' || person.dynasticBranch === branch)
      && (roleCategory === 'all' || getRoleCategory(person) === roleCategory)
      && (polityId === 'all' || presentations.get(person.id).polities.some((polity) => polity.id === polityId))
  })
  const filtersActive = Boolean(normalizedQuery || eraId !== 'all' || branch !== 'all' || roleCategory !== 'all' || polityId !== 'all')
  const selectedEra = eras.find((era) => era.id === eraId)
  const selectedPolity = politicalContexts.find((polity) => polity.id === polityId)
  const resultContext = [selectedEra ? `Era ${selectedEra.numeral}` : null, roleCategory !== 'all' ? roleCategory : null, branch !== 'all' ? `${branch} branch` : null, selectedPolity?.title].filter(Boolean)
  const resetFilters = () => {
    setQuery('')
    setEraId('all')
    setBranch('all')
    setRoleCategory('all')
    setPolityId('all')
  }

  return (
    <article className="people-index-page">
      <header className="people-index-header">
        <div className="section-inner">
          <p className="section-label">People &amp; Dynasties</p>
          <h1>Historical Figures Across the Mongolian World</h1>
          <p>Explore rulers, queens, commanders, political actors, religious figures, and other people appearing throughout the historical narrative.</p>
          <p className="people-index-evidence-note">The collection includes figures with very different levels of surviving historical evidence. Dates, relationships, and depictions are shown only where supported by the project’s sources.</p>
          <dl className="people-collection-summary">
            <div><dt>{visiblePeople.length}</dt><dd>Historical figures</dd></div>
            <div><dt>{eras.length}</dt><dd>Historical eras</dd></div>
            <div><dt>{dossierPersonIds.size}</dt><dd>Detailed profiles</dd></div>
            <div><dt>{familyTreePersonIds.length}</dt><dd>Family Tree figures</dd></div>
          </dl>
          <a className="people-family-tree-link" href="/family-tree"><span>Interactive Exhibit</span><strong>Explore the Chinggisid Family Tree</strong></a>
        </div>
      </header>
      <section className="people-index-list">
        <div className="section-inner">
          <div className="people-discovery-panel">
            <div className="people-discovery-heading"><div><p className="section-label">Collection Search</p><h2>Find a historical figure</h2></div>{filtersActive ? <button className="people-reset-button" type="button" onClick={resetFilters}>Reset filters</button> : null}</div>
            <label className="people-search"><span>Search the collection</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search people, rulers, dynasties…" /></label>
            <fieldset className="people-primary-filter"><legend>Primary · Historical era</legend><div className="people-filter-row"><button type="button" aria-pressed={eraId==='all'} onClick={() => selectEra('all')}>All People</button>{eras.map((era) => <button key={era.id} type="button" aria-pressed={eraId===era.id} onClick={() => selectEra(era.id)}>Era {era.numeral}</button>)}</div></fieldset>
            <p className="people-explore-label">Explore by</p>
            {availableBranches.length ? <fieldset><legend>Dynastic branch</legend><div className="people-filter-row"><button type="button" aria-pressed={branch==='all'} onClick={() => setBranch('all')}>All Branches</button>{availableBranches.map((item) => <button key={item} type="button" aria-pressed={branch===item} onClick={() => setBranch(item)}>{item}</button>)}</div></fieldset> : null}
            <fieldset><legend>Role / type</legend><div className="people-filter-row"><button type="button" aria-pressed={roleCategory==='all'} onClick={() => setRoleCategory('all')}>All Roles</button>{roleCategories.map((item) => <button key={item} type="button" aria-pressed={roleCategory===item} onClick={() => setRoleCategory(item)}>{item}</button>)}</div></fieldset>
            <label className="people-context-filter"><span>Political context</span><select value={polityId} onChange={(event) => setPolityId(event.target.value)}><option value="all">All political contexts</option>{politicalContexts.map((polity) => <option key={polity.id} value={polity.id}>{polity.title}</option>)}</select></label>
          </div>
          <div className="people-results-heading" aria-live="polite"><strong>{filteredPeople.length} {filteredPeople.length === 1 ? 'person' : 'people'} shown</strong>{resultContext.length ? <span>{resultContext.join(' · ')}</span> : <span>All eras and contexts</span>}</div>
          <div className="people-index-grid" aria-label="Historical figures">
            {filteredPeople.map((person) => <PersonCard key={person.id} person={person} />)}
          </div>
          {!filteredPeople.length ? <div className="people-empty-state"><p className="section-label">No figures match this view</p><h2>Try another path through the collection</h2><p>Try changing the era, role, political context, or search term.</p><button type="button" onClick={resetFilters}>Reset filters</button></div> : null}
        </div>
      </section>
    </article>
  )
}

export default PeopleIndexPage
