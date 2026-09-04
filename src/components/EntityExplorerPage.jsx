import { chapters } from '../data/chapters'
import { eras } from '../data/eras'
import { events } from '../data/events'
import { objects } from '../data/objects'
import { people } from '../data/people'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import { getChapterHref, getEntityHref } from '../data/entityRoutes'
import { MeanderLine } from './Ornament'

const entityCollections = [
  { label: 'People', records: people },
  { label: 'Political Worlds', records: polities },
  { label: 'Places', records: places },
  { label: 'Sites', records: sites },
  { label: 'Objects / Monuments', records: objects },
  { label: 'Events', records: events },
]

function references(record, entityId) {
  const fields = [
    record.relatedEntityIds,
    record.people,
    record.polities,
    record.places,
    record.sites,
    record.objects,
  ]
  return fields.some((ids) => ids?.includes(entityId))
}

function getEntityLabel(entity) {
  if (entity.id.startsWith('place-')) return 'Place'
  if (entity.type?.includes('inscription')) return 'Inscription'
  if (entity.id.startsWith('object-')) return 'Object / Monument'
  return entity.type?.includes('archaeological') ? 'Archaeological Site' : 'Site'
}

function EntityExplorerPage({ entity }) {
  if (!entity) {
    return (
      <article className="explorer-page">
        <div className="section-inner explorer-empty">
          <p className="section-label">Entity Explorer</p>
          <h1>Entity not found</h1>
          <a href="/eras/ancient-steppe">Return to Ancient Steppe Worlds</a>
        </div>
      </article>
    )
  }

  const directIds = new Set(entity.relatedEntityIds ?? [])
  const connectingEvents = events.filter(
    (event) => directIds.has(event.id) || references(event, entity.id),
  )
  const eventConnectedIds = new Set(connectingEvents.flatMap((event) => [
    ...(event.people ?? []),
    ...(event.polities ?? []),
    ...(event.places ?? []),
    ...(event.sites ?? []),
    ...(event.objects ?? []),
  ]))
  const relatedGroups = entityCollections.map((group) => ({
    ...group,
    records: group.records.filter(
      (record) => record.id !== entity.id
        && (directIds.has(record.id) || eventConnectedIds.has(record.id) || references(record, entity.id)),
    ),
  })).filter((group) => group.records.length)
  const relatedChapters = chapters.filter((chapter) => {
    const fields = [
      chapter.relatedPlaceIds,
      chapter.relatedSiteIds,
      chapter.relatedObjectIds,
    ]
    return fields.some((ids) => ids?.includes(entity.id))
      || chapter.sections?.some((section) => section.relatedEntityIds?.includes(entity.id))
  })
  const evidenceCases = chapters.flatMap((chapter) => chapter.sections ?? [])
    .flatMap((section) => section.evidenceCases ?? [])
    .filter((item) => item.evidenceObjectId === entity.id)
  const sourceIds = new Set([
    ...(entity.sourceRefs ?? []),
    ...sources.filter((source) => source.relatedEntityIds?.includes(entity.id)).map((source) => source.id),
    ...evidenceCases.flatMap((item) => item.sourceIds ?? []),
  ])
  const entitySources = sources.filter((source) => sourceIds.has(source.id))
  const era = eras.find((item) => item.id === entity.eraId || entity.eraIds?.includes(item.id))
  const isPlace = entity.id.startsWith('place-')
  const isSite = entity.id.startsWith('site-')
  const isInscription = entity.type?.includes('inscription')
  const hasContext = era || relatedChapters.length || relatedGroups.some((group) => group.label === 'Political Worlds')

  return (
    <article className="explorer-page">
      <header className="entity-header explorer-header">
        <div className="section-inner entity-header-inner">
          <p className="section-label">{getEntityLabel(entity)}</p>
          <h1>{entity.title}</h1>
          {entity.type ? <p className="entity-period">{entity.type}</p> : null}
          {entity.period ? <p className="entity-period">{entity.period}</p> : null}
          <div className="entity-status-row"><span className="entity-status-badge">{entity.status}</span></div>
          <MeanderLine className="entity-meander" />
        </div>
      </header>

      {entity.summary ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">01</p><h2>{isPlace ? 'Why this place matters' : isSite ? 'What is this site?' : 'What is it?'}</h2></div>
            <p className="entity-copy">{entity.summary}</p>
          </div>
        </section>
      ) : null}

      {hasContext ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">Historical Context</p><h2>Era, chapters and political worlds</h2></div>
            <div className="explorer-link-grid">
              {era ? <a href={`/eras/${era.id}`}><span>Era</span><strong>{era.title}</strong></a> : null}
              {relatedChapters.map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>Chapter {chapter.number}</span><strong>{chapter.title}</strong></a>)}
              {relatedGroups.filter((group) => group.label === 'Political Worlds').flatMap((group) => group.records).map((record) => <a key={record.id} href={getEntityHref(record)}><span>Political World</span><strong>{record.title}</strong></a>)}
            </div>
          </div>
        </section>
      ) : null}

      {isPlace && entity.eraIds?.length > 1 ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">History Across Time</p><h2>Same landscape, different political worlds</h2></div>
            <p className="entity-copy">The reuse of this landscape in different periods does not by itself establish political, ethnic or cultural continuity between the communities associated with it.</p>
          </div>
        </section>
      ) : null}

      {evidenceCases.map((item) => (
        <section key={item.id} className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">Material Evidence</p><h2>{item.evidenceTitle}</h2></div>
            {item.evidenceSummary ? <p className="entity-copy">{item.evidenceSummary}</p> : null}
            {item.interpretation ? <aside className="chapter-callout"><p className="chapter-callout-label">What it tells us</p><p className="chapter-callout-text">{item.interpretation}</p></aside> : null}
            {item.caution ? <aside className="chapter-callout"><p className="chapter-callout-label">What it does not prove alone</p><p className="chapter-callout-text">{item.caution}</p></aside> : null}
          </div>
        </section>
      ))}

      {isInscription ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">Source Character</p><h2>Commemorative · Political · Inscriptional</h2></div>
            <p className="entity-copy">The inscription is important historical evidence created within a political and commemorative context. It is not a neutral modern account or a complete history of every community within Türk political power.</p>
            <aside className="chapter-callout"><p className="chapter-callout-label">Evidence Limit</p><p className="chapter-callout-text">No translation or quotation is supplied because the current project data does not contain a verified passage for reproduction.</p></aside>
          </div>
        </section>
      ) : null}

      {isSite ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">Evidence Caution</p><h2>What archaeology cannot prove alone</h2></div>
            <p className="entity-copy">A site’s date, location or material remains do not automatically establish the language, ethnic identity or complete political affiliation of the people associated with it.</p>
          </div>
        </section>
      ) : null}

      {relatedGroups.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">Connected History</p><h2>Related records</h2></div>
            {relatedGroups.map((group) => (
              <div key={group.label} className="explorer-related-group">
                <h3>{group.label}</h3>
                <div className="chapter-record-grid">
                  {group.records.map((record) => {
                    const href = getEntityHref(record)
                    const card = <article className="chapter-record-card"><strong>{record.title}</strong>{!href ? <small>Reference only</small> : null}</article>
                    return href ? <a key={record.id} href={href} className="chapter-record-link">{card}</a> : <div key={record.id}>{card}</div>
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {entitySources.length ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">Sources</p><h2>Further reading</h2></div>
            <ul className="chapter-source-list">{entitySources.map((source) => <li key={source.id}><strong>{source.title}</strong><span>{source.institution}</span></li>)}</ul>
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default EntityExplorerPage
