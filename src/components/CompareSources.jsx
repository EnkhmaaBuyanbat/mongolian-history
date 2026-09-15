import { sources } from '../data/sources'
import { getClaimHref } from '../data/entityRoutes'
import { useLocale } from '../i18n/useLocale'
import SourcePerspective from './SourcePerspective'

function CompareSources({ claim, hideLead = false }) {
  const { localeSection } = useLocale()
  const ui = localeSection('entities').ui
  const href = hideLead ? null : getClaimHref(claim)
  if (!claim?.sourceSupport?.length) return null

  return (
    <section className="entity-section">
      <div className="section-inner explorer-inner">
        {hideLead ? (
          <div className="entity-section-heading"><p className="section-label">{ui.compareSources}</p><h2>{ui.sourcePerspectives}</h2></div>
        ) : (
          <div className="entity-section-heading"><p className="section-label">{ui.compareSources}</p><h2>{claim.title}</h2></div>
        )}
        {hideLead ? null : <p className="entity-copy">{claim.text}</p>}
        <div className="chapter-record-grid">
          {claim.sourceSupport.map((support) => (
            <SourcePerspective key={`${claim.id}-${support.sourceId}`} source={sources.find((source) => source.id === support.sourceId)} role={support.role} note={support.note} />
          ))}
        </div>
        {hideLead ? null : <aside className="chapter-callout"><p className="chapter-callout-label">{ui.historicalTreatment}</p><p className="chapter-callout-text">{claim.treatment}</p>{claim.caution ? <p className="chapter-callout-text">{claim.caution}</p> : null}</aside>}
        {href ? <p className="supporting-open-link"><a href={href}>{ui.openRecord} →</a></p> : null}
      </div>
    </section>
  )
}

export default CompareSources
