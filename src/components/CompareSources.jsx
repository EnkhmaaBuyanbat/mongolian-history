import { sources } from '../data/sources'
import SourcePerspective from './SourcePerspective'

function CompareSources({ claim }) {
  if (!claim?.sourceSupport?.length) return null

  return (
    <section className="entity-section">
      <div className="section-inner explorer-inner">
        <div className="entity-section-heading"><p className="section-label">Compare Sources</p><h2>{claim.title}</h2></div>
        <p className="entity-copy">{claim.text}</p>
        <div className="chapter-record-grid">
          {claim.sourceSupport.map((support) => (
            <SourcePerspective key={`${claim.id}-${support.sourceId}`} source={sources.find((source) => source.id === support.sourceId)} role={support.role} note={support.note} />
          ))}
        </div>
        <aside className="chapter-callout"><p className="chapter-callout-label">Historical Treatment</p><p className="chapter-callout-text">{claim.treatment}</p>{claim.caution ? <p className="chapter-callout-text">{claim.caution}</p> : null}</aside>
      </div>
    </section>
  )
}

export default CompareSources
