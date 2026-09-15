import { campaigns } from '../data/campaigns'
import { chapters } from '../data/chapters'
import { cultureTopics } from '../data/cultureTopics'
import { eras } from '../data/eras'
import { events } from '../data/events'
import { objects } from '../data/objects'
import { people } from '../data/people'
import { dossierPersonIds } from '../data/personPresentation'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { organizations } from '../data/organizations'
import { companies } from '../data/companies'
import { claims } from '../data/claims'
import { getChapterHref, getCampaignHref, getClaimHref, getCompanyHref, getEntityHref, getEventHref, getOrganizationHref, getPersonHref } from '../data/entityRoutes'
import { getLocalizedEntity } from '../data/entityLocalization'
import { getLocalizedEvent } from '../data/eventLocalization'
import { getLocalizedPerson } from '../data/personLocalization'
import { getLocalizedCampaign, getLocalizedClaim, getLocalizedCompany, getLocalizedOrganization } from '../data/supportingLocalization'
import { chaptersMn } from '../data/locales/mn/chapters'
import { cultureEn } from '../data/locales/en/culture'
import { cultureMn } from '../data/locales/mn/culture'
import { entitiesMn } from '../data/locales/mn/entities'
import { erasEn } from '../data/locales/en/eras'
import { erasMn } from '../data/locales/mn/eras'
import { eventsMn } from '../data/locales/mn/events'
import { peopleMn } from '../data/locales/mn/people'
import { supportingEn } from '../data/locales/en/supporting'
import { supportingMn } from '../data/locales/mn/supporting'
import { SEARCH_TYPES } from './searchConfig'
import { normalizeSearchText, parsePeriodBounds, uniqueTexts } from './normalizeSearchText'

function isVisitorPublic(record) {
  if (!record?.id || String(record.id).startsWith('demo-')) return false
  if (record.status === 'draft') return false
  if (record.status && record.status !== 'researched' && record.status !== 'verified' && record.status !== 'in-progress' && record.status !== 'complete') {
    return false
  }
  return true
}

function compact(values) {
  return uniqueTexts(values.flatMap((value) => (Array.isArray(value) ? value : [value])))
}

function joinSearchText(values) {
  return normalizeSearchText(compact(values).join(' '))
}

function titleForms(title) {
  return compact(String(title ?? '').split(/\s*\/\s*/))
}

function makeRecord({
  id,
  type,
  route,
  canonicalTitle,
  localizedTitle,
  aliases = [],
  localizedAliases = [],
  summary = '',
  localizedSummary = '',
  role = '',
  localizedRole = '',
  period = '',
  localizedPeriod = '',
  dateDisplay = '',
  eraIds = [],
  year = null,
  startYear = null,
  endYear = null,
  keywords = [],
  depth = 'reference',
}) {
  const titleAliases = compact([canonicalTitle, ...(aliases ?? [])])
  const localizedTitleAliases = compact([localizedTitle, ...(localizedAliases ?? [])])
  const inferredYears = parsePeriodBounds(period || dateDisplay)
  const searchText = joinSearchText([
    canonicalTitle,
    localizedTitle,
    ...titleAliases,
    ...localizedTitleAliases,
    summary,
    localizedSummary,
    role,
    localizedRole,
    period,
    localizedPeriod,
    dateDisplay,
    ...keywords,
  ])

  return {
    id,
    type,
    route,
    canonicalTitle,
    localizedTitle: localizedTitle || canonicalTitle,
    aliases: titleAliases.filter((name) => name !== canonicalTitle),
    localizedAliases: localizedTitleAliases.filter((name) => name !== (localizedTitle || canonicalTitle)),
    summary: summary || '',
    localizedSummary: localizedSummary || summary || '',
    role: role || '',
    localizedRole: localizedRole || role || '',
    period: period || '',
    localizedPeriod: localizedPeriod || period || '',
    dateDisplay: dateDisplay || '',
    eraIds: [...new Set((eraIds ?? []).filter(Boolean))],
    year,
    startYear: startYear ?? year ?? inferredYears.startYear,
    endYear: endYear ?? inferredYears.endYear,
    keywords: compact(keywords),
    searchText,
    depth,
    normalizedCanonicalTitle: normalizeSearchText(canonicalTitle),
    normalizedLocalizedTitle: normalizeSearchText(localizedTitle || canonicalTitle),
    normalizedTitleForms: uniqueTexts([
      ...titleForms(canonicalTitle),
      ...titleForms(localizedTitle || canonicalTitle),
    ]).map(normalizeSearchText),
    normalizedAliases: compact([...titleAliases, ...localizedTitleAliases]).map(normalizeSearchText),
  }
}

function eraIdsFrom(record) {
  if (record.eraIds?.length) return record.eraIds
  return record.eraId ? [record.eraId] : []
}

