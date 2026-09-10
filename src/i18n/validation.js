import { mergeLocaleValues } from './locale'

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value)

function getPath(record, path) {
  return path.split('.').reduce((value, key) => value?.[key], record)
}

function inspectValues(value, path, errors) {
  if (typeof value === 'string' && !value.trim()) errors.push(`Empty translation: ${path}`)
  if (Array.isArray(value)) value.forEach((child, index) => inspectValues(child, `${path}[${index}]`, errors))
  if (isObject(value)) {
    if ('id' in value || 'slug' in value) errors.push(`Locale data must not translate id or slug: ${path}`)
    Object.entries(value).forEach(([key, child]) => inspectValues(child, `${path}.${key}`, errors))
  }
}

function compatibleShape(base, translated, path, errors) {
  if (!isObject(translated)) return
  Object.entries(translated).forEach(([key, value]) => {
    if (path === 'mn.chapters' && key === 'records') return
    const baseValue = base?.[key]
    if (baseValue === undefined) errors.push(`Unknown translation key: ${path}.${key}`)
    else if (Array.isArray(value) !== Array.isArray(baseValue) || (isObject(value) !== isObject(baseValue))) errors.push(`Incompatible translation shape: ${path}.${key}`)
    else if (isObject(value)) compatibleShape(baseValue, value, `${path}.${key}`, errors)
  })
}

export function validateLocalization({ bundles, supportedLocales, cultureTopicIds, eraIds, chapters, evidenceCodes, terminology }) {
  const errors = []
  const requiredCommon = ['navigation.home', 'navigation.eras', 'navigation.timeline', 'navigation.people', 'navigation.familyTree', 'navigation.culture', 'languages.english', 'languages.mongolian', 'accessibility.primaryNavigation', 'metadata.title']
  Object.keys(bundles).forEach((locale) => { if (!supportedLocales.includes(locale)) errors.push(`Unsupported locale bundle: ${locale}`) })
  supportedLocales.forEach((locale) => {
    const bundle = bundles[locale]
    if (!bundle) errors.push(`Missing locale bundle: ${locale}`)
    requiredCommon.forEach((path) => { if (!getPath(bundle?.common, path)) errors.push(`Missing required ${locale} key: common.${path}`) })
    inspectValues(bundle, locale, errors)
  })
  compatibleShape(bundles.en, bundles.mn, 'mn', errors)
  const localizedCultureTopics = bundles.mn?.culture?.topics ?? {}
  const localizedCultureIds = Object.keys(localizedCultureTopics)
  if (cultureTopicIds.length !== 5 || new Set(cultureTopicIds).size !== 5) errors.push('Expected exactly five unique canonical Culture topic IDs.')
  if (localizedCultureIds.length !== cultureTopicIds.length) errors.push(`Expected ${cultureTopicIds.length} localized MN Culture topics; found ${localizedCultureIds.length}.`)
  localizedCultureIds.forEach((id) => {
    if (!cultureTopicIds.includes(id)) errors.push(`Unknown localized Culture topic ID: ${id}`)
    const record = localizedCultureTopics[id]
    ;['title', 'summary', 'overview', 'why'].forEach((field) => { if (!record?.[field]?.trim()) errors.push(`Incomplete MN Culture topic field: ${id}.${field}`) })
    if (!record?.questions?.length || !isObject(record?.eraText)) errors.push(`Incomplete MN Culture topic narrative: ${id}`)
  })
  Object.keys(bundles.mn?.eras?.records ?? {}).forEach((id) => { if (!eraIds.includes(id)) errors.push(`Unknown localized Era ID: ${id}`) })
  const localizedChapters = bundles.mn?.chapters?.records ?? {}
  const localizedChapterIds = Object.keys(localizedChapters)
  const requiredEraIds = ['ancient-steppe', 'before-chinggis']
  if (localizedChapterIds.length !== 16) errors.push(`Expected exactly 16 localized MN chapters; found ${localizedChapterIds.length}.`)
  requiredEraIds.forEach((eraId) => {
    const count = localizedChapterIds.filter((id) => chapters.some((chapter) => chapter.id === id && chapter.eraId === eraId)).length
    if (count !== 8) errors.push(`Expected 8 localized MN chapters for ${eraId}; found ${count}.`)
  })
  localizedChapterIds.forEach((id) => {
    const canonical = chapters.find((chapter) => chapter.id === id)
    if (!canonical) return errors.push(`Unknown localized Chapter ID: ${id}`)
    const record = localizedChapters[id]
    ;['title', 'subtitle', 'period', 'summary', 'intro'].forEach((field) => { if (!record?.[field]?.trim()) errors.push(`Incomplete MN Chapter field: ${id}.${field}`) })
    if (!isObject(record.sectionPresentation)) errors.push(`Invalid MN Chapter section presentation: ${id}`)
    const canonicalSectionIds = (canonical.sections ?? []).map((section) => section.id)
    const localizedSectionIds = Object.keys(record.sectionPresentation ?? {})
    canonicalSectionIds.forEach((sectionId) => {
      if (!localizedSectionIds.includes(sectionId)) errors.push(`Missing MN Chapter section: ${id}.${sectionId}`)
      const canonicalSection = canonical.sections.find((section) => section.id === sectionId)
      const localizedSection = record.sectionPresentation?.[sectionId]
      if (!localizedSection?.title?.trim()) errors.push(`Missing MN Chapter section title: ${id}.${sectionId}`)
      if (canonicalSection?.paragraphs && (!Array.isArray(localizedSection?.paragraphs) || !localizedSection.paragraphs.length)) errors.push(`Invalid MN Chapter section paragraphs: ${id}.${sectionId}`)
    })
    localizedSectionIds.forEach((sectionId) => { if (!canonicalSectionIds.includes(sectionId)) errors.push(`Unknown MN Chapter section: ${id}.${sectionId}`) })
  })
  Object.keys(bundles.mn?.evidence ?? {}).forEach((code) => { if (!evidenceCodes.includes(code)) errors.push(`Unknown localized evidence code: ${code}`) })
  const terminologyEntries = Object.entries(terminology ?? {})
  if (new Set(terminologyEntries.map(([key]) => key)).size !== terminologyEntries.length) errors.push('Duplicate Mongolian terminology key.')
  terminologyEntries.forEach(([key, value]) => { if (typeof value !== 'string' || !value.trim()) errors.push(`Empty Mongolian terminology value: ${key}`) })
  const fallbackProof = mergeLocaleValues({ translated: 'English', missing: 'English fallback', empty: 'English fallback' }, { translated: 'Монгол', empty: '' })
  if (fallbackProof.translated !== 'Монгол' || fallbackProof.missing !== 'English fallback' || fallbackProof.empty !== 'English fallback') errors.push('Per-key English fallback validation failed.')
  return errors
}
