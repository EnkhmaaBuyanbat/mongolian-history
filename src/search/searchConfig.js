export const SEARCH_TYPES = Object.freeze({
  era: 'era',
  chapter: 'chapter',
  person: 'person',
  event: 'event',
  campaign: 'campaign',
  polity: 'polity',
  place: 'place',
  site: 'site',
  object: 'object',
  culture: 'culture',
  organization: 'organization',
  company: 'company',
  claim: 'claim',
})

export const SEARCH_FILTERS = Object.freeze([
  { id: 'all', types: null },
  { id: 'people', types: ['person'] },
  { id: 'events', types: ['event', 'campaign'] },
  { id: 'eras', types: ['era', 'chapter'] },
  { id: 'places', types: ['place', 'site', 'polity'] },
  { id: 'institutions', types: ['organization', 'company'] },
  { id: 'culture', types: ['culture'] },
  { id: 'evidence', types: ['object', 'claim'] },
])

export const SEARCH_GROUP_ORDER = Object.freeze([
  'person',
  'event',
  'campaign',
  'era',
  'chapter',
  'place',
  'site',
  'polity',
  'organization',
  'company',
  'culture',
  'object',
  'claim',
])

export const SEARCH_OVERLAY_LIMIT = 8
export const SEARCH_PAGE_LIMIT = 48
export const SEARCH_RECENT_LIMIT = 6
export const SEARCH_RECENT_KEY = 'mongolian-history-recent-searches'

export const SEARCH_DISCOVERY_LINKS = Object.freeze([
  { id: 'people', href: '/people' },
  { id: 'eras', href: '/eras' },
  { id: 'places', href: '/search?type=places' },
  { id: 'culture', href: '/culture' },
])

export const SEARCH_PAGE_LINKS = Object.freeze([
  { id: 'people', href: '/people' },
  { id: 'eras', href: '/eras' },
  { id: 'timeline', href: '/timeline' },
  { id: 'familyTree', href: '/family-tree' },
  { id: 'culture', href: '/culture' },
])

export function getSearchFilter(id) {
  return SEARCH_FILTERS.find((filter) => filter.id === id) ?? SEARCH_FILTERS[0]
}

export function isKnownSearchType(type) {
  return Object.values(SEARCH_TYPES).includes(type)
}

export function searchPageHref(query = '', type = 'all') {
  const params = new URLSearchParams()
  const trimmed = String(query ?? '').trim()
  const filter = getSearchFilter(type)
  if (trimmed) params.set('q', trimmed)
  if (filter.id !== 'all') params.set('type', filter.id)
  const search = params.toString()
  return search ? `/search?${search}` : '/search'
}
