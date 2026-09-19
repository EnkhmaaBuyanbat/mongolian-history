export const SUPPORTED_LOCALES = Object.freeze(['en', 'mn'])
export const DEFAULT_LOCALE = 'en'
export const LOCALE_STORAGE_KEY = 'mongolian-history-locale'
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function isSupportedLocale(value) {
  return SUPPORTED_LOCALES.includes(value)
}

export function resolveLocale(value) {
  return isSupportedLocale(value) ? value : DEFAULT_LOCALE
}

export function persistLocalePreference(nextLocale) {
  if (typeof window === 'undefined' || !isSupportedLocale(nextLocale)) return
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  } catch {
    /* Preference remains active for this session. */
  }
  document.cookie = `${LOCALE_STORAGE_KEY}=${nextLocale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`
}

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value)

export function mergeLocaleValues(base, translated) {
  if (translated == null || (typeof translated === 'string' && !translated.trim())) return base
  if (Array.isArray(translated)) return translated.length ? translated : base
  if (!isObject(translated)) return translated
  const result = { ...(isObject(base) ? base : {}) }
  Object.entries(translated).forEach(([key, value]) => { result[key] = mergeLocaleValues(base?.[key], value) })
  return result
}

export function toEvidenceCode(value) {
  return typeof value === 'string' ? value.trim().toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_|_$/g, '') : ''
}
