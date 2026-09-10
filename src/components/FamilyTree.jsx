import { useEffect, useMemo, useState } from 'react'
import { people } from '../data/people'
import { personRelationships } from '../data/personRelationships'
import { sources } from '../data/sources'
import { eras } from '../data/eras'
import FamilyTreeDetails from './FamilyTreeDetails'
import FamilyTreeNode from './FamilyTreeNode'
import { branchGroups, coreTreePersonIds, familyTreePersonIds as treePersonIds, householdGroups, laterFamilyGroups } from '../data/familyTreePeople'
import { getPersonSlug } from '../data/entityRoutes'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedPerson, getParentChildIds } from '../data/personLocalization'
const treeEras = eras.filter((era) => ['II','III','IV','V'].includes(era.numeral))

const positions = {
  'person-temujin-chinggis-khan':{x:350,y:35}, 'person-borte':{x:570,y:35},
  'person-jochi':{x:20,y:365}, 'person-chagatai':{x:240,y:365}, 'person-ogedei-khan':{x:460,y:365}, 'person-toregene-khatun':{x:660,y:365}, 'person-tolui':{x:880,y:365}, 'person-sorghaghtani-beki':{x:1080,y:365},
  'person-batu':{x:20,y:715}, 'person-guyuk-khan':{x:560,y:715}, 'person-mongke-khan':{x:800,y:715}, 'person-qubilai':{x:1010,y:715}, 'person-hulegu':{x:1220,y:715}, 'person-ariq-boke':{x:1430,y:715},
}

function relationshipKind(relationship) {
  if (relationship.type === 'spouse') return 'spouse'
  if (relationship.type.includes('parent')) return 'parent'
  return null
}

function getFamily(person, familyEdges, treePeople) {
  const parentEdges = familyEdges.filter((edge) => edge.kind === 'parent')
  const parents = parentEdges.map(getParentChildIds).filter((pair) => pair?.childId === person.id)
    .map((pair) => treePeople.find((item) => item.id === pair.parentId)).filter(Boolean)
  const children = parentEdges.map(getParentChildIds).filter((pair) => pair?.parentId === person.id)
    .map((pair) => treePeople.find((item) => item.id === pair.childId)).filter(Boolean)
  const spouses = familyEdges.filter((edge) => edge.kind === 'spouse' && (edge.personId === person.id || edge.relatedPersonId === person.id))
    .map((edge) => treePeople.find((item) => item.id === (edge.personId === person.id ? edge.relatedPersonId : edge.personId))).filter(Boolean)
  return { parents, spouses, children }
}

