import { sources } from '../data/sources'
import { useLocale } from '../i18n/useLocale'
import SourcePerspective from './SourcePerspective'

function CompareSources({ claim }) {
  const { localeSection } = useLocale()
  const ui = localeSection('entities').ui
  if (!claim?.sourceSupport?.length) return null

  return (
    <section className="entity-section">
      <div className="section-inner explorer-inner">
        <div className="entity-section-heading"><p className="section-label">{ui.compareSources}</p><h2>{claim.title}</h2></div>
        <p className="entity-copy">{claim.text}</p>
        <div className="chapter-record-grid">
          {claim.sourceSupport.map((support) => (
            <SourcePerspective key={`${claim.id}-${support.sourceId}`} source={sources.find((source) => source.id === support.sourceId)} role={support.role} note={support.note} />
          ))}
        </div>
        <aside className="chapter-callout"><p className="chapter-callout-label">{ui.historicalTreatment}</p><p className="chapter-callout-text">{claim.treatment}</p>{claim.caution ? <p className="chapter-callout-text">{claim.caution}</p> : null}</aside>
      </div>
    </section>
  )
}

export default CompareSources
