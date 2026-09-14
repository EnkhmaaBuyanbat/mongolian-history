import { media } from './media.js'
import { getContextualReconstructionForPerson, getReconstructionById, getReconstructionForChapter, isApprovedReconstruction } from './reconstructionResolvers.js'
import { getEraWorld } from './eraWorlds.js'
import { getChapterHeroAssignment } from './chapterVisuals.js'

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
  const world = getEraWorld(eraId)
  if (!world?.approved) return null
  if (world.reconstructionId) {
    const reconstruction = getReconstructionById(world.reconstructionId)
    return isApprovedReconstruction(reconstruction) ? {
      ...reconstructionVisual(reconstruction, 'era'),
      desktopPosition: world.desktopPosition,
      mobilePosition: world.mobilePosition,
      overlayStrength: world.overlayStrength,
    } : null
  }
  if (world.mediaId) {
    const record = approvedMedia(media.filter((item) => item.id === world.mediaId))[0]
    return record ? {
      ...mediaVisual(record, 'era'),
      desktopPosition: world.desktopPosition,
      mobilePosition: world.mobilePosition,
      overlayStrength: world.overlayStrength,
    } : null
  }
  return null
}

export function getChapterHeaderVisual(chapter) {
  const chapterId = typeof chapter === 'string' ? chapter : chapter?.id
  const eraId = typeof chapter === 'string' ? null : chapter?.eraId
  const heroAssignment = getChapterHeroAssignment(chapterId)
  const assignedMedia = heroAssignment?.mediaId
    ? approvedMedia(media.filter((item) => item.id === heroAssignment.mediaId))[0]
    : null
  const assignedReconstruction = heroAssignment?.reconstructionId
    ? getReconstructionById(heroAssignment.reconstructionId)
    : null
  const visual = mediaVisual(assignedMedia, 'chapter')
    ?? (isApprovedReconstruction(assignedReconstruction) ? reconstructionVisual(assignedReconstruction, 'chapter') : null)
    ?? (heroAssignment?.designedFallback ? null : reconstructionVisual(getReconstructionForChapter(chapterId), 'chapter'))
    ?? (heroAssignment?.designedFallback ? null : getEraHeaderVisual(eraId))
  if (!visual || typeof chapter === 'string') return visual
  return {
    ...visual,
    desktopPosition: chapter.headerVisual?.desktopPosition ?? visual.desktopPosition,
    mobilePosition: chapter.headerVisual?.mobilePosition ?? visual.mobilePosition,
    overlayStrength: chapter.headerVisual?.overlayStrength ?? visual.overlayStrength,
  }
}

export function getChapterHeaderFallback(chapterId) {
  const heroAssignment = getChapterHeroAssignment(chapterId)
  return heroAssignment?.designedFallback ? { motif: heroAssignment.designedFallback } : null
}

export function getPersonHeaderVisual(person) {
  const personId = typeof person === 'string' ? person : person?.id
  const directMedia = approvedMedia(media.filter((record) => record.relatedPersonIds?.includes(personId)))[0]
  return mediaVisual(directMedia, 'person')
    ?? reconstructionVisual(getContextualReconstructionForPerson(personId), 'person-context')
}

// Dossier headers use reconstructions only. Related media stays in the evidence
// panel so an object photograph is never cropped and darkened behind title text.
export function getPersonContextHeaderVisual(person) {
  const personId = typeof person === 'string' ? person : person?.id
  return reconstructionVisual(getContextualReconstructionForPerson(personId), 'person-context')
}
