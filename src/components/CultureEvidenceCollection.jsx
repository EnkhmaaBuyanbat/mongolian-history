import { media } from '../data/media'
import { objects } from '../data/objects'
import { getEntityHref } from '../data/entityRoutes'
import HistoricalMedia from './HistoricalMedia'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedEntity } from '../data/entityLocalization'

function CultureEvidenceCollection({ topic, labels }) {
  const { localeSection } = useLocale()
  const entityLocale = localeSection('entities')
  const approvedMedia = topic.mediaIds.map((id) => media.find((record) => record.id === id)).filter((record) => record?.approved && record.reviewStatus === 'APPROVED')
  const relatedObjects = topic.objectIds.map((id) => objects.find((record) => record.id === id)).filter(Boolean).map((record) => getLocalizedEntity(record, entityLocale))
  return (
    <>
      <div className="culture-media-grid">{approvedMedia.map((record) => <HistoricalMedia key={record.id} media={record} heading={labels.evidence} />)}</div>
      {relatedObjects.length ? <div className="culture-record-grid">{relatedObjects.map((record) => <a key={record.id} href={getEntityHref(record)}><span>{record.type ?? labels.evidence}</span><strong>{record.title}</strong><small>{labels.viewRecord} →</small></a>)}</div> : null}
    </>
  )
}

export default CultureEvidenceCollection
