/**
 * Future polity or state records.
 * Prepared for historical entities such as confederations, khanates, or political entities.
 */

export const politiesStatusOptions = ['draft', 'researched', 'verified']

export const polities = [
  {
    id: 'polity-xiongnu',
    title: 'Xiongnu',
    pathwayLabel: 'Xiongnu',
    type: 'polity',
    startYear: -300,
    period: 'approximately 3rd century BCE–2nd century CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'The Xiongnu created a major steppe empire centred on the territory of present-day Mongolia. Their political world interacted extensively with Han China and participated in long-distance networks across the Eurasian steppe.',
    relatedEntityIds: [
      'site-noyon-uul-noin-ula',
      'site-gol-mod',
      'site-gol-mod-ii',
      'site-duurlig-nars',
      'site-takhiltyn-khotgor',
      'person-modu-chanyu',
      'event-modu-becomes-chanyu',
      'event-confrontation-baideng',
      'event-early-han-xiongnu-heqin',
      'event-death-modu-chanyu',
    ],
    sourceRefs: ['source-unesco-xiongnu-cemetery'],
    mapAvailable: true,
  },
  {
    id: 'polity-uyghur-khaganate',
    title: 'Uyghur Khaganate',
    pathwayLabel: 'Uyghur',
    type: 'polity',
    startYear: 744,
    period: '744–840 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'The Uyghur Khaganate became a major steppe empire centred in Mongolia during the eighth and ninth centuries.',
    relatedEntityIds: [
      'place-orkhon-valley',
      'site-khar-balgas',
      'event-uyghur-khaganate-established-744',
      'event-end-uyghur-khaganate-840',
    ],
    sourceRefs: ['source-cambridge-uighurs'],
    mapAvailable: true,
  },
  {
    id: 'polity-xianbei-political-world',
    title: 'Xianbei Political World',
    pathwayLabel: 'Xianbei',
    type: 'political world / confederational formations',
    startYear: 155,
    period: '2nd–3rd centuries CE',
    eraId: 'ancient-steppe',
    status: 'researched',
    summary:
      'Following the decline of Xiongnu power, Xianbei groups became increasingly important across the eastern steppe and northern frontier regions. They did not form one continuously unified state. During the second century CE, Tanshihuai temporarily brought many Xianbei groups into a powerful confederation, but political fragmentation continued after his death.',
    relatedEntityIds: [
      'person-tanshihuai',
      'event-xianbei-defeat-northern-xiongnu-155',
      'event-tanshihuai-confederation-second-century',
    ],
    sourceRefs: ['source-pearce-northern-wei', 'source-early-nomads-eastern-steppe'],
    mapAvailable: false,
  },
  {
    id: 'polity-rouran-khaganate',
    title: 'Rouran Khaganate',
    pathwayLabel: 'Rouran',
    type: 'polity / khaganate',
    startYear: 402,
    period: '402–555 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'The Rouran Khaganate was a major nomadic empire of Inner Asia established in 402 CE. Centred on the Mongolian steppe, it developed an imperial political and military system and became one of the dominant powers of Inner Asia during the fifth and early sixth centuries.',
    relatedEntityIds: [
      'person-yujiulu-shelun',
      'event-rouran-khaganate-established-402',
      'event-rise-of-turk-power-552',
    ],
    sourceRefs: [
      'source-kradin-rouran-society',
      'source-kradin-rouran-empire',
      'source-early-nomads-eastern-steppe',
      'source-inner-asia-history',
      'source-inner-asia-global-early-middle-ages',
    ],
    mapAvailable: false,
  },
  {
    id: 'polity-turk-political-world',
    title: 'Türk Political World',
    pathwayLabel: 'Türk',
    type: 'political world / khaganate',
    startYear: 552,
    period: 'beginning in 552 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Türk political power emerged on the Mongolian Plateau in the mid-sixth century and became one of the dominant forces of Inner Asia. Its history included eastern and western branches, periods of division, and later restoration.',
    relatedEntityIds: [
      'person-kul-tegin',
      'person-bilge-khagan',
      'place-orkhon-valley',
      'site-orkhon-turk-memorial-landscape',
      'object-kul-tegin-inscription',
      'object-bilge-khagan-inscription',
      'person-bumin-qaghan',
      'event-rise-of-turk-power-552',
      'event-bilge-khagan-accession-716',
      'event-death-kul-tegin-731',
      'event-kul-tegin-memorial-732',
      'event-death-bilge-khagan-734',
      'event-bilge-khagan-memorial-735',
    ],
    sourceRefs: [
      'source-cambridge-turk-empire',
      'source-unesco-orkhon-valley',
      'source-early-nomads-eastern-steppe',
      'source-inner-asia-history',
      'source-inner-asia-global-early-middle-ages',
    ],
    mapAvailable: false,
  },
]
