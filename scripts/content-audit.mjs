import { writeFileSync } from 'node:fs'
import { people } from '../src/data/people.js'
import { chapters } from '../src/data/chapters.js'
import { events } from '../src/data/events.js'
import { sources } from '../src/data/sources.js'
import { personRelationships } from '../src/data/personRelationships.js'
import { familyTreePersonIds } from '../src/data/familyTreePeople.js'

const dossierPersonIds = new Set([
  'person-modu-chanyu', 'person-temujin-chinggis-khan', 'person-sorghaghtani-beki',
  'person-kul-tegin', 'person-zanabazar', 'person-batmonkh', 'person-bilge-khagan',
  'person-bumin-qaghan', 'person-tanshihuai', 'person-yujiulu-shelun', 'person-borte',
  'person-jamukha', 'person-toghrul-ong-khan', 'person-ogedei-khan', 'person-mongke-khan',
  'person-tolui', 'person-qubilai', 'person-mandukhai-khatun', 'person-hulegu',
  'person-chabi', 'person-zhenjin', 'person-temur-oljeytu', 'person-abaqa',
  'person-oz-beg', 'person-jani-beg', 'person-dayan-khan', 'person-altan-khan',
  'person-ligden-khan', 'person-esen-taishi', 'person-hong-taiji',
  'person-kangxi-emperor', 'person-qianlong-emperor',
])
import { peopleMn } from '../src/data/locales/mn/people.js'
import { chaptersMn } from '../src/data/locales/mn/chapters.js'
import { eventsMn } from '../src/data/locales/mn/events.js'
import { sourcesMn } from '../src/data/locales/mn/sources.js'
import { personRelationshipsMn } from '../src/data/locales/mn/personRelationships.js'
import { entitiesMn } from '../src/data/locales/mn/entities.js'
import { cultureMn } from '../src/data/locales/mn/culture.js'
import { erasMn } from '../src/data/locales/mn/eras.js'
import { supportingMn } from '../src/data/locales/mn/supporting.js'
import { commonMn } from '../src/data/locales/mn/common.js'
import { homeMn } from '../src/data/locales/mn/home.js'
import { familyTreeMn } from '../src/data/locales/mn/familyTree.js'
import { aboutMn } from '../src/data/locales/mn/about.js'
import { searchMn } from '../src/data/locales/mn/search.js'
import { experienceMn } from '../src/data/locales/mn/experience.js'
import { evidenceMn } from '../src/data/locales/mn/evidence.js'
import { reconstructionsMn } from '../src/data/locales/mn/reconstructions.js'
import { eraWorldsMn } from '../src/data/locales/mn/eraWorlds.js'
import { heroScenesMn } from '../src/data/locales/mn/heroScenes.js'
import { mediaMn } from '../src/data/locales/mn/media.js'
import { claims } from '../src/data/claims.js'
import { campaigns } from '../src/data/campaigns.js'
import { organizations } from '../src/data/organizations.js'
import { companies } from '../src/data/companies.js'
import { polities } from '../src/data/polities.js'
import { places } from '../src/data/places.js'
import { sites } from '../src/data/sites.js'
import { objects } from '../src/data/objects.js'
import { media } from '../src/data/media.js'
import { mapRegions } from '../src/data/mapRegions.js'
import { reconstructions } from '../src/data/reconstructions.js'
import { educationalDiagrams } from '../src/data/chapterVisuals.js'

const publicPeople = people.filter((person) => person.status === 'researched' || person.status === 'verified')
const publicEvents = events.filter((event) => event.status === 'researched' || event.status === 'verified')
const sourceIds = new Set(sources.map((source) => source.id))
const personIds = new Set(people.map((person) => person.id))
const ENGLISH_WORD = /\b(the|and|with|from|this|that|which|were|was|into|their|have|been|than|also|for the|of the|in the|to the|not a|should not|must not)\b/i
const LATIN = /[A-Za-z]/g
const CYRILLIC = /[\u0400-\u04FF]/g
const EVIDENCE_CODE = /^(ESTABLISHED|INTERPRETED|DEBATED|SOURCE ACCOUNT|TRADITION|HIGH|APPROXIMATE|SCHEMATIC|SOURCE_BACKED|NO_RELIABLE_PORTRAIT|PRIMARY_DOCUMENT|HISTORICAL_PHOTOGRAPH|HISTORICAL_RECONSTRUCTION|ATMOSPHERIC|CONTEXTUAL|IMMERSIVE|LATER|MODERN|RELIGIOUS|ART_HISTORICAL)([ /_&·-]+[A-Z][A-Z /_&·-]*)*$/
const SKIP_PATH = /(^|\.)(confidence|evidenceLabel|routeConfidence|treatments|roles|types\.|importance)($|\.|\[)/i

function collectStrings(value, path, acc) {
  if (typeof value === 'string') {
    acc.push({ path, text: value })
    return
  }
  if (Array.isArray(value)) {
    value.forEach((child, index) => collectStrings(child, `${path}[${index}]`, acc))
    return
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => collectStrings(child, `${path}.${key}`, acc))
  }
}

