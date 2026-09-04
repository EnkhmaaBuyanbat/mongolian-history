import { useMemo } from 'react'
import { events } from '../data/events'
import { people } from '../data/people'
import { objects } from '../data/objects'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { chapters } from '../data/chapters'
import { sortChronologically } from '../data/chronology'
import { MeanderLine } from './Ornament'
import { getPersonHref } from '../data/entityRoutes'

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

function getEntityHref(record) {
  if (record.id.startsWith('person-')) {
    return getPersonHref(record)
  }

  if (record.id.startsWith('polity-')) {
    return `/polities/${record.id.replace('polity-', '')}`
  }

  return null
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
                      href={`/eras/${era.id}/chapters/${chapter.slug ?? chapter.id.replace('chapter-', '')}`}
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
    </article>
  )
}

export default EraDetailPage
