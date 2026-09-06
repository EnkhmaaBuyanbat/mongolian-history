function FamilyTreeNode({ person, position, selected, connected, dimmed, onSelect }) {
  const initials = person.title.split(/\s|\//).filter(Boolean).slice(0, 2).map((word) => word[0]).join('')

  return (
    <button
      type="button"
      className={`family-tree-node branch-${person.dynasticBranch?.toLowerCase() ?? 'founding'}${selected ? ' is-selected' : ''}${connected ? ' is-connected' : ''}${dimmed ? ' is-dimmed' : ''}`}
      style={{ left: position.x, top: position.y }}
      aria-pressed={selected}
      aria-label={`View ${person.title} in the family tree`}
      onClick={() => onSelect(person.id)}
    >
      <span className="family-tree-portrait" aria-hidden="true"><i>{initials}</i><small>No verified likeness</small></span>
      <span className="family-tree-node-copy">
        <strong>{person.title}</strong>
        <small>{person.periodDisplay ?? person.period ?? 'Dates not securely established'}</small>
        <span>{person.role}</span>
        <em>{person.dynasticBranch ? `${person.dynasticBranch} branch` : 'Founding generation'}</em>
      </span>
    </button>
  )
}

export default FamilyTreeNode
