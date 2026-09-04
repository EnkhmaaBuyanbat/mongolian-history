/**
 * Future place records.
 * Prepared for locations, regions, or named landscapes associated with historical events.
 */

export const placesStatusOptions = ['draft', 'researched', 'verified']

export const places = [
  {
    id: 'place-orkhon-valley',
    title: 'Orkhon Valley',
    type: 'place / cultural landscape',
    eraId: 'multiple',
    eraIds: [
      'ancient-steppe',
      'before-chinggis',
      'rise-empire',
      'mongol-world',
      'northern-yuan',
      'qing-rule',
      'revolution-socialist',
      'modern',
    ],
    status: 'verified',
    summary:
      'The Orkhon Valley is one of the central historical landscapes of the Mongolian steppe. Across different centuries it became associated with successive political, religious and urban centres.',
    relatedEntityIds: [
      'site-khar-balgas',
      'polity-uyghur-khaganate',
      'event-uyghur-khaganate-established-744',
      'event-end-uyghur-khaganate-840',
      'event-bilge-khagan-accession-716',
      'event-death-kul-tegin-731',
      'event-kul-tegin-memorial-732',
      'event-death-bilge-khagan-734',
      'event-bilge-khagan-memorial-735',
    ],
    sourceRefs: ['source-unesco-orkhon-valley'],
    mapAvailable: true,
    experience3dAvailable: true,
  },
]
