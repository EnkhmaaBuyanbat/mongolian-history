import { eras } from '../data/eras'
import { getSearchFilter, SEARCH_GROUP_ORDER } from './searchConfig'
import { getSearchIndex } from './buildSearchIndex'
import { normalizeSearchText, parseYearQuery, recordCoversYear, yearAppearsInText } from './normalizeSearchText'

const eraNumeralById = Object.fromEntries(eras.map((era) => [era.id, era.numeral]))
const DEPTH_TIE = { story: 2, detailed: 1, reference: 0 }
const TYPE_TIE = {
  person: 6,
  place: 5,
  site: 5,
  polity: 4,
  era: 3,
  chapter: 3,
  culture: 2,
  object: 2,
  campaign: 1,
  event: 1,
}

const RANK_EXACT_TITLE = 600
const RANK_EXACT_ALIAS = 500
const RANK_TITLE_PREFIX = 400
const RANK_ALIAS_PREFIX = 300
const RANK_TITLE_CONTAINS = 200
const RANK_TEXT_CONTAINS = 100

function tokensOf(haystack) {
  return String(haystack ?? '').split(' ').filter(Boolean)
}

function matchRank(haystack, needle, { exact, prefix, contains }) {
  if (!haystack || !needle) return 0
  if (haystack === needle) return exact
  const tokens = tokensOf(haystack)
  if (tokens[0] === needle || haystack.startsWith(`${needle} `) || tokens[0]?.startsWith(needle)) return prefix
  if (tokens.includes(needle) || tokens.some((token) => token.startsWith(needle)) || haystack.includes(needle)) {
    return contains
  }
  return 0
}

function scoreRecord(record, query, year) {
  const needle = normalizeSearchText(query)
  if (!needle && year == null) return 0

  let score = 0

  if (needle) {
    const titleScore = Math.max(
      0,
      ...record.normalizedTitleForms.map((title) => matchRank(title, needle, {
        exact: RANK_EXACT_TITLE,
        prefix: RANK_TITLE_PREFIX,
        contains: RANK_TITLE_CONTAINS,
      })),
    )
    const aliasScore = Math.max(
      0,
      ...record.normalizedAliases
        .filter((alias) => !record.normalizedTitleForms.includes(alias))
        .map((alias) => matchRank(alias, needle, {
          exact: RANK_EXACT_ALIAS,
          prefix: RANK_ALIAS_PREFIX,
          contains: RANK_TITLE_CONTAINS,
        })),
    )
    score = Math.max(titleScore, aliasScore)
    if (score === 0 && record.searchText.includes(needle)) score = RANK_TEXT_CONTAINS
  }

  if (year != null && recordCoversYear(record, year)) {
    if (!needle) score = Math.max(score, RANK_TEXT_CONTAINS)
    if (record.year === year) score += 24
    else if (record.startYear === year || record.endYear === year) score += 16
    else if (
      yearAppearsInText(record.canonicalTitle, year)
      || yearAppearsInText(record.localizedTitle, year)
      || yearAppearsInText(record.dateDisplay, year)
      || yearAppearsInText(record.period, year)
    ) score += 18
    else score += 8
  }

  return score
}

export function searchRecords(query, { type = 'all', limit = Infinity, index = getSearchIndex() } = {}) {
  const filter = getSearchFilter(type)
  const year = parseYearQuery(query)
  const needle = normalizeSearchText(query)
  if (!needle && year == null) return []

  const pool = filter.types ? index.filter((record) => filter.types.includes(record.type)) : index
  const ranked = pool.map((record) => ({ record, score: scoreRecord(record, query, year) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score
      const depth = (DEPTH_TIE[right.record.depth] ?? 0) - (DEPTH_TIE[left.record.depth] ?? 0)
      if (depth) return depth
      const typeTie = (TYPE_TIE[right.record.type] ?? 0) - (TYPE_TIE[left.record.type] ?? 0)
      if (typeTie) return typeTie
      return left.record.id.localeCompare(right.record.id)
    })

  return ranked.slice(0, limit).map((entry) => entry.record)
}

export function groupSearchResults(records) {
  const groups = []
  const byType = new Map()
  records.forEach((record) => {
    const list = byType.get(record.type) ?? []
    list.push(record)
    byType.set(record.type, list)
  })
  SEARCH_GROUP_ORDER.forEach((type) => {
    const items = byType.get(type)
    if (items?.length) groups.push({ type, items })
  })
  return groups
}

export function displayTitle(record, locale) {
  const title = locale === 'mn' ? record.localizedTitle : record.canonicalTitle
  if ((record.type === 'event' || record.type === 'campaign') && record.dateDisplay) {
    const yearToken = record.year != null ? String(Math.abs(record.year)) : ''
    if (yearToken && title.includes(yearToken)) return title
    if (title.includes(record.dateDisplay)) return title
    return `${record.dateDisplay} — ${title}`
  }
  return title
}

export function displayAlternateTitle(record, locale) {
  const primary = displayTitle(record, locale)
  const other = locale === 'mn' ? record.canonicalTitle : record.localizedTitle
  if (!other || normalizeSearchText(other) === normalizeSearchText(primary)) return ''
  if (primary.includes(other)) return ''
  return other
}

export function displaySummary(record, locale) {
  if (locale === 'mn') return record.localizedRole || record.localizedSummary || record.role || record.summary
  return record.role || record.summary
}

export function displayPeriod(record, locale) {
  if (record.dateDisplay) return record.dateDisplay
  return locale === 'mn' ? record.localizedPeriod : record.period
}

export function displayMeta(record, locale, eraLabel) {
  const eraParts = record.eraIds
    .map((id) => eraNumeralById[id])
    .filter(Boolean)
    .map((numeral) => `${eraLabel} ${numeral}`)
  const period = displayPeriod(record, locale)
  const title = displayTitle(record, locale)
  const periodPart = period && !title.includes(period) ? period : ''
  return [...new Set([...eraParts, periodPart].filter(Boolean))].join(' · ')
}

export function groupHeading(type, copy) {
  const filterKey = {
    person: 'people',
    event: 'events',
    campaign: 'events',
    era: 'eras',
    chapter: 'eras',
    place: 'places',
    site: 'places',
    polity: 'places',
    culture: 'culture',
    object: 'evidence',
  }[type]
  return copy.filters?.[filterKey] || copy.types?.[type] || type
}
