import { chapters } from './chapters.js'
import { media } from './media.js'
import { reconstructions } from './reconstructions.js'
import { sources } from './sources.js'
import { people } from './people.js'
import { chapterFallbackMotifOptions, chapterHeroStatusOptions, chapterVisualAssignments, chapterVisualInventory, chapterVisualStatusOptions, chapterVisualTypeOptions, educationalDiagramTypeOptions, educationalDiagrams } from './chapterVisuals.js'

const duplicateValues = (values) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]

export function validateChapterVisuals() {
  const errors = []
  const chapterIds = new Set(chapters.map((record) => record.id))
  const mediaIds = new Set(media.map((record) => record.id))
  const reconstructionIds = new Set(reconstructions.map((record) => record.id))
  const diagramIds = new Set(educationalDiagrams.map((record) => record.id))
  const sourceIds = new Set(sources.map((record) => record.id))
  const personIds = new Set(people.map((record) => record.id))

  duplicateValues(chapterVisualAssignments.map((record) => record.id)).forEach((id) => errors.push(`Duplicate chapter visual id: ${id}`))
  duplicateValues(chapterVisualAssignments.map((record) => record.chapterId)).forEach((id) => errors.push(`Duplicate chapter visual assignment: ${id}`))
  duplicateValues(educationalDiagrams.map((record) => record.id)).forEach((id) => errors.push(`Duplicate educational diagram id: ${id}`))

  chapterVisualAssignments.forEach((record) => {
    if (!chapterIds.has(record.chapterId)) errors.push(`${record.id}: broken chapterId ${record.chapterId}`)
    if (!chapterVisualTypeOptions.includes(record.visualType)) errors.push(`${record.id}: invalid visualType`)
    if (!chapterVisualStatusOptions.includes(record.status)) errors.push(`${record.id}: invalid status`)
    if (!educationalDiagramTypeOptions.includes(record.educationalType)) errors.push(`${record.id}: invalid educationalType`)
    const references = [record.mediaId, record.reconstructionId, record.diagramId].filter(Boolean)
    if (record.visualType !== 'INTENTIONAL_FALLBACK' && references.length !== 1) errors.push(`${record.id}: expected exactly one visual reference`)
    if (record.mediaId && !mediaIds.has(record.mediaId)) errors.push(`${record.id}: broken mediaId ${record.mediaId}`)
    if (record.reconstructionId && !reconstructionIds.has(record.reconstructionId)) errors.push(`${record.id}: broken reconstructionId ${record.reconstructionId}`)
    if (record.diagramId && !diagramIds.has(record.diagramId)) errors.push(`${record.id}: broken diagramId ${record.diagramId}`)
    ;['title', 'summary', 'alt', 'evidenceLabel'].forEach((field) => { if (!record[field]) errors.push(`${record.id}: missing ${field}`) })
    ;(record.sourceRefs ?? []).forEach((id) => { if (!sourceIds.has(id)) errors.push(`${record.id}: broken sourceRef ${id}`) })
    const hero = record.heroVisual
    if (hero) {
      if (!chapterHeroStatusOptions.includes(hero.heroStatus)) errors.push(`${record.id}: invalid heroStatus`)
      const heroReferences = [hero.mediaId, hero.reconstructionId, hero.designedFallback].filter(Boolean)
      if (heroReferences.length !== 1) errors.push(`${record.id}: expected exactly one hero reference`)
      if (hero.mediaId && !mediaIds.has(hero.mediaId)) errors.push(`${record.id}: broken hero mediaId ${hero.mediaId}`)
      if (hero.reconstructionId && !reconstructionIds.has(hero.reconstructionId)) errors.push(`${record.id}: broken hero reconstructionId ${hero.reconstructionId}`)
      if (hero.designedFallback && !chapterFallbackMotifOptions.includes(hero.designedFallback)) errors.push(`${record.id}: invalid designedFallback ${hero.designedFallback}`)
    }
  })

  educationalDiagrams.forEach((record) => {
    if (!educationalDiagramTypeOptions.includes(record.type)) errors.push(`${record.id}: invalid diagram type`)
    ;(record.chapterIds ?? []).forEach((id) => { if (!chapterIds.has(id)) errors.push(`${record.id}: broken chapterId ${id}`) })
    ;(record.sourceRefs ?? []).forEach((id) => { if (!sourceIds.has(id)) errors.push(`${record.id}: broken sourceRef ${id}`) })
    ;(record.items ?? []).forEach((item) => { if (item.personId && !personIds.has(item.personId)) errors.push(`${record.id}: broken personId ${item.personId}`) })
    const nodeIds = new Set((record.items ?? []).map((item) => item.id).filter(Boolean))
    ;(record.edges ?? []).forEach((edge) => { if (!nodeIds.has(edge.from) || !nodeIds.has(edge.to)) errors.push(`${record.id}: broken connector ${edge.from} → ${edge.to}`) })
    ;(record.phases ?? []).forEach((phase) => {
      const phaseNodeIds = new Set((phase.items ?? []).map((item) => item.id))
      ;(phase.items ?? []).forEach((item) => { if (item.personId && !personIds.has(item.personId)) errors.push(`${record.id}: broken phase personId ${item.personId}`) })
      ;(phase.edges ?? []).forEach((edge) => { if (!phaseNodeIds.has(edge.from) || !phaseNodeIds.has(edge.to)) errors.push(`${record.id}: broken phase connector ${edge.from} → ${edge.to}`) })
    })
  })
  if (chapterVisualInventory.length !== chapters.length) errors.push(`Expected ${chapters.length} inventory records, found ${chapterVisualInventory.length}`)
  chapterVisualInventory.forEach((record) => {
    if (!chapterHeroStatusOptions.includes(record.heroStatus)) errors.push(`${record.chapterId}: invalid inventory heroStatus`)
    if (!chapterVisualStatusOptions.includes(record.educationalVisualStatus)) errors.push(`${record.chapterId}: invalid inventory educationalVisualStatus`)
  })
  return errors
}