function latinRatio(text) {
  const latin = (text.match(LATIN) || []).length
  const cyrillic = (text.match(CYRILLIC) || []).length
  const total = latin + cyrillic
  return { latin, cyrillic, total, ratio: total ? latin / total : 0 }
}

function classifyLeftover(text, path) {
  const trimmed = text.trim()
  if (!trimmed || SKIP_PATH.test(path)) return null
  if (EVIDENCE_CODE.test(trimmed)) return 'evidence-code'
  const stats = latinRatio(trimmed)
  if (stats.cyrillic === 0 && stats.latin >= 16 && trimmed.length >= 24 && ENGLISH_WORD.test(trimmed)) return 'latin-only'
  if (stats.cyrillic === 0 && stats.latin >= 28 && trimmed.length >= 40) return 'latin-only'
  if (stats.cyrillic > 0 && stats.latin >= 8 && ENGLISH_WORD.test(trimmed) && stats.ratio >= 0.12) return 'mixed-english'
  if (stats.cyrillic > 0 && stats.latin >= 18 && stats.ratio >= 0.28 && ENGLISH_WORD.test(trimmed)) return 'heavy-latin'
  return null
}

function refsOf(record) {
  if (!record) return []
  return [...new Set([
    ...(record.sourceRefs ?? []),
    ...(record.sourceIds ?? []),
    ...(record.sources ?? []),
    ...(record.sourceSupport ?? []).map((item) => item.sourceId),
  ].filter(Boolean))]
}

function walkRefs(value, acc = []) {
  if (!value || typeof value !== 'object') return acc
  if (Array.isArray(value)) {
    value.forEach((child) => walkRefs(child, acc))
    return acc
  }
  acc.push(...refsOf(value))
  Object.values(value).forEach((child) => {
    if (child && typeof child === 'object') walkRefs(child, acc)
  })
  return acc
}

const peopleFindings = publicPeople.map((person) => {
  const mn = peopleMn.records?.[person.id] ?? {}
  const refs = refsOf(person)
  const nestedRefs = walkRefs(person)
  const allRefs = [...new Set([...refs, ...nestedRefs])]
  const broken = allRefs.filter((id) => !sourceIds.has(id))
  const mnSectionIds = Object.keys(mn.biographySections ?? {})
  const enSectionIds = (person.biographySections ?? []).map((section) => section.id)
  return {
    id: person.id,
    title: person.title,
    profileType: person.profileType || 'unset',
    eraId: person.eraId,
    status: person.status,
    dossier: dossierPersonIds.has(person.id),
    tree: familyTreePersonIds.includes(person.id),
    hasSummary: Boolean(person.summary || person.shortBio),
    hasRole: Boolean(person.role),
    hasPeriod: Boolean(person.period || person.periodDisplay),
    biographySections: enSectionIds.length,
    sourceCount: allRefs.length,
    brokenSources: broken,
    mnName: Boolean(mn.displayName),
    mnRole: Boolean(mn.role),
    mnSummary: Boolean(mn.summary || mn.shortBio),
    mnPeriod: Boolean(mn.period || mn.periodDisplay),
    mnSections: mnSectionIds.length,
    missingMnSections: enSectionIds.filter((id) => !mn.biographySections?.[id]),
  }
})

const chapterFindings = chapters.map((chapter) => {
  const mn = chaptersMn.records?.[chapter.id] ?? {}
  const sectionPresentation = mn.sectionPresentation ?? {}
  const sections = chapter.sections ?? []
  const chapterSources = refsOf(chapter)
  const sectionSources = sections.flatMap((section) => refsOf(section))
  const nestedSources = walkRefs(chapter)
  const allSources = [...new Set([...chapterSources, ...sectionSources, ...nestedSources])]
  const missingMnSections = sections.filter((section) => !sectionPresentation[section.id]?.title).map((section) => section.id)
  const emptySourceSections = sections.filter((section) => !refsOf(section).length).map((section) => section.id)
  return {
    id: chapter.id,
    title: chapter.title,
    eraId: chapter.eraId,
    status: chapter.status,
    sections: sections.length,
    sourceCount: allSources.length,
    brokenSources: allSources.filter((id) => !sourceIds.has(id)),
    emptySourceSections,
    missingMnSections,
    mnTitle: Boolean(mn.title),
    mnIntro: Boolean(mn.intro),
  }
})

