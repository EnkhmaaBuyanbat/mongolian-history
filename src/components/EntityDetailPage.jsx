'use client'

import { useMemo } from 'react'
import { places } from '../data/places'
import { sites } from '../data/sites'
import { polities } from '../data/polities'
import { people } from '../data/people'
import { events } from '../data/events'
import { sources } from '../data/sources'
import { MeanderLine } from './Ornament'
import { getEntityHref, getEventHref, getPersonHref } from '../data/entityRoutes'
import { getLocalizedEntity, getLocalizedPolity } from '../data/entityLocalization'
import { getLocalizedEvent } from '../data/eventLocalization'
import { getLocalizedPerson } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'
import RecordFeedbackLink from './RecordFeedbackLink'

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
      related.push({ type: 'Place', record: place, id: place.id })
      continue
    }

    const site = sites.find((item) => item.id === relatedId)
    if (site) {
      related.push({ type: 'Site', record: site, id: site.id })
      continue
    }

    const polity = polities.find((item) => item.id === relatedId)
    if (polity) {
      related.push({ type: 'Polity', record: polity, id: polity.id })
      continue
    }

    const person = people.find((item) => item.id === relatedId)
    if (person) {
      related.push({ type: 'Person', record: person, id: person.id })
      continue
    }

    const event = events.find((item) => item.id === relatedId)
    if (event) {
      related.push({ type: 'Event', record: event, id: event.id })
    }
  }

  return related
}

function HistoricalEntityPage({ entity }) {
  const { localeSection, localizedRecord } = useLocale()
  const entityLocale = localeSection('entities')
  const eventLocale = localeSection('events')
  const peopleLocale = localeSection('people')
  const { ui } = entityLocale

  const sourcesForEntity = useMemo(
    () => resolveSourceList(entity?.sourceRefs ?? []),
    [entity],
  )

  const relatedEntities = useMemo(
    () => resolveRelatedEntities(entity),
    [entity],
  )

  if (!entity) return null

  const displayEntity = getLocalizedPolity(entity, entityLocale)

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
  const pathwayLabel = displayEntity.pathwayLabel ?? displayEntity.title
  const pathwayTargets = {
    Timeline: relatedEvents.length ? '#timeline' : null,
    People: relatedPeople.length ? '#people' : null,
    Places: relatedPlaces.length ? '#places' : null,
    Archaeology: relatedSites.length ? '#archaeology' : null,
    'Historical Map': '#map-context',
  }

  const canonicalEra = entity.eraId ? localizedRecord('eras', entity.eraId, { id: entity.eraId, title: entity.eraId }) : null
  const eraLabel = canonicalEra?.title ?? entity.eraId

  return (
    <article className="entity-detail-page">
      <header className="entity-header">
        <div className="section-inner entity-header-inner">
          <p className="section-label entity-kicker">{eraLabel}</p>
          <h1>{displayEntity.title}</h1>
          <p className="entity-period">{displayEntity.period}</p>
          <div className="entity-status-row">
            <span className="entity-status-badge">{entity.status === 'verified' ? ui.sourceBacked : (ui[entity.status] ?? entity.status)}</span>
          </div>
          <MeanderLine className="entity-meander" />
          <p className="entity-summary">{displayEntity.summary}</p>
        </div>
      </header>

      {displayEntity.overview ? (
        <section className="entity-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">{ui.overview}</p>
              <h2>{ui.historicalSummary}</h2>
            </div>
            <p className="entity-copy">{displayEntity.overview}</p>
          </div>
        </section>
      ) : null}

      <section className="entity-section entity-section-alt">
        <div className="section-inner">
          <div className="entity-section-heading">
            <p className="section-label">{ui.exploreWorld.replace('{name}', pathwayLabel)}</p>
            <h2>{ui.curatedPathways}</h2>
          </div>

          <div className="entity-cards" aria-label={ui.explorationPathways.replace('{name}', pathwayLabel)}>
            {placeholderCards.map((card) => {
              const target = pathwayTargets[card]
              if (!target) return null

              return (
                <a key={card} href={target} className="entity-card placeholder-card">
                  <span>{ui[{ Timeline: 'timeline', People: 'people', Places: 'places', Archaeology: 'archaeology', 'Historical Map': 'historicalMap' }[card]]}</span>
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
              <p className="section-label">{ui.timeline}</p>
              <h2>{ui.relatedChronology}</h2>
            </div>
            <ul className="related-list">
              {relatedEvents.map((item) => {
                const event = getLocalizedEvent(item.record, eventLocale)
                return (
                  <li key={item.id}>
                    <a href={getEventHref(event)} className="timeline-record">
                      <span className="timeline-record-date">{event.dateDisplay}</span>
                      <div>
                        <strong>{event.title}</strong>
                        <p>{event.summary}</p>
                      </div>
                    </a>
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
              <p className="section-label">{ui.people}</p>
              <h2>{ui.relatedFigures}</h2>
            </div>
            <ul className="related-list">
              {relatedPeople.map((item) => {
                const person = getLocalizedPerson(item.record, peopleLocale)
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
            <p className="section-label">{ui.historicalMap}</p>
            <h2>{ui.mapContext}</h2>
          </div>

          <div className="map-placeholder" aria-label={ui.mapPlaceholder}>
            <span>{ui.mapComingLater}</span>
          </div>
        </div>
      </section>

      {relatedSites.length ? (
        <section id="archaeology" className="entity-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">{ui.archaeology}</p>
              <h2>{ui.relatedSites}</h2>
            </div>
            <ul className="related-list">
              {relatedSites.map((item) => (
                <li key={item.id} className="timeline-record">
                  <a href={getEntityHref(sites.find((site) => site.id === item.id))} className="entity-person-link">
                    <strong>{getLocalizedEntity(item.record, entityLocale).title}</strong>
                    <p>{getLocalizedEntity(item.record, entityLocale).type}</p>
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
              <h2>{ui.places}</h2>
            </div>
            <ul className="related-list">
              {relatedPlaces.map((item) => (
                <li key={item.id} className="timeline-record">
                  <a href={getEntityHref(places.find((place) => place.id === item.id))} className="entity-person-link">
                    <strong>{getLocalizedEntity(item.record, entityLocale).title}</strong>
                    <p>{getLocalizedEntity(item.record, entityLocale).type}</p>
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
              <p className="section-label">{ui.relatedHistory}</p>
              <h2>{ui.linkedMaterial}</h2>
            </div>
            <ul className="related-list">
              {linkedMaterial.map((item) => (
                <li key={item.id}>
                  <button type="button" className="related-item related-item-button">
                    <strong>{ui.polity}</strong>
                    <span>{getLocalizedEntity(item.record, entityLocale).title}</span>
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
            <p className="section-label">{ui.sources}</p>
            <h2>{ui.referenceList}</h2>
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
                      {ui.openSource}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="entity-empty-state">{ui.noSources}</p>
          )}
        </div>
      </section>

      <div className="section-inner">
        <RecordFeedbackLink />
      </div>
    </article>
  )
}

export default HistoricalEntityPage
