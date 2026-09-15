import { SEARCH_RECENT_KEY, SEARCH_RECENT_LIMIT } from './searchConfig'

export function readRecentSearches() {
  if (typeof window === 'undefined') return []
  try {
    const parsed = JSON.parse(window.localStorage.getItem(SEARCH_RECENT_KEY) ?? '[]')
    if (!Array.isArray(parsed)) return []
    return parsed.filter((value) => typeof value === 'string' && value.trim()).slice(0, SEARCH_RECENT_LIMIT)
  } catch {
    return []
  }
}

export function rememberSearch(query) {
  const nextQuery = String(query ?? '').trim()
  if (!nextQuery || typeof window === 'undefined') return
  const next = [nextQuery, ...readRecentSearches().filter((value) => value !== nextQuery)].slice(0, SEARCH_RECENT_LIMIT)
  window.localStorage.setItem(SEARCH_RECENT_KEY, JSON.stringify(next))
}

export function clearRecentSearches() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(SEARCH_RECENT_KEY)
}
