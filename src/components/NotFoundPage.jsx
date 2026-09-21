'use client'

import { useLocale } from '../i18n/useLocale'

export default function NotFoundPage() {
  const { t } = useLocale()
  const copy = t('common.notFound')

  return (
    <article className="section-inner not-found-page">
      <p className="section-label">{t('home.footer.title')}</p>
      <h1>{copy.title}</h1>
      <p>{copy.body}</p>
      <p><a href="/">{copy.home}</a></p>
    </article>
  )
}
