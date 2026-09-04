function PoliticalRelations({ center, nodes, note }) {
  return (
    <figure className="political-relations" aria-label="Political relationships">
      <figcaption>Political relationships</figcaption>
      <div className="political-relations-grid">
        <div className="political-relations-center">{center}</div>
        {nodes.map((node) => (
          <div key={node.title} className="political-relations-node">
            <strong>{node.title}</strong>
            <span>{node.label}</span>
          </div>
        ))}
      </div>
      <p className="political-relations-note">{note}</p>
      <p className="political-relations-caution">
        Connections show changing political relationships, not permanent alliances or exact territorial control.
      </p>
    </figure>
  )
}

export default PoliticalRelations
