function EducationalVisual({ title, summary, items, note, variant = 'flow', evidenceLabel, sourceRefs = [], ariaDescription }) {
  return (
    <figure className={`educational-visual educational-visual-${variant}`} aria-label={title} aria-description={ariaDescription}>
      <figcaption>{title}</figcaption>
      {evidenceLabel ? <small className="educational-visual-evidence">{evidenceLabel}</small> : null}
      {summary ? <p className="educational-visual-summary">{summary}</p> : null}
      <div className="educational-visual-items">
        {items.map((item) => (
          <div key={item.title} className="educational-visual-item">
            <strong>{item.title}</strong>
            {item.text ? <span>{item.text}</span> : null}
          </div>
        ))}
      </div>
      {note ? <p className="educational-visual-note">{note}</p> : null}
      {sourceRefs.length ? <small className="educational-visual-sources">Source records: {sourceRefs.join(', ')}</small> : null}
    </figure>
  )
}

export default EducationalVisual
