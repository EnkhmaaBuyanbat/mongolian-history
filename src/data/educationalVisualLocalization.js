import { mergeLocaleValues } from '../i18n/locale'

function mergeArray(canonical = [], presentation = []) {
  return canonical.map((item, index) => mergeLocaleValues(item, presentation[index]))
}

export function getLocalizedEducationalVisual(canonical, presentation) {
  if (!canonical) return canonical
  if (!presentation) return canonical
  const localized = mergeLocaleValues(canonical, {
    ...presentation,
    items: undefined,
    phases: undefined,
    edges: undefined,
    legend: undefined,
  })
  return {
    ...localized,
    items: mergeArray(canonical.items, presentation.items),
    phases: canonical.phases?.map((phase, index) => {
      const phasePresentation = presentation.phases?.[index]
      return {
        ...mergeLocaleValues(phase, { ...phasePresentation, items: undefined, edges: undefined }),
        items: mergeArray(phase.items, phasePresentation?.items),
        edges: mergeArray(phase.edges, phasePresentation?.edges),
      }
    }),
    edges: mergeArray(canonical.edges, presentation.edges),
    legend: mergeArray(canonical.legend, presentation.legend),
  }
}

