import { useMemo, useState } from 'react'
import { people } from '../data/people'
import { personRelationships } from '../data/personRelationships'
import { sources } from '../data/sources'
import FamilyTreeDetails from './FamilyTreeDetails'
import FamilyTreeNode from './FamilyTreeNode'

const coreTreePersonIds = [
  'person-temujin-chinggis-khan','person-borte','person-jochi','person-chagatai','person-ogedei-khan','person-toregene-khatun','person-tolui','person-sorghaghtani-beki','person-batu','person-guyuk-khan','person-mongke-khan','person-qubilai','person-hulegu','person-ariq-boke',
]

const householdGroups = {
  principal:['person-temujin-chinggis-khan','person-borte'],
  otherConsorts:['person-qulan-khatun','person-yisugen','person-yisui','person-ibaqa-beki'],
  sons:['person-jochi','person-chagatai','person-ogedei-khan','person-tolui','person-kolgen'],
  daughters:['person-qojin-beki','person-checheyigen','person-alaqa-beki','person-tumelun','person-al-altun'],
}

const branchGroups = {
  JOCHID:['person-jochi','person-orda','person-batu','person-berke','person-tuqa-timur'],
  CHAGATAID:['person-chagatai','person-mutukan','person-qara-hulegu'],
  OGEDEID:['person-ogedei-khan','person-toregene-khatun','person-guyuk-khan','person-qadan','person-kochu','person-shiremun'],
  TOLUID:['person-tolui','person-sorghaghtani-beki','person-mongke-khan','person-qubilai','person-hulegu','person-ariq-boke'],
}

const treePersonIds = [...new Set([...coreTreePersonIds,...Object.values(householdGroups).flat(),...Object.values(branchGroups).flat()])]

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
  const isNamedParent = (edge) => edge.personId === person.id && ['Father', 'Mother'].includes(edge.label)
  const parentEdges = familyEdges.filter((edge) => edge.kind === 'parent')
  const parents = parentEdges.filter((edge) => edge.relatedPersonId === person.id || isNamedParent(edge))
    .map((edge) => treePeople.find((item) => item.id === (edge.personId === person.id ? edge.relatedPersonId : edge.personId))).filter(Boolean)
  const children = parentEdges.filter((edge) => (edge.personId === person.id || edge.relatedPersonId === person.id) && !parents.some((parent) => parent.id === (edge.personId === person.id ? edge.relatedPersonId : edge.personId)))
    .map((edge) => treePeople.find((item) => item.id === (edge.personId === person.id ? edge.relatedPersonId : edge.personId))).filter(Boolean)
  const spouses = familyEdges.filter((edge) => edge.kind === 'spouse' && (edge.personId === person.id || edge.relatedPersonId === person.id))
    .map((edge) => treePeople.find((item) => item.id === (edge.personId === person.id ? edge.relatedPersonId : edge.personId))).filter(Boolean)
  return { parents, spouses, children }
}

