import { useState } from 'react'
import { events } from '../data/events'
import { eras } from '../data/eras'
import { sortChronologically } from '../data/chronology'
import { MeanderLine } from './Ornament'

function getEraTitle(eraId) {
  return eras.find((era) => era.id === eraId)?.title ?? eraId
}

function GlobalTimelinePage() {
  const [selectedEraId, setSelectedEraId] = useState('all')
  const researchedEvents = sortChronologically(
    events.filter(
      (event) =>
        (event.status === 'researched' || event.status === 'verified') &&
        !event.id.startsWith('demo-'),
    ),
  )
  const visibleEras = eras.filter((era) => selectedEraId === 'all' || era.id === selectedEraId)
  const eraGroups = visibleEras.map((era) => ({ era, events:researchedEvents.filter((event) => event.eraId === era.id) }))
    .filter((group) => selectedEraId !== 'all' || group.events.length)

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
          <nav className="timeline-era-navigator" aria-label="Filter timeline by era">
            <p className="section-label">Era Navigator</p>
            <div><button type="button" aria-pressed={selectedEraId==='all'} onClick={() => setSelectedEraId('all')}><strong>All Eras</strong><span>Complete chronology</span></button>{eras.map((era) => <button key={era.id} type="button" aria-pressed={selectedEraId===era.id} onClick={() => setSelectedEraId(era.id)}><strong>Era {era.numeral}</strong><span>{era.title}</span></button>)}</div>
          </nav>
          {eraGroups.map(({ era, events:eraEvents }) => <section key={era.id} className="global-timeline-era-group"><header><p className="section-label">Era {era.numeral}</p><h2>{era.title}</h2><span>{era.period}</span></header>{eraEvents.length ? <ol className="global-timeline-list">{eraEvents.map((event) => <li key={event.id} className="global-timeline-record"><time>{event.dateDisplay}</time><div><h3>{event.title}</h3><p>{event.summary}</p><div className="global-timeline-meta"><span>{getEraTitle(event.eraId)}</span><span>{event.type}</span>{event.importance ? <span>{event.importance}</span> : null}</div></div></li>)}</ol> : <p className="entity-empty-state">No researched timeline records are available for this era.</p>}</section>)}
        </div>
      </section>
    </article>
  )
}

export default GlobalTimelinePage
