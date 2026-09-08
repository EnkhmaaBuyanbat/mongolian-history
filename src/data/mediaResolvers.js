import { media } from './media.js'

export const portraitStatusOptions = [
  'HISTORICAL_PHOTOGRAPH',
  'CONTEMPORARY_OR_NEAR_CONTEMPORARY_DEPICTION',
  'LATER_HISTORICAL_DEPICTION',
  'MODERN_RECONSTRUCTION',
  'NO_RELIABLE_PORTRAIT',
  'UNREVIEWED',
]

export function getMediaById(id) {
  return id ? media.find((record) => record.id === id) ?? null : null
}

export function getApprovedMedia(records = media) {
  return records.filter((record) => record.approved)
}

export function getMediaForPerson(personId, { approvedOnly = true } = {}) {
  return media.filter((record) => (
    record.relatedPersonIds?.includes(personId)
    && (!approvedOnly || record.approved)
  ))
}

export function getMediaForChapter(chapter, { approvedOnly = true } = {}) {
  const chapterId = typeof chapter === 'string' ? chapter : chapter?.id
  const explicitMediaIds = typeof chapter === 'string' ? [] : chapter?.mediaIds ?? []
  return media.filter((record) => (
    (record.relatedChapterIds?.includes(chapterId) || explicitMediaIds.includes(record.id))
    && (!approvedOnly || record.approved)
  ))
}

export function resolvePortrait(person) {
  const portrait = person?.portrait
  if (!portrait) return { status: 'UNREVIEWED', media: null, note: null }

  if (portrait.status === 'NO_RELIABLE_PORTRAIT') {
    return {
      status: 'NO_RELIABLE_PORTRAIT',
      media: getMediaById(portrait.mediaId),
      note: portrait.note ?? null,
    }
  }

  const legacyKind = portrait.kind === 'HISTORICAL_DEPICTION'
    ? 'LATER_HISTORICAL_DEPICTION'
    : portrait.kind
  const status = portrait.status && portrait.status === portrait.status.toUpperCase()
    ? portrait.status
    : legacyKind ?? 'UNREVIEWED'

  return {
    status: portraitStatusOptions.includes(status) ? status : 'UNREVIEWED',
    media: getMediaById(portrait.mediaId),
    note: portrait.note ?? portrait.status ?? null,
  }
}

export function getPortraitMedia(person) {
  const resolved = resolvePortrait(person)
  return resolved.media?.approved ? resolved.media : null
}
