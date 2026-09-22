export const CONTACT_TYPES = Object.freeze([
  'correction',
  'source',
  'general',
  'collaboration',
  'technical',
  'creator',
])

export const CONTACT_TYPE_LABELS = Object.freeze({
  correction: 'Historical correction',
  source: 'Suggest a source',
  general: 'General feedback',
  collaboration: 'Collaboration',
  technical: 'Technical issue',
  creator: 'Contact the creator',
})

export const CONTACT_LIMITS = Object.freeze({
  name: 120,
  email: 254,
  message: 8000,
  page: 200,
  bodyBytes: 20480,
})

const INDEX_PATHS = new Set([
  '/',
  '/about',
  '/contact',
  '/culture',
  '/eras',
  '/experience',
  '/family-tree',
  '/map',
  '/people',
  '/search',
  '/timeline',
])

const NESTED_PREFIXES = [
  '/claims/',
  '/companies/',
  '/culture/',
  '/eras/',
  '/objects/',
  '/organizations/',
  '/people/',
  '/places/',
  '/polities/',
  '/sites/',
]

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const PATH_PATTERN = /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/i
const SEARCH_PATTERN = /^\?[A-Za-z0-9._~=&%-]+$/
const UNSAFE_PAGE = /javascript:|data:|vbscript:|mailto:|https?:|\\|\/\/|\.\.|@/i

function hasControlChars(value) {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index)
    if (code < 32 || code === 127) return true
  }
  return false
}

export function isContactType(value) {
  return CONTACT_TYPES.includes(value)
}

export function contactHref({ page = '', type = 'correction' } = {}) {
  const params = new URLSearchParams()
  if (page) params.set('page', page)
  if (isContactType(type)) params.set('type', type)
  const search = params.toString()
  return search ? `/contact?${search}` : '/contact'
}

export function isValidEmail(value) {
  const email = String(value ?? '').trim()
  if (!email || email.length > CONTACT_LIMITS.email) return false
  if (email.includes('..') || email.includes(' ')) return false
  return EMAIL_PATTERN.test(email)
}

export function sanitizeRelatedPage(value) {
  const raw = String(value ?? '').trim()
  if (!raw) return { ok: true, page: '' }
  if (raw.length > CONTACT_LIMITS.page) return { ok: false }
  if (UNSAFE_PAGE.test(raw) || hasControlChars(raw)) return { ok: false }

  let decoded
  try {
    decoded = decodeURIComponent(raw)
  } catch {
    return { ok: false }
  }
  if (decoded !== raw && UNSAFE_PAGE.test(decoded)) return { ok: false }
  if (!decoded.startsWith('/') || decoded.startsWith('//')) return { ok: false }

  let url
  try {
    url = new URL(decoded, 'https://mongolianhistory.invalid')
  } catch {
    return { ok: false }
  }
  if (url.origin !== 'https://mongolianhistory.invalid') return { ok: false }
  if (url.username || url.password || url.hash) return { ok: false }
  if (!PATH_PATTERN.test(url.pathname)) return { ok: false }

  const nested = NESTED_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))
  if (!INDEX_PATHS.has(url.pathname) && !nested) return { ok: false }
  if (url.search && !SEARCH_PATTERN.test(url.search)) return { ok: false }

  const page = `${url.pathname}${url.search}`
  if (page.length > CONTACT_LIMITS.page) return { ok: false }
  return { ok: true, page }
}

export function parseContactFields(input) {
  const record = input && typeof input === 'object' && !Array.isArray(input) ? input : {}
  const honeypot = String(record.website ?? '').trim()
  if (honeypot) return { ok: false, field: 'spam' }

  if (!isContactType(record.type)) return { ok: false, field: 'type' }

  const name = String(record.name ?? '').trim()
  if (name.length > CONTACT_LIMITS.name) return { ok: false, field: 'name' }

  const wantReply = record.wantReply === true || record.wantReply === 'true' || record.wantReply === 'on'
  const email = String(record.email ?? '').trim()
  if (email ? !isValidEmail(email) : wantReply) return { ok: false, field: 'email' }

  const message = String(record.message ?? '').trim()
  if (!message || message.length > CONTACT_LIMITS.message) return { ok: false, field: 'message' }

  const related = sanitizeRelatedPage(record.page)
  if (!related.ok) return { ok: false, field: 'page' }

  return {
    ok: true,
    data: {
      type: record.type,
      name,
      email,
      wantReply,
      message,
      page: related.page,
    },
  }
}
