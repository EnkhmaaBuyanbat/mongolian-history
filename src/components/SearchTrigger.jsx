'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useLocale } from '../i18n/useLocale'
import '../search.css'

const SearchOverlay = dynamic(() => import('./SearchOverlay'), { ssr: false })

function SearchGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16.2 16.2 21 21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function subscribeShortcut(onStoreChange) {
  const id = window.setTimeout(onStoreChange, 0)
  return () => window.clearTimeout(id)
}

function currentShortcut(macLabel, winLabel) {
  const mac = /Mac|iPhone|iPad/.test(navigator.platform) || navigator.userAgent.includes('Mac')
  return mac ? macLabel : winLabel
}

export default function SearchTrigger({ variant = 'header' }) {
  const { t } = useLocale()
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const shortcut = useSyncExternalStore(
    subscribeShortcut,
    () => currentShortcut(t('search.shortcutMac'), t('search.shortcutWin')),
    () => '',
  )

  const close = useCallback(() => {
    setOpen(false)
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useEffect(() => {
    function onKeyDown(event) {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') return
      if (event.repeat) return
      event.preventDefault()
      if (open) close()
      else setOpen(true)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [close, open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`search-trigger search-trigger--${variant}`}
        onClick={() => setOpen(true)}
        aria-label={t('search.ariaLabel')}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-keyshortcuts="Meta+K Control+K"
      >
        <SearchGlyph />
        {variant === 'drawer' ? <span>{t('search.trigger')}</span> : null}
        {variant === 'header' && shortcut ? <kbd className="search-trigger-kbd">{shortcut}</kbd> : null}
      </button>
      {open ? <SearchOverlay onClose={close} /> : null}
    </>
  )
}
