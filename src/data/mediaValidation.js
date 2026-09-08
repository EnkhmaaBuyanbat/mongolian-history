import { chapters } from './chapters.js'
import { companies } from './companies.js'
import { eras } from './eras.js'
import { events } from './events.js'
import { media, mediaEvidenceTypeOptions, mediaReviewStatusOptions, mediaTypeOptions } from './media.js'
import { objects } from './objects.js'
import { organizations } from './organizations.js'
import { people } from './people.js'
import { places } from './places.js'
import { polities } from './polities.js'
import { sites } from './sites.js'
import { sources } from './sources.js'

const relationRegistries = {
  sourceRefs: sources,
  relatedEraIds: eras,
  relatedChapterIds: chapters,
  relatedPersonIds: people,
  relatedEventIds: events,
  relatedPlaceIds: places,
  relatedSiteIds: sites,
  relatedObjectIds: objects,
  relatedOrganizationIds: organizations,
  relatedCompanyIds: companies,
  relatedPolityIds: polities,
}

function duplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
}

function hasAsset(record) {
  return Boolean(record.asset && [
    record.asset.originalPath,
    record.asset.largePath,
    record.asset.mediumPath,
    record.asset.thumbnailPath,
  ].some(Boolean))
}

export function validateMediaRegistry(records = media) {
  const errors = []
  const duplicateIds = duplicates(records.map((record) => record.id))
  const duplicateSlugs = duplicates(records.map((record) => record.slug))
  duplicateIds.forEach((id) => errors.push(`Duplicate media id: ${id}`))
  duplicateSlugs.forEach((slug) => errors.push(`Duplicate media slug: ${slug}`))

  records.forEach((record) => {
    if (!mediaTypeOptions.includes(record.mediaType)) errors.push(`${record.id}: invalid mediaType`)
    if (!mediaEvidenceTypeOptions.includes(record.evidenceType)) errors.push(`${record.id}: invalid evidenceType`)
    if (!mediaReviewStatusOptions.includes(record.reviewStatus)) errors.push(`${record.id}: invalid reviewStatus`)

    Object.entries(relationRegistries).forEach(([field, registry]) => {
      const knownIds = new Set(registry.map((item) => item.id))
      ;(record[field] ?? []).forEach((id) => {
        if (!knownIds.has(id)) errors.push(`${record.id}: broken ${field} reference ${id}`)
      })
    })

    if (record.approved) {
      ;['title', 'mediaType', 'evidenceType', 'caption', 'alt'].forEach((field) => {
        if (!record[field]) errors.push(`${record.id}: approved media missing ${field}`)
      })
      if (!record.institution && !record.sourceUrl) errors.push(`${record.id}: approved media missing provenance`)
      if (record.publicDomain == null && !record.license && !record.reuseRestrictions) errors.push(`${record.id}: approved media missing rights status`)
      if (!record.attribution) errors.push(`${record.id}: approved media missing attribution`)
      if (!hasAsset(record)) errors.push(`${record.id}: approved media missing asset path`)
      if (record.reviewStatus !== 'APPROVED') errors.push(`${record.id}: approved media has non-approved reviewStatus`)
    }
  })

  const knownMediaIds = new Set(records.map((record) => record.id))
  people.forEach((person) => {
    if (person.portrait?.mediaId && !knownMediaIds.has(person.portrait.mediaId)) {
      errors.push(`${person.id}: broken portrait mediaId ${person.portrait.mediaId}`)
    }
  })
  chapters.forEach((chapter) => {
    ;(chapter.mediaIds ?? []).forEach((id) => {
      if (!knownMediaIds.has(id)) errors.push(`${chapter.id}: broken mediaIds reference ${id}`)
    })
  })

  return errors
}