function buildEraRecords() {
  return eras.map((era) => {
    const en = erasEn.records?.[era.id] ?? {}
    const mn = erasMn.records?.[era.id] ?? {}
    return makeRecord({
      id: era.id,
      type: SEARCH_TYPES.era,
      route: `/eras/${era.slug ?? era.id}`,
      canonicalTitle: era.title,
      localizedTitle: mn.title || era.title,
      summary: era.description || en.description || '',
      localizedSummary: mn.description || era.description || '',
      period: era.period,
      localizedPeriod: mn.period || era.period,
      eraIds: [era.id],
      startYear: era.startYear ?? null,
      endYear: era.endYear ?? null,
      keywords: [era.numeral, era.subtitle, mn.subtitle, en.subtitle],
      depth: 'detailed',
    })
  })
}

function buildChapterRecords() {
  return chapters.filter(isVisitorPublic).map((chapter) => {
    const mn = chaptersMn.records?.[chapter.id] ?? {}
    return makeRecord({
      id: chapter.id,
      type: SEARCH_TYPES.chapter,
      route: getChapterHref(chapter),
      canonicalTitle: chapter.title,
      localizedTitle: mn.title || chapter.title,
      aliases: [chapter.subtitle],
      localizedAliases: [mn.subtitle],
      summary: chapter.summary || '',
      localizedSummary: mn.summary || chapter.summary || '',
      period: chapter.period || '',
      localizedPeriod: mn.period || chapter.period || '',
      eraIds: [chapter.eraId],
      keywords: [chapter.number, chapter.introTitle, mn.introTitle],
      depth: chapter.status === 'complete' ? 'detailed' : 'reference',
    })
  })
}

function buildPersonRecords() {
  return people.filter((person) => isVisitorPublic(person) && (person.status === 'researched' || person.status === 'verified')).map((person) => {
    const localized = getLocalizedPerson(person, peopleMn)
    return makeRecord({
      id: person.id,
      type: SEARCH_TYPES.person,
      route: getPersonHref(person),
      canonicalTitle: person.title,
      localizedTitle: localized.displayName,
      aliases: [...(localized.canonicalAlternativeNames ?? []), ...(person.nameVariants ?? [])],
      localizedAliases: localized.localizedAlternativeNames,
      summary: person.summary || person.shortBio || '',
      localizedSummary: localized.summary || localized.shortBio || person.summary || '',
      role: person.role || '',
      localizedRole: localized.role || person.role || '',
      period: person.period || '',
      localizedPeriod: localized.period || person.period || '',
      eraIds: eraIdsFrom(person),
      keywords: [person.dynasticBranch],
      depth: person.profileType === 'story' ? 'story' : dossierPersonIds.has(person.id) ? 'detailed' : 'reference',
    })
  })
}

function buildEventRecords() {
  return events.filter((event) => isVisitorPublic(event) && (event.status === 'researched' || event.status === 'verified')).map((event) => {
    const localized = getLocalizedEvent(event, eventsMn)
    return makeRecord({
      id: event.id,
      type: SEARCH_TYPES.event,
      route: getEventHref(event),
      canonicalTitle: event.title,
      localizedTitle: localized.title,
      summary: event.summary || '',
      localizedSummary: localized.summary || event.summary || '',
      dateDisplay: event.dateDisplay || '',
      period: event.dateDisplay || '',
      localizedPeriod: localized.dateDisplay || event.dateDisplay || '',
      eraIds: eraIdsFrom(event),
      year: event.year ?? null,
      startYear: event.startYear ?? event.year ?? null,
      endYear: event.endYear ?? null,
      keywords: [event.type, event.importance],
      depth: event.importance === 'major' ? 'detailed' : 'reference',
    })
  })
}

function buildCampaignRecords() {
  return campaigns.filter(isVisitorPublic).map((campaign) => {
    const localized = getLocalizedCampaign(campaign, supportingMn)
    return makeRecord({
      id: campaign.id,
      type: SEARCH_TYPES.campaign,
      route: getCampaignHref(campaign),
      canonicalTitle: campaign.title,
      localizedTitle: localized.title,
      summary: campaign.summary || '',
      localizedSummary: localized.summary || campaign.summary || '',
      dateDisplay: campaign.dateDisplay || '',
      period: campaign.dateDisplay || '',
      localizedPeriod: localized.dateDisplay || campaign.dateDisplay || '',
      year: campaign.startYear ?? null,
      startYear: campaign.startYear ?? null,
      endYear: campaign.endYear ?? null,
      keywords: [campaign.theater, localized.theater, ...(campaign.stages ?? []).map((stage) => stage.title)],
      depth: 'reference',
    })
  })
}

function buildEntityRecords(records, type) {
  return records.filter((record) => isVisitorPublic(record) && (record.status === 'researched' || record.status === 'verified')).map((record) => {
    const localized = getLocalizedEntity(record, entitiesMn)
    const route = getEntityHref(record)
    return makeRecord({
      id: record.id,
      type,
      route,
      canonicalTitle: record.title,
      localizedTitle: localized.title,
      aliases: record.alternativeNames,
      localizedAliases: localized.alternativeNames,
      summary: record.summary || '',
      localizedSummary: localized.summary || record.summary || '',
      role: record.pathwayLabel || record.type || '',
      localizedRole: localized.pathwayLabel || localized.type || record.type || '',
      period: record.period || '',
      localizedPeriod: localized.period || record.period || '',
      eraIds: eraIdsFrom(record),
      startYear: record.startYear ?? record.foundedYear ?? null,
      endYear: record.endYear ?? null,
      keywords: [record.pathwayLabel],
      depth: 'reference',
    })
  }).filter((record) => record.route)
}

