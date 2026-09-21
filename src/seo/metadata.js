import { cookies } from 'next/headers'
import { mergeLocaleValues, resolveLocale, LOCALE_STORAGE_KEY } from '../i18n/locale'
import { translations } from '../i18n/translations'
import { DEFAULT_OG_IMAGE, PAGE_PATHS, getSiteUrl, truncateMeta } from './site'

export async function getRequestLocale() {
  const cookieStore = await cookies()
  return resolveLocale(cookieStore.get(LOCALE_STORAGE_KEY)?.value)
}

export function getLocaleBundle(locale) {
  return mergeLocaleValues(translations.en, translations[locale])
}

export function siteName(locale) {
  return locale === 'mn' ? 'Монголын түүх' : 'Mongolian History'
}

function titled(pageTitle, locale, { isSiteTitle = false } = {}) {
  const name = siteName(locale)
  const title = String(pageTitle ?? '').trim()
  if (!title || isSiteTitle) return title || name
  if (title.includes(name)) return title
  return `${title} · ${name}`
}

export async function buildMetadata({
  path = '/',
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = 'website',
} = {}) {
  const locale = await getRequestLocale()
  const bundle = getLocaleBundle(locale)
  const defaults = bundle.common.metadata
  const canonicalPath = !path || path === '/' ? '/' : (path.startsWith('/') ? path : `/${path}`)
  const resolvedTitle = titled(title || defaults.title, locale, { isSiteTitle: !title || title === defaults.title })
  const resolvedDescription = truncateMeta(description || defaults.description)
  const imageUrl = image.startsWith('http') ? image : image

  return {
    metadataBase: new URL(`${getSiteUrl()}/`),
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical: canonicalPath },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      locale: locale === 'mn' ? 'mn_MN' : 'en_US',
      url: canonicalPath,
      siteName: siteName(locale),
      title: resolvedTitle,
      description: resolvedDescription,
      images: [{ url: imageUrl, alt: defaults.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
  }
}

export async function staticPageMetadata(pageKey, extras = {}) {
  const locale = await getRequestLocale()
  const bundle = getLocaleBundle(locale)
  const page = bundle.common.metadata.pages?.[pageKey] ?? {}
  return buildMetadata({
    path: PAGE_PATHS[pageKey] ?? '/',
    title: page.title,
    description: page.description,
    noIndex: pageKey === 'search' || pageKey === 'notFound',
    ...extras,
  })
}

function localizedRecord(bundle, collection, id) {
  const section = bundle[collection]
  return section?.records?.[id]
    ?? section?.topics?.[id]
    ?? section?.organizations?.records?.[id]
    ?? section?.companies?.records?.[id]
    ?? section?.claims?.records?.[id]
    ?? {}
}

function firstText(...values) {
  for (const value of values) {
    const text = String(value ?? '').replace(/\s+/g, ' ').trim()
    if (text) return text
  }
  return ''
}

export async function recordPageMetadata({
  path,
  record,
  collection,
  fallbackTitle,
  fallbackDescription,
  type = 'article',
}) {
  if (!record) return staticPageMetadata('notFound')
  const locale = await getRequestLocale()
  const bundle = getLocaleBundle(locale)
  const copy = localizedRecord(bundle, collection, record.id)
  const title = firstText(copy.title, record.title, fallbackTitle)
  const description = firstText(
    copy.summary,
    copy.description,
    record.summary,
    record.description,
    copy.subtitle,
    record.subtitle,
    fallbackDescription,
  )
  return buildMetadata({ path, title, description, type })
}
