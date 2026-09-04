/**
 * Future object or artifact records.
 * Prepared for material culture, manuscripts, artifacts, and physical objects.
 */

export const objectsStatusOptions = ['draft', 'researched', 'verified']

export const objects = [
  {
    id: 'object-gol-mod-ii-roman-glass-vessel',
    title: 'Roman glass vessel',
    type: 'archaeological object / glass vessel',
    eraId: 'ancient-steppe',
    status: 'researched',
    relatedEntityIds: ['site-gol-mod-ii'],
    sourceRefs: ['source-unesco-xiongnu-cemetery'],
  },
  {
    id: 'object-duurlig-nars-inscribed-ear-cup',
    title: 'Inscribed lacquer ear-cup',
    type: 'archaeological object / lacquer ear-cup',
    eraId: 'ancient-steppe',
    status: 'researched',
    relatedEntityIds: ['site-duurlig-nars'],
    sourceRefs: ['source-springer-duurlig-earcup-2025'],
  },
  {
    id: 'object-kul-tegin-inscription',
    title: 'Kül Tegin inscription',
    type: 'monument / inscription',
    period: 'memorial established 732 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'The Kül Tegin inscription belongs to a memorial complex in the Orkhon Valley and preserves political and commemorative representation from the restored Türk political world.',
    relatedEntityIds: [
      'polity-turk-political-world',
      'place-orkhon-valley',
      'person-kul-tegin',
      'site-orkhon-turk-memorial-landscape',
      'event-death-kul-tegin-731',
      'event-kul-tegin-memorial-732',
    ],
    sourceRefs: [
      'source-cambridge-bulletin-soas-orkhon-inscriptions',
      'source-unesco-orkhon-valley',
      'source-jras-old-turkic-authorship',
    ],
  },
  {
    id: 'object-bilge-khagan-inscription',
    title: 'Bilge Khagan inscription',
    type: 'monument / inscription',
    period: 'memorial established 735 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'The inscription associated with Bilge Khagan preserves political and commemorative texts connected with the Türk ruling tradition in the Orkhon Valley.',
    relatedEntityIds: [
      'polity-turk-political-world',
      'place-orkhon-valley',
      'person-bilge-khagan',
      'site-orkhon-turk-memorial-landscape',
      'event-death-bilge-khagan-734',
      'event-bilge-khagan-memorial-735',
    ],
    sourceRefs: [
      'source-cambridge-bulletin-soas-orkhon-inscriptions',
      'source-unesco-orkhon-valley',
      'source-jras-old-turkic-authorship',
    ],
  },
  {
    id: 'demo-object-001',
    title: 'DEMO — Historical Object',
    eraId: 'modern',
    status: 'draft',
    relatedEntityIds: ['demo-event-001'],
    sourceRefs: [],
  },
]
