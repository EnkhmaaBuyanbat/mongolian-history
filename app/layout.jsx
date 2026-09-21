import { cookies } from 'next/headers'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import '../src/search/assertSearchIndex'
import Providers from './providers'
import { LOCALE_STORAGE_KEY, resolveLocale } from '../src/i18n/locale'
import { buildMetadata } from '../src/seo/metadata'

const serif = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

export async function generateMetadata() {
  return buildMetadata({ path: '/' })
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const locale = resolveLocale(cookieStore.get(LOCALE_STORAGE_KEY)?.value)

  return (
    <html lang={locale} data-locale={locale} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Providers initialLocale={locale}>{children}</Providers>
      </body>
    </html>
  )
}
