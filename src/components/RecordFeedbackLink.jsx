'use client'

import { contactHref } from '../contact'
import { useLocale } from '../i18n/useLocale'
import { usePathname } from 'next/navigation'
import '../contact.css'

export default function RecordFeedbackLink({ type = 'correction' }) {
  const pathname = usePathname()
  const { t } = useLocale()
  const copy = t('contact')

  return (
    <p className="record-feedback">
      <a href={contactHref({ page: pathname, type })}>{copy.suggestCorrection}</a>
    </p>
  )
}
