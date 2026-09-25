import '../succession.css'
import { eras } from '../data/eras'
import { getSegmentDuration, SUCCESSION_ANCHOR_ID } from '../data/succession'
import SuccessionSegment, { KIND_LEGEND } from './SuccessionSegment'
import { useLocale } from '../i18n/useLocale'

function SuccessionChronology({ sequence }) {
  const { localeSection, localizedRecord } = useLocale()
  const copy = localeSection('succession')
  const ui = copy.ui
  const continuationEra = sequence.continuationEraId
    ? eras.find((era) => era.id === sequence.continuationEraId)
    : null
  const continuationHref = continuationEra
    ? `/eras/${continuationEra.slug ?? continuationEra.id}`
    : null
  const continuationTitle = continuationEra
    ? localizedRecord('eras', continuationEra.id, continuationEra).title
    : ''

  return (
    <section
      className="era-detail-section succession-section"
      id={SUCCESSION_ANCHOR_ID}
      aria-labelledby="succession-heading"
    >
      <div className="section-inner">
        <div className="entity-section-heading">
          <p className="section-label">{ui.kicker}</p>
          <h2 id="succession-heading">{ui.title}</h2>
        </div>
        <p className="succession-intro">{ui.intro}</p>
        <div className="succession-legend" aria-label={ui.legendLabel}>
          {Object.entries(KIND_LEGEND).map(([kind, key]) => (
            <span key={kind} className={`succession-legend-item succession-legend-item--${kind}`}>
              {ui.legend[key]}
            </span>
          ))}
        </div>
        <ol className="succession-track" aria-label={ui.chronologyLabel}>
          {sequence.segments.map((segment, index) => {
            const nextSegment = sequence.segments[index + 1]
            return (
              <li key={segment.id} style={{ '--succession-span': Math.max(getSegmentDuration(segment), 3) }}>
                <SuccessionSegment
                  segment={segment}
                  copy={copy.segments[segment.id]}
                  nextSegment={nextSegment}
                  nextCopy={nextSegment ? copy.segments[nextSegment.id] : null}
                />
              </li>
            )
          })}
        </ol>
        {continuationHref ? (
          <p className="succession-continue">
            <a href={continuationHref}>{ui.continuesInEraIv} · {continuationTitle}</a>
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default SuccessionChronology
