'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClientNav({ children }) {
  const router = useRouter()

  useEffect(() => {
    const handleNavigation = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return
      const destination = new URL(link.href, window.location.href)
      if (destination.origin !== window.location.origin || destination.hash) return

      event.preventDefault()
      const next = `${destination.pathname}${destination.search}`
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) {
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }
      router.push(next)
    }

    document.addEventListener('click', handleNavigation)
    return () => document.removeEventListener('click', handleNavigation)
  }, [router])

  return children
}
