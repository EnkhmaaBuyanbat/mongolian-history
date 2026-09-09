import { eras } from './eras.js'
import { sources } from './sources.js'
import { eraVisualBriefs } from './eraVisualBriefs.js'

function duplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
}

export function validateEraVisualBriefs(records = eraVisualBriefs) {
  const errors = []
  const eraIds = new Set(eras.map((record) => record.id))
  const sourceIds = new Set(sources.map((record) => record.id))
  duplicates(records.map((record) => record.id)).forEach((id) => errors.push(`Duplicate visual brief id: ${id}`))
  eras.forEach((era) => {
    const matches = records.filter((record) => record.eraId === era.id)
    if (matches.length !== 1) errors.push(`${era.id}: expected one visual brief, found ${matches.length}`)
  })
  records.forEach((record) => {
    if (!eraIds.has(record.eraId)) errors.push(`${record.id}: broken eraId ${record.eraId}`)
    ;['period','visualPurpose','scene','historicalBasis','composition','desktopFocalPosition','mobileFocalPosition','overlayRecommendation','evidenceClassification','finalPrompt','negativePrompt'].forEach((field) => {
      if (!record[field]) errors.push(`${record.id}: missing ${field}`)
    })
    ;(record.sourceRefs ?? []).forEach((id) => {
      if (!sourceIds.has(id)) errors.push(`${record.id}: broken sourceRefs ${id}`)
    })
    if (record.approved) errors.push(`${record.id}: generation brief must not be approved`)
    if (record.asset) errors.push(`${record.id}: generation brief must not define an asset`)
  })
  return errors
}
