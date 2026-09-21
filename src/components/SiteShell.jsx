'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from '../i18n/useLocale'
import Header from './Header'
import Footer from './Footer'

export default function SiteShell({ children }) {
  const pathname = usePathname() || '/'
  const { t } = useLocale()
  const overlayMain = pathname === '/' || pathname === '/map' || pathname === '/experience'

  return (
    <>
      <a className="skip-link" href="#main-content">{t('common.accessibility.skipToContent')}</a>
      <Header route={pathname} />
      <main id="main-content" className={overlayMain ? 'site-main is-overlay' : 'site-main'}>{children}</main>
      <Footer />
    </>
  )
}
