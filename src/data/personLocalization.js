import { mergeLocaleValues } from '../i18n/locale'

const reverseParentKeys = new Set(['person-modu-chanyu|person-touman','person-temujin-chinggis-khan|person-yesugei','person-temujin-chinggis-khan|person-hoelun'])
export const relationshipKey = (record) => `${record.personId}|${record.relatedPersonId}`
export const isFamilyRelationship = (record) => record.type === 'spouse' || record.type.includes('parent')
export function getParentChildIds(record) {
  if (!record.type.includes('parent')) return null
  return reverseParentKeys.has(relationshipKey(record))
    ? { parentId: record.relatedPersonId, childId: record.personId }
    : { parentId: record.personId, childId: record.relatedPersonId }
}
export function getLocalizedPerson(person, localeBundle = {}) {
  const translated = localeBundle.records?.[person.id] ?? {}
  const { biographySections:sectionPresentation, ...translatedFields } = translated
  const localized = mergeLocaleValues(person, translatedFields)
  const biographySections = person.biographySections?.map((section) => mergeLocaleValues(section, sectionPresentation?.[section.id]))
  const displayName = translated.displayName?.trim() || person.title
  const localizedAliases = translated.alternativeNames?.filter((name) => name?.trim()) ?? []
  const canonicalAliases = person.alternativeNames ?? []
  return { ...localized, ...(biographySections ? { biographySections } : {}), canonicalName: person.title, displayName, title: displayName, localizedAlternativeNames: localizedAliases, canonicalAlternativeNames: canonicalAliases, searchableNames: [...new Set([displayName, ...localizedAliases, person.title, ...canonicalAliases, ...(person.nameVariants ?? [])])] }
}
export function getLocalizedPersonStory(story, presentation = {}) {
  const { sections:sectionPresentation, ...translatedFields } = presentation
  return { ...mergeLocaleValues(story, translatedFields), sections:story.sections.map((section) => mergeLocaleValues(section, sectionPresentation?.[section.id])) }
}
export const formatTemplate = (value, variables) => Object.entries(variables).reduce((text,[key,replacement])=>text.replaceAll(`{${key}}`,replacement),value)
export function getLocalizedRelationship(record, localeBundle = {}) {
  return {
    ...record,
    displayType: localeBundle.types?.[record.type] ?? record.type,
    displayLabel: localeBundle.labels?.[record.label] ?? record.label,
  }
}
