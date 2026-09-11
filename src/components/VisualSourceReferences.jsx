import { sources } from '../data/sources'
import { useLocale } from '../i18n/useLocale'

function VisualSourceReferences({ sourceRefs = [] }) {
  const { t } = useLocale()
  const records = sourceRefs.map((id) => sources.find((source) => source.id === id)).filter(Boolean)
  if (!records.length) return null

  return (
    <div className="visual-source-references">
      <span>{t('chapters.ui.sources')}</span>
      <ul>
        {records.map((source) => <li key={source.id}>{source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a> : source.title}</li>)}
      </ul>
    </div>
  )
}

export default VisualSourceReferences
