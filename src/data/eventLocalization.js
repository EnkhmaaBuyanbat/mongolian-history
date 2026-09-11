import { mergeLocaleValues } from '../i18n/locale'

export function getLocalizedEvent(event, localeBundle = {}) {
  return mergeLocaleValues(event, localeBundle.records?.[event.id])
}
