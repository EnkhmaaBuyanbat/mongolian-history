import { useState } from 'react'
import { people } from '../data/people'
import { eras } from '../data/eras'
import { getPersonPresentation, getRoleCategory } from '../data/personPresentation'
import PersonCard from './PersonCard'

function PeopleIndexPage() {
  const [query, setQuery] = useState('')
  const [eraId, setEraId] = useState('all')
  const [branch, setBranch] = useState('all')
  const [roleCategory, setRoleCategory] = useState('all')
  const [polityId, setPolityId] = useState('all')
  const visiblePeople = people.filter(
    (person) => person.status === 'researched' || person.status === 'verified',
  )
  const availableBranches = [...new Set(visiblePeople.filter((person) => eraId === 'all' || (person.eraIds ?? [person.eraId]).includes(eraId)).map((person) => person.dynasticBranch).filter(Boolean))]
  const selectEra = (nextEraId) => {
    const nextBranches = new Set(visiblePeople.filter((person) => nextEraId === 'all' || (person.eraIds ?? [person.eraId]).includes(nextEraId)).map((person) => person.dynasticBranch).filter(Boolean))
    setEraId(nextEraId)
    if (branch !== 'all' && !nextBranches.has(branch)) setBranch('all')
  }
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const roleCategories = [...new Set(visiblePeople.map(getRoleCategory).filter(Boolean))]
  const politicalContexts = [...new Map(visiblePeople.flatMap((person) => getPersonPresentation(person).polities).map((polity) => [polity.id, polity])).values()]
    .sort((a, b) => a.title.localeCompare(b.title))
  const filteredPeople = visiblePeople.filter((person) => {
    const searchable = [person.title, ...(person.alternativeNames ?? []), ...(person.nameVariants ?? []), person.role].filter(Boolean).join(' ').toLocaleLowerCase()
    const personEraIds = person.eraIds ?? [person.eraId]
    return (!normalizedQuery || searchable.includes(normalizedQuery))
      && (eraId === 'all' || personEraIds.includes(eraId))
      && (branch === 'all' || person.dynasticBranch === branch)
      && (roleCategory === 'all' || getRoleCategory(person) === roleCategory)
      && (polityId === 'all' || getPersonPresentation(person).polities.some((polity) => polity.id === polityId))
  })

  return (
    <article className="people-index-page">
      <header className="people-index-header">
        <div className="section-inner">
          <p className="section-label">People</p>
          <h1>Historical Figures</h1>
          <p>People whose lives and historical contexts are being developed from the research record.</p>
          <a className="people-family-tree-link" href="/family-tree"><span>Interactive Exhibit</span><strong>Explore the Chinggisid Family Tree</strong></a>
        </div>
      </header>
      <section className="people-index-list">
        <div className="section-inner">
          <div className="people-discovery-panel">
            <label className="people-search"><span>Search People</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, variant, or role" /></label>
            <fieldset><legend>Era</legend><div className="people-filter-row"><button type="button" aria-pressed={eraId==='all'} onClick={() => selectEra('all')}>All Eras</button>{eras.map((era) => <button key={era.id} type="button" aria-pressed={eraId===era.id} onClick={() => selectEra(era.id)}>Era {era.numeral}</button>)}</div></fieldset>
            {availableBranches.length ? <fieldset><legend>Dynastic branch</legend><div className="people-filter-row"><button type="button" aria-pressed={branch==='all'} onClick={() => setBranch('all')}>All Branches</button>{availableBranches.map((item) => <button key={item} type="button" aria-pressed={branch===item} onClick={() => setBranch(item)}>{item}</button>)}</div></fieldset> : null}
            <fieldset><legend>Role / type</legend><div className="people-filter-row"><button type="button" aria-pressed={roleCategory==='all'} onClick={() => setRoleCategory('all')}>All Roles</button>{roleCategories.map((item) => <button key={item} type="button" aria-pressed={roleCategory===item} onClick={() => setRoleCategory(item)}>{item}</button>)}</div></fieldset>
            <label className="people-context-filter"><span>Political context</span><select value={polityId} onChange={(event) => setPolityId(event.target.value)}><option value="all">All political contexts</option>{politicalContexts.map((polity) => <option key={polity.id} value={polity.id}>{polity.title}</option>)}</select></label>
            <p className="people-result-count" aria-live="polite">{filteredPeople.length} {filteredPeople.length === 1 ? 'person' : 'people'}</p>
          </div>
          <div className="people-index-grid">
            {filteredPeople.map((person) => <PersonCard key={person.id} person={person} />)}
          </div>
          {!filteredPeople.length ? <p className="entity-empty-state">No people match the current search and filters.</p> : null}
        </div>
      </section>
    </article>
  )
}

export default PeopleIndexPage