const relationshipFindings = personRelationships.map((rel) => {
  const missingPeople = [rel.personId, rel.relatedPersonId].filter((id) => !personIds.has(id))
  const allSources = [...new Set([
    ...(rel.sourceIds ?? []),
    ...(rel.phases ?? []).flatMap((phase) => phase.sourceIds ?? []),
  ])]
  const phaseTypes = (rel.phases ?? []).map((phase) => phase.type)
  const missingPhaseTypeMn = phaseTypes.filter((type) => !personRelationshipsMn.types?.[type])
  return {
    key: `${rel.personId} → ${rel.relatedPersonId}`,
    type: rel.type,
    label: rel.label,
    confidence: rel.confidence,
    hasDescription: Boolean(rel.description),
    hasContext: Boolean(rel.relationshipContext),
    phaseCount: rel.phases?.length ?? 0,
    missingPeople,
    sourceCount: allSources.length,
    brokenSources: allSources.filter((id) => !sourceIds.has(id)),
    missingTypeMn: !personRelationshipsMn.types?.[rel.type],
    missingLabelMn: !personRelationshipsMn.labels?.[rel.label],
    missingPhaseTypeMn,
    englishPhasePeriods: (rel.phases ?? []).filter((phase) => /[A-Za-z]{4,}/.test(phase.period ?? '')).map((phase) => phase.period),
  }
})

const usedSourceIds = new Set()
function markSources(ids) {
  ids.forEach((id) => { if (id) usedSourceIds.add(id) })
}
;[people, chapters, events, personRelationships, polities, places, sites, objects, campaigns, organizations, companies, media, mapRegions, reconstructions, educationalDiagrams].forEach((list) => {
  list.forEach((record) => markSources(walkRefs(record)))
})
claims.forEach((claim) => markSources(refsOf(claim)))
sources.forEach((source) => {
  source.relatedEntityIds?.forEach((id) => {
    if (id.startsWith('source-')) usedSourceIds.add(id)
  })
})

const leftover = []
const evidenceCodes = []
const mnTrees = [
  ['mn.people', peopleMn],
  ['mn.chapters', chaptersMn],
  ['mn.events', eventsMn],
  ['mn.entities', entitiesMn],
  ['mn.culture', cultureMn],
  ['mn.eras', erasMn],
  ['mn.supporting', supportingMn],
  ['mn.common', commonMn],
  ['mn.home', homeMn],
  ['mn.familyTree', familyTreeMn],
  ['mn.about', aboutMn],
  ['mn.search', searchMn],
  ['mn.personRelationships', personRelationshipsMn],
  ['mn.experience', experienceMn],
  ['mn.reconstructions', reconstructionsMn],
  ['mn.eraWorlds', eraWorldsMn],
  ['mn.heroScenes', heroScenesMn],
  ['mn.media', mediaMn],
]
mnTrees.forEach(([root, tree]) => {
  const strings = []
  collectStrings(tree, root, strings)
  strings.forEach((item) => {
    const kind = classifyLeftover(item.text, item.path)
    if (kind === 'evidence-code') {
      evidenceCodes.push({ path: item.path, preview: item.text.slice(0, 80) })
      return
    }
    if (!kind) return
    leftover.push({ path: item.path, kind, preview: item.text.replace(/\s+/g, ' ').slice(0, 160) })
  })
})

const uniquePhaseTypes = [...new Set(personRelationships.flatMap((rel) => (rel.phases ?? []).map((phase) => phase.type)))]
const uniqueRelTypes = [...new Set(personRelationships.map((rel) => rel.type))]
const uniqueRelLabels = [...new Set(personRelationships.map((rel) => rel.label))]

