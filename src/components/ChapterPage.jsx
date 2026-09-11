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
import { useLocale } from '../i18n/useLocale'
import { getLocalizedEvent } from '../data/eventLocalization'
import { mergeLocaleValues } from '../i18n/locale'
import { getLocalizedEntity } from '../data/entityLocalization'
import { getLocalizedPerson } from '../data/personLocalization'
import { getLocalizedEducationalVisual } from '../data/educationalVisualLocalization'
import { getLocalizedCampaign, getLocalizedOrganization, getLocalizedCompany } from '../data/supportingLocalization'

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
  { key: 'people', labelKey: 'people', records: people, ids: 'relatedPeopleIds' },
  { key: 'events', labelKey: 'events', records: events, ids: 'relatedEventIds' },
  { key: 'polities', labelKey: 'politicalWorlds', records: polities, ids: 'relatedPolityIds' },
  { key: 'sites', labelKey: 'archaeologicalSites', records: sites, ids: 'relatedSiteIds' },
  { key: 'places', labelKey: 'places', records: places, ids: 'relatedPlaceIds' },
  { key: 'objects', labelKey: 'objects', records: objects, ids: 'relatedObjectIds' },
  { key: 'claims', labelKey: 'claimsQuestions', records: claims, ids: 'claimIds' },
  { key: 'organizations', labelKey: 'organizations', records: organizations, ids: 'organizationIds' },
  { key: 'companies', labelKey: 'companies', records: companies, ids: 'companyIds' },
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
  const { localeSection, localizedRecord } = useLocale()
  const { ui } = localeSection('chapters')
  const eventLocale = localeSection('events')
  const entityLocale = localeSection('entities')
  const peopleLocale = localeSection('people')
  const supportingLocale = localeSection('supporting')
  const presentation = localizedRecord('chapters', chapter.id, chapter)
  const [selectedSiteId, setSelectedSiteId] = useState(
    chapter.sections?.find((section) => section.mapSlot?.siteIds?.length)?.mapSlot.siteIds[0],
  )
  const records = useMemo(() => resolveRecords(chapter), [chapter])
  const era = eras.find((item) => item.id === chapter.eraId)
  const polity = polities.find((item) => chapter.relatedPolityIds?.includes(item.id))
  const polityPresentation = getLocalizedEntity(polity, entityLocale)
  const chapterSections = chapter.sections?.length
    ? chapter.sections.map((section) => {
        const sectionPresentation = presentation.sectionPresentation?.[section.id]
        const localized = mergeLocaleValues(section, sectionPresentation)
        return section.educationalVisual ? {
          ...localized,
          educationalVisual: getLocalizedEducationalVisual(section.educationalVisual, sectionPresentation?.educationalVisual),
        } : localized
      })
    : (chapter.sectionIds ?? []).map((id, index) => ({
        id,
        number: String(index + 1).padStart(2, '0'),
        title: sectionLabels[id] ?? id,
        period: '',
        paragraphs: [],
      }))
  const chapterSources = sources.filter((source) => chapter.sourceIds?.includes(source.id))
  const chapterCampaigns = campaigns
    .filter((campaign) => chapter.campaignIds?.includes(campaign.id))
    .map((campaign) => getLocalizedCampaign(campaign, supportingLocale))
  const canonicalPrimaryVisual = getChapterPrimaryVisual(chapter.id)
  const primaryVisual = canonicalPrimaryVisual
    ? mergeLocaleValues(canonicalPrimaryVisual, presentation.primaryVisualPresentation)
    : null
  const chapterMedia = getMediaForChapter(chapter).filter((record) => record.id !== primaryVisual?.mediaId)
  const eraChapters = era?.chapterIds.map((chapterId) => chapters.find((item) => item.id === chapterId)).filter(Boolean) ?? []
  const chapterIndex = eraChapters.findIndex((item) => item.id === chapter.id)
  const previousChapter = eraChapters[chapterIndex - 1]
  const nextChapter = eraChapters[chapterIndex + 1]
  const nextEra = eras[eras.findIndex((item) => item.id === era?.id) + 1]
  const eraPresentation = era ? localizedRecord('eras', era.id, era) : null
  const previousPresentation = previousChapter ? localizedRecord('chapters', previousChapter.id, previousChapter) : null
  const nextPresentation = nextChapter ? localizedRecord('chapters', nextChapter.id, nextChapter) : null
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
            <a href={eraHref}>{eraPresentation?.title ?? era?.title ?? chapter.eraId}</a>
            <span aria-hidden="true"> / </span>
            {ui.chapter} {chapter.number}
          </p>}
        label={`${ui.chapter} ${chapter.number}`}
        progress={chapterIndex >= 0 ? ui.chapterOf.replace('{current}', chapterIndex + 1).replace('{total}', eraChapters.length) : null}
        title={presentation.title}
        subtitle={presentation.subtitle}
        period={presentation.period}
        summary={presentation.summary}
        dataAttributes={{ 'data-era-id': chapter.eraId, 'data-chapter-id': chapter.id }}
      >
          <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      <div className="chapter-main">
        <div className="section-inner chapter-layout">
          <div className="chapter-content">
            <section className="chapter-introduction">
              <p className="section-label">{ui.introduction}</p>
              <h2>{presentation.introTitle ?? polityPresentation?.title ?? presentation.title}</h2>
              <p>{presentation.intro || presentation.summary || polityPresentation?.summary || 'Historical narrative in research.'}</p>
            </section>

            <ChapterEducationalVisual assignment={primaryVisual} />

            <ChapterNav sections={chapterSections} />

            {chapterCampaigns.length ? (
              <section className="chapter-related">
                <div className="chapter-section-heading"><p className="section-label">{ui.campaignContext}</p><h2>{ui.connectedCampaigns}</h2></div>
                <div className="chapter-record-grid">
                  {chapterCampaigns.map((campaign) => <article key={campaign.id} className="chapter-record-card"><small>{campaign.dateDisplay} · {campaign.routeConfidence} {supportingLocale.ui.route}</small><strong>{campaign.title}</strong><p>{campaign.summary}</p>{campaign.stages?.length ? <ol>{campaign.stages.map((stage, index) => <li key={`${campaign.id}-stage-${index}`}><b>{stage.title}:</b> {stage.text}</li>)}</ol> : null}<p>{campaign.caution}</p></article>)}
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
                <div className="chapter-section-heading"><p className="section-label">{ui.visualEvidence}</p><h2>{ui.historicalMedia}</h2></div>
                {chapterMedia.map((record) => <HistoricalMedia key={record.id} media={record} />)}
              </section>
            ) : null}

            <section className="chapter-related">
              <div className="chapter-section-heading">
                <p className="section-label">{ui.exploreRelated}</p>
                <h2>{ui.researchRecords}</h2>
              </div>
              {recordGroups.map((group) => {
                const groupRecords = records[group.key]
                if (!groupRecords.length) return null

                return (
                  <div key={group.key} className="chapter-record-group">
                    <h3>{ui[group.labelKey]}</h3>
                    <div className="chapter-record-grid">
                      {groupRecords.map((canonicalRecord) => {
                        const record = group.key === 'events'
                          ? getLocalizedEvent(canonicalRecord, eventLocale)
                          : group.key === 'people'
                            ? getLocalizedPerson(canonicalRecord, peopleLocale)
                            : ['polities', 'sites', 'places', 'objects'].includes(group.key)
                              ? getLocalizedEntity(canonicalRecord, entityLocale)
                              : group.key === 'organizations'
                                ? getLocalizedOrganization(canonicalRecord, supportingLocale)
                                : group.key === 'companies'
                                  ? getLocalizedCompany(canonicalRecord, supportingLocale)
                                  : canonicalRecord
                        const href = getEntityHref(record)
                        const card = (
                          <article className="chapter-record-card">
                          <strong>{record.title}</strong>
                          {(record.type ?? record.companyType) ? <small>{record.type ?? record.companyType}</small> : null}
                          {!href ? <small>{ui.referenceOnly}</small> : null}
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
                <p className="section-label">{ui.sources}</p>
                <h2>{ui.furtherReading}</h2>
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
      <nav className="contextual-page-nav section-inner" aria-label={ui.chapterNavigation}>
        {previousChapter ? <a href={getChapterHref(previousChapter)}><span>{ui.previousChapter}</span><strong>← {previousPresentation.title}</strong></a> : <span />}
        <a className="contextual-page-nav-overview" href={eraHref}><span>{ui.returnTo}</span><strong>{ui.eraOverview}</strong></a>
        {nextChapter ? <a className="contextual-page-nav-next" href={getChapterHref(nextChapter)}><span>{ui.nextChapter}</span><strong>{nextPresentation.title} →</strong></a> : nextEra ? <a className="contextual-page-nav-next" href={`/eras/${nextEra.slug ?? nextEra.id}`}><span>{ui.nextEra}</span><strong>{ui.nextEra} {nextEra.numeral} →</strong></a> : <span />}
      </nav>
    </article>
  )
}

export default ChapterPage
