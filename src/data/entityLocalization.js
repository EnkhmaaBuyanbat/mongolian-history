import { mergeLocaleValues } from '../i18n/locale'

export function getLocalizedEntity(entity, localeBundle = {}) {
  if (!entity) return entity
  const presentation = localeBundle.records?.[entity.id]
  const localized = mergeLocaleValues(entity, presentation)
  return { ...localized, type: presentation?.type || localeBundle.types?.[entity.type] || entity.type }
}

export const getLocalizedPolity = getLocalizedEntity

function getLocalizedEvidenceEntity(entity, localeBundle) {
  if (!entity) return entity
  const presentation = localeBundle.records?.[entity.id]
  const localized = getLocalizedEntity(entity, localeBundle)
  if (!entity.evidenceSections?.length || !presentation?.evidenceSections) return localized
  return { ...localized, evidenceSections:entity.evidenceSections.map((section) => mergeLocaleValues(section, presentation.evidenceSections[section.id])) }
}

export const getLocalizedPlace = getLocalizedEvidenceEntity
export const getLocalizedSite = getLocalizedEvidenceEntity
export const getLocalizedObject = getLocalizedEntity