const dossiers = peopleFindings.filter((person) => person.dossier)
const peopleNoSources = peopleFindings.filter((person) => person.sourceCount === 0)
const peopleThin = peopleFindings.filter((person) => person.profileType !== 'reference' && (!person.hasSummary || !person.hasRole))
const dossiersWithoutSections = dossiers.filter((person) => person.biographySections === 0)
const dossiersMnMismatch = dossiers.filter((person) => person.biographySections > 0 && person.missingMnSections.length)
const referencePeople = peopleFindings.filter((person) => person.profileType === 'reference')
const treeWithoutRel = familyTreePersonIds.filter((id) => !personRelationships.some((rel) => rel.personId === id || rel.relatedPersonId === id))
const publicWithoutRel = publicPeople
  .filter((person) => !personRelationships.some((rel) => rel.personId === person.id || rel.relatedPersonId === person.id))
  .map((person) => person.id)

const chaptersInProgress = chapterFindings.filter((chapter) => chapter.status === 'in-progress')
const chaptersComplete = chapterFindings.filter((chapter) => chapter.status === 'complete')
const chaptersNoSources = chapterFindings.filter((chapter) => chapter.sourceCount === 0)
const chaptersMissingMn = chapterFindings.filter((chapter) => chapter.missingMnSections.length)
const chaptersEmptySectionSources = chapterFindings.filter((chapter) => chapter.emptySourceSections.length)

const relBrokenPeople = relationshipFindings.filter((rel) => rel.missingPeople.length)
const relMissingMn = relationshipFindings.filter((rel) => rel.missingTypeMn || rel.missingLabelMn || rel.missingPhaseTypeMn.length)
const relNoSources = relationshipFindings.filter((rel) => rel.sourceCount === 0)
const relEnglishLeak = relationshipFindings.filter((rel) => rel.hasDescription || rel.hasContext || rel.englishPhasePeriods.length || rel.missingPhaseTypeMn.length)

const leftoverByKind = leftover.reduce((acc, item) => {
  acc[item.kind] = (acc[item.kind] ?? 0) + 1
  return acc
}, {})
const leftoverByRoot = leftover.reduce((acc, item) => {
  const root = item.path.split('.')[1]
  acc[root] = (acc[root] ?? 0) + 1
  return acc
}, {})

const missingMnPerspectives = sources.filter((source) => (source.perspective || source.temporalRelationship) && !sourcesMn[source.id])
const unused = sources.filter((source) => !usedSourceIds.has(source.id))
const brokenAll = [
  ...peopleFindings.flatMap((person) => person.brokenSources.map((id) => ({ from: person.id, id }))),
  ...chapterFindings.flatMap((chapter) => chapter.brokenSources.map((id) => ({ from: chapter.id, id }))),
  ...relationshipFindings.flatMap((rel) => rel.brokenSources.map((id) => ({ from: rel.key, id }))),
  ...publicEvents.flatMap((event) => refsOf(event).filter((id) => !sourceIds.has(id)).map((id) => ({ from: event.id, id }))),
]

