import { eras } from './eras.js'
import { media } from './media.js'
import { reconstructions } from './reconstructions.js'
import { eraWorlds, eraWorldTypeOptions } from './eraWorlds.js'

function duplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
}

export function validateEraWorlds(records = eraWorlds) {
  const errors = []
  duplicates(records.map((record) => record.id)).forEach((id) => errors.push(`Duplicate Era World id: ${id}`))
  duplicates(records.map((record) => record.slug)).forEach((slug) => errors.push(`Duplicate Era World slug: ${slug}`))
  const eraIds = new Set(eras.map((record) => record.id))
  const mediaIds = new Set(media.map((record) => record.id))
  const reconstructionIds = new Set(reconstructions.map((record) => record.id))

  records.forEach((record) => {
    if (!eraIds.has(record.eraId)) errors.push(`${record.id}: broken eraId ${record.eraId}`)
    if (!eraWorldTypeOptions.includes(record.worldType)) errors.push(`${record.id}: invalid worldType`)
    if (record.mediaId && !mediaIds.has(record.mediaId)) errors.push(`${record.id}: broken mediaId ${record.mediaId}`)
    if (record.reconstructionId && !reconstructionIds.has(record.reconstructionId)) errors.push(`${record.id}: broken reconstructionId ${record.reconstructionId}`)
    if (record.mediaId && record.reconstructionId) errors.push(`${record.id}: cannot use mediaId and reconstructionId together`)
  })

  eras.forEach((era) => {
    const matches = records.filter((record) => record.eraId === era.id)
    if (matches.length !== 1) errors.push(`${era.id}: expected one Era World, found ${matches.length}`)
  })
  return errors
}
