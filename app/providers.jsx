'use client'

import LocaleProvider from '@/i18n/LocaleProvider'
import ClientNav from '@/components/ClientNav'
import SiteShell from '@/components/SiteShell'
import '@/index.css'
import '@/App.css'
import '@/homepage.css'

export default function Providers({ children, initialLocale }) {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      <ClientNav>
        <SiteShell>{children}</SiteShell>
      </ClientNav>
    </LocaleProvider>
  )
}
