'use client'

import { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { DEFAULT_LOCALE, isSupportedLocale, LOCALE_STORAGE_KEY, mergeLocaleValues, persistLocalePreference, resolveLocale } from './locale'
import { LocaleContext } from './localeContext'
import { translations } from './translations'

const LOCALE_CHANGE_EVENT = 'mongolian-history-locale-change'

function readCookieLocale() {
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_STORAGE_KEY}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) || readCookieLocale()
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

function persistLocale(nextLocale) {
  persistLocalePreference(nextLocale)
  window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT))
}

function LocaleProvider({ children, initialLocale = DEFAULT_LOCALE }) {
  const pathname = usePathname()
  const serverLocale = resolveLocale(initialLocale)
  const getServerSnapshot = useCallback(() => serverLocale, [serverLocale])
  const locale = useSyncExternalStore(subscribeLocale, readStoredLocale, getServerSnapshot)
  const bundle = useMemo(() => mergeLocaleValues(translations.en, translations[locale]), [locale])
  const setLocale = useCallback((nextLocale) => {
    if (!isSupportedLocale(nextLocale) || nextLocale === locale) return
    persistLocale(nextLocale)
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dataset.locale = locale
    if (pathname === '/') {
      document.title = bundle.common.metadata.title
      return
    }
    const heading = document.querySelector('#main-content h1')
    const headingText = heading?.textContent?.replace(/\s+/g, ' ').trim()
    const brand = locale === 'mn' ? 'Монголын түүх' : 'Mongolian History'
    document.title = headingText
      ? (headingText.includes(brand) ? headingText : `${headingText} · ${brand}`)
      : bundle.common.metadata.title
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
