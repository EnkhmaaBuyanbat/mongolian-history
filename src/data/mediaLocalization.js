import { mergeLocaleValues } from '../i18n/locale'

export function getLocalizedMedia(record, localeBundle = {}) {
  if (!record) return record
  return mergeLocaleValues(record, localeBundle.records?.[record.id])
}

export function getLocalizedMediaVisual(visual, localeBundle = {}) {
  if (!visual || visual.kind !== 'media') return visual
  const presentation = localeBundle.records?.[visual.id]
  if (!presentation) return visual
  return {
    ...visual,
    title: presentation.title ?? visual.title,
    caption: presentation.caption ?? visual.caption,
  }
}

