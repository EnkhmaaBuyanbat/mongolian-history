'use client'

import { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { DEFAULT_LOCALE, isSupportedLocale, LOCALE_STORAGE_KEY, mergeLocaleValues } from './locale'
import { LocaleContext } from './localeContext'
import { translations } from './translations'

const LOCALE_CHANGE_EVENT = 'mongolian-history-locale-change'

function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return isSupportedLocale(stored) ? stored : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

function subscribeLocale(onStoreChange) {
  const onStorage = (event) => {
    if (event.key && event.key !== LOCALE_STORAGE_KEY) return
    onStoreChange()
  }
  window.addEventListener('storage', onStorage)
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange)
  }
}

function getServerLocale() {
  return DEFAULT_LOCALE
}

function persistLocale(nextLocale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  } catch {
    /* Preference remains active for this session. */
  }
  window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT))
}

function LocaleProvider({ children }) {
  const pathname = usePathname()
  const locale = useSyncExternalStore(subscribeLocale, readStoredLocale, getServerLocale)
  const bundle = useMemo(() => mergeLocaleValues(translations.en, translations[locale]), [locale])
  const setLocale = useCallback((nextLocale) => {
    if (!isSupportedLocale(nextLocale) || nextLocale === locale) return
    persistLocale(nextLocale)
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = bundle.common.metadata.title
  }, [bundle, locale, pathname])

  const value = useMemo(() => ({
    locale,
    setLocale,
    t(path) { return path.split('.').reduce((current, key) => current?.[key], bundle) ?? '' },
    localeSection(section) { return bundle[section] ?? {} },
    localizedRecord(collection, id, canonical = {}) { return mergeLocaleValues(canonical, bundle[collection]?.records?.[id]) },
  }), [bundle, locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export default LocaleProvider
