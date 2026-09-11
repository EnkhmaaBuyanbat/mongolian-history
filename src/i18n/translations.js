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
import { eventsEn } from '../data/locales/en/events'
import { eventsMn } from '../data/locales/mn/events'
import { entitiesEn } from '../data/locales/en/entities'
import { entitiesMn } from '../data/locales/mn/entities'
import { politiesMn } from '../data/locales/mn/polities'
import { polities } from '../data/polities'
import { placesMn } from '../data/locales/mn/places'
import { places } from '../data/places'
import { sitesMn } from '../data/locales/mn/sites'
import { objectsMn } from '../data/locales/mn/objects'
import { sites } from '../data/sites'
import { objects } from '../data/objects'
import { getLocalizedEntity } from '../data/entityLocalization'
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
import { events } from '../data/events'
import { eventIdsEraI_II } from '../data/locales/mn/eventsEraI-II'
import { eventIdsEraIII_IV } from '../data/locales/mn/eventsEraIII-IV'
import { eventIdsEraV_VI } from '../data/locales/mn/eventsEraV-VI'
import { eventIdsEraVII_VIII } from '../data/locales/mn/eventsEraVII-VIII'
import { SUPPORTED_LOCALES } from './locale'
import { validateLocalization } from './validation'
import { reconstructionsEn } from '../data/locales/en/reconstructions'
import { reconstructionsMn } from '../data/locales/mn/reconstructions'
import { eraWorldsEn } from '../data/locales/en/eraWorlds'
import { eraWorldsMn } from '../data/locales/mn/eraWorlds'
import { heroScenesEn } from '../data/locales/en/heroScenes'
import { heroScenesMn } from '../data/locales/mn/heroScenes'
import { reconstructions } from '../data/reconstructions'
import { eraWorlds } from '../data/eraWorlds'
import { heroScenes } from '../data/heroScenes'
import { getLocalizedReconstruction, getLocalizedEraWorld, getLocalizedHeroScene } from '../data/visualLocalization'

export const translations = {
  en: { common: commonEn, home: homeEn, culture: cultureEn, eras: erasEn, chapters: chaptersEn, events:eventsEn, entities:entitiesEn, reconstructions:reconstructionsEn, eraWorlds:eraWorldsEn, heroScenes:heroScenesEn, evidence: evidenceEn, people: peopleEn, familyTree: familyTreeEn, personRelationships: personRelationshipsEn },
  mn: { common: commonMn, home: homeMn, culture: cultureMn, eras: erasMn, chapters: chaptersMn, events:eventsMn, entities:entitiesMn, reconstructions:reconstructionsMn, eraWorlds:eraWorldsMn, heroScenes:heroScenesMn, evidence: evidenceMn, people: peopleMn, familyTree: familyTreeMn, personRelationships: personRelationshipsMn },
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
  events,
  eventIdsEraI_II,
  eventIdsEraIII_IV,
  eventIdsEraV_VI,
  eventIdsEraVII_VIII,
  politiesMn,
  polities,
  placesMn,
  places,
  sitesMn,
  objectsMn,
  sites,
  objects,
  getLocalizedEntity,
  reconstructions,
  eraWorlds,
  heroScenes,
  getLocalizedReconstruction,
  getLocalizedEraWorld,
  getLocalizedHeroScene,
})

if (errors.length) throw new Error(`Localization validation failed:\n${errors.join('\n')}`)
