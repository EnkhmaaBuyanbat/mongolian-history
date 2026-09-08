import { reconstructions } from './reconstructions.js'

function hasRenderableAsset(record) {
  return Boolean(record?.asset && [
    record.asset.largePath,
    record.asset.mediumPath,
    record.asset.mobilePath,
  ].some(Boolean))
}

export function getReconstructionById(id) {
  return id ? reconstructions.find((record) => record.id === id) ?? null : null
}

export function isApprovedReconstruction(record) {
  return Boolean(record?.approved && record.editorialStatus === 'APPROVED' && hasRenderableAsset(record))
}

export function getReconstructionForEra(eraId) {
  return reconstructions.find((record) => record.eraId === eraId && isApprovedReconstruction(record)) ?? null
}

export function getReconstructionForChapter(chapterId) {
  return reconstructions.find((record) => record.chapterIds?.includes(chapterId) && isApprovedReconstruction(record)) ?? null
}

export function getContextualReconstructionForPerson(personId) {
  return reconstructions.find((record) => record.personIds?.includes(personId) && isApprovedReconstruction(record)) ?? null
}

export function getReconstructionAsset(record) {
  if (!isApprovedReconstruction(record)) return null
  return record.asset
}
