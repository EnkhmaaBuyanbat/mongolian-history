import { useMemo, useState } from 'react'
import { events } from '../data/events'
import { people } from '../data/people'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { objects } from '../data/objects'
import { sources } from '../data/sources'
import { eras } from '../data/eras'
import { sortChronologically } from '../data/chronology'
import ChapterNav from './ChapterNav'
import ChapterSection from './ChapterSection'
import { MeanderLine } from './Ornament'
import { getEntityHref } from '../data/entityRoutes'

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
  { key: 'sites', label: 'Archaeological Sites', records: sites, ids: 'relatedSiteIds' },
  { key: 'places', label: 'Places', records: places, ids: 'relatedPlaceIds' },
  { key: 'objects', label: 'Objects', records: objects, ids: 'relatedObjectIds' },
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

  return (
    <article className="chapter-page">
      <header className="chapter-header">
        <div className="section-inner chapter-header-inner">
          <p className="chapter-context">
            <a href={`/eras/${era?.slug ?? chapter.eraId}`}>{era?.title ?? chapter.eraId}</a>
            <span aria-hidden="true"> / </span>
            Chapter {chapter.number}
          </p>
          <p className="section-label">Chapter {chapter.number}</p>
          <h1>{chapter.title}</h1>
          {chapter.subtitle ? <p className="chapter-subtitle">{chapter.subtitle}</p> : null}
          {chapter.period ? <p className="chapter-period">{chapter.period}</p> : null}
          <MeanderLine className="entity-meander" />
        </div>
      </header>

      <div className="chapter-main">
        <div className="section-inner chapter-layout">
          <div className="chapter-content">
            <section className="chapter-introduction">
              <p className="section-label">Chapter Introduction</p>
              <h2>{chapter.introTitle ?? polity?.title ?? chapter.title}</h2>
              <p>{chapter.intro || chapter.summary || polity?.summary || 'Historical narrative in research.'}</p>
            </section>

            <ChapterNav sections={chapterSections} />

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
    </article>
  )
}

export default ChapterPage
