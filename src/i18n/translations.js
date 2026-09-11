import { cultureTopics } from '../data/cultureTopics'
import { eras } from '../data/eras'
import { commonEn } from '../data/locales/en/common'
import { evidenceEn } from '../data/locales/en/evidence'
import { erasEn } from '../data/locales/en/eras'
import { homeEn } from '../data/locales/en/home'
import { cultureEn } from '../data/locales/en/culture'
import { chaptersEn } from '../data/locales/en/chapters'
import { commonMn } from '../data/locales/mn/common'
import { evidenceMn } from '../data/locales/mn/evidence'
import { erasMn } from '../data/locales/mn/eras'
import { homeMn } from '../data/locales/mn/home'
import { cultureMn } from '../data/locales/mn/culture'
import { chaptersMn } from '../data/locales/mn/chapters'
import { chapters } from '../data/chapters'
import { terminologyMn } from '../data/locales/mn/terminology'
import { peopleEn } from '../data/locales/en/people'
import { peopleMn } from '../data/locales/mn/people'
import { familyTreeEn } from '../data/locales/en/familyTree'
import { familyTreeMn } from '../data/locales/mn/familyTree'
import { personRelationshipsEn } from '../data/locales/en/personRelationships'
import { personRelationshipsMn } from '../data/locales/mn/personRelationships'
import { people } from '../data/people'
import { dossierPersonIds } from '../data/personPresentation'
import { familyTreePersonIds } from '../data/familyTreePeople'
import { personRelationships } from '../data/personRelationships'
import { getPersonHref } from '../data/entityRoutes'
import { eraI_IIDossierPersonIds } from '../data/locales/mn/peopleDossiersEraI-II'
import { moduChanyuStory } from '../data/personStories/moduChanyu'
import { eraIII_IVDossierPersonIds } from '../data/locales/mn/peopleDossiersEraIII-IV'
import { SUPPORTED_LOCALES } from './locale'
import { validateLocalization } from './validation'

export const translations = {
  en: { common: commonEn, home: homeEn, culture: cultureEn, eras: erasEn, chapters: chaptersEn, evidence: evidenceEn, people: peopleEn, familyTree: familyTreeEn, personRelationships: personRelationshipsEn },
  mn: { common: commonMn, home: homeMn, culture: cultureMn, eras: erasMn, chapters: chaptersMn, evidence: evidenceMn, people: peopleMn, familyTree: familyTreeMn, personRelationships: personRelationshipsMn },
}

const errors = validateLocalization({
  bundles: translations,
  supportedLocales: SUPPORTED_LOCALES,
  cultureTopicIds: cultureTopics.map(({ id }) => id),
  eraIds: eras.map(({ id }) => id),
  chapters,
  evidenceCodes: Object.keys(evidenceEn),
  terminology: terminologyMn,
  people,
  dossierPersonIds,
  familyTreePersonIds,
  personRelationships,
  getPersonHref,
  eraI_IIDossierPersonIds,
  moduChanyuStory,
  eraIII_IVDossierPersonIds,
})

if (errors.length) throw new Error(`Localization validation failed:\n${errors.join('\n')}`)
