'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useLocale } from '../i18n/useLocale'
import { SEARCH_DISCOVERY_LINKS, SEARCH_OVERLAY_LIMIT, searchPageHref } from '../search/searchConfig'
import { searchRecords } from '../search/searchRecords'
import { clearRecentSearches, readRecentSearches, rememberSearch } from '../search/recentSearches'
import SearchFilters from './SearchFilters'
import SearchResultList from './SearchResultList'

function focusableElements(root) {
  if (!root) return []
  return [...root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
}

function SearchGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16.2 16.2 21 21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export default function SearchOverlay({ onClose }) {
  const router = useRouter()
  const { locale, setLocale, t } = useLocale()
  const copy = t('search')
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const [selection, setSelection] = useState({ key: '|all', index: 0 })
  const [recent, setRecent] = useState([])

  const matches = useMemo(() => searchRecords(query, { type }), [query, type])
  const visible = matches.slice(0, SEARCH_OVERLAY_LIMIT)
  const selectionKey = `${query}|${type}`
  const activeIndex = selection.key === selectionKey ? selection.index : 0
  const activeRecord = visible[activeIndex] ?? visible[0] ?? null

  useEffect(() => {
    setRecent(readRecentSearches())
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus())
    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (!activeRecord) return
    document.getElementById(`search-option-${activeRecord.id}`)?.scrollIntoView({ block: 'nearest' })
  }, [activeRecord])

  useEffect(() => {
    function setActiveIndex(next) {
      const index = typeof next === 'function' ? next(activeIndex) : next
      setSelection({ key: selectionKey, index })
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key === 'ArrowDown' && visible.length) {
        event.preventDefault()
        setActiveIndex((index) => Math.min(index + 1, visible.length - 1))
        return
      }
      if (event.key === 'ArrowUp' && visible.length) {
        event.preventDefault()
        setActiveIndex((index) => Math.max(index - 1, 0))
        return
      }
      if (event.key === 'Enter' && query.trim() && event.target === inputRef.current) {
        event.preventDefault()
        rememberSearch(query)
        onClose()
        router.push(activeRecord ? activeRecord.route : searchPageHref(query, type))
        return
      }
      if (event.key !== 'Tab') return
      const focusable = focusableElements(dialogRef.current)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, activeRecord, onClose, query, router, selectionKey, type, visible.length])

  function selectRecord() {
    rememberSearch(query)
    onClose()
  }

  function openRecent(value) {
    setQuery(value)
    setSelection({ key: `${value}|${type}`, index: 0 })
    inputRef.current?.focus()
  }

  const overlay = (
    <div className="search-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div
        ref={dialogRef}
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={copy.ariaLabel}
      >
        <div className="search-dialog-head">
          <SearchGlyph />
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            inputMode="search"
            enterKeyHint="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.placeholder}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-overlay-results"
            aria-activedescendant={activeRecord ? `search-option-${activeRecord.id}` : undefined}
            aria-label={copy.ariaLabel}
          />
          <div className="lang-switch search-locale-switch" role="group" aria-label={t('common.accessibility.languageControl')}>
            <button type="button" aria-label={t('common.languages.english')} aria-pressed={locale === 'en'} lang="en" onClick={() => setLocale('en')}>
              EN
            </button>
            <span className="lang-rule" aria-hidden="true">|</span>
            <button type="button" aria-label={t('common.languages.mongolian')} aria-pressed={locale === 'mn'} lang="mn" onClick={() => setLocale('mn')}>
              МН
            </button>
          </div>
          <button type="button" className="search-close" onClick={onClose} aria-label={copy.close}>
            ×
          </button>
        </div>

        <SearchFilters value={type} onChange={setType} labels={copy.filters} labelledBy={copy.filterLabel} />

        <div className="search-body">
          {!query.trim() ? (
            <div className="search-discovery">
              <p className="search-kicker">{copy.explore}</p>
              <p className="search-hint">{copy.exploreLead}</p>
              <div className="search-discovery-grid">
                {SEARCH_DISCOVERY_LINKS.map((link) => (
                  <a key={link.id} className="search-discovery-card" href={link.href} onClick={onClose}>
                    <strong>{copy.categories[link.id]}</strong>
                    <span>{copy.links[link.id] ?? copy.categories[link.id]}</span>
                  </a>
                ))}
              </div>
              {recent.length ? (
                <div className="search-recent">
                  <p className="search-kicker">{copy.recent}</p>
                  {recent.map((value) => (
                    <button key={value} type="button" className="search-recent-item" onClick={() => openRecent(value)}>
                      <strong>{value}</strong>
                    </button>
                  ))}
                  <button
                    type="button"
                    className="search-view-all"
                    onClick={() => {
                      clearRecentSearches()
                      setRecent([])
                    }}
                  >
                    {copy.clearRecent}
                  </button>
                </div>
              ) : null}
            </div>
          ) : visible.length ? (
            <>
              <SearchResultList
                records={visible}
                locale={locale}
                copy={copy}
                activeId={activeRecord?.id}
                labelledBy="search-overlay-results"
                grouped={false}
                listbox
                showType
                onSelect={selectRecord}
              />
              <a className="search-view-all" href={searchPageHref(query, type)} onClick={() => { rememberSearch(query); onClose() }}>
                {copy.viewAll}
              </a>
            </>
          ) : (
            <div className="search-empty">
              <h2>{copy.noResults}</h2>
              <p>{copy.noResultsHint}</p>
              <div className="search-empty-links">
                <a href="/people" onClick={onClose}>{copy.links.people}</a>
                <a href="/eras" onClick={onClose}>{copy.links.eras}</a>
                <a href="/timeline" onClick={onClose}>{copy.links.timeline}</a>
              </div>
            </div>
          )}
        </div>

        <p className="search-dialog-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> {copy.hintMove}</span>
          <span><kbd>Enter</kbd> {copy.hintOpen}</span>
          <span><kbd>Esc</kbd> {copy.hintClose}</span>
        </p>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}
