import { media } from './media.js'
import { getReconstructionForChapter, getReconstructionForEra, getContextualReconstructionForPerson } from './reconstructionResolvers.js'

function hasAsset(asset) {
  return Boolean(asset?.mediumPath || asset?.largePath || asset?.mobilePath)
}

function approvedMedia(records) {
  return records.filter((record) => record.approved && record.reviewStatus === 'APPROVED' && hasAsset(record.asset))
}

function mediaVisual(record, scope) {
  if (!record) return null
  return {
    id: record.id,
    kind: 'media',
    scope,
    asset: record.asset,
    label: record.evidenceType.replaceAll('_', ' '),
    title: record.title,
    caption: record.caption,
    attribution: record.attribution,
    sourceUrl: record.sourceUrl,
  }
}

function reconstructionVisual(record, scope) {
  if (!record) return null
  return {
    id: record.id,
    kind: 'reconstruction',
    scope,
    asset: record.asset,
    label: scope === 'person-context' ? `CONTEXTUAL ${record.evidenceLabel}` : record.evidenceLabel,
    title: record.title,
    caption: record.summary,
    attribution: null,
    sourceUrl: null,
  }
}

export function getEraHeaderVisual(eraId) {
  const directMedia = approvedMedia(media.filter((record) => record.relatedEraIds?.includes(eraId)))[0]
  return mediaVisual(directMedia, 'era')
    ?? reconstructionVisual(getReconstructionForEra(eraId), 'era')
}

export function getChapterHeaderVisual(chapter) {
  const chapterId = typeof chapter === 'string' ? chapter : chapter?.id
  const eraId = typeof chapter === 'string' ? null : chapter?.eraId
  const directMedia = approvedMedia(media.filter((record) => record.relatedChapterIds?.includes(chapterId)))[0]
  return mediaVisual(directMedia, 'chapter')
    ?? reconstructionVisual(getReconstructionForChapter(chapterId), 'chapter')
    ?? getEraHeaderVisual(eraId)
}

export function getPersonHeaderVisual(person) {
  const personId = typeof person === 'string' ? person : person?.id
  const directMedia = approvedMedia(media.filter((record) => record.relatedPersonIds?.includes(personId)))[0]
  return mediaVisual(directMedia, 'person')
    ?? reconstructionVisual(getContextualReconstructionForPerson(personId), 'person-context')
}
