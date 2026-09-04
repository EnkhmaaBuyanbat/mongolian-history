import { chapters } from '../data/chapters'
import { eras } from '../data/eras'
import { events } from '../data/events'
import { objects } from '../data/objects'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import { getChapterHref } from '../data/entityRoutes'
import { sortChronologically } from '../data/chronology'
import { MeanderLine } from './Ornament'
import ConfidenceBadge from './ConfidenceBadge'

function uniqueRecords(records) {
  return [...new Map(records.map((record) => [record.id, record])).values()]
}

function PersonDetailPage({ person }) {
  if (!person) {
    return (
      <article className="person-profile-page">
        <div className="section-inner person-profile-empty">
          <p className="section-label">People</p>
          <h1>Person not found</h1>
          <a href="/people">Return to People</a>
        </div>
      </article>
    )
  }

  const relatedIds = person.relatedEntityIds ?? []
  const personEvents = sortChronologically(events.filter(
    (event) => event.people?.includes(person.id) || relatedIds.includes(event.id),
  ))
  const personPolities = uniqueRecords([
    ...polities.filter((polity) => person.polityIds?.includes(polity.id) || relatedIds.includes(polity.id)),
    ...polities.filter((polity) => personEvents.some((event) => event.polities?.includes(polity.id))),
  ])
  const personChapters = chapters.filter((chapter) => chapter.relatedPeopleIds?.includes(person.id))
  const personPlaces = places.filter(
    (place) => relatedIds.includes(place.id) || personEvents.some((event) => event.places?.includes(place.id)),
  )
  const personSites = sites.filter(
    (site) => relatedIds.includes(site.id) || personEvents.some((event) => event.sites?.includes(site.id)),
  )
  const personObjects = objects.filter(
    (object) => relatedIds.includes(object.id) || personEvents.some((event) => event.objects?.includes(object.id)),
  )
  const sourceIds = new Set([
    ...(person.sourceRefs ?? []),
    ...personEvents.flatMap((event) => event.sources ?? []),
  ])
  const personSources = sources.filter((source) => sourceIds.has(source.id))
  const era = eras.find((item) => item.id === person.eraId)
  const referenceRecords = [
    ...personPlaces.map((record) => ({ ...record, kind: 'Place' })),
    ...personSites.map((record) => ({ ...record, kind: 'Site' })),
    ...personObjects.map((record) => ({ ...record, kind: 'Object' })),
  ]

  return (
    <article className="person-profile-page">
      <header className="entity-header person-profile-header">
        <div className="section-inner entity-header-inner">
          <p className="section-label">{person.profileType === 'biography' ? 'Historical Biography' : 'Reference Profile'}</p>
          <h1>{person.title}</h1>
          {person.alternativeNames?.length ? <p className="person-profile-aliases">Also known as {person.alternativeNames.join(', ')}</p> : null}
          {person.role ? <p className="entity-period">{person.role}</p> : null}
          {person.periodDisplay || person.period ? <p className="entity-period">{person.periodDisplay ?? person.period}</p> : null}
          {personPolities.length ? <p className="person-profile-affiliation">{personPolities.map((polity) => polity.title).join(' / ')}</p> : null}
          <div className="entity-status-row"><span className="entity-status-badge">{person.status}</span></div>
          <MeanderLine className="entity-meander" />
        </div>
      </header>

      {person.summary ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">01</p><h2>Who was this person?</h2></div>
            <p className="entity-copy">{person.summary}</p>
          </div>
        </section>
      ) : null}

      {person.biographySections?.map((section, index) => (
        <section key={section.id} className={`entity-section${index % 2 ? ' entity-section-alt' : ''}`}>
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{section.number}</p><h2>{section.title}</h2></div>
            <div className="person-biography-copy">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {section.callout ? (
              <aside className="chapter-callout">
                <p className="chapter-callout-label">{section.callout.label}</p>
                <p className="chapter-callout-text">{section.callout.text}</p>
                <ConfidenceBadge label={section.callout.confidence} />
              </aside>
            ) : null}
          </div>
        </section>
      ))}

      {era || personPolities.length || personChapters.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Historical Context</p><h2>Political world and chapter</h2></div>
            <div className="person-profile-links">
              {era ? <a href={`/eras/${era.id}`}><span>Era</span><strong>{era.title}</strong></a> : null}
              {personPolities.map((polity) => <a key={polity.id} href={`/polities/${polity.id.replace('polity-', '')}`}><span>Political World</span><strong>{polity.title}</strong></a>)}
              {personChapters.map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>Chapter {chapter.number}</span><strong>{chapter.title}</strong></a>)}
            </div>
          </div>
        </section>
      ) : null}

      {personEvents.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Timeline</p><h2>Dated records</h2></div>
            <ol className="era-event-list">
              {personEvents.map((event) => <li key={event.id} className="era-event-record"><time>{event.dateDisplay}</time><div><strong>{event.title}</strong><p>{event.summary}</p></div></li>)}
            </ol>
          </div>
        </section>
      ) : null}

      {referenceRecords.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Connected History</p><h2>Reference records</h2></div>
            <div className="chapter-record-grid">
              {referenceRecords.map((record) => <article key={record.id} className="chapter-record-card"><small>{record.kind} · Reference only</small><strong>{record.title}</strong></article>)}
            </div>
          </div>
        </section>
      ) : null}

      {personSources.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Sources</p><h2>Further reading</h2></div>
            <ul className="chapter-source-list">{personSources.map((source) => <li key={source.id}><strong>{source.title}</strong><span>{source.institution}</span></li>)}</ul>
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default PersonDetailPage
