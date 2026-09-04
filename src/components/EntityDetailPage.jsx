import { useMemo } from 'react'
import { places } from '../data/places'
import { sites } from '../data/sites'
import { polities } from '../data/polities'
import { people } from '../data/people'
import { events } from '../data/events'
import { sources } from '../data/sources'
import { MeanderLine } from './Ornament'
import { getEntityHref, getPersonHref } from '../data/entityRoutes'

const placeholderCards = [
  'Timeline',
  'People',
  'Places',
  'Archaeology',
  'Historical Map',
]

function resolveSourceList(sourceRefs = []) {
  return sourceRefs
    .map((sourceId) => sources.find((source) => source.id === sourceId))
    .filter(Boolean)
}

function resolveRelatedEntities(entity) {
  if (!entity?.relatedEntityIds?.length) {
    return []
  }

  const related = []

  for (const relatedId of entity.relatedEntityIds) {
    const place = places.find((item) => item.id === relatedId)
    if (place) {
      related.push({ type: 'Place', label: place.title, id: place.id })
      continue
    }

    const site = sites.find((item) => item.id === relatedId)
    if (site) {
      related.push({ type: 'Site', label: site.title, id: site.id })
      continue
    }

    const polity = polities.find((item) => item.id === relatedId)
    if (polity) {
      related.push({ type: 'Polity', label: polity.title, id: polity.id })
      continue
    }

    const person = people.find((item) => item.id === relatedId)
    if (person) {
      related.push({ type: 'Person', label: person.title, id: person.id })
      continue
    }

    const event = events.find((item) => item.id === relatedId)
    if (event) {
      related.push({ type: 'Event', label: event.title, id: event.id })
    }
  }

  return related
}

function HistoricalEntityPage({ entity }) {
  const sourcesForEntity = useMemo(
    () => resolveSourceList(entity?.sourceRefs ?? []),
    [entity],
  )

  const relatedEntities = useMemo(
    () => resolveRelatedEntities(entity),
    [entity],
  )

  const relatedPeople = relatedEntities.filter((item) => item.type === 'Person')
  const relatedEvents = relatedEntities.filter((item) => item.type === 'Event')
  const relatedPlaces = relatedEntities.filter((item) => item.type === 'Place')
  const relatedSites = relatedEntities.filter((item) => item.type === 'Site')
  const dedicatedEntityIds = new Set([
    ...relatedEvents.map((item) => item.id),
    ...relatedPeople.map((item) => item.id),
    ...relatedPlaces.map((item) => item.id),
    ...relatedSites.map((item) => item.id),
  ])
  const linkedMaterial = relatedEntities.filter(
    (item) => !dedicatedEntityIds.has(item.id),
  )
  const pathwayLabel = entity.pathwayLabel ?? entity.title
  const pathwayTargets = {
    Timeline: relatedEvents.length ? '#timeline' : null,
    People: relatedPeople.length ? '#people' : null,
    Places: relatedPlaces.length ? '#places' : null,
    Archaeology: relatedSites.length ? '#archaeology' : null,
    'Historical Map': '#map-context',
  }

  if (!entity) {
    return null
  }

  const eraLabel = entity.eraId === 'ancient-steppe' ? 'ANCIENT STEPPE WORLDS' : entity.eraId

  return (
    <article className="entity-detail-page">
      <header className="entity-header">
        <div className="section-inner entity-header-inner">
          <p className="section-label entity-kicker">{eraLabel}</p>
          <h1>{entity.title}</h1>
          <p className="entity-period">{entity.period}</p>
          <div className="entity-status-row">
            <span className="entity-status-badge">{entity.status === 'verified' ? 'source-backed' : entity.status}</span>
          </div>
          <MeanderLine className="entity-meander" />
          <p className="entity-summary">{entity.summary}</p>
        </div>
      </header>

      {entity.overview ? (
        <section className="entity-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">Overview</p>
              <h2>Historical summary</h2>
            </div>
            <p className="entity-copy">{entity.overview}</p>
          </div>
        </section>
      ) : null}

      <section className="entity-section entity-section-alt">
        <div className="section-inner">
          <div className="entity-section-heading">
            <p className="section-label">Explore the {pathwayLabel} World</p>
            <h2>Curated pathways</h2>
          </div>

          <div className="entity-cards" aria-label={`${pathwayLabel} exploration pathways`}>
            {placeholderCards.map((card) => {
              const target = pathwayTargets[card]
              if (!target) return null

              return (
                <a key={card} href={target} className="entity-card placeholder-card">
                  <span>{card}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {relatedEvents.length ? (
        <section id="timeline" className="entity-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">Timeline</p>
              <h2>Related chronology</h2>
            </div>
            <ul className="related-list">
              {relatedEvents.map((item) => {
                const event = events.find((record) => record.id === item.id)
                return (
                  <li key={item.id} className="timeline-record">
                    <span className="timeline-record-date">{event.dateDisplay}</span>
                    <div>
                      <strong>{event.title}</strong>
                      <p>{event.summary}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {relatedPeople.length ? (
        <section id="people" className="entity-section entity-section-alt">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">People</p>
              <h2>Related figures</h2>
            </div>
            <ul className="related-list">
              {relatedPeople.map((item) => {
                const person = people.find((record) => record.id === item.id)
                return (
                  <li key={item.id} className="timeline-record">
                    <a href={getPersonHref(person)} className="entity-person-link">
                      <strong>{person.title}</strong>
                      <p>{person.role}</p>
                    </a>
                    <span>{person.period}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="map-context" className="entity-section">
        <div className="section-inner">
          <div className="entity-section-heading">
            <p className="section-label">Historical Map</p>
            <h2>Map context</h2>
          </div>

          <div className="map-placeholder" aria-label="Historical map placeholder">
            <span>Interactive historical map — coming later</span>
          </div>
        </div>
      </section>

      {relatedSites.length ? (
        <section id="archaeology" className="entity-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">Archaeology</p>
              <h2>Related sites</h2>
            </div>
            <ul className="related-list">
              {relatedSites.map((item) => (
                <li key={item.id} className="timeline-record">
                  <a href={getEntityHref(sites.find((site) => site.id === item.id))} className="entity-person-link">
                    <strong>{item.label}</strong>
                    <p>{item.type}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {relatedPlaces.length ? (
        <section id="places" className="entity-section entity-section-alt">
          <div className="section-inner">
            <div className="entity-section-heading">
              <h2>Places</h2>
            </div>
            <ul className="related-list">
              {relatedPlaces.map((item) => (
                <li key={item.id} className="timeline-record">
                  <a href={getEntityHref(places.find((place) => place.id === item.id))} className="entity-person-link">
                    <strong>{item.label}</strong>
                    <p>{item.type}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {linkedMaterial.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">Related History</p>
              <h2>Linked material</h2>
            </div>
            <ul className="related-list">
              {linkedMaterial.map((item) => (
                <li key={item.id}>
                  <button type="button" className="related-item related-item-button">
                    <strong>{item.type}</strong>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="entity-section">
        <div className="section-inner">
          <div className="entity-section-heading">
            <p className="section-label">Sources</p>
            <h2>Reference list</h2>
          </div>

          {sourcesForEntity.length ? (
            <ul className="source-list">
              {sourcesForEntity.map((source) => (
                <li key={source.id} className="source-item">
                  <div>
                    <p className="source-title">{source.title}</p>
                    <p className="source-institution">{source.institution}</p>
                  </div>
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noreferrer">
                      Open source
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="entity-empty-state">No source references linked to this record.</p>
          )}
        </div>
      </section>
    </article>
  )
}

export default HistoricalEntityPage
