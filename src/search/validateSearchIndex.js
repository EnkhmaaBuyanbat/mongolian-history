import { campaigns } from '../data/campaigns'
import { chapters } from '../data/chapters'
import { cultureTopics } from '../data/cultureTopics'
import { eras } from '../data/eras'
import { events } from '../data/events'
import { objects } from '../data/objects'
import { people } from '../data/people'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { organizations } from '../data/organizations'
import { companies } from '../data/companies'
import { claims } from '../data/claims'
import { getSearchIndex, getSearchIndexCounts } from './buildSearchIndex'
import { SEARCH_TYPES } from './searchConfig'

const ROUTE_PATTERNS = [
  /^\/eras\/[a-z0-9-]+$/i,
  /^\/eras\/[a-z0-9-]+\/chapters\/[a-z0-9-]+$/i,
  /^\/people\/[a-z0-9-]+$/i,
  /^\/polities\/[a-z0-9-]+$/i,
  /^\/places\/[a-z0-9-]+$/i,
  /^\/sites\/[a-z0-9-]+$/i,
  /^\/objects\/[a-z0-9-]+$/i,
  /^\/culture\/[a-z0-9-]+$/i,
  /^\/organizations\/[a-z0-9-]+$/i,
  /^\/companies\/[a-z0-9-]+$/i,
  /^\/claims\/[a-z0-9-]+$/i,
  /^\/timeline(?:\?[a-z0-9%=._&-]+)?$/i,
]

function isValidRoute(route) {
  return typeof route === 'string' && ROUTE_PATTERNS.some((pattern) => pattern.test(route))
}

function expectedPublicCount(records, extraFilter = () => true) {
  return records.filter((record) => {
    if (!record?.id || String(record.id).startsWith('demo-')) return false
    if (record.status === 'draft') return false
    return extraFilter(record)
  }).length
}

let cachedValidation = null

export function validateSearchIndex(index = getSearchIndex()) {
  const isDefault = index === getSearchIndex()
  if (isDefault && cachedValidation) return cachedValidation
  const result = runSearchIndexValidation(index)
  if (isDefault) cachedValidation = result
  return result
}

function runSearchIndexValidation(index) {
  const errors = []
  const ids = new Set()
  const knownEraIds = new Set(eras.map((era) => era.id))
  const knownCultureSlugs = new Set(cultureTopics.map((topic) => topic.slug))

  index.forEach((record) => {
    if (!record.id) errors.push('Search record is missing id')
    if (ids.has(record.id)) errors.push(`Duplicate search result id: ${record.id}`)
    ids.add(record.id)
    if (!Object.values(SEARCH_TYPES).includes(record.type)) errors.push(`Unknown search type for ${record.id}: ${record.type}`)
    if (!record.canonicalTitle?.trim()) errors.push(`Search record missing canonical title: ${record.id}`)
    if (!record.localizedTitle?.trim()) errors.push(`Search record missing localized title: ${record.id}`)
    if (!isValidRoute(record.route)) errors.push(`Search record has no valid public route: ${record.id} → ${record.route}`)
    if (String(record.id).startsWith('demo-')) errors.push(`Demo record indexed: ${record.id}`)
    if (record.eraIds.some((eraId) => !knownEraIds.has(eraId))) errors.push(`Search record points at unknown era: ${record.id}`)
  })

  const counts = getSearchIndexCounts(index)
  const expected = {
    era: eras.length,
    chapter: expectedPublicCount(chapters, (record) => record.status === 'in-progress' || record.status === 'complete'),
    person: expectedPublicCount(people, (record) => record.status === 'researched' || record.status === 'verified'),
    event: expectedPublicCount(events, (record) => record.status === 'researched' || record.status === 'verified'),
    campaign: expectedPublicCount(campaigns),
    polity: expectedPublicCount(polities, (record) => record.status === 'researched' || record.status === 'verified'),
    place: expectedPublicCount(places, (record) => record.status === 'researched' || record.status === 'verified'),
    site: expectedPublicCount(sites, (record) => record.status === 'researched' || record.status === 'verified'),
    object: expectedPublicCount(objects, (record) => record.status === 'researched' || record.status === 'verified'),
    culture: cultureTopics.length,
    organization: expectedPublicCount(organizations, (record) => record.status === 'researched' || record.status === 'verified'),
    company: expectedPublicCount(companies, (record) => record.status === 'researched' || record.status === 'verified'),
    claim: expectedPublicCount(claims),
  }

  Object.entries(expected).forEach(([type, count]) => {
    if (counts[type] !== count) errors.push(`Search index ${type} count ${counts[type]} !== expected public count ${count}`)
  })

  index.filter((record) => record.type === 'culture').forEach((record) => {
    const slug = record.route.replace('/culture/', '')
    if (!knownCultureSlugs.has(slug)) errors.push(`Culture search route is not a public topic: ${record.id}`)
  })

  return { errors, counts }
}
