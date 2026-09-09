import { chapters } from './chapters.js'
import { eraWorlds } from './eraWorlds.js'
import { media } from './media.js'

export const chapterVisualTypeOptions = ['HISTORICAL_MEDIA', 'HISTORICAL_RECONSTRUCTION', 'EDUCATIONAL_DIAGRAM', 'INTENTIONAL_FALLBACK']
export const chapterVisualStatusOptions = ['READY', 'NEEDS_MEDIA', 'NEEDS_RECONSTRUCTION', 'NEEDS_DIAGRAM', 'FALLBACK_FOR_NOW']
export const chapterHeroStatusOptions = ['APPROVED_MEDIA', 'APPROVED_RECONSTRUCTION', 'DESIGNED_FALLBACK', 'NEEDS_MEDIA', 'NEEDS_RECONSTRUCTION']
export const chapterFallbackMotifOptions = ['POLITICAL_ORDER', 'SUCCESSION', 'EVIDENCE', 'CONFLICT', 'RELIGION', 'EXCHANGE', 'SOCIETY', 'TRANSITION']

export const educationalDiagrams = [
  {
    id: 'diagram-political-order-1206', type: 'POLITICAL_ORDER', title: 'Political Order After 1206', chapterIds: ['chapter-building-new-order-1206'],
    summary: 'A schematic showing connected fields of authority in the emerging imperial order rather than a complete constitutional chart.',
    items: [
      { title: 'Imperial Household', text: 'dynastic and household authority' },
      { title: 'Assemblies', text: 'recognition and political deliberation' },
      { title: 'Incorporated Elites', text: 'changing service and obligations' },
      { title: 'Delegated Commands', text: 'authority exercised across distant theaters' },
      { title: 'Military-Political Units', text: 'organization intertwined with households' },
    ],
    variant: 'landscape', evidenceLabel: 'EDUCATIONAL DIAGRAM', sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-secret-history-mongols'], status: 'READY',
    note: 'A teaching schematic of relationships described in the sources, not a complete constitution or a claim that every institution was uniform.',
  },
  {
    id: 'diagram-regency-succession-1241-1251', type: 'FAMILY_SUCCESSION', title: 'Regency and Contested Succession, 1241–1251', chapterIds: ['chapter-queens-regents-throne'],
    summary: 'A chronological relationship diagram showing that regency was a form of government within competing imperial households.',
    items: [
      { title: '1241 · Ögedei dies', text: 'a succession crisis begins' },
      { title: 'Töregene Khatun', text: 'regency and support for Güyük’s succession' },
      { title: '1246 · Güyük', text: 'accession after an extended interregnum' },
      { title: 'Oghul-Qaimish', text: 'regency after Güyük’s death in 1248' },
      { title: 'Sorghaghtani and Batu', text: 'political roles in the realignment preceding Möngke’s accession' },
      { title: '1251 · Möngke', text: 'accession and a changed balance among households' },
    ],
    variant: 'timeline', evidenceLabel: 'SUCCESSION DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
    note: 'The sequence does not reduce imperial government to a simple hereditary line or treat later narrative detail as a verbatim record.',
  },
]

export const chapterVisualAssignments = [
  {
    id: 'chapter-visual-orkhon-world', chapterId: 'chapter-orkhon-world', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-kul-tegin-inscription-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-kul-tegin-inscription-01', reconstructionId: null, designedFallback: null },
    title: 'Reading a Monumental Source', summary: 'The inscription is material and textual evidence for Türk political memory, authorship, and commemoration.', alt: 'Weathered stone surface bearing vertical lines of the Kül Tegin inscription.', evidenceLabel: 'ARCHAEOLOGICAL EVIDENCE · PRIMARY TEXTUAL SOURCE', sourceRefs: ['source-cambridge-bulletin-soas-orkhon-inscriptions'], status: 'READY',
  },
  {
    id: 'chapter-visual-building-new-order-1206', chapterId: 'chapter-building-new-order-1206', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-political-order-1206',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' },
    title: 'How the New Order Worked', summary: 'This diagram organizes the chapter’s evidence about household authority, assemblies, incorporated elites, and delegated command.', alt: 'Conceptual political-order diagram linking the imperial household, assemblies, incorporated elites, delegated commands, and military-political units.', evidenceLabel: 'EDUCATIONAL DIAGRAM', sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-secret-history-mongols'], status: 'READY',
  },
  {
    id: 'chapter-visual-queens-regents-throne', chapterId: 'chapter-queens-regents-throne', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-regency-succession-1241-1251',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'SUCCESSION' },
    title: 'Regency Was Government', summary: 'The succession sequence foregrounds Töregene, Oghul-Qaimish, and Sorghaghtani as political actors rather than gaps between male reigns.', alt: 'Chronological succession diagram from Ögedei’s death through the regencies of Töregene and Oghul-Qaimish to Möngke’s accession.', evidenceLabel: 'SUCCESSION DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-empire-connections', chapterId: 'chapter-empire-of-connections', visualType: 'HISTORICAL_RECONSTRUCTION', mediaId: null, reconstructionId: 'reconstruction-era-04-mongol-world', diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_RECONSTRUCTION', mediaId: null, reconstructionId: 'reconstruction-era-04-mongol-world', designedFallback: null },
    title: 'Movement Across a Connected World', summary: 'A contextual reconstruction introduces relay, caravan, and regional movement without presenting one exact journey or a uniformly safe road.', alt: 'Atmospheric reconstruction of travelers and pack animals moving through a composite Inner Asian route and settlement landscape.', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION', sourceRefs: ['source-biran-intercivilizational-exchange-2015', 'source-allsen-commodity-exchange-1997'], status: 'READY',
  },
]

