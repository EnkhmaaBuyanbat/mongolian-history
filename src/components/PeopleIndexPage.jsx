import { useMemo, useState } from 'react'
import { people } from '../data/people'
import { eras } from '../data/eras'
import { dossierPersonIds, getPersonPresentation, getRoleCategory } from '../data/personPresentation'
import { familyTreePersonIds } from '../data/familyTreePeople'
import PersonCard from './PersonCard'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedPerson } from '../data/personLocalization'

function PeopleIndexPage() {
  const { localeSection, localizedRecord } = useLocale()
  const peopleLocale = localeSection('people')
  const ui = peopleLocale.ui
  const [query, setQuery] = useState('')
  const [eraId, setEraId] = useState('all')
  const [branch, setBranch] = useState('all')
  const [roleCategory, setRoleCategory] = useState('all')
  const [polityId, setPolityId] = useState('all')
  const visiblePeople = useMemo(() => people.filter(
    (person) => person.status === 'researched' || person.status === 'verified',
  ), [])
  const presentations = useMemo(() => new Map(visiblePeople.map((person) => [person.id, getPersonPresentation(person)])), [visiblePeople])
  const localizedPeople = visiblePeople.map((person) => getLocalizedPerson(person, peopleLocale))
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
  const filteredPeople = localizedPeople.filter((person) => {
    const searchable = [...person.searchableNames, person.role].filter(Boolean).join(' ').replace(/\s+/g, ' ').toLocaleLowerCase()
    const personEraIds = person.eraIds ?? [person.eraId]
    return (!normalizedQuery || searchable.includes(normalizedQuery))
      && (eraId === 'all' || personEraIds.includes(eraId))
      && (branch === 'all' || person.dynasticBranch === branch)
      && (roleCategory === 'all' || getRoleCategory(person) === roleCategory)
      && (polityId === 'all' || presentations.get(person.id).polities.some((polity) => polity.id === polityId))
  })
  const filtersActive = Boolean(normalizedQuery || eraId !== 'all' || branch !== 'all' || roleCategory !== 'all' || polityId !== 'all')
  const selectedEraCanonical = eras.find((era) => era.id === eraId)
  const selectedEra = selectedEraCanonical ? localizedRecord('eras', selectedEraCanonical.id, selectedEraCanonical) : null
  const selectedPolity = politicalContexts.find((polity) => polity.id === polityId)
  const resultContext = [selectedEra ? `${ui.era} ${selectedEra.numeral}` : null, roleCategory !== 'all' ? peopleLocale.roleCategories[roleCategory] : null, branch !== 'all' ? peopleLocale.branches[branch] : null, selectedPolity?.title].filter(Boolean)
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
          <p className="section-label">{ui.eyebrow}</p>
          <h1>{ui.title}</h1>
          <p>{ui.intro}</p>
          <p className="people-index-evidence-note">{ui.evidenceNotice}</p>
          <dl className="people-collection-summary">
            <div><dt>{visiblePeople.length}</dt><dd>{ui.figures}</dd></div>
            <div><dt>{eras.length}</dt><dd>{ui.eras}</dd></div>
            <div><dt>{dossierPersonIds.size}</dt><dd>{ui.profiles}</dd></div>
            <div><dt>{familyTreePersonIds.length}</dt><dd>{ui.treeFigures}</dd></div>
          </dl>
          <a className="people-family-tree-link" href="/family-tree"><span>{ui.interactiveExhibit}</span><strong>{ui.exploreTree}</strong></a>
        </div>
      </header>
      <section className="people-index-list">
        <div className="section-inner">
          <div className="people-discovery-panel">
            <div className="people-discovery-heading"><div><p className="section-label">{ui.collectionSearch}</p><h2>{ui.find}</h2></div>{filtersActive ? <button className="people-reset-button" type="button" onClick={resetFilters}>{ui.reset}</button> : null}</div>
            <label className="people-search"><span>{ui.search}</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ui.placeholder} /></label>
            <fieldset className="people-primary-filter"><legend>{ui.primaryEra}</legend><div className="people-filter-row"><button type="button" aria-pressed={eraId==='all'} onClick={() => selectEra('all')}>{ui.allPeople}</button>{eras.map((era) => <button key={era.id} type="button" aria-pressed={eraId===era.id} onClick={() => selectEra(era.id)}>{ui.era} {era.numeral}</button>)}</div></fieldset>
            <p className="people-explore-label">{ui.exploreBy}</p>
            {availableBranches.length ? <fieldset><legend>{ui.branch}</legend><div className="people-filter-row"><button type="button" aria-pressed={branch==='all'} onClick={() => setBranch('all')}>{ui.allBranches}</button>{availableBranches.map((item) => <button key={item} type="button" aria-pressed={branch===item} onClick={() => setBranch(item)}>{peopleLocale.branches[item] ?? item}</button>)}</div></fieldset> : null}
            <fieldset><legend>{ui.role}</legend><div className="people-filter-row"><button type="button" aria-pressed={roleCategory==='all'} onClick={() => setRoleCategory('all')}>{ui.allRoles}</button>{roleCategories.map((item) => <button key={item} type="button" aria-pressed={roleCategory===item} onClick={() => setRoleCategory(item)}>{peopleLocale.roleCategories[item] ?? item}</button>)}</div></fieldset>
            <label className="people-context-filter"><span>{ui.politicalContext}</span><select value={polityId} onChange={(event) => setPolityId(event.target.value)}><option value="all">{ui.allPoliticalContexts}</option>{politicalContexts.map((polity) => <option key={polity.id} value={polity.id}>{peopleLocale.politicalContexts?.[polity.id] ?? polity.title}</option>)}</select></label>
          </div>
          <div className="people-results-heading" aria-live="polite"><strong>{filteredPeople.length} {filteredPeople.length === 1 ? ui.person : ui.people} {ui.shown}</strong>{resultContext.length ? <span>{resultContext.join(' · ')}</span> : <span>{ui.allContexts}</span>}</div>
          <div className="people-index-grid" aria-label={ui.gridLabel}>
            {filteredPeople.map((person) => <PersonCard key={person.id} person={person} />)}
          </div>
          {!filteredPeople.length ? <div className="people-empty-state"><p className="section-label">{ui.emptyLabel}</p><h2>{ui.emptyTitle}</h2><p>{ui.emptyText}</p><button type="button" onClick={resetFilters}>{ui.reset}</button></div> : null}
        </div>
      </section>
    </article>
  )
}

export default PeopleIndexPage
