import { useMemo, useState } from 'react'
import { events } from '../data/events'
import { people } from '../data/people'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { objects } from '../data/objects'
import { sources } from '../data/sources'
import { eras } from '../data/eras'
import { chapters } from '../data/chapters'
import { campaigns } from '../data/campaigns'
import { claims } from '../data/claims'
import { organizations } from '../data/organizations'
import { companies } from '../data/companies'
import { sortChronologically } from '../data/chronology'
import { getMediaForChapter } from '../data/mediaResolvers'
import ChapterNav from './ChapterNav'
import ChapterSection from './ChapterSection'
import HistoricalMedia from './HistoricalMedia'
import { MeanderLine } from './Ornament'
import { getChapterHref, getEntityHref } from '../data/entityRoutes'
import { getChapterHeaderFallback, getChapterHeaderVisual } from '../data/pageVisualResolvers'
import CinematicPageHeader from './CinematicPageHeader'
import { getEraWorld } from '../data/eraWorlds'
import { getChapterPrimaryVisual } from '../data/chapterVisuals'
import ChapterEducationalVisual from './ChapterEducationalVisual'

const sectionLabels = {
  'origins-and-context': 'Origins and Context',
  'rise-of-modu': 'Rise of Modu',
  'empire-of-the-steppe': 'Empire of the Steppe',
  'xiongnu-and-han-china': 'Xiongnu and Han China',
  'life-and-society': 'Life and Society',
  archaeology: 'Archaeology',
  transformation: 'Transformation',
  'questions-and-debates': 'Questions and Debates',
}

const recordGroups = [
  { key: 'people', label: 'People', records: people, ids: 'relatedPeopleIds' },
  { key: 'events', label: 'Events', records: events, ids: 'relatedEventIds' },
  { key: 'polities', label: 'Political Worlds', records: polities, ids: 'relatedPolityIds' },
  { key: 'sites', label: 'Archaeological Sites', records: sites, ids: 'relatedSiteIds' },
  { key: 'places', label: 'Places', records: places, ids: 'relatedPlaceIds' },
  { key: 'objects', label: 'Objects', records: objects, ids: 'relatedObjectIds' },
  { key: 'claims', label: 'Claims & Questions', records: claims, ids: 'claimIds' },
  { key: 'organizations', label: 'Organizations', records: organizations, ids: 'organizationIds' },
  { key: 'companies', label: 'Companies', records: companies, ids: 'companyIds' },
]

function resolveRecords(chapter) {
  return Object.fromEntries(
    recordGroups.map((group) => [
      group.key,
      sortChronologically(
        group.records.filter(
          (record) => chapter[group.ids]?.includes(record.id),
        ),
      ),
    ]),
  )
}

