'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formatTemplate } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'
import { SEARCH_PAGE_LIMIT, SEARCH_PAGE_LINKS, getSearchFilter, searchPageHref } from '../search/searchConfig'
import { searchRecords } from '../search/searchRecords'
import { rememberSearch } from '../search/recentSearches'
import SearchFilters from './SearchFilters'
import SearchResultList from './SearchResultList'
import '../search.css'

export default function SearchResultsPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { locale, t } = useLocale()
  const copy = t('search')
  const urlQuery = searchParams.get('q') ?? ''
  const urlType = getSearchFilter(searchParams.get('type') ?? 'all').id
  const urlKey = `${urlQuery}\t${urlType}`
  const [query, setQuery] = useState(urlQuery)
  const [type, setType] = useState(urlType)
  const [seenUrlKey, setSeenUrlKey] = useState(urlKey)

  if (seenUrlKey !== urlKey) {
    setSeenUrlKey(urlKey)
    setQuery(urlQuery)
    setType(urlType)
  }

  const currentSearch = searchParams.toString()
  useEffect(() => {
    const href = searchPageHref(query, type)
    const current = `${pathname}${currentSearch ? `?${currentSearch}` : ''}`
    if (href === current) return undefined
    const timer = window.setTimeout(() => {
      router.replace(href, { scroll: false })
    }, 120)
    return () => window.clearTimeout(timer)
  }, [currentSearch, pathname, query, router, type])

  const matches = useMemo(() => searchRecords(query, { type }), [query, type])
  const visible = matches.slice(0, SEARCH_PAGE_LIMIT)
  const trimmed = query.trim()

  function onSubmit(event) {
    event.preventDefault()
    if (trimmed) rememberSearch(query)
  }

  return (
    <article className="search-page">
      <div className="search-page-inner">
        <p className="search-kicker">{copy.trigger}</p>
        <h1>{trimmed ? formatTemplate(copy.resultsFor, { query: trimmed }) : copy.emptyTitle}</h1>
        <p className="search-page-lede">{trimmed ? copy.exploreLead : copy.emptyLead}</p>

        <form className="search-page-form" role="search" onSubmit={onSubmit}>
          <input
            className="search-page-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.placeholder}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            autoFocus
            aria-label={copy.ariaLabel}
          />
        </form>

        <SearchFilters value={type} onChange={setType} labels={copy.filters} labelledBy={copy.filterLabel} />

        <nav className="search-page-discovery" aria-label={copy.explore}>
          {SEARCH_PAGE_LINKS.map((link) => (
            <a key={link.id} href={link.href}>{copy.links[link.id]}</a>
          ))}
        </nav>

        {trimmed && matches.length ? (
          <p className="search-count">
            {matches.length > visible.length
              ? formatTemplate(copy.showingTop, { shown: String(visible.length), count: String(matches.length) })
              : formatTemplate(copy.resultCount, { count: String(matches.length) })}
          </p>
        ) : null}

        {trimmed && visible.length ? (
          <div className="search-page-groups">
            <SearchResultList
              records={visible}
              locale={locale}
              copy={copy}
              labelledBy="search-page-results"
              grouped={false}
              showType
              onSelect={() => rememberSearch(query)}
            />
          </div>
        ) : null}

        {trimmed && !matches.length ? (
          <div className="search-empty">
            <h2>{copy.noResults}</h2>
            <p>{copy.noResultsHint}</p>
            <div className="search-empty-links">
              <a href="/people">{copy.links.people}</a>
              <a href="/eras">{copy.links.eras}</a>
              <a href="/timeline">{copy.links.timeline}</a>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  )
}
