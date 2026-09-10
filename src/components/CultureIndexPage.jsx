import { useState } from 'react'
import { cultureTopics } from '../data/cultureTopics'
import { eras } from '../data/eras'
import { media } from '../data/media'
import CultureTopicCard from './CultureTopicCard'
import HistoricalMedia from './HistoricalMedia'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'

const featuredMediaIds = ['media-deer-stones-uushgiin-uvur-01', 'media-kul-tegin-inscription-01', 'media-zanabazar-maitreya-01']

function CultureIndexPage() {
  const [eraFilter, setEraFilter] = useState('all')
  const { localeSection } = useLocale()
  const { index, topics, ui } = localeSection('culture')
  const visibleTopics = eraFilter === 'all' ? cultureTopics : cultureTopics.filter((topic) => topic.eraIds.includes(eraFilter))
  const featuredMedia = featuredMediaIds.map((id) => media.find((record) => record.id === id)).filter((record) => record?.approved)
  return (
    <article className="culture-page">
      <header className="culture-hero"><div className="section-inner">
        <p className="section-label">{index.eyebrow}</p><h1>{index.title}</h1><p>{index.intro}</p><MeanderLine />
      </div></header>

      <section className="culture-section"><div className="section-inner culture-narrow">
        <p className="section-label">01 · {ui.method}</p><h2>{index.methodTitle}</h2><p>{index.method}</p><p>{index.summary}</p>
      </div></section>

      <section className="culture-section culture-section-alt"><div className="section-inner">
        <div className="culture-heading"><p className="section-label">02 · {ui.collections}</p><h2>{index.topicsTitle}</h2></div>
        <div className="culture-era-filters" role="group" aria-label={index.filtersLabel}>
          <button type="button" aria-pressed={eraFilter === 'all'} onClick={() => setEraFilter('all')}>{ui.allEras}</button>
          {eras.map((era) => <button key={era.id} type="button" aria-pressed={eraFilter === era.id} onClick={() => setEraFilter(era.id)}>{ui.eraLabel} {era.numeral}</button>)}
        </div>
        <div className="culture-topic-grid">{visibleTopics.map((topic) => <CultureTopicCard key={topic.id} topic={topic} copy={topics[topic.id]} actionLabel={ui.enterCollection} eraLabel={ui.eraLabel} />)}</div>
      </div></section>

      <section className="culture-section"><div className="section-inner">
        <div className="culture-heading"><p className="section-label">03 · {ui.visualRecord}</p><h2>{index.featuredTitle}</h2></div>
        <div className="culture-media-grid">{featuredMedia.map((record) => <HistoricalMedia key={record.id} media={record} heading={ui.evidence} />)}</div>
      </div></section>

      <section className="culture-section culture-section-alt"><div className="section-inner culture-narrow">
        <p className="section-label">{ui.evidenceCaution}</p><h2>{index.archaeologyTitle}</h2><p>{index.archaeology}</p>
      </div></section>

      <section className="culture-section"><div className="section-inner">
        <div className="culture-heading"><p className="section-label">04 · {ui.continue}</p><h2>{index.continueTitle}</h2></div>
        <nav className="culture-continue" aria-label={index.continueTitle}>{index.continueLinks.map((link) => <a key={link.href} href={link.href}>{link.label}<span aria-hidden="true">→</span></a>)}</nav>
      </div></section>
    </article>
  )
}

export default CultureIndexPage
