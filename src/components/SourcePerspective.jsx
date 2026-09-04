function SourcePerspective({ source, role, note }) {
  if (!source) return null

  return (
    <article className="chapter-record-card source-perspective-card">
      <small>{source.category ?? 'Historical source'}</small>
      <strong>{source.title}</strong>
      {source.perspective ? <p><b>Perspective / context:</b> {source.perspective}</p> : null}
      {source.temporalRelationship ? <p><b>Temporal relationship:</b> {source.temporalRelationship}</p> : null}
      {role ? <p><b>Role in this claim:</b> {role}</p> : null}
      {note ? <p>{note}</p> : null}
    </article>
  )
}

export default SourcePerspective
