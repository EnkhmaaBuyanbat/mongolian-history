import { cultureTopics } from '../data/cultureTopics'
import { eras } from '../data/eras'
import { commonEn } from '../data/locales/en/common'
import { evidenceEn } from '../data/locales/en/evidence'
import { erasEn } from '../data/locales/en/eras'
import { homeEn } from '../data/locales/en/home'
import { cultureEn } from '../data/locales/en/culture'
import { commonMn } from '../data/locales/mn/common'
import { evidenceMn } from '../data/locales/mn/evidence'
import { erasMn } from '../data/locales/mn/eras'
import { homeMn } from '../data/locales/mn/home'
import { cultureMn } from '../data/locales/mn/culture'
import { terminologyMn } from '../data/locales/mn/terminology'
import { SUPPORTED_LOCALES } from './locale'
import { validateLocalization } from './validation'

export const translations = {
  en: { common: commonEn, home: homeEn, culture: cultureEn, eras: erasEn, evidence: evidenceEn },
  mn: { common: commonMn, home: homeMn, culture: cultureMn, eras: erasMn, evidence: evidenceMn },
}

const errors = validateLocalization({
  bundles: translations,
  supportedLocales: SUPPORTED_LOCALES,
  cultureTopicIds: cultureTopics.map(({ id }) => id),
  eraIds: eras.map(({ id }) => id),
  evidenceCodes: Object.keys(evidenceEn),
  terminology: terminologyMn,
})

if (errors.length) throw new Error(`Localization validation failed:\n${errors.join('\n')}`)
