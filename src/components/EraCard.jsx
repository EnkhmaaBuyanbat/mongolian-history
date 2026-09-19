import { CornerFrame } from './Ornament'
import { useLocale } from '../i18n/useLocale'

function EraCard({ era, actionLabel, variant = 'catalog' }) {
  const { localizedRecord, t } = useLocale()
  const presentation = localizedRecord('eras', era.id, era)
  const exploreLabel = actionLabel ?? t('home.eras.explore')
  const isHome = variant === 'home'
  const context = isHome
    ? (presentation.subtitle || presentation.description)
    : presentation.description

  return (
    <article className={`era-card${isHome ? ' era-card-home' : ''}`}>
      {isHome ? null : <CornerFrame />}
      <header className="era-card-head">
        <span className="era-numeral">{era.numeral}</span>
        <span className="era-years">{presentation.period}</span>
      </header>
      <h3>{presentation.title}</h3>
      <p>{context}</p>
      <a
        href={`/eras/${era.slug ?? era.id}`}
        className="era-explore"
        aria-label={`${exploreLabel} ${presentation.title}`}
      >
        {exploreLabel}
      </a>
    </article>
  )
}

export default EraCard
