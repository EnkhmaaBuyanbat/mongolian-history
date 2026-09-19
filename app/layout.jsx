import { cookies } from 'next/headers'
import '../src/search/assertSearchIndex'
import Providers from './providers'
import { LOCALE_STORAGE_KEY, resolveLocale } from '../src/i18n/locale'

export const metadata = {
  title: 'Mongolian History · From the Ancient Steppe to the Modern Nation',
  description: 'Mongolian History — from the ancient steppe to the modern nation. An educational platform for the peoples, empires, and transformations of Mongolia.',
  icons: { icon: '/favicon.svg' },
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const locale = resolveLocale(cookieStore.get(LOCALE_STORAGE_KEY)?.value)

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers initialLocale={locale}>{children}</Providers>
      </body>
    </html>
  )
}
