export const DEFAULT_OG_IMAGE = '/media/reconstructions/hero/mongolian-steppe-early-13c-medium.jpg'

export const PAGE_PATHS = {
  home: '/',
  eras: '/eras',
  timeline: '/timeline',
  people: '/people',
  familyTree: '/family-tree',
  culture: '/culture',
  experience: '/experience',
  about: '/about',
  contact: '/contact',
  search: '/search',
  map: '/map',
  notFound: '/404',
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, '')}`
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  return 'http://localhost:3000'
}

export function absoluteUrl(path = '/') {
  const base = getSiteUrl()
  if (!path || path === '/') return `${base}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

export function firstParam(value) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export function truncateMeta(text, max = 160) {
  const value = String(text ?? '').replace(/\s+/g, ' ').trim()
  if (!value) return ''
  if (value.length <= max) return value
  return `${value.slice(0, max - 1).trim()}…`
}
