import { mergeLocaleValues } from '../i18n/locale'

function localize(record, bundle, presentation) {
  if (!record) return record
  const localized = mergeLocaleValues(record, bundle?.records?.[record.id])
  return mergeLocaleValues(localized, presentation)
}

export const getLocalizedReconstruction = localize
export const getLocalizedEraWorld = localize
export const getLocalizedHeroScene = localize

export function getLocalizedReconstructionVisual(visual, bundle) {
  if (!visual || visual.kind !== 'reconstruction') return visual
  const presentation = bundle?.records?.[visual.id]
  if (!presentation) return visual
  return {
    ...visual,
    title: presentation.title ?? visual.title,
    caption: presentation.summary ?? visual.caption,
    label: presentation.evidenceLabel ?? visual.label,
  }
}
