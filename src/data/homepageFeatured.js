import { resolveHomeVisual } from './homeVisualManifest'
import { chapters } from './chapters'
import { cultureTopics } from './cultureTopics'
import { objects } from './objects'
import { people } from './people'
import { places } from './places'
import { sites } from './sites'
import { getChapterHref, getEntityHref } from './entityRoutes'

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

function firstRelatedHref(ids = [], records) {
  for (const id of ids) {
    const href = getEntityHref(records.find((item) => item.id === id))
    if (href) return href
  }
  return null
}

export function getHomepageEvidenceHref(media) {
  if (!media) return '/culture'
  const chapter = chapters.find((item) => media.relatedChapterIds?.includes(item.id))
  const topic = cultureTopics.find((item) => item.mediaIds?.includes(media.id))
  return (
    firstRelatedHref(media.relatedObjectIds, objects)
    || firstRelatedHref(media.relatedSiteIds, sites)
    || (chapter ? getChapterHref(chapter) : null)
    || firstRelatedHref(media.relatedPersonIds, people)
    || firstRelatedHref(media.relatedPlaceIds, places)
    || (topic ? `/culture/${topic.slug}` : '/culture')
  )
}
