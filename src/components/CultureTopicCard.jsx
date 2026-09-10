import { eras } from '../data/eras'

function CultureTopicCard({ topic, copy, actionLabel, eraLabel }) {
  const topicEras = eras.filter((era) => topic.eraIds.includes(era.id))
  return (
    <article className="culture-topic-card">
      <p className="section-label">{topicEras.map((era) => `${eraLabel} ${era.numeral}`).join(' · ')}</p>
      <h3>{copy.title}</h3>
      <p>{copy.summary}</p>
      <a href={`/culture/${topic.slug}`}>{actionLabel} <span aria-hidden="true">→</span></a>
    </article>
  )
}

export default CultureTopicCard