function buildCultureRecords() {
  return cultureTopics.map((topic) => {
    const en = cultureEn.topics?.[topic.id] ?? {}
    const mn = cultureMn.topics?.[topic.id] ?? {}
    return makeRecord({
      id: topic.id,
      type: SEARCH_TYPES.culture,
      route: `/culture/${topic.slug}`,
      canonicalTitle: en.title,
      localizedTitle: mn.title || en.title,
      summary: en.summary || '',
      localizedSummary: mn.summary || en.summary || '',
      eraIds: topic.eraIds ?? [],
      keywords: [...(en.questions ?? []), ...(mn.questions ?? [])],
      depth: 'detailed',
    })
  })
}

function buildOrganizationRecords() {
  return organizations.filter((record) => isVisitorPublic(record) && (record.status === 'researched' || record.status === 'verified')).map((record) => {
    const localized = getLocalizedOrganization(record, supportingMn)
    const english = getLocalizedOrganization(record, supportingEn)
    return makeRecord({
      id: record.id,
      type: SEARCH_TYPES.organization,
      route: getOrganizationHref(record),
      canonicalTitle: record.title,
      localizedTitle: localized.title,
      aliases: record.alternativeNames,
      localizedAliases: localized.alternativeNames,
      summary: record.summary || '',
      localizedSummary: localized.summary || record.summary || '',
      role: english.type || record.type || '',
      localizedRole: localized.type || record.type || '',
      period: record.period || '',
      localizedPeriod: localized.period || record.period || '',
      eraIds: eraIdsFrom(record),
      startYear: record.startYear ?? null,
      endYear: record.endYear ?? null,
      keywords: [record.type, ...(record.nameHistory ?? []).map((item) => item.title)],
      depth: 'reference',
    })
  }).filter((record) => record.route)
}

function buildCompanyRecords() {
  return companies.filter((record) => isVisitorPublic(record) && (record.status === 'researched' || record.status === 'verified')).map((record) => {
    const localized = getLocalizedCompany(record, supportingMn)
    const english = getLocalizedCompany(record, supportingEn)
    return makeRecord({
      id: record.id,
      type: SEARCH_TYPES.company,
      route: getCompanyHref(record),
      canonicalTitle: record.title,
      localizedTitle: localized.title,
      aliases: record.alternativeNames,
      localizedAliases: localized.alternativeNames,
      summary: record.summary || '',
      localizedSummary: localized.summary || record.summary || '',
      role: english.companyType || record.companyType || '',
      localizedRole: localized.companyType || record.companyType || '',
      period: record.period || '',
      localizedPeriod: localized.period || record.period || '',
      eraIds: eraIdsFrom(record),
      startYear: record.foundedYear ?? record.startYear ?? null,
      endYear: record.endYear ?? null,
      keywords: [record.companyType, ...(record.ownershipHistory ?? []).map((item) => item.period)],
      depth: 'reference',
    })
  }).filter((record) => record.route)
}

function buildClaimRecords() {
  return claims.filter(isVisitorPublic).map((claim) => {
    const localized = getLocalizedClaim(claim, supportingMn)
    return makeRecord({
      id: claim.id,
      type: SEARCH_TYPES.claim,
      route: getClaimHref(claim),
      canonicalTitle: claim.title,
      localizedTitle: localized.title,
      summary: claim.text || '',
      localizedSummary: localized.text || claim.text || '',
      role: claim.treatment || '',
      localizedRole: localized.treatment || claim.treatment || '',
      keywords: [claim.treatment],
      depth: 'reference',
    })
  }).filter((record) => record.route)
}

let cachedIndex = null

export function buildSearchIndex() {
  const records = [
    ...buildEraRecords(),
    ...buildChapterRecords(),
    ...buildPersonRecords(),
    ...buildEventRecords(),
    ...buildCampaignRecords(),
    ...buildEntityRecords(polities, SEARCH_TYPES.polity),
    ...buildEntityRecords(places, SEARCH_TYPES.place),
    ...buildEntityRecords(sites, SEARCH_TYPES.site),
    ...buildEntityRecords(objects, SEARCH_TYPES.object),
    ...buildCultureRecords(),
    ...buildOrganizationRecords(),
    ...buildCompanyRecords(),
    ...buildClaimRecords(),
  ]

  return Object.freeze(records.map((record) => Object.freeze(record)))
}

export function getSearchIndex() {
  if (!cachedIndex) cachedIndex = buildSearchIndex()
  return cachedIndex
}

export function getSearchIndexCounts(index = getSearchIndex()) {
  const counts = Object.fromEntries(Object.values(SEARCH_TYPES).map((type) => [type, 0]))
  index.forEach((record) => {
    counts[record.type] = (counts[record.type] ?? 0) + 1
  })
  return { ...counts, total: index.length }
}