function FamilyTree() {
  const { localeSection } = useLocale()
  const peopleLocale = localeSection('people')
  const familyLocale = localeSection('familyTree')
  const ui = familyLocale.ui
  const treePeople = useMemo(() => treePersonIds.map((id) => people.find((person) => person.id === id)).filter(Boolean).map((person) => getLocalizedPerson(person, peopleLocale)), [peopleLocale])
  const familyEdges = useMemo(() => personRelationships.map((relationship) => ({ ...relationship, kind:relationshipKind(relationship) })).filter((relationship) => relationship.kind && treePersonIds.includes(relationship.personId) && treePersonIds.includes(relationship.relatedPersonId)), [])
  const coreFamilyEdges = familyEdges.filter((edge) => coreTreePersonIds.includes(edge.personId) && coreTreePersonIds.includes(edge.relatedPersonId))
  const parentEdges = coreFamilyEdges.filter((edge) => edge.kind === 'parent')
  const familyUnits = coreFamilyEdges.filter((edge) => edge.kind === 'spouse').map((couple) => ({
    couple,
    children:coreTreePersonIds.filter((childId) => parentEdges.some((edge) => { const pair=getParentChildIds(edge); return pair?.parentId===couple.personId && pair.childId===childId }) && parentEdges.some((edge) => { const pair=getParentChildIds(edge); return pair?.parentId===couple.relatedPersonId && pair.childId===childId })),
  }))
  const coveredParentEdges = new Set(familyUnits.flatMap((unit) => unit.children.flatMap((childId) => [`${unit.couple.personId}-${childId}`,`${unit.couple.relatedPersonId}-${childId}`])))
  const singleParentEdges = parentEdges.filter((edge) => { const pair=getParentChildIds(edge); return !coveredParentEdges.has(`${pair.parentId}-${pair.childId}`) })
  const getUrlSelection = () => {
    const slug = new URLSearchParams(window.location.search).get('person')
    return treePeople.find((person) => getPersonSlug(person) === slug)?.id ?? 'person-sorghaghtani-beki'
  }
  const [selectedId, setSelectedId] = useState(getUrlSelection)
  const [expandedBranch, setExpandedBranch] = useState(null)
  const [eraScope, setEraScope] = useState('all')
  const selectedPerson = treePeople.find((person) => person.id === selectedId) ?? treePeople[0]
  const adjacentIds = new Set(familyEdges.filter((edge) => edge.personId === selectedId || edge.relatedPersonId === selectedId).flatMap((edge) => [edge.personId,edge.relatedPersonId]))
  const selectedFamily = getFamily(selectedPerson, familyEdges, treePeople)
  const selectedSourceIds = new Set([...(selectedPerson.sourceRefs ?? []), ...(selectedPerson.characterAndReputation?.traits ?? []).flatMap((trait) => trait.sourceIds ?? [])])
  const selectedSources = sources.filter((source) => selectedSourceIds.has(source.id))
  const selectPerson = (personId, { updateHistory = true } = {}) => {
    setSelectedId(personId)
    if (!updateHistory) return
    const person = treePeople.find((item) => item.id === personId)
    if (!person) return
    const url = new URL(window.location.href)
    url.searchParams.set('person', getPersonSlug(person))
    window.history.pushState({}, '', `${url.pathname}${url.search}`)
  }
  useEffect(() => {
    const restoreSelection = () => {
      const slug = new URLSearchParams(window.location.search).get('person')
      const personId = treePeople.find((person) => getPersonSlug(person) === slug)?.id ?? 'person-sorghaghtani-beki'
      setSelectedId(personId)
    }
    window.addEventListener('popstate', restoreSelection)
    return () => window.removeEventListener('popstate', restoreSelection)
  }, [treePeople])
  const belongsToScope = (person) => eraScope === 'all' || (person.eraIds ?? [person.eraId]).includes(eraScope)
  const peopleFor = (group) => householdGroups[group].map((id) => treePeople.find((person) => person.id === id)).filter((person) => person && belongsToScope(person))
  const roster = (group) => <div className="family-tree-roster">{peopleFor(group).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => selectPerson(person.id)}><strong>{person.title}</strong><span>{person.householdContext?.role?.replaceAll('_',' ') ?? person.role}</span></button>)}</div>
  const scopedLaterGroups = laterFamilyGroups.filter((group) => eraScope === 'all' || group.eraId === eraScope)
  const selectEraScope = (nextScope) => {
    setEraScope(nextScope)
    setExpandedBranch(null)
    const nextPerson = treePeople.find((person) => nextScope === 'all' || (person.eraIds ?? [person.eraId]).includes(nextScope))
    if (nextPerson) selectPerson(nextPerson.id)
  }

  return (
    <div className="family-tree-exhibit">
      <div className="family-tree-main">
        <nav className="family-tree-era-scope" aria-label={ui.filterEra}>
          <button type="button" aria-pressed={eraScope==='all'} onClick={() => selectEraScope('all')}>{ui.all}</button>
          {treeEras.map((era) => <button key={era.id} type="button" aria-pressed={eraScope===era.id} onClick={() => selectEraScope(era.id)}>{peopleLocale.ui.era} {era.numeral}</button>)}
        </nav>
        <div className="family-tree-household">
          <p className="section-label">{ui.household}</p>
          <details open><summary>{ui.principalHousehold}</summary>{roster('principal')}</details>
          <details><summary>{ui.otherConsorts}</summary>{roster('otherConsorts')}</details>
          <details><summary>{ui.children}</summary><h3>{ui.sons}</h3>{roster('sons')}<h3>{ui.daughters}</h3>{roster('daughters')}</details>
          <p className="family-tree-incomplete-note">{ui.incomplete}</p>
          <div className="family-tree-branches">
            <h3>{ui.exploreBranch}</h3>
            <div className="family-tree-branch-controls">
              {Object.keys(branchGroups).map((branch) => <button key={branch} type="button" aria-expanded={expandedBranch===branch} onClick={() => setExpandedBranch((current) => current===branch ? null : branch)}><strong>{peopleLocale.branches[branch] ?? branch}</strong><span>{expandedBranch===branch ? ui.collapse : ui.expand}</span></button>)}
            </div>
            {expandedBranch ? <div className="family-tree-branch-members" aria-live="polite">{branchGroups[expandedBranch].map((id) => treePeople.find((person) => person.id===id)).filter((person) => person && belongsToScope(person)).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => selectPerson(person.id)}><strong>{person.title}</strong><span>{person.role}</span></button>)}</div> : null}
          </div>
        </div>
        <div className="family-tree-scroll" tabIndex="0" aria-label={ui.scrollLabel}>
          <div className="family-tree-canvas">
          <div className="family-tree-generation generation-one">{ui.generation} I</div>
          <div className="family-tree-generation generation-two">{ui.generation} II</div>
          <div className="family-tree-generation generation-three">{ui.generation} III</div>
          <svg className="family-tree-connectors" viewBox="0 0 1640 960" aria-hidden="true">
            {familyUnits.map(({ couple, children }) => {
              const first=positions[couple.personId], second=positions[couple.relatedPersonId]
              const parentMid=(first.x+90+second.x+90)/2
              const childCenters=children.map((id) => positions[id].x+90)
              const siblingY=children.length ? positions[children[0]].y-55 : null
              const active=[couple.personId,couple.relatedPersonId,...children].includes(selectedId)
              return <g key={`${couple.personId}-${couple.relatedPersonId}`} className={active?'is-active':''}><path className="spouse" d={`M ${first.x+180} ${first.y+95} H ${second.x}`} />{children.length ? <><path d={`M ${parentMid} ${first.y+95} V ${siblingY} M ${Math.min(...childCenters)} ${siblingY} H ${Math.max(...childCenters)}`} />{children.map((childId) => <path key={childId} d={`M ${positions[childId].x+90} ${siblingY} V ${positions[childId].y}`} />)}</> : null}</g>
            })}
            {singleParentEdges.map((edge) => {
              const pair=getParentChildIds(edge), from=positions[pair.parentId], to=positions[pair.childId]
              return <path key={`${edge.personId}-${edge.relatedPersonId}`} className={edge.personId===selectedId||edge.relatedPersonId===selectedId?'is-active':''} d={`M ${from.x+90} ${from.y+190} V ${to.y-45} H ${to.x+90} V ${to.y}`} />
            })}
          </svg>
          {coreTreePersonIds.map((id) => treePeople.find((person) => person.id === id)).filter(Boolean).map((person) => <FamilyTreeNode key={person.id} person={person} position={positions[person.id]} selected={person.id===selectedId} connected={adjacentIds.has(person.id)&&person.id!==selectedId} dimmed={!adjacentIds.has(person.id) || !belongsToScope(person)} onSelect={selectPerson} />)}
          </div>
        </div>
        {scopedLaterGroups.length ? <section className="family-tree-later" aria-labelledby="later-continuity-title">
          <div><p className="section-label">{ui.crossEra}</p><h3 id="later-continuity-title">{ui.continuity}</h3><p>{ui.supportedOnly}</p></div>
          {eraScope === 'northern-yuan' || eraScope === 'all' ? <aside className="family-tree-gap"><strong>{ui.gap}</strong><span>{ui.gapLine}</span><p>{ui.gapText}</p></aside> : null}
          <div className="family-tree-later-groups">{scopedLaterGroups.map((group) => {
            const groupEra = eras.find((era) => era.id === group.eraId)
            const groupCopy = familyLocale.groups[group.id] ?? group
            return <article key={group.id}><header><span>{peopleLocale.ui.era} {groupEra?.numeral}</span><h4>{groupCopy.label}</h4><p>{groupCopy.relationship}</p></header><div>{group.personIds.map((id) => treePeople.find((person) => person.id===id)).filter(Boolean).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => selectPerson(person.id)}><strong>{person.title}</strong><span>{person.role}</span></button>)}</div></article>
          })}</div>
        </section> : null}
      </div>
      <FamilyTreeDetails person={selectedPerson} family={selectedFamily} sources={selectedSources} />
    </div>
  )
}

export default FamilyTree