const report = {
  generatedAt: '2026-09-15',
  people: {
    canonical: people.length,
    public: publicPeople.length,
    dossiers: dossierPersonIds.size,
    familyTree: familyTreePersonIds.length,
    story: publicPeople.filter((person) => person.profileType === 'story' || person.storyId).length,
    biography: publicPeople.filter((person) => person.profileType === 'biography').length,
    reference: referencePeople.length,
    unsetType: publicPeople.filter((person) => !person.profileType).length,
    withBiographySections: peopleFindings.filter((person) => person.biographySections > 0).length,
    noSources: peopleNoSources.map((person) => ({ id: person.id, profileType: person.profileType })),
    thinCopy: peopleThin.map((person) => ({ id: person.id, profileType: person.profileType, hasRole: person.hasRole, hasSummary: person.hasSummary })),
    dossiersWithoutSections: dossiersWithoutSections.map((person) => ({ id: person.id, eraId: person.eraId })),
    dossiersMnMismatch: dossiersMnMismatch.map((person) => ({ id: person.id, en: person.biographySections, mn: person.mnSections, missing: person.missingMnSections })),
    referenceIds: referencePeople.map((person) => person.id),
    mnMissingRole: peopleFindings.filter((person) => person.hasRole && !person.mnRole).map((person) => person.id),
    mnMissingSummary: peopleFindings.filter((person) => person.hasSummary && !person.mnSummary).map((person) => person.id),
  },
  chapters: {
    total: chapters.length,
    complete: chaptersComplete.length,
    inProgress: chaptersInProgress.length,
    noSources: chaptersNoSources.map((chapter) => chapter.id),
    inProgress: chaptersInProgress.map((chapter) => ({
      id: chapter.id,
      eraId: chapter.eraId,
      sources: chapter.sourceCount,
      sections: chapter.sections,
      emptySourceSections: chapter.emptySourceSections.length,
    })),
    missingMnSections: chaptersMissingMn.map((chapter) => ({ id: chapter.id, missing: chapter.missingMnSections })),
    emptySourceSectionCount: chaptersEmptySectionSources.reduce((sum, chapter) => sum + chapter.emptySourceSections.length, 0),
    emptySourceSectionSample: chaptersEmptySectionSources.slice(0, 12).map((chapter) => ({
      id: chapter.id,
      empty: chapter.emptySourceSections,
    })),
  },
  relationships: {
    total: personRelationships.length,
    uniqueTypes: uniqueRelTypes,
    uniqueLabels: uniqueRelLabels.length,
    uniquePhaseTypes,
    missingPhaseTypeMn: uniquePhaseTypes.filter((type) => !personRelationshipsMn.types?.[type]),
    danglingPeople: relBrokenPeople,
    missingMn: relMissingMn.map((rel) => ({
      key: rel.key,
      type: rel.type,
      label: rel.label,
      missingTypeMn: rel.missingTypeMn,
      missingLabelMn: rel.missingLabelMn,
      missingPhaseTypeMn: rel.missingPhaseTypeMn,
    })),
    noSources: relNoSources.map((rel) => rel.key),
    englishVisitorLeaks: relEnglishLeak.map((rel) => ({
      key: rel.key,
      description: rel.hasDescription,
      context: rel.hasContext,
      phaseTypes: rel.missingPhaseTypeMn,
      phasePeriods: rel.englishPhasePeriods,
    })),
    treeWithoutRel,
    publicWithoutRelCount: publicWithoutRel.length,
    publicWithoutRelSample: publicWithoutRel.slice(0, 24),
  },
  sources: {
    total: sources.length,
    verified: sources.filter((source) => source.status === 'verified').length,
    researched: sources.filter((source) => source.status === 'researched').length,
    draft: sources.filter((source) => source.status === 'draft').length,
    withMnPerspective: Object.keys(sourcesMn).length,
    unused: unused.map((source) => source.id),
    missingMnPerspective: missingMnPerspectives.map((source) => source.id),
    brokenRefs: brokenAll,
  },
  leftover: {
    total: leftover.length,
    byKind: leftoverByKind,
    byRoot: leftoverByRoot,
    samples: leftover.slice(0, 50),
    evidenceCodeHits: evidenceCodes.length,
  },
  events: {
    public: publicEvents.length,
    noSources: publicEvents.filter((event) => !refsOf(event).length).map((event) => event.id),
  },
}

writeFileSync(new URL('./content-audit-report.json', import.meta.url), JSON.stringify(report, null, 2))
console.log(JSON.stringify({
  people: {
    public: report.people.public,
    dossiers: report.people.dossiers,
    noSources: report.people.noSources.length,
    thinCopy: report.people.thinCopy.length,
    dossiersWithoutSections: report.people.dossiersWithoutSections.length,
    dossiersMnMismatch: report.people.dossiersMnMismatch.length,
    unsetType: report.people.unsetType,
    reference: report.people.reference,
    mnMissingRole: report.people.mnMissingRole.length,
    mnMissingSummary: report.people.mnMissingSummary.length,
  },
  chapters: {
    total: report.chapters.total,
    complete: report.chapters.complete,
    inProgress: report.chapters.inProgress.length,
    noSources: report.chapters.noSources.length,
    missingMn: report.chapters.missingMnSections.length,
    emptySourceSections: report.chapters.emptySourceSectionCount,
  },
  relationships: {
    total: report.relationships.total,
    dangling: report.relationships.danglingPeople.length,
    missingMn: report.relationships.missingMn.length,
    noSources: report.relationships.noSources.length,
    englishLeaks: report.relationships.englishVisitorLeaks.length,
    missingPhaseTypes: report.relationships.missingPhaseTypeMn,
    treeWithoutRel: report.relationships.treeWithoutRel,
    publicWithoutRel: report.relationships.publicWithoutRelCount,
  },
  sources: {
    total: report.sources.total,
    mn: report.sources.withMnPerspective,
    unused: report.sources.unused.length,
    missingMn: report.sources.missingMnPerspective.length,
    broken: report.sources.brokenRefs.length,
  },
  leftover: report.leftover,
  eventsNoSources: report.events.noSources.length,
}, null, 2))
