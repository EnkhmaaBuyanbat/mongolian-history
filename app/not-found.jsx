'use client'

import { useLocale } from '@/i18n/useLocale'

export default function NotFound() {
  const { t } = useLocale()
  const title = t('home.footer.title') || 'Mongolian History'

  return (
    <article className="section-inner" style={{ paddingBlock: '6rem' }}>
      <p className="section-label">{title}</p>
      <h1>Page not found</h1>
      <p>This path is not part of the published site.</p>
      <p><a href="/">Return home</a></p>
    </article>
  )
}
