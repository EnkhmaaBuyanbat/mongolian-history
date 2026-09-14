import { resolveHomeVisual } from './homeVisualManifest'

export const homepageFeaturedStories = [
  {
    id: 'modu-chanyu',
    personId: 'person-modu-chanyu',
    contextChapterId: 'chapter-xiongnu-world',
    visualRole: 'featuredStory',
  },
]

export const homepageActiveFeaturedStoryId = 'modu-chanyu'

export const homepagePeopleRoles = {
  'person-temujin-chinggis-khan': 'personTemujin',
  'person-sorghaghtani-beki': 'personSorghaghtani',
  'person-zanabazar': 'personZanabazar',
}

export const homepageEvidencePresentation = {
  'media-deer-stones-uushgiin-uvur-01': { classKey: 'site', fit: 'site' },
  'media-kul-tegin-inscription-01': { classKey: 'inscription', fit: 'inscription' },
  'media-xiongnu-belt-buckle-01': { classKey: 'object', fit: 'object' },
  'media-jami-al-tawarikh-folio-01': { classKey: 'manuscript', fit: 'manuscript' },
  'media-zanabazar-maitreya-01': { classKey: 'object', fit: 'object' },
}

export function resolveHomepageVisual(spec) {
  return resolveHomeVisual(spec)
}
