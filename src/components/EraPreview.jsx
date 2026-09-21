'use client'

import { eras } from '../data/eras'
import EraCard from './EraCard'
import HomeEraJourney from './HomeEraJourney'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'

function EraPreview({ variant = 'catalog' }) {
  const { t } = useLocale()
  const copy = t('home.eras')

  if (variant === 'home') {
    return <HomeEraJourney />
  }

  return (
    <section className="eras">
      <div className="section-inner">
        <div className="eras-heading">
          <p className="section-label">{copy.label}</p>
          <h2>{copy.title}</h2>
          <MeanderLine />
          <p className="eras-intro">{copy.intro}</p>
        </div>
        <div className="era-grid">
          {eras.map((era) => (
            <EraCard key={era.id} era={era} actionLabel={copy.explore} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EraPreview
