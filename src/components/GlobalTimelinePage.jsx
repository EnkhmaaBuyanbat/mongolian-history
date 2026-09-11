import { useState } from 'react'
import { events } from '../data/events'
import { eras } from '../data/eras'
import { sortChronologically } from '../data/chronology'
import { MeanderLine } from './Ornament'
import { getLocalizedEvent } from '../data/eventLocalization'
import { useLocale } from '../i18n/useLocale'

function GlobalTimelinePage() {
  const { localeSection, localizedRecord } = useLocale()
  const eventLocale = localeSection('events')
  const ui = eventLocale.ui
  const [selectedEraId, setSelectedEraId] = useState('all')
  const researchedEvents = sortChronologically(
    events.filter(
      (event) =>
        (event.status === 'researched' || event.status === 'verified') &&
        !event.id.startsWith('demo-'),
    ).map((event) => getLocalizedEvent(event, eventLocale)),
  )
  const visibleEras = eras.filter((era) => selectedEraId === 'all' || era.id === selectedEraId)
  const eraGroups = visibleEras.map((era) => ({ era, events:researchedEvents.filter((event) => event.eraId === era.id) }))
    .filter((group) => selectedEraId !== 'all' || group.events.length)

  return (
    <article className="global-timeline-page">
      <header className="global-timeline-header">
        <div className="section-inner global-timeline-header-inner">
          <p className="section-label">{ui.timeline}</p>
          <h1>{ui.historicalTimeline}</h1>
          <MeanderLine className="entity-meander" />
          <p className="global-timeline-intro">
            {ui.intro}
          </p>
        </div>
      </header>

      <section className="global-timeline-section">
        <div className="section-inner">
          <nav className="timeline-era-navigator" aria-label={ui.filterByEra}>
            <p className="section-label">{ui.eraNavigator}</p>
            <div><button type="button" aria-pressed={selectedEraId==='all'} onClick={() => setSelectedEraId('all')}><strong>{ui.allEras}</strong><span>{ui.completeChronology}</span></button>{eras.map((era) => { const displayEra=localizedRecord('eras',era.id,era); return <button key={era.id} type="button" aria-pressed={selectedEraId===era.id} onClick={() => setSelectedEraId(era.id)}><strong>{ui.era} {era.numeral}</strong><span>{displayEra.title}</span></button> })}</div>
          </nav>
          {eraGroups.map(({ era, events:eraEvents }) => { const displayEra=localizedRecord('eras',era.id,era); return <section key={era.id} className="global-timeline-era-group"><header><p className="section-label">{ui.era} {era.numeral}</p><h2>{displayEra.title}</h2><span>{displayEra.period}</span></header>{eraEvents.length ? <ol className="global-timeline-list">{eraEvents.map((event) => <li key={event.id} className="global-timeline-record"><time>{event.dateDisplay}</time><div><h3>{event.title}</h3><p>{event.summary}</p><div className="global-timeline-meta"><span>{displayEra.title}</span><span>{eventLocale.types?.[event.type] ?? event.type}</span>{event.importance ? <span>{eventLocale.importance?.[event.importance] ?? event.importance}</span> : null}</div></div></li>)}</ol> : <p className="entity-empty-state">{ui.empty}</p>}</section> })}
        </div>
      </section>
    </article>
  )
}

export default GlobalTimelinePage
