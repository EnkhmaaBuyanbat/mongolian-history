function EducationalVisual({ title, items, note, variant = 'flow' }) {
  return (
    <figure className={`educational-visual educational-visual-${variant}`} aria-label={title}>
      <figcaption>{title}</figcaption>
      <div className="educational-visual-items">
        {items.map((item) => (
          <div key={item.title} className="educational-visual-item">
            <strong>{item.title}</strong>
            {item.text ? <span>{item.text}</span> : null}
          </div>
        ))}
      </div>
      {note ? <p className="educational-visual-note">{note}</p> : null}
    </figure>
  )
}

export default EducationalVisual
