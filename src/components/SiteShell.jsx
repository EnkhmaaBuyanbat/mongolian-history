'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function SiteShell({ children }) {
  const pathname = usePathname() || '/'
  const overlayMain = pathname === '/' || pathname === '/map' || pathname === '/experience'

  return (
    <>
      <Header route={pathname} />
      <main className={overlayMain ? 'site-main is-overlay' : 'site-main'}>{children}</main>
      <Footer />
    </>
  )
}
