import { mergeLocaleValues } from '../i18n/locale'

export function getLocalizedEntity(entity, localeBundle = {}) {
  if (!entity) return entity
  const presentation = localeBundle.records?.[entity.id] ?? {}
  const { evidenceSections: sectionPresentation, ...translatedFields } = presentation
  const localized = mergeLocaleValues(entity, translatedFields)
  const evidenceSections = entity.evidenceSections?.map((section) => mergeLocaleValues(section, sectionPresentation?.[section.id]))
  return {
    ...localized,
    ...(evidenceSections ? { evidenceSections } : {}),
    type: presentation?.type || localeBundle.types?.[entity.type] || entity.type,
  }
}

export const getLocalizedPolity = getLocalizedEntity

function getLocalizedEvidenceEntity(entity, localeBundle) {
  return getLocalizedEntity(entity, localeBundle)
}

export const getLocalizedPlace = getLocalizedEvidenceEntity
export const getLocalizedSite = getLocalizedEvidenceEntity
export const getLocalizedObject = getLocalizedEntity
