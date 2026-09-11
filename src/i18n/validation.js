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
    if ((path === 'mn.chapters' || path === 'mn.people') && key === 'records') return
    if (path === 'mn.events' && ['records','types'].includes(key)) return
    if (path === 'mn.people' && ['events','stories','politicalContexts'].includes(key)) return
    if (path === 'mn.personRelationships' && key === 'labels') return
    const baseValue = base?.[key]
    if (baseValue === undefined) errors.push(`Unknown translation key: ${path}.${key}`)
    else if (Array.isArray(value) !== Array.isArray(baseValue) || (isObject(value) !== isObject(baseValue))) errors.push(`Incompatible translation shape: ${path}.${key}`)
    else if (isObject(value)) compatibleShape(baseValue, value, `${path}.${key}`, errors)
  })
}

export function validateLocalization({ bundles, supportedLocales, cultureTopicIds, eraIds, chapters, evidenceCodes, terminology, people, dossierPersonIds, familyTreePersonIds, personRelationships, getPersonHref, eraI_IIDossierPersonIds, eraIII_IVDossierPersonIds, moduChanyuStory, events, eventIdsEraI_II, eventIdsEraIII_IV, eventIdsEraV_VI, eventIdsEraVII_VIII }) {
  const errors = []
  const requiredCommon = ['navigation.home', 'navigation.eras', 'navigation.timeline', 'navigation.people', 'navigation.familyTree', 'navigation.culture', 'languages.english', 'languages.mongolian', 'accessibility.primaryNavigation', 'metadata.title']
  const requiredPersonPageUi = ['historicalBiography','referenceProfile','sourceBacked','researched','alsoKnownAs','shortHistory','lifeRole','whoWas','familyDynasty','dynasticRelationships','historicalContext','politicalWorldChapter','timeline','datedRecords','connectedPeople','familyChangingRelationships','connectedHistory','referenceRecords','sources','furtherReading','noPortraitExplanation']
  Object.keys(bundles).forEach((locale) => { if (!supportedLocales.includes(locale)) errors.push(`Unsupported locale bundle: ${locale}`) })
  supportedLocales.forEach((locale) => {
    const bundle = bundles[locale]
    if (!bundle) errors.push(`Missing locale bundle: ${locale}`)
    requiredCommon.forEach((path) => { if (!getPath(bundle?.common, path)) errors.push(`Missing required ${locale} key: common.${path}`) })
    requiredPersonPageUi.forEach((key) => { if (!bundle?.people?.ui?.[key]) errors.push(`Missing required ${locale} person-page key: people.ui.${key}`) })
    inspectValues(bundle, locale, errors)
  })
  compatibleShape(bundles.en, bundles.mn, 'mn', errors)
  const localizedEvents = bundles.mn?.events?.records ?? {}
  const eraOneEvents = events.filter((event) => event.eraId === 'ancient-steppe' && ['researched','verified'].includes(event.status))
  const eraTwoEvents = events.filter((event) => event.eraId === 'before-chinggis' && ['researched','verified'].includes(event.status))
  const targetEvents = [...eraOneEvents, ...eraTwoEvents]
  const eraThreeEvents = events.filter((event) => event.eraId === 'rise-empire' && ['researched','verified'].includes(event.status))
  const eraFourEvents = events.filter((event) => event.eraId === 'mongol-world' && ['researched','verified'].includes(event.status))
  const batchTwoEvents = [...eraThreeEvents, ...eraFourEvents]
  const eraFiveEvents = events.filter((event) => event.eraId === 'northern-yuan' && ['researched','verified'].includes(event.status))
  const eraSixEvents = events.filter((event) => event.eraId === 'qing-rule' && ['researched','verified'].includes(event.status))
  const batchThreeEvents = [...eraFiveEvents, ...eraSixEvents]
  const eraSevenEvents = events.filter((event) => event.eraId === 'revolution-socialist' && ['researched','verified'].includes(event.status))
  const eraEightEvents = events.filter((event) => event.eraId === 'modern' && ['researched','verified'].includes(event.status))
  const batchFourEvents = [...eraSevenEvents, ...eraEightEvents]
  const publicEvents = events.filter((event) => ['researched','verified'].includes(event.status))
  if (events.length !== 155) errors.push(`Expected 155 canonical events; found ${events.length}.`)
  if (eraOneEvents.length !== 22) errors.push(`Expected 22 Era I events; found ${eraOneEvents.length}.`)
  if (eraTwoEvents.length !== 9) errors.push(`Expected 9 Era II events; found ${eraTwoEvents.length}.`)
  if (eraThreeEvents.length !== 33) errors.push(`Expected 33 Era III events; found ${eraThreeEvents.length}.`)
  if (eraFourEvents.length !== 10) errors.push(`Expected 10 Era IV events; found ${eraFourEvents.length}.`)
  if (eraFiveEvents.length !== 16) errors.push(`Expected 16 Era V events; found ${eraFiveEvents.length}.`)
  if (eraSixEvents.length !== 13) errors.push(`Expected 13 Era VI events; found ${eraSixEvents.length}.`)
  if (eraSevenEvents.length !== 28) errors.push(`Expected 28 Era VII events; found ${eraSevenEvents.length}.`)
  if (eraEightEvents.length !== 23) errors.push(`Expected 23 Era VIII events; found ${eraEightEvents.length}.`)
  if (eventIdsEraI_II.length !== 31 || new Set(eventIdsEraI_II).size !== 31 || targetEvents.some((event) => !eventIdsEraI_II.includes(event.id)) || eventIdsEraI_II.some((id) => !targetEvents.some((event) => event.id === id))) errors.push('Era I/II event localization target set does not match canonical events.')
  if (eventIdsEraIII_IV.length !== 43 || new Set(eventIdsEraIII_IV).size !== 43 || batchTwoEvents.some((event) => !eventIdsEraIII_IV.includes(event.id)) || eventIdsEraIII_IV.some((id) => !batchTwoEvents.some((event) => event.id === id))) errors.push('Era III/IV event localization target set does not match canonical events.')
  if (eventIdsEraV_VI.length !== 29 || new Set(eventIdsEraV_VI).size !== 29 || batchThreeEvents.some((event) => !eventIdsEraV_VI.includes(event.id)) || eventIdsEraV_VI.some((id) => !batchThreeEvents.some((event) => event.id === id))) errors.push('Era V/VI event localization target set does not match canonical events.')
  if (eventIdsEraVII_VIII.length !== 51 || new Set(eventIdsEraVII_VIII).size !== 51 || batchFourEvents.some((event) => !eventIdsEraVII_VIII.includes(event.id)) || eventIdsEraVII_VIII.some((id) => !batchFourEvents.some((event) => event.id === id))) errors.push('Era VII/VIII event localization target set does not match canonical events.')
  const allBatchEventIds = [...eventIdsEraI_II,...eventIdsEraIII_IV,...eventIdsEraV_VI,...eventIdsEraVII_VIII]
  if (new Set(allBatchEventIds).size !== allBatchEventIds.length) errors.push('Duplicate Event ID across MN event locale batch modules.')
  const forbiddenEventLocaleKeys = ['id','slug','eraId','eraIds','year','startYear','endYear','people','places','sites','objects','polities','relatedEvents','mapAvailable','experience3dAvailable','sources','sourceRefs','status','importance','type','confidence']
  Object.entries(localizedEvents).forEach(([id, record]) => {
    if (!events.some((event) => event.id === id)) errors.push(`Unknown localized Event ID: ${id}`)
    forbiddenEventLocaleKeys.forEach((field) => { if (field in record) errors.push(`Forbidden canonical field in MN event locale: ${id}.${field}`) })
  })
  targetEvents.forEach((event) => ['title','dateDisplay','summary'].forEach((field) => { if (event[field] && !localizedEvents[event.id]?.[field]?.trim()) errors.push(`Missing MN Era I/II event ${field}: ${event.id}`) }))
  batchTwoEvents.forEach((event) => ['title','dateDisplay','summary'].forEach((field) => { if (event[field] && !localizedEvents[event.id]?.[field]?.trim()) errors.push(`Missing MN Era III/IV event ${field}: ${event.id}`) }))
  batchThreeEvents.forEach((event) => ['title','dateDisplay','summary'].forEach((field) => { if (event[field] && !localizedEvents[event.id]?.[field]?.trim()) errors.push(`Missing MN Era V/VI event ${field}: ${event.id}`) }))
  batchFourEvents.forEach((event) => ['title','dateDisplay','summary'].forEach((field) => { if (event[field] && !localizedEvents[event.id]?.[field]?.trim()) errors.push(`Missing MN Era VII/VIII event ${field}: ${event.id}`) }))
  publicEvents.forEach((event) => ['title','dateDisplay','summary'].forEach((field) => { if (event[field] && !localizedEvents[event.id]?.[field]?.trim()) errors.push(`Missing MN public event ${field}: ${event.id}`) }))
  if (publicEvents.length !== 154) errors.push(`Expected 154 researched/verified canonical events; found ${publicEvents.length}.`)
  if (Object.keys(localizedEvents).length !== 154) errors.push(`Expected 154 cumulative localized MN public events; found ${Object.keys(localizedEvents).length}.`)
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
  const requiredEraIds = ['ancient-steppe', 'before-chinggis', 'rise-empire', 'mongol-world', 'northern-yuan', 'qing-rule', 'revolution-socialist', 'modern']
  if (localizedChapterIds.length !== 64) errors.push(`Expected exactly 64 localized MN chapters; found ${localizedChapterIds.length}.`)
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
  const publicPeople = people.filter((person) => person.status === 'researched' || person.status === 'verified')
  const localizedPeople = bundles.mn?.people?.records ?? {}
  if (people.length !== 116) errors.push(`Expected 116 canonical people; found ${people.length}.`)
  if (publicPeople.length !== 115) errors.push(`Expected 115 public people; found ${publicPeople.length}.`)
  if (dossierPersonIds.size !== 32) errors.push(`Expected 32 dossier people; found ${dossierPersonIds.size}.`)
  if (familyTreePersonIds.length !== 45) errors.push(`Expected 45 Family Tree people; found ${familyTreePersonIds.length}.`)
  if (personRelationships.length !== 80) errors.push(`Expected 80 canonical relationships; found ${personRelationships.length}.`)
  if (people.filter((person) => Boolean(person.storyId)).length !== 1) errors.push('Expected exactly one canonical person with a storyId.')
  if (Object.keys(localizedPeople).length !== 115) errors.push(`Expected 115 localized MN public people; found ${Object.keys(localizedPeople).length}.`)
  Object.entries(localizedPeople).forEach(([id, record]) => {
    const canonical = people.find((person) => person.id === id)
    if (!canonical) errors.push(`Unknown localized Person ID: ${id}`)
    if (!record?.displayName?.trim()) errors.push(`Missing MN person display name: ${id}`)
    if (canonical && getPersonHref(canonical) !== getPersonHref(mergeLocaleValues(canonical, record))) errors.push(`Localized person route changed: ${id}`)
  })
  publicPeople.forEach((person) => { if (!localizedPeople[person.id]) errors.push(`Missing MN public person: ${person.id}`) })
  const forbiddenPersonLocaleKeys = ['id','slug','storyId','eraId','eraIds','polityIds','eventIds','relatedEntityIds','sourceRefs','dynasticBranch','profileType','status','portrait']
  publicPeople.forEach((person) => {
    const record = localizedPeople[person.id]
    ;['role','summary','shortBio','period','periodDisplay'].forEach((field) => {
      if (person[field] && !record?.[field]?.trim()) errors.push(`Missing MN public person ${field}: ${person.id}`)
    })
    forbiddenPersonLocaleKeys.forEach((field) => { if (field in (record ?? {})) errors.push(`Forbidden canonical field in MN person locale: ${person.id}.${field}`) })
  })
  const canonicalTargets = people.filter((person) => dossierPersonIds.has(person.id) && ['ancient-steppe','before-chinggis'].includes(person.eraId))
  if (canonicalTargets.length !== 10 || canonicalTargets.some((person) => !eraI_IIDossierPersonIds.includes(person.id)) || eraI_IIDossierPersonIds.some((id) => !canonicalTargets.some((person) => person.id === id))) errors.push('Era I/II dossier localization target set does not match the canonical dossier allow-list.')
  canonicalTargets.forEach((person) => {
    const record = localizedPeople[person.id]
    if (person.role && !record?.role?.trim()) errors.push(`Missing MN dossier role: ${person.id}`)
    if ((person.summary || person.shortBio) && !(record?.summary ?? record?.shortBio)?.trim()) errors.push(`Missing MN dossier summary: ${person.id}`)
    if ((person.period || person.periodDisplay || !person.period) && !(record?.periodDisplay ?? record?.period)?.trim()) errors.push(`Missing MN dossier period: ${person.id}`)
    ;(person.biographySections ?? []).forEach((section) => {
      const translated = record?.biographySections?.[section.id]
      if (!translated?.title?.trim()) errors.push(`Missing MN dossier section: ${person.id}.${section.id}`)
      if ((translated?.paragraphs?.length ?? 0) !== (section.paragraphs?.length ?? 0)) errors.push(`MN dossier paragraph count mismatch: ${person.id}.${section.id}`)
    })
    const canonicalSectionIds = (person.biographySections ?? []).map((section) => section.id)
    Object.keys(record?.biographySections ?? {}).forEach((sectionId) => { if (!canonicalSectionIds.includes(sectionId)) errors.push(`Unknown MN dossier section: ${person.id}.${sectionId}`) })
  })
  const localizedStory = bundles.mn?.people?.stories?.['modu-chanyu']
  if ((localizedStory?.introduction?.length ?? 0) !== moduChanyuStory.introduction.length) errors.push('Modu MN story introduction coverage is incomplete.')
  moduChanyuStory.sections.forEach((section) => {
    const translated = localizedStory?.sections?.[section.id]
    if (!translated?.title?.trim() || translated.paragraphs?.length !== section.paragraphs.length) errors.push(`Modu MN story section coverage is incomplete: ${section.id}`)
  })
  const canonicalStorySectionIds = moduChanyuStory.sections.map((section) => section.id)
  Object.keys(localizedStory?.sections ?? {}).forEach((sectionId) => { if (!canonicalStorySectionIds.includes(sectionId)) errors.push(`Unknown Modu MN story section: ${sectionId}`) })
  const batchTwoTargets = people.filter((person) => dossierPersonIds.has(person.id) && ['rise-empire','mongol-world'].includes(person.eraId))
  if (batchTwoTargets.length !== 12 || batchTwoTargets.some((person) => !eraIII_IVDossierPersonIds.includes(person.id)) || eraIII_IVDossierPersonIds.some((id) => !batchTwoTargets.some((person) => person.id===id))) errors.push('Era III/IV dossier localization target set does not match the canonical dossier allow-list.')
  batchTwoTargets.forEach((person) => {
    const record = localizedPeople[person.id]
    if (!record?.role?.trim()) errors.push(`Missing MN Era III/IV dossier role: ${person.id}`)
    if (!(record?.summary ?? record?.shortBio)?.trim()) errors.push(`Missing MN Era III/IV dossier summary: ${person.id}`)
    if (!(record?.periodDisplay ?? record?.period)?.trim()) errors.push(`Missing MN Era III/IV dossier period: ${person.id}`)
    const canonicalSectionIds = (person.biographySections ?? []).map((section) => section.id)
    Object.keys(record?.biographySections ?? {}).forEach((sectionId) => { if (!canonicalSectionIds.includes(sectionId)) errors.push(`Unknown MN Era III/IV dossier section: ${person.id}.${sectionId}`) })
    if (person.characterAndReputation) {
      const translated = record.characterAndReputation
      if (!translated?.overview?.trim() || !translated?.caution?.trim() || translated?.traits?.length !== person.characterAndReputation.traits.length) errors.push(`Incomplete MN character and reputation presentation: ${person.id}`)
      translated?.traits?.forEach((trait,index) => { if (!trait.label?.trim() || !trait.summary?.trim() || trait.sourceIds || trait.treatment) errors.push(`Invalid MN reputation trait presentation: ${person.id}[${index}]`) })
    }
  })
  personRelationships.forEach((relationship) => {
    if (!people.some((person) => person.id === relationship.personId) || !people.some((person) => person.id === relationship.relatedPersonId)) errors.push(`Dangling canonical relationship endpoint: ${relationship.personId}|${relationship.relatedPersonId}`)
  })
  const terminologyEntries = Object.entries(terminology ?? {})
  if (new Set(terminologyEntries.map(([key]) => key)).size !== terminologyEntries.length) errors.push('Duplicate Mongolian terminology key.')
  terminologyEntries.forEach(([key, value]) => { if (typeof value !== 'string' || !value.trim()) errors.push(`Empty Mongolian terminology value: ${key}`) })
  const fallbackProof = mergeLocaleValues({ translated: 'English', missing: 'English fallback', empty: 'English fallback' }, { translated: 'Монгол', empty: '' })
  if (fallbackProof.translated !== 'Монгол' || fallbackProof.missing !== 'English fallback' || fallbackProof.empty !== 'English fallback') errors.push('Per-key English fallback validation failed.')
  return errors
}
