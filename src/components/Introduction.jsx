import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'

function Introduction() {
  const { t } = useLocale()
  const copy = t('home.introduction')
  return (
    <section className="introduction" id="introduction">
      <div className="section-inner introduction-layout">
        <p className="section-label">{copy.label}</p>
        <div className="introduction-copy">
          <h2>{copy.title}</h2>
          <MeanderLine />
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Introduction
