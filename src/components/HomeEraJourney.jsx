import { eras } from '../data/eras'
import { getHomeEraVisualRole, resolveHomeVisual } from '../data/homeVisualManifest'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'
import CinematicStill from './CinematicStill'

function EraJourneyPanel({ era, actionLabel }) {
  const { localizedRecord, t } = useLocale()
  const presentation = localizedRecord('eras', era.id, era)
  const visual = resolveHomeVisual(getHomeEraVisualRole(era.id))
  const evidenceLabel = visual?.evidenceLabel
    ? (t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel)
    : visual?.kind === 'designed' ? t('home.eras.designedVisual') : null

  return (
    <li className={`era-journey-panel tone-${era.id}`}>
      <a href={`/eras/${era.id}`} className="era-journey-link" aria-label={`${actionLabel} ${presentation.title}${evidenceLabel ? `. ${evidenceLabel}` : ''}`}>
        <CinematicStill visual={visual} className="era-journey-visual" sizes="(max-width: 768px) 70vw, 12vw" />
        <div className="era-journey-copy">
          <span className="era-numeral">{era.numeral}</span>
          <h3>{presentation.title}</h3>
          <p className="era-years">{presentation.period}</p>
        </div>
      </a>
    </li>
  )
}

function HomeEraJourney() {
  const { t } = useLocale()
  const copy = t('home.eras')

  return (
    <section className="eras eras-journey" id="eras">
      <div className="era-journey-bar">
        <h2>{copy.label}</h2>
        <a href="/timeline">{copy.viewTimeline}</a>
      </div>
      <ol className="era-journey-track" aria-label={copy.title}>
        {eras.map((era) => (
          <EraJourneyPanel key={era.id} era={era} actionLabel={copy.explore} />
        ))}
      </ol>
    </section>
  )
}

export default HomeEraJourney
