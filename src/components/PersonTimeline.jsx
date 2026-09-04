import ConfidenceBadge from './ConfidenceBadge'

function PersonTimeline({ items }) {
  return (
    <section id="life-timeline" className="person-timeline-section">
      <div className="person-section-heading">
        <p className="section-label">Life Timeline</p>
        <h2>A life in historical record</h2>
      </div>
      <ol className="person-timeline">
        {items.map((item) => (
          <li key={item.id} className={`person-timeline-item${item.sourceAccount ? ' is-source-account' : ''}`}>
            <div className="person-timeline-marker" aria-hidden="true" />
            <div className="person-timeline-content">
              <p className="person-timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ConfidenceBadge label={item.confidence} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PersonTimeline
