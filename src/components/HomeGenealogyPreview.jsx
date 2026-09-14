import { people } from '../data/people'
import { getHomeGenealogyPreview } from '../data/homeGenealogyPreview'
import { getLocalizedPerson } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'

function shortName(person) {
  const name = person?.displayName ?? person?.title ?? ''
  return name.split(' / ')[0]
}

function Node({ x, y, person, selected = false, compact = false }) {
  const label = shortName(person)
  const radius = selected ? 11 : 8
  return (
    <g className={selected ? 'home-tree-node is-selected' : 'home-tree-node'}>
      <circle cx={x} cy={y} r={radius + 5} className="home-tree-node-halo" />
      <circle cx={x} cy={y} r={radius} />
      <text x={x} y={y + radius + (compact ? 12 : 16)} textAnchor="middle">{label}</text>
    </g>
  )
}

export default function HomeGenealogyPreview() {
  const { localeSection } = useLocale()
  const peopleLocale = localeSection('people')
  const ui = localeSection('familyTree').ui
  const preview = getHomeGenealogyPreview()
  const byId = (id) => {
    const person = people.find((item) => item.id === id)
    return person ? getLocalizedPerson(person, peopleLocale) : null
  }
  const root = byId(preview.rootId)
  const generationTwo = preview.generationTwoIds.map(byId).filter(Boolean)
  const laterChild = preview.laterBranch ? byId(preview.laterBranch.childId) : null
  const laterIndex = preview.laterBranch
    ? preview.generationTwoIds.indexOf(preview.laterBranch.parentId)
    : -1
  if (!root || generationTwo.length === 0) return null

  const width = 760
  const rootX = width / 2
  const rootY = 28
  const childY = 118
  const laterY = 208
  const gap = width / (generationTwo.length + 1)
  const childXs = generationTwo.map((_, index) => gap * (index + 1))
  const laterX = laterIndex >= 0 ? childXs[laterIndex] : rootX
  const barY = 72

  return (
    <div className="home-tree-preview">
      <svg viewBox={`0 0 ${width} 252`} role="presentation" aria-hidden="true">
        <line className="home-tree-line" x1={rootX} y1={rootY + 14} x2={rootX} y2={barY} />
        <line className="home-tree-line" x1={childXs[0]} y1={barY} x2={childXs[childXs.length - 1]} y2={barY} />
        {childXs.map((x) => (
          <line key={x} className="home-tree-line" x1={x} y1={barY} x2={x} y2={childY - 10} />
        ))}
        {laterChild && laterIndex >= 0 ? (
          <line className="home-tree-line is-branch" x1={laterX} y1={childY + 12} x2={laterX} y2={laterY - 12} />
        ) : null}
        <Node x={rootX} y={rootY} person={root} selected />
        {generationTwo.map((person, index) => (
          <Node key={person.id} x={childXs[index]} y={childY} person={person} compact />
        ))}
        {laterChild ? <Node x={laterX} y={laterY} person={laterChild} compact /> : null}
      </svg>
      <p className="home-tree-incomplete">{ui.incomplete}</p>
    </div>
  )
}