function ChapterPage({ chapter }) {
  const [selectedSiteId, setSelectedSiteId] = useState(
    chapter.sections?.find((section) => section.mapSlot?.siteIds?.length)?.mapSlot.siteIds[0],
  )
  const records = useMemo(() => resolveRecords(chapter), [chapter])
  const era = eras.find((item) => item.id === chapter.eraId)
  const polity = polities.find((item) => chapter.relatedPolityIds?.includes(item.id))
  const chapterSections = chapter.sections?.length
    ? chapter.sections
    : (chapter.sectionIds ?? []).map((id, index) => ({
        id,
        number: String(index + 1).padStart(2, '0'),
        title: sectionLabels[id] ?? id,
        period: '',
        paragraphs: [],
      }))
  const chapterSources = sources.filter((source) => chapter.sourceIds?.includes(source.id))
  const chapterCampaigns = campaigns.filter((campaign) => chapter.campaignIds?.includes(campaign.id))
  const primaryVisual = getChapterPrimaryVisual(chapter.id)
  const chapterMedia = getMediaForChapter(chapter).filter((record) => record.id !== primaryVisual?.mediaId)
  const eraChapters = era?.chapterIds.map((chapterId) => chapters.find((item) => item.id === chapterId)).filter(Boolean) ?? []
  const chapterIndex = eraChapters.findIndex((item) => item.id === chapter.id)
  const previousChapter = eraChapters[chapterIndex - 1]
  const nextChapter = eraChapters[chapterIndex + 1]
  const nextEra = eras[eras.findIndex((item) => item.id === era?.id) + 1]
  const eraHref = `/eras/${era?.slug ?? chapter.eraId}`
  const headerVisual = getChapterHeaderVisual(chapter)
  const headerFallback = getChapterHeaderFallback(chapter.id)
  const eraWorld = getEraWorld(chapter.eraId)

  return (
    <article className="chapter-page">
      <CinematicPageHeader
        variant="chapter"
        className="chapter-header cinematic-context-header"
        innerClassName="chapter-header-inner"
        visual={headerVisual}
        world={eraWorld}
        designedFallback={headerFallback}
        context={<p className="chapter-context">
            <a href={eraHref}>{era?.title ?? chapter.eraId}</a>
            <span aria-hidden="true"> / </span>
            Chapter {chapter.number}
          </p>}
        label={`Chapter ${chapter.number}`}
        progress={chapterIndex >= 0 ? `Chapter ${chapterIndex + 1} of ${eraChapters.length}` : null}
        title={chapter.title}
        subtitle={chapter.subtitle}
        period={chapter.period}
        summary={chapter.summary}
        dataAttributes={{ 'data-era-id': chapter.eraId, 'data-chapter-id': chapter.id }}
      >
          <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      <div className="chapter-main">
        <div className="section-inner chapter-layout">
          <div className="chapter-content">
            <section className="chapter-introduction">
              <p className="section-label">Chapter Introduction</p>
              <h2>{chapter.introTitle ?? polity?.title ?? chapter.title}</h2>
              <p>{chapter.intro || chapter.summary || polity?.summary || 'Historical narrative in research.'}</p>
            </section>

            <ChapterEducationalVisual assignment={primaryVisual} />

            <ChapterNav sections={chapterSections} />

            {chapterCampaigns.length ? (
              <section className="chapter-related">
                <div className="chapter-section-heading"><p className="section-label">Campaign Context</p><h2>Connected campaigns</h2></div>
                <div className="chapter-record-grid">
                  {chapterCampaigns.map((campaign) => <article key={campaign.id} className="chapter-record-card"><small>{campaign.dateDisplay} · {campaign.routeConfidence} ROUTE</small><strong>{campaign.title}</strong><p>{campaign.summary}</p>{campaign.stages?.length ? <ol>{campaign.stages.map((stage) => <li key={stage.title}><b>{stage.title}:</b> {stage.text}</li>)}</ol> : null}<p>{campaign.caution}</p></article>)}
                </div>
              </section>
            ) : null}

            <div className="chapter-narrative">
              {chapterSections.map((section) => (
                <ChapterSection
                  key={section.id}
                  section={section}
                  selectedSiteId={selectedSiteId}
                  onSiteSelect={setSelectedSiteId}
                />
              ))}
            </div>

            {chapterMedia.length ? (
              <section className="chapter-related">
                <div className="chapter-section-heading"><p className="section-label">Visual Evidence</p><h2>Historical media</h2></div>
                {chapterMedia.map((record) => <HistoricalMedia key={record.id} media={record} />)}
              </section>
            ) : null}

            <section className="chapter-related">
              <div className="chapter-section-heading">
                <p className="section-label">Explore Related Material</p>
                <h2>Research records</h2>
              </div>
              {recordGroups.map((group) => {
                const groupRecords = records[group.key]
                if (!groupRecords.length) return null

                return (
                  <div key={group.key} className="chapter-record-group">
                    <h3>{group.label}</h3>
                    <div className="chapter-record-grid">
                      {groupRecords.map((record) => {
                        const href = getEntityHref(record)
                        const card = (
                          <article className="chapter-record-card">
                          <strong>{record.title}</strong>
                          {record.type ? <small>{record.type}</small> : null}
                          {!href ? <small>Reference only</small> : null}
                          </article>
                        )

                        return href ? <a key={record.id} href={href} className="chapter-record-link">{card}</a> : <div key={record.id}>{card}</div>
                      })}
                    </div>
                  </div>
                )
              })}
            </section>

            <section className="chapter-sources">
              <div className="chapter-section-heading">
                <p className="section-label">Sources</p>
                <h2>Further Reading</h2>
              </div>
              <ul className="chapter-source-list">
                {chapterSources.map((source) => (
                  <li key={source.id}>
                    <strong>{source.title}</strong>
                    <span>{source.institution}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <nav className="contextual-page-nav section-inner" aria-label="Chapter navigation">
        {previousChapter ? <a href={getChapterHref(previousChapter)}><span>Previous Chapter</span><strong>← {previousChapter.title}</strong></a> : <span />}
        <a className="contextual-page-nav-overview" href={eraHref}><span>Return to</span><strong>Era Overview</strong></a>
        {nextChapter ? <a className="contextual-page-nav-next" href={getChapterHref(nextChapter)}><span>Next Chapter</span><strong>{nextChapter.title} →</strong></a> : nextEra ? <a className="contextual-page-nav-next" href={`/eras/${nextEra.slug ?? nextEra.id}`}><span>Next Era</span><strong>Era {nextEra.numeral} →</strong></a> : <span />}
      </nav>
    </article>
  )
}

export default ChapterPage
