import { useMemo } from 'react'
import { events } from '../data/events'
import { people } from '../data/people'
import { objects } from '../data/objects'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { chapters } from '../data/chapters'
import { eras } from '../data/eras'
import { sortChronologically } from '../data/chronology'
import { MeanderLine } from './Ornament'
import { getEntityHref } from '../data/entityRoutes'

const entityGroups = [
  { key: 'polities', label: 'Political Worlds', records: polities },
  { key: 'people', label: 'People', records: people },
  { key: 'events', label: 'Events', records: events },
  { key: 'places', label: 'Places', records: places },
  { key: 'sites', label: 'Archaeology & Sites', records: sites },
  { key: 'objects', label: 'Monuments & Objects', records: objects },
]

function belongsToEra(record, eraId) {
  return record.eraId === eraId || record.eraIds?.includes(eraId)
}

function isResearched(record) {
  return record.status === 'researched' || record.status === 'verified'
}

function EraDetailPage({ era }) {
  const recordsByGroup = useMemo(
    () =>
      Object.fromEntries(
        entityGroups.map((group) => [
          group.key,
          sortChronologically(
            group.records.filter(
              (record) => belongsToEra(record, era.id) && isResearched(record),
            ),
          ),
        ]),
      ),
    [era],
  )

  const eraChapters = era.chapterIds
    .map((chapterId) => chapters.find((chapter) => chapter.id === chapterId))
    .filter(Boolean)

  const eraEvents = recordsByGroup.events
    .filter((event) => event.importance === 'major')
  const eraIndex = eras.findIndex((item) => item.id === era.id)
  const previousEra = eras[eraIndex - 1]
  const nextEra = eras[eraIndex + 1]
  const eraHref = (item) => `/eras/${item.slug ?? item.id}`

  if (!era) {
    return null
  }

  return (
    <article className="era-detail-page">
      <header className="era-detail-header">
        <div className="section-inner era-detail-header-inner">
          <p className="section-label">ERA {era.number}</p>
          <h1>{era.title}</h1>
          <p className="era-detail-period">{era.period}</p>
          {era.subtitle ? <p className="chapter-subtitle">{era.subtitle}</p> : null}
          <MeanderLine className="entity-meander" />
          <p className="era-detail-description">{era.description}</p>
        </div>
      </header>

      {eraChapters.length ? (
        <section className="era-detail-section era-chapters-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">Learn This Era</p>
              <h2>Chapters</h2>
            </div>
            <div className="era-chapter-grid">
              {eraChapters.map((chapter) => (
                chapter.status === 'in-progress' ? (
                    <a
                      key={chapter.id}
                      href={`/eras/${era.slug ?? era.id}/chapters/${chapter.slug ?? chapter.id.replace('chapter-', '')}`}
                      className="era-chapter-card era-chapter-link"
                    >
                      <span className="era-chapter-number">{chapter.number}</span>
                      <h3>{chapter.title}</h3>
                      {chapter.subtitle || chapter.period ? (
                        <p>{chapter.subtitle || chapter.period}</p>
                      ) : null}
                      {chapter.summary ? <p>{chapter.summary}</p> : null}
                      <span className="era-chapter-action">Explore Chapter</span>
                    </a>
                ) : (
                    <article key={chapter.id} className="era-chapter-card">
                      <span className="era-chapter-number">{chapter.number}</span>
                      <h3>{chapter.title}</h3>
                      {chapter.subtitle || chapter.period ? (
                        <p>{chapter.subtitle || chapter.period}</p>
                      ) : null}
                      {chapter.summary ? <p>{chapter.summary}</p> : null}
                      <span className="era-chapter-action">Coming Soon</span>
                    </article>
                )
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="era-detail-section">
        <div className="section-inner">
          <div className="entity-section-heading">
            <p className="section-label">Era Timeline</p>
            <h2>Major dated records</h2>
          </div>
          {eraEvents.length ? (
            <ol className="era-event-list">
              {eraEvents.map((event) => (
                <li key={event.id} className="era-event-record">
                  <time>{event.dateDisplay}</time>
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="entity-empty-state">No major dated records are currently linked to this era.</p>
          )}
        </div>
      </section>

      <section className="era-detail-section era-detail-section-alt">
        <div className="section-inner">
          {entityGroups.filter((group) => group.key !== 'events').map((group) => {
            const records = recordsByGroup[group.key]
            if (!records.length) {
              return null
            }

            return (
              <section key={group.key} className="era-entity-group">
                <div className="entity-section-heading">
                  <h2>{group.label}</h2>
                </div>
                <div className="era-entity-grid">
                  {records.map((record) => {
                    const href = getEntityHref(record)
                    const card = (
                      <span className={`era-entity-card${href ? ' is-link' : ''}`}>
                        <strong>{record.title}</strong>
                        {record.type ? <small>{record.type}</small> : null}
                      </span>
                    )

                    return href ? (
                      <a key={record.id} href={href} className="era-entity-link">
                        {card}
                      </a>
                    ) : (
                      <div key={record.id}>{card}</div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <nav className="contextual-page-nav section-inner" aria-label="Era navigation">
        {previousEra ? <a href={eraHref(previousEra)}><span>Previous Era</span><strong>← Era {previousEra.numeral}</strong></a> : <span />}
        <a className="contextual-page-nav-overview" href="/eras"><span>Explore</span><strong>All Eras</strong></a>
        {nextEra ? <a className="contextual-page-nav-next" href={eraHref(nextEra)}><span>Next Era</span><strong>Era {nextEra.numeral} →</strong></a> : <span />}
      </nav>
    </article>
  )
}

export default EraDetailPage
