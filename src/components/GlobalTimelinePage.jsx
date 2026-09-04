import { events } from '../data/events'
import { eras } from '../data/eras'
import { sortChronologically } from '../data/chronology'
import { MeanderLine } from './Ornament'

function getEraTitle(eraId) {
  return eras.find((era) => era.id === eraId)?.title ?? eraId
}

function GlobalTimelinePage() {
  const researchedEvents = sortChronologically(
    events.filter(
      (event) =>
        (event.status === 'researched' || event.status === 'verified') &&
        !event.id.startsWith('demo-'),
    ),
  )

  return (
    <article className="global-timeline-page">
      <header className="global-timeline-header">
        <div className="section-inner global-timeline-header-inner">
          <p className="section-label">Timeline</p>
          <h1>Historical Timeline</h1>
          <MeanderLine className="entity-meander" />
          <p className="global-timeline-intro">
            A chronological view of researched historical records across the eras.
          </p>
        </div>
      </header>

      <section className="global-timeline-section">
        <div className="section-inner">
          {researchedEvents.length ? (
            <ol className="global-timeline-list">
              {researchedEvents.map((event) => (
                <li key={event.id} className="global-timeline-record">
                  <time>{event.dateDisplay}</time>
                  <div>
                    <h2>{event.title}</h2>
                    <p>{event.summary}</p>
                    <div className="global-timeline-meta">
                      <span>{getEraTitle(event.eraId)}</span>
                      <span>{event.type}</span>
                      {event.importance ? <span>{event.importance}</span> : null}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="entity-empty-state">No researched timeline records are available.</p>
          )}
        </div>
      </section>
    </article>
  )
}

export default GlobalTimelinePage
