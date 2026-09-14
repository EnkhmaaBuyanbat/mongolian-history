import { useEffect, useMemo, useRef, useState } from 'react'
import { people } from '../data/people'
import { personRelationships } from '../data/personRelationships'
import { sources } from '../data/sources'
import { eras } from '../data/eras'
import FamilyTreeDetails from './FamilyTreeDetails'
import FamilyTreeNode from './FamilyTreeNode'
import { branchGroups, familyTreePersonIds as treePersonIds, householdGroups, laterFamilyGroups, visualTreePersonIds } from '../data/familyTreePeople'
import { getPersonSlug } from '../data/entityRoutes'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedPerson, getParentChildIds } from '../data/personLocalization'

const treeEras = eras.filter((era) => ['II','III','IV','V'].includes(era.numeral))
const NODE_CX = 90
const NODE_BOTTOM = 190
const CANVAS = { width: 1740, height: 1280 }
const LABEL_GUTTER = 56

const positions = Object.fromEntries(Object.entries({
  'person-temujin-chinggis-khan': { x: 420, y: 48 },
  'person-borte': { x: 660, y: 48 },
  'person-yisui': { x: 40, y: 268 },
  'person-yisugen': { x: 250, y: 268 },
  'person-ibaqa-beki': { x: 460, y: 268 },
  'person-qulan-khatun': { x: 1280, y: 268 },
  'person-jochi': { x: 20, y: 528 },
  'person-chagatai': { x: 230, y: 528 },
  'person-ogedei-khan': { x: 440, y: 528 },
  'person-toregene-khatun': { x: 650, y: 528 },
  'person-tolui': { x: 860, y: 528 },
  'person-sorghaghtani-beki': { x: 1070, y: 528 },
  'person-kolgen': { x: 1280, y: 528 },
  'person-qojin-beki': { x: 20, y: 778 },
  'person-checheyigen': { x: 230, y: 778 },
  'person-alaqa-beki': { x: 440, y: 778 },
  'person-tumelun': { x: 650, y: 778 },
  'person-al-altun': { x: 860, y: 778 },
  'person-batu': { x: 20, y: 1028 },
  'person-guyuk-khan': { x: 440, y: 1028 },
  'person-mongke-khan': { x: 650, y: 1028 },
  'person-qubilai': { x: 860, y: 1028 },
  'person-hulegu': { x: 1070, y: 1028 },
  'person-ariq-boke': { x: 1280, y: 1028 },
}).map(([id, point]) => [id, { x: point.x + LABEL_GUTTER, y: point.y }]))

const compactNodeIds = new Set([
  ...householdGroups.otherConsorts,
  ...householdGroups.daughters,
])

function relationshipKind(relationship) {
  if (relationship.type === 'spouse') return 'spouse'
  if (relationship.type.includes('parent')) return 'parent'
  return null
}

function sameGeneration(first, second) {
  return Math.abs(first.y - second.y) < 24
}

function spousePath(first, second) {
  const left = first.x <= second.x ? first : second
  const right = first.x <= second.x ? second : first
  if (sameGeneration(first, second)) {
    return `M ${left.x + 180} ${left.y + 95} H ${right.x}`
  }
  const upper = first.y < second.y ? first : second
  const lower = first.y < second.y ? second : first
  const joinY = lower.y - 18
  return `M ${lower.x + NODE_CX} ${lower.y} V ${joinY} H ${upper.x + NODE_CX} V ${upper.y + NODE_BOTTOM}`
}