function FamilyTree() {
  const treePeople = useMemo(() => treePersonIds.map((id) => people.find((person) => person.id === id)).filter(Boolean), [])
  const familyEdges = useMemo(() => personRelationships.map((relationship) => ({ ...relationship, kind:relationshipKind(relationship) })).filter((relationship) => relationship.kind && treePersonIds.includes(relationship.personId) && treePersonIds.includes(relationship.relatedPersonId)), [])
  const coreFamilyEdges = familyEdges.filter((edge) => coreTreePersonIds.includes(edge.personId) && coreTreePersonIds.includes(edge.relatedPersonId))
  const parentEdges = coreFamilyEdges.filter((edge) => edge.kind === 'parent')
  const familyUnits = coreFamilyEdges.filter((edge) => edge.kind === 'spouse').map((couple) => ({
    couple,
    children:coreTreePersonIds.filter((childId) => parentEdges.some((edge) => edge.personId === couple.personId && edge.relatedPersonId === childId) && parentEdges.some((edge) => edge.personId === couple.relatedPersonId && edge.relatedPersonId === childId)),
  }))
  const coveredParentEdges = new Set(familyUnits.flatMap((unit) => unit.children.flatMap((childId) => [`${unit.couple.personId}-${childId}`,`${unit.couple.relatedPersonId}-${childId}`])))
  const singleParentEdges = parentEdges.filter((edge) => !coveredParentEdges.has(`${edge.personId}-${edge.relatedPersonId}`))
  const [selectedId, setSelectedId] = useState('person-sorghaghtani-beki')
  const [expandedBranch, setExpandedBranch] = useState(null)
  const selectedPerson = treePeople.find((person) => person.id === selectedId) ?? treePeople[0]
  const adjacentIds = new Set(familyEdges.filter((edge) => edge.personId === selectedId || edge.relatedPersonId === selectedId).flatMap((edge) => [edge.personId,edge.relatedPersonId]))
  const selectedFamily = getFamily(selectedPerson, familyEdges, treePeople)
  const selectedSourceIds = new Set([...(selectedPerson.sourceRefs ?? []), ...(selectedPerson.characterAndReputation?.traits ?? []).flatMap((trait) => trait.sourceIds ?? [])])
  const selectedSources = sources.filter((source) => selectedSourceIds.has(source.id))
  const peopleFor = (group) => householdGroups[group].map((id) => treePeople.find((person) => person.id === id)).filter(Boolean)
  const roster = (group) => <div className="family-tree-roster">{peopleFor(group).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => setSelectedId(person.id)}><strong>{person.title}</strong><span>{person.householdContext?.role?.replaceAll('_',' ') ?? person.role}</span></button>)}</div>

  return (
    <div className="family-tree-exhibit">
      <div className="family-tree-main">
        <div className="family-tree-household">
          <p className="section-label">Chinggis Khan’s Household</p>
          <details open><summary>Principal household</summary>{roster('principal')}</details>
          <details><summary>Other wives / consorts</summary>{roster('otherConsorts')}</details>
          <details><summary>Children</summary><h3>Sons</h3>{roster('sons')}<h3>Daughters</h3>{roster('daughters')}</details>
          <p className="family-tree-incomplete-note">This is a curated historical genealogy. Some relationships, dates and descendants remain uncertain or are omitted pending stronger source support.</p>
          <div className="family-tree-branches">
            <h3>Explore a dynastic branch</h3>
            <div className="family-tree-branch-controls">
              {Object.keys(branchGroups).map((branch) => <button key={branch} type="button" aria-expanded={expandedBranch===branch} onClick={() => setExpandedBranch((current) => current===branch ? null : branch)}><strong>{branch.slice(0,-1)}</strong><span>{expandedBranch===branch ? 'Collapse branch' : 'Expand branch'}</span></button>)}
            </div>
            {expandedBranch ? <div className="family-tree-branch-members" aria-live="polite">{branchGroups[expandedBranch].map((id) => treePeople.find((person) => person.id===id)).filter(Boolean).map((person) => <button key={person.id} type="button" aria-pressed={person.id===selectedId} onClick={() => setSelectedId(person.id)}><strong>{person.title}</strong><span>{person.role}</span></button>)}</div> : null}
          </div>
        </div>
        <div className="family-tree-scroll" tabIndex="0" aria-label="Scrollable Chinggisid family tree">
          <div className="family-tree-canvas">
          <div className="family-tree-generation generation-one">Generation I</div>
          <div className="family-tree-generation generation-two">Generation II</div>
          <div className="family-tree-generation generation-three">Generation III</div>
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
              const from=positions[edge.personId], to=positions[edge.relatedPersonId]
              return <path key={`${edge.personId}-${edge.relatedPersonId}`} className={edge.personId===selectedId||edge.relatedPersonId===selectedId?'is-active':''} d={`M ${from.x+90} ${from.y+190} V ${to.y-45} H ${to.x+90} V ${to.y}`} />
            })}
          </svg>
          {coreTreePersonIds.map((id) => treePeople.find((person) => person.id === id)).filter(Boolean).map((person) => <FamilyTreeNode key={person.id} person={person} position={positions[person.id]} selected={person.id===selectedId} connected={adjacentIds.has(person.id)&&person.id!==selectedId} dimmed={!adjacentIds.has(person.id)} onSelect={setSelectedId} />)}
          </div>
        </div>
      </div>
      <FamilyTreeDetails person={selectedPerson} family={selectedFamily} sources={selectedSources} />
    </div>
  )
}

export default FamilyTree
