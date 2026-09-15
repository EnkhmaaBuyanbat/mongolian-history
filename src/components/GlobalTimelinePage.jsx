'use client'

import { useLayoutEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { events } from '../data/events'
import { eras } from '../data/eras'
import { sortChronologically } from '../data/chronology'
import { getEventHref, getTimelineHref } from '../data/entityRoutes'
import { getLocalizedEvent } from '../data/eventLocalization'
import { useLocale } from '../i18n/useLocale'
import { MeanderLine } from './Ornament'

function GlobalTimelinePage({ initialEra = '', initialEvent = '' }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { localeSection, localizedRecord } = useLocale()
  const eventLocale = localeSection('events')
  const ui = eventLocale.ui
  const eventParam = searchParams.get('event') || initialEvent
  const eraParam = searchParams.get('era') || initialEra

  const researchedEvents = sortChronologically(
    events.filter(
      (event) =>
        (event.status === 'researched' || event.status === 'verified') &&
        !event.id.startsWith('demo-'),
    ).map((event) => getLocalizedEvent(event, eventLocale)),
  )
  const selectedEvent = researchedEvents.find((event) => event.id === eventParam) ?? null
  const selectedEventId = selectedEvent?.id ?? ''
  const requestedEra = eras.some((era) => era.id === eraParam) ? eraParam : 'all'
  const selectedEraId = selectedEvent && requestedEra !== 'all' && requestedEra !== selectedEvent.eraId
    ? selectedEvent.eraId
    : requestedEra
  const visibleEras = eras.filter((era) => selectedEraId === 'all' || era.id === selectedEraId)
  const eraGroups = visibleEras.map((era) => ({
    era,
    events: researchedEvents.filter((event) => event.eraId === era.id),
  })).filter((group) => selectedEraId !== 'all' || group.events.length)

  useLayoutEffect(() => {
    if (!selectedEventId) return undefined
    let cancelled = false
    let attempts = 0
    let timeoutId
    const scrollToSelected = () => {
      if (cancelled) return false
      const node = document.getElementById(selectedEventId)
      if (!node) return false
      const scroller = document.scrollingElement ?? document.documentElement
      const rect = node.getBoundingClientRect()
      scroller.scrollTop = Math.max(0, scroller.scrollTop + rect.top + rect.height / 2 - window.innerHeight / 2)
      if (document.activeElement !== node) node.focus({ preventScroll: true })
      const nextRect = node.getBoundingClientRect()
      return nextRect.top < window.innerHeight && nextRect.bottom > 0
    }
    const tick = () => {
      const inView = scrollToSelected()
      attempts += 1
      if (!cancelled && !inView && attempts < 12) timeoutId = window.setTimeout(tick, 50)
    }
    tick()
    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [selectedEraId, selectedEventId])

  function goToEra(nextEraId) {
    const keepEvent = selectedEvent && (nextEraId === 'all' || selectedEvent.eraId === nextEraId)
    router.replace(getTimelineHref({
      eraId: nextEraId === 'all' ? '' : nextEraId,
      eventId: keepEvent ? selectedEvent.id : '',
    }), { scroll: false })
  }

  return (
    <article className="global-timeline-page">
      <header className="global-timeline-header">
        <div className="section-inner global-timeline-header-inner">
          <p className="section-label">{ui.timeline}</p>
          <h1>{ui.historicalTimeline}</h1>
          <MeanderLine className="entity-meander" />
          <p className="global-timeline-intro">{ui.intro}</p>
        </div>
      </header>

      <section className="global-timeline-section">
        <div className="section-inner">
          <nav className="timeline-era-navigator" aria-label={ui.filterByEra}>
            <p className="section-label">{ui.eraNavigator}</p>
            <div>
              <button type="button" aria-pressed={selectedEraId === 'all'} onClick={() => goToEra('all')}>
                <strong>{ui.allEras}</strong>
                <span>{ui.completeChronology}</span>
              </button>
              {eras.map((era) => {
                const displayEra = localizedRecord('eras', era.id, era)
                return (
                  <button
                    key={era.id}
                    type="button"
                    aria-pressed={selectedEraId === era.id}
                    onClick={() => goToEra(era.id)}
                  >
                    <strong>{ui.era} {era.numeral}</strong>
                    <span>{displayEra.title}</span>
                  </button>
                )
              })}
            </div>
          </nav>

          {eraGroups.map(({ era, events: eraEvents }) => {
            const displayEra = localizedRecord('eras', era.id, era)
            return (
              <section key={era.id} className="global-timeline-era-group">
                <header>
                  <p className="section-label">{ui.era} {era.numeral}</p>
                  <h2>{displayEra.title}</h2>
                  <span>{displayEra.period}</span>
                </header>
                {eraEvents.length ? (
                  <ol className="global-timeline-list">
                    {eraEvents.map((event) => {
                      const selected = selectedEvent?.id === event.id
                      return (
                        <li key={event.id}>
                          <a
                            id={event.id}
                            href={getEventHref(event)}
                            className={selected ? 'global-timeline-record is-active' : 'global-timeline-record'}
                            aria-current={selected ? 'true' : undefined}
                            autoFocus={selected}
                          >
                            <time>{event.dateDisplay}</time>
                            <div>
                              {selected ? <span className="global-timeline-selected-label">{ui.selectedRecord}</span> : null}
                              <h3>{event.title}</h3>
                              <p>{event.summary}</p>
                              <div className="global-timeline-meta">
                                <span>{displayEra.title}</span>
                                <span>{eventLocale.types?.[event.type] ?? event.type}</span>
                                {event.importance ? <span>{eventLocale.importance?.[event.importance] ?? event.importance}</span> : null}
                              </div>
                            </div>
                          </a>
                        </li>
                      )
                    })}
                  </ol>
                ) : (
                  <p className="entity-empty-state">{ui.empty}</p>
                )}
              </section>
            )
          })}
        </div>
      </section>
    </article>
  )
}

export default GlobalTimelinePage
