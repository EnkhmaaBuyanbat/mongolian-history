import { CornerFrame } from './Ornament'
import { useLocale } from '../i18n/useLocale'

function EraCard({ era, actionLabel = 'Explore' }) {
  const { localizedRecord } = useLocale()
  const presentation = localizedRecord('eras', era.id, era)
  return (
    <article className="era-card">
      <CornerFrame />
      <header className="era-card-head">
        <span className="era-numeral">{era.numeral}</span>
        <span className="era-years">{presentation.period}</span>
      </header>
      <h3>{presentation.title}</h3>
      <p>{presentation.description}</p>
      <a
        href={`/eras/${era.id}`}
        className="era-explore"
        aria-label={`${actionLabel} ${presentation.title}`}
      >
        {actionLabel}
      </a>
    </article>
  )
}

export default EraCard
