import { sources } from '../data/sources'

function VisualSourceReferences({ sourceRefs = [] }) {
  const records = sourceRefs.map((id) => sources.find((source) => source.id === id)).filter(Boolean)
  if (!records.length) return null

  return (
    <div className="visual-source-references">
      <span>Sources</span>
      <ul>
        {records.map((source) => <li key={source.id}>{source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a> : source.title}</li>)}
      </ul>
    </div>
  )
}

export default VisualSourceReferences