function groupChildrenByRow(childIds) {
  const rows = new Map()
  childIds.forEach((id) => {
    const y = positions[id]?.y
    if (y == null) return
    const row = rows.get(y) ?? []
    row.push(id)
    rows.set(y, row)
  })
  return [...rows.entries()].sort((left, right) => left[0] - right[0]).map(([y, ids]) => ({ y, ids }))
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
  const visualIds = visualTreePersonIds.filter((id) => positions[id])
  const visualEdges = familyEdges.filter((edge) => visualIds.includes(edge.personId) && visualIds.includes(edge.relatedPersonId))
  const parentEdges = visualEdges.filter((edge) => edge.kind === 'parent')
  const familyUnits = visualEdges.filter((edge) => edge.kind === 'spouse').map((couple) => ({
    couple,
    children: visualIds.filter((childId) => parentEdges.some((edge) => { const pair=getParentChildIds(edge); return pair?.parentId===couple.personId && pair.childId===childId }) && parentEdges.some((edge) => { const pair=getParentChildIds(edge); return pair?.parentId===couple.relatedPersonId && pair.childId===childId })),
  }))
  const coveredParentEdges = new Set(familyUnits.flatMap((unit) => unit.children.flatMap((childId) => [`${unit.couple.personId}-${childId}`,`${unit.couple.relatedPersonId}-${childId}`])))
  const singleParentEdges = parentEdges.filter((edge) => { const pair=getParentChildIds(edge); return pair && !coveredParentEdges.has(`${pair.parentId}-${pair.childId}`) })
  const [selectedId, setSelectedId] = useState('person-sorghaghtani-beki')
  const [expandedBranch, setExpandedBranch] = useState(null)
  const [eraScope, setEraScope] = useState('all')
  const canvasScrollRef = useRef(null)
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
      const nextId = treePeople.find((person) => getPersonSlug(person) === slug)?.id
      if (nextId) setSelectedId(nextId)
    }
    restoreSelection()
    window.addEventListener('popstate', restoreSelection)
    return () => window.removeEventListener('popstate', restoreSelection)
  }, [treePeople])
  useEffect(() => {
    const scroller = canvasScrollRef.current
    const node = scroller?.querySelector('.family-tree-node.is-selected')
    if (!scroller || !node) return
    const margin = 24
    const isVisible = node.offsetLeft >= scroller.scrollLeft + margin
      && node.offsetLeft + node.offsetWidth <= scroller.scrollLeft + scroller.clientWidth - margin
    if (isVisible) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scroller.scrollTo({
      left: Math.max(0, node.offsetLeft - (scroller.clientWidth - node.offsetWidth) / 2),
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }, [selectedId])
  const belongsToScope = (person) => eraScope === 'all' || (person.eraIds ?? [person.eraId]).includes(eraScope)
  const peopleFor = (group) => householdGroups[group].map((id) => treePeople.find((person) => person.id === id)).filter((person) => person && belongsToScope(person))
  const householdRole = (role) => ui.householdRoles?.[role] ?? role?.replaceAll('_', ' ')
  const roster = (group) => <div className="family-tree-roster">{peopleFor(group).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => selectPerson(person.id)}><strong>{person.title}</strong><span>{householdRole(person.householdContext?.role) ?? person.role}</span></button>)}</div>
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
          <details open><summary>{ui.otherConsorts}</summary>{roster('otherConsorts')}</details>
          <details open><summary>{ui.children}</summary><h3>{ui.sons}</h3>{roster('sons')}<h3>{ui.daughters}</h3>{roster('daughters')}</details>
          <p className="family-tree-incomplete-note">{ui.incomplete}</p>
          <div className="family-tree-branches">
            <h3>{ui.exploreBranch}</h3>
            <div className="family-tree-branch-controls">
              {Object.keys(branchGroups).map((branch) => <button key={branch} type="button" aria-expanded={expandedBranch===branch} onClick={() => setExpandedBranch((current) => current===branch ? null : branch)}><strong>{peopleLocale.branches[branch] ?? branch}</strong><span>{expandedBranch===branch ? ui.collapse : ui.expand}</span></button>)}
            </div>
            {expandedBranch ? <div className="family-tree-branch-members" aria-live="polite">{branchGroups[expandedBranch].map((id) => treePeople.find((person) => person.id===id)).filter((person) => person && belongsToScope(person)).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => selectPerson(person.id)}><strong>{person.title}</strong><span>{person.role}</span></button>)}</div> : null}
          </div>
        </div>
        <div className="family-tree-scroll" ref={canvasScrollRef} tabIndex="0" aria-label={ui.scrollLabel}>
          <div className="family-tree-canvas">
          <div className="family-tree-generation generation-household">{ui.householdBand}</div>
          <div className="family-tree-generation generation-consorts">{ui.consortBand}</div>
          <div className="family-tree-generation generation-sons">{ui.sonsBand}</div>
          <div className="family-tree-generation generation-daughters">{ui.daughtersBand}</div>
          <div className="family-tree-generation generation-later">{ui.laterBand}</div>
          <svg className="family-tree-connectors" viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`} aria-hidden="true">
            {familyUnits.map(({ couple, children }) => {
              const first=positions[couple.personId], second=positions[couple.relatedPersonId]
              if (!first || !second) return null
              const aligned = sameGeneration(first, second)
              const parentMid = aligned ? (first.x + second.x) / 2 + NODE_CX : (first.y > second.y ? first.x : second.x) + NODE_CX
              const parentJoinY = Math.max(first.y, second.y) + (aligned ? 95 : NODE_BOTTOM)
              const rows = groupChildrenByRow(children)
              const active=[couple.personId,couple.relatedPersonId,...children].includes(selectedId)
              return (
                <g key={`${couple.personId}-${couple.relatedPersonId}`} className={active?'is-active':''}>
                  <path className="spouse" d={spousePath(first, second)} />
                  {rows.map((row, index) => {
                    const siblingY = row.y - 48
                    const childCenters = row.ids.map((id) => positions[id].x + NODE_CX)
                    const fromY = index === 0 ? parentJoinY : rows[index - 1].y - 48
                    return (
                      <g key={`${couple.personId}-row-${row.y}`}>
                        <path d={`M ${parentMid} ${fromY} V ${siblingY} M ${Math.min(...childCenters)} ${siblingY} H ${Math.max(...childCenters)}`} />
                        {row.ids.map((childId) => <path key={childId} d={`M ${positions[childId].x + NODE_CX} ${siblingY} V ${positions[childId].y}`} />)}
                      </g>
                    )
                  })}
                </g>
              )
            })}
            {singleParentEdges.map((edge) => {
              const pair=getParentChildIds(edge)
              const from=positions[pair.parentId]
              const to=positions[pair.childId]
              if (!from || !to) return null
              return <path key={`${edge.personId}-${edge.relatedPersonId}`} className={edge.personId===selectedId||edge.relatedPersonId===selectedId?'is-active':''} d={`M ${from.x + NODE_CX} ${from.y + NODE_BOTTOM} V ${to.y - 42} H ${to.x + NODE_CX} V ${to.y}`} />
            })}
          </svg>
          {visualIds.map((id) => treePeople.find((person) => person.id === id)).filter(Boolean).map((person) => (
            <FamilyTreeNode
              key={person.id}
              person={person}
              position={positions[person.id]}
              selected={person.id===selectedId}
              connected={adjacentIds.has(person.id)&&person.id!==selectedId}
              dimmed={!adjacentIds.has(person.id) || !belongsToScope(person)}
              compact={compactNodeIds.has(person.id)}
              onSelect={selectPerson}
            />
          ))}
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
