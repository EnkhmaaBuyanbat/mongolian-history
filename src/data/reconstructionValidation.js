import { chapters } from './chapters.js'
import { eras } from './eras.js'
import { events } from './events.js'
import { media } from './media.js'
import { people } from './people.js'
import { places } from './places.js'
import { reconstructions, reconstructionEditorialStatusOptions, reconstructionTypeOptions } from './reconstructions.js'
import { sources } from './sources.js'

const referenceRegistries = {
  chapterIds: chapters,
  personIds: people,
  eventIds: events,
  placeIds: places,
  sourceRefs: sources,
  mediaRefs: media,
}

function duplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
}

function hasAsset(record) {
  return Boolean(record.asset && [record.asset.largePath, record.asset.mediumPath, record.asset.mobilePath].some(Boolean))
}

export function validateReconstructions(records = reconstructions) {
  const errors = []
  duplicates(records.map((record) => record.id)).forEach((id) => errors.push(`Duplicate reconstruction id: ${id}`))
  duplicates(records.map((record) => record.slug)).forEach((slug) => errors.push(`Duplicate reconstruction slug: ${slug}`))
  const eraIds = new Set(eras.map((record) => record.id))

  records.forEach((record) => {
    if (!reconstructionTypeOptions.includes(record.reconstructionType)) errors.push(`${record.id}: invalid reconstructionType`)
    if (!reconstructionEditorialStatusOptions.includes(record.editorialStatus)) errors.push(`${record.id}: invalid editorialStatus`)
    if (record.eraId && !eraIds.has(record.eraId)) errors.push(`${record.id}: broken eraId reference ${record.eraId}`)

    Object.entries(referenceRegistries).forEach(([field, registry]) => {
      const knownIds = new Set(registry.map((item) => item.id))
      ;(record[field] ?? []).forEach((id) => {
        if (!knownIds.has(id)) errors.push(`${record.id}: broken ${field} reference ${id}`)
      })
    })

    if (record.approved) {
      ;['title', 'reconstructionType', 'period', 'historicalBasis', 'historicalCaution'].forEach((field) => {
        if (!record[field]) errors.push(`${record.id}: approved reconstruction missing ${field}`)
      })
      if (!hasAsset(record)) errors.push(`${record.id}: approved reconstruction missing asset`)
      if (record.editorialStatus !== 'APPROVED') errors.push(`${record.id}: approved reconstruction has non-approved editorialStatus`)
    }
  })

  return errors
}
