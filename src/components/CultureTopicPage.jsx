import { chapters } from '../data/chapters'
import { cultureEn } from '../data/locales/en/culture'
import { getChapterHref, getEntityHref } from '../data/entityRoutes'
import { people } from '../data/people'
import { places } from '../data/places'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import CultureEraJourney from './CultureEraJourney'
import CultureEvidenceCollection from './CultureEvidenceCollection'
import { MeanderLine } from './Ornament'

function RelatedRecords({ records, label, viewLabel }) {
  if (!records.length) return null
  return <div className="culture-record-grid">{records.map((record) => <a key={record.id} href={getEntityHref(record)}><span>{label}</span><strong>{record.name ?? record.title}</strong><small>{viewLabel} →</small></a>)}</div>
}

function CultureTopicPage({ topic }) {
  const { ui, topics } = cultureEn
  if (!topic) return <article className="culture-page"><div className="section-inner culture-not-found"><p className="section-label">{ui.collection}</p><h1>{ui.notFound}</h1><a href="/culture">{ui.returnCulture}</a></div></article>
  const copy = topics[topic.id]
  const relatedPeople = topic.peopleIds.map((id) => people.find((record) => record.id === id)).filter(Boolean)
  const relatedPlaces = topic.placeIds.map((id) => places.find((record) => record.id === id)).filter(Boolean)
  const relatedSites = topic.siteIds.map((id) => sites.find((record) => record.id === id)).filter(Boolean)
  const relatedChapters = topic.chapterIds.map((id) => chapters.find((record) => record.id === id)).filter(Boolean)
  const relatedSources = topic.sourceIds.map((id) => sources.find((record) => record.id === id)).filter(Boolean)
  return (
    <article className="culture-page">
      <header className="culture-hero culture-topic-hero"><div className="section-inner">
        <a className="culture-back" href="/culture">← {ui.collection}</a><p className="section-label">{ui.sourceBacked}</p><h1>{copy.title}</h1><p>{copy.summary}</p><MeanderLine />
      </div></header>

      <section className="culture-section"><div className="section-inner culture-narrow"><p className="section-label">01 · {ui.overview}</p><h2>{copy.title}</h2><p>{copy.overview}</p></div></section>
      <section className="culture-section culture-section-alt"><div className="section-inner culture-narrow"><p className="section-label">02 · {ui.context}</p><h2>{ui.whyMatters}</h2><p>{copy.why}</p></div></section>
      <section className="culture-section"><div className="section-inner"><div className="culture-heading"><p className="section-label">03 · {ui.throughTime}</p><h2>{ui.throughTime}</h2></div><CultureEraJourney topic={topic} copy={copy} labels={ui} /></div></section>
      <section className="culture-section culture-section-alt"><div className="section-inner"><div className="culture-heading"><p className="section-label">04 · Evidence</p><h2>{ui.evidence}</h2></div><CultureEvidenceCollection topic={topic} labels={ui} /></div></section>
      {relatedPeople.length ? <section className="culture-section"><div className="section-inner"><div className="culture-heading"><p className="section-label">05 · {ui.context}</p><h2>{ui.people}</h2></div><RelatedRecords records={relatedPeople} label={ui.person} viewLabel={ui.viewRecord} /></div></section> : null}
      {relatedPlaces.length || relatedSites.length ? <section className="culture-section culture-section-alt"><div className="section-inner"><div className="culture-heading"><p className="section-label">06 · {ui.landscape}</p><h2>{ui.places}</h2></div><RelatedRecords records={[...relatedPlaces, ...relatedSites]} label={ui.placeSite} viewLabel={ui.viewRecord} /></div></section> : null}
      <section className="culture-section"><div className="section-inner culture-narrow"><p className="section-label">07 · {ui.inquiry}</p><h2>{ui.questions}</h2><ul className="culture-question-list">{copy.questions.map((question) => <li key={question}>{question}</li>)}</ul></div></section>
      <section className="culture-section culture-section-alt"><div className="section-inner"><div className="culture-heading"><p className="section-label">08 · {ui.chapters}</p><h2>{ui.chapters}</h2></div><div className="culture-record-grid">{relatedChapters.map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>{ui.chapter} {chapter.number}</span><strong>{chapter.title}</strong><small>{ui.viewChapter} →</small></a>)}</div></div></section>
      <section className="culture-section"><div className="section-inner culture-narrow"><p className="section-label">09 · {ui.evidenceBase}</p><h2>{ui.sources}</h2><details className="culture-sources"><summary>{ui.viewSources} ({relatedSources.length})</summary><ul>{relatedSources.map((source) => <li key={source.id}><strong>{source.title}</strong>{source.author ? <span>{source.author}</span> : null}</li>)}</ul></details></div></section>
      <section className="culture-section culture-section-alt"><div className="section-inner"><div className="culture-heading"><p className="section-label">10 · {ui.continue}</p><h2>{ui.continue}</h2></div><nav className="culture-continue" aria-label={ui.continue}><a href="/culture">{ui.allCollections} <span aria-hidden="true">→</span></a><a href="/eras">{ui.allErasLink} <span aria-hidden="true">→</span></a><a href="/timeline">{ui.timelineLink} <span aria-hidden="true">→</span></a></nav></div></section>
    </article>
  )
}

export default CultureTopicPage
