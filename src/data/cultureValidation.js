import { chapters } from './chapters'
import { cultureTopics } from './cultureTopics'
import { eras } from './eras'
import { media } from './media'
import { objects } from './objects'
import { people } from './people'
import { places } from './places'
import { sites } from './sites'
import { sources } from './sources'

const registries = {
  eraIds: new Set(eras.map(({ id }) => id)), chapterIds: new Set(chapters.map(({ id }) => id)),
  peopleIds: new Set(people.map(({ id }) => id)), placeIds: new Set(places.map(({ id }) => id)),
  siteIds: new Set(sites.map(({ id }) => id)), objectIds: new Set(objects.map(({ id }) => id)),
  mediaIds: new Set(media.map(({ id }) => id)), sourceIds: new Set(sources.map(({ id }) => id)),
}

export function validateCultureTopics() {
  const errors = []
  if (cultureTopics.length !== 5) errors.push(`Expected exactly 5 culture topics; found ${cultureTopics.length}.`)
  for (const field of ['id', 'slug']) {
    const values = cultureTopics.map((topic) => topic[field])
    if (new Set(values).size !== values.length) errors.push(`Culture topic ${field}s must be unique.`)
  }
  cultureTopics.forEach((topic) => {
    Object.entries(registries).forEach(([field, registry]) => {
      const values = topic[field] ?? []
      if (new Set(values).size !== values.length) errors.push(`${topic.id} has duplicate ${field}.`)
      values.forEach((id) => { if (!registry.has(id)) errors.push(`${topic.id} has dangling ${field} reference: ${id}.`) })
    })
    topic.mediaIds.forEach((id) => {
      const record = media.find((item) => item.id === id)
      if (!record?.approved || record.reviewStatus !== 'APPROVED') errors.push(`${topic.id} uses unapproved media: ${id}.`)
    })
  })
  return errors
}

export const cultureValidationErrors = validateCultureTopics()
