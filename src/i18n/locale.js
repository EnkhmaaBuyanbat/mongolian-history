import { createContext } from 'react'

export const SUPPORTED_LOCALES = Object.freeze(['en', 'mn'])
export const DEFAULT_LOCALE = 'en'
export const LOCALE_STORAGE_KEY = 'mongolian-history-locale'

export function isSupportedLocale(value) {
  return SUPPORTED_LOCALES.includes(value)
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

export const LocaleContext = createContext(null)