export const priorityChapterVisualIds = [
  'chapter-bronze-age-steppe', 'chapter-orkhon-world',
  'chapter-khitan-liao-world', 'chapter-new-order-1206',
  'chapter-building-new-order-1206', 'chapter-queens-regents-throne',
  'chapter-crisis-of-1260', 'chapter-empire-of-connections',
  'chapter-mandukhai-dayan-restoration', 'chapter-toward-qing-rule-1691',
  'chapter-entering-qing-imperial-order', 'chapter-late-qing-crisis-road-1911',
  'chapter-1911-independence', 'chapter-late-socialism-democratic-revolution-1990',
  'chapter-building-democratic-state-1990-1992', 'chapter-mining-growth-natural-resources',
]

export function getChapterPrimaryVisual(chapterId) {
  return chapterVisualAssignments.find((record) => record.chapterId === chapterId) ?? null
}

export function getChapterHeroAssignment(chapterId) {
  return getChapterPrimaryVisual(chapterId)?.heroVisual ?? null
}

export function getEducationalDiagram(diagramId) {
  return educationalDiagrams.find((record) => record.id === diagramId) ?? null
}

export const chapterVisualInventory = chapters.map((chapter) => {
  const assignment = getChapterPrimaryVisual(chapter.id)
  const approvedMedia = media.filter((record) => record.approved && (record.relatedChapterIds?.includes(chapter.id) || chapter.mediaIds?.includes(record.id)))
  const inlineDiagrams = chapter.sections?.filter((section) => section.educationalVisual).length ?? 0
  const eraReconstructionId = eraWorlds.find((world) => world.eraId === chapter.eraId)?.reconstructionId ?? null
  const recommendedVisualType = assignment?.visualType
    ?? (approvedMedia.length ? 'HISTORICAL_MEDIA' : inlineDiagrams ? 'EDUCATIONAL_DIAGRAM' : eraReconstructionId ? 'EDUCATIONAL_DIAGRAM' : 'INTENTIONAL_FALLBACK')
  const status = assignment?.status
    ?? (approvedMedia.length ? 'READY' : inlineDiagrams ? 'NEEDS_DIAGRAM' : eraReconstructionId ? 'NEEDS_DIAGRAM' : 'FALLBACK_FOR_NOW')

  return {
    eraId: chapter.eraId, chapterNumber: chapter.number, chapterId: chapter.id, slug: chapter.slug ?? chapter.id.replace('chapter-', ''), title: chapter.title,
    currentVisual: assignment?.id ?? (approvedMedia.length ? approvedMedia.map((record) => record.id).join(', ') : inlineDiagrams ? `${inlineDiagrams} inline educational visual${inlineDiagrams === 1 ? '' : 's'}` : null),
    recommendedVisualType,
    recommendedSubject: assignment?.summary ?? chapter.summary,
    approvedMediaIds: approvedMedia.map((record) => record.id), reusableReconstructionId: eraReconstructionId,
    newReconstructionAppropriate: !approvedMedia.length && !inlineDiagrams && Boolean(eraReconstructionId), diagramBetterThanImage: Boolean(inlineDiagrams) || recommendedVisualType === 'EDUCATIONAL_DIAGRAM',
    evidenceProvenanceRisk: approvedMedia.length ? 'Use only the approved record’s stated evidentiary scope.' : 'Do not add imagery without source, rights, and evidence review.',
    heroStatus: assignment?.heroVisual?.heroStatus ?? (approvedMedia.length ? 'NEEDS_MEDIA' : eraReconstructionId ? 'NEEDS_RECONSTRUCTION' : 'DESIGNED_FALLBACK'),
    educationalVisualStatus: status,
  }
})
