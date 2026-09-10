import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, isSupportedLocale, LOCALE_STORAGE_KEY, LocaleContext, mergeLocaleValues } from './locale'
import { translations } from './translations'

function initialLocale() {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return isSupportedLocale(stored) ? stored : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(initialLocale)
  const bundle = useMemo(() => mergeLocaleValues(translations.en, translations[locale]), [locale])
  const setLocale = (nextLocale) => { if (isSupportedLocale(nextLocale)) setLocaleState(nextLocale) }

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = bundle.common.metadata.title
    try { window.localStorage.setItem(LOCALE_STORAGE_KEY, locale) } catch { /* Preference remains active for this session. */ }
  }, [bundle, locale])

  const value = useMemo(() => ({
    locale,
    setLocale,
    t(path) { return path.split('.').reduce((current, key) => current?.[key], bundle) ?? '' },
    localeSection(section) { return bundle[section] ?? {} },
    localizedRecord(collection, id, canonical = {}) { return mergeLocaleValues(canonical, bundle[collection]?.records?.[id]) },
  }), [bundle, locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export default LocaleProvider
