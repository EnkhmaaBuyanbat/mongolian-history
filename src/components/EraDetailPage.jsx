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
import { getEraHeaderVisual } from '../data/pageVisualResolvers'
import CinematicPageHeader from './CinematicPageHeader'
import { getEraWorld } from '../data/eraWorlds'
import { getReconstructionById } from '../data/reconstructionResolvers'
import ReconstructionInfo from './ReconstructionInfo'
import { useLocale } from '../i18n/useLocale'

const entityGroups = [
  { key: 'polities', labelKey: 'politicalWorlds', records: polities },
  { key: 'people', labelKey: 'people', records: people },
  { key: 'events', labelKey: 'events', records: events },
  { key: 'places', labelKey: 'places', records: places },
  { key: 'sites', labelKey: 'archaeologySites', records: sites },
  { key: 'objects', labelKey: 'monumentsObjects', records: objects },
]

function belongsToEra(record, eraId) {
  return record.eraId === eraId || record.eraIds?.includes(eraId)
}

function isResearched(record) {
  return record.status === 'researched' || record.status === 'verified'
}

function EraDetailPage({ era }) {
  const { localeSection, localizedRecord } = useLocale()
  const { ui } = localeSection('eras')
  const presentation = localizedRecord('eras', era.id, era)
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
  const headerVisual = getEraHeaderVisual(era.id)
  const eraWorld = getEraWorld(era.id)
  const eraReconstruction = getReconstructionById(eraWorld?.reconstructionId)
  const firstChapter = eraChapters[0]
  const headerActions = [
    firstChapter ? { label: ui.startEra, href: `/eras/${era.slug ?? era.id}/chapters/${firstChapter.slug ?? firstChapter.id.replace('chapter-', '')}` } : null,
    { label: ui.viewTimeline, href: '/timeline' },
    { label: ui.viewPeople, href: '/people' },
  ].filter(Boolean)

  if (!era) {
    return null
  }

  return (
    <article className="era-detail-page">
      <CinematicPageHeader
        variant="era"
        className="era-detail-header cinematic-context-header"
        innerClassName="era-detail-header-inner"
        visual={headerVisual}
        world={eraWorld}
        label={`${ui.era} ${era.number}`}
        title={presentation.title}
        subtitle={presentation.subtitle}
        period={presentation.period}
        summary={presentation.description}
        actions={headerActions}
        dataAttributes={{ 'data-era-id': era.id }}
      >
        <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      {eraReconstruction ? (
        <div className="section-inner">
          <ReconstructionInfo reconstruction={eraReconstruction} />
        </div>
      ) : null}

      {eraChapters.length ? (
        <section className="era-detail-section era-chapters-section">
          <div className="section-inner">
            <div className="entity-section-heading">
              <p className="section-label">{ui.learnEra}</p>
              <h2>{ui.chapters}</h2>
            </div>
            <div className="era-chapter-grid">
              {eraChapters.map((chapter) => {
                const chapterPresentation = localizedRecord('chapters', chapter.id, chapter)
                return chapter.status === 'in-progress' || chapter.status === 'complete' ? (
                    <a
                      key={chapter.id}
                      href={`/eras/${era.slug ?? era.id}/chapters/${chapter.slug ?? chapter.id.replace('chapter-', '')}`}
                      className="era-chapter-card era-chapter-link"
                    >
                      <span className="era-chapter-number">{chapter.number}</span>
                      <h3>{chapterPresentation.title}</h3>
                      {chapterPresentation.subtitle || chapterPresentation.period ? (
                        <p>{chapterPresentation.subtitle || chapterPresentation.period}</p>
                      ) : null}
                      {chapterPresentation.summary ? <p>{chapterPresentation.summary}</p> : null}
                      <span className="era-chapter-action">{ui.exploreChapter}</span>
                    </a>
                ) : (
                    <article key={chapter.id} className="era-chapter-card">
                      <span className="era-chapter-number">{chapter.number}</span>
                      <h3>{chapterPresentation.title}</h3>
                      {chapterPresentation.subtitle || chapterPresentation.period ? (
                        <p>{chapterPresentation.subtitle || chapterPresentation.period}</p>
                      ) : null}
                      {chapterPresentation.summary ? <p>{chapterPresentation.summary}</p> : null}
                      <span className="era-chapter-action">{ui.comingSoon}</span>
                    </article>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="era-detail-section">
        <div className="section-inner">
          <div className="entity-section-heading">
            <p className="section-label">{ui.eraTimeline}</p>
            <h2>{ui.majorRecords}</h2>
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
            <p className="entity-empty-state">{ui.noMajorRecords}</p>
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
                  <h2>{ui[group.labelKey]}</h2>
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

      <nav className="contextual-page-nav section-inner" aria-label={ui.eraNavigation}>
        {previousEra ? <a href={eraHref(previousEra)}><span>{ui.previousEra}</span><strong>← {ui.era} {previousEra.numeral}</strong></a> : <span />}
        <a className="contextual-page-nav-overview" href="/eras"><span>{ui.explore}</span><strong>{ui.allEras}</strong></a>
        {nextEra ? <a className="contextual-page-nav-next" href={eraHref(nextEra)}><span>{ui.nextEra}</span><strong>{ui.era} {nextEra.numeral} →</strong></a> : <span />}
      </nav>
    </article>
  )
}

export default EraDetailPage
