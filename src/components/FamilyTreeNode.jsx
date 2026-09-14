import { useLocale } from '../i18n/useLocale'
import { formatTemplate } from '../data/personLocalization'

function FamilyTreeNode({ person, position, selected, connected, dimmed, compact = false, onSelect }) {
  const { localeSection } = useLocale()
  const ui = localeSection('familyTree').ui
  const branches = localeSection('people').branches
  const initials = person.title.split(/\s|\//).filter(Boolean).slice(0, 2).map((word) => word[0]).join('')
  const role = person.householdContext?.role
  const householdRole = role ? (ui.householdRoles?.[role] ?? role.replaceAll('_', ' ')) : null

  return (
    <button
      type="button"
      className={`family-tree-node branch-${person.dynasticBranch?.toLowerCase() ?? 'founding'}${compact ? ' is-compact' : ''}${selected ? ' is-selected' : ''}${connected ? ' is-connected' : ''}${dimmed ? ' is-dimmed' : ''}`}
      style={{ left: position.x, top: position.y }}
      aria-pressed={selected}
      aria-label={formatTemplate(ui.viewNode, { name:person.title })}
      onClick={() => onSelect(person.id)}
    >
      {selected ? <span className="family-tree-selected-badge">{ui.selected}</span> : null}
      <span className="family-tree-portrait" aria-hidden="true"><i>{initials}</i><small>{ui.noLikeness}</small></span>
      <span className="family-tree-node-copy">
        <strong>{person.title}</strong>
        <small>{person.periodDisplay ?? person.period ?? ui.datesUnknown}</small>
        <span>{householdRole ?? person.role}</span>
        <em>{person.dynasticBranch ? branches[person.dynasticBranch] : ui.founding}</em>
      </span>
    </button>
  )
}

export default FamilyTreeNode
