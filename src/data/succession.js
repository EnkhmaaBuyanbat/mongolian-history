export const SUCCESSION_ANCHOR_ID = 'rulers-succession'

const RISE_EMPIRE_SOURCE_IDS = ['source-dunnell-rise-chinggis-2023']

export const eraSuccessions = {
  'rise-empire': {
    id: 'succession-rise-empire',
    eraId: 'rise-empire',
    spanStart: 1206,
    spanEnd: 1260,
    sourceIds: [
      'source-dunnell-rise-chinggis-2023',
      'source-secret-history-mongols',
    ],
    continuationEraId: 'mongol-world',
    segments: [
      {
        id: 'seg-chinggis-1206-1227',
        kind: 'great_khan',
        personIds: ['person-temujin-chinggis-khan'],
        startYear: 1206,
        endYear: 1227,
        dateConfidence: 'ESTABLISHED',
        eventIds: ['event-new-mongol-order-1206', 'event-chinggis-death-1227'],
        chapterIds: ['chapter-building-new-order-1206', 'chapter-chinggis-death-succession'],
        predecessorPersonId: null,
        sourceIds: [...RISE_EMPIRE_SOURCE_IDS, 'source-secret-history-mongols'],
      },
      {
        id: 'seg-tolui-1227-1229',
        kind: 'succession_period',
        personIds: ['person-tolui'],
        startYear: 1227,
        endYear: 1229,
        dateConfidence: 'ESTABLISHED',
        eventIds: ['event-tolui-regency-1227-1229'],
        chapterIds: ['chapter-chinggis-death-succession'],
        predecessorPersonId: 'person-temujin-chinggis-khan',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
      {
        id: 'seg-ogedei-1229-1241',
        kind: 'great_khan',
        personIds: ['person-ogedei-khan'],
        startYear: 1229,
        endYear: 1241,
        dateConfidence: 'ESTABLISHED',
        eventIds: ['event-ogedei-accession-1229', 'event-ogedei-death-1241'],
        chapterIds: ['chapter-ogedei-governing-empire'],
        predecessorPersonId: 'person-tolui',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
      {
        id: 'seg-toregene-1242-1246',
        kind: 'regent',
        personIds: ['person-toregene-khatun'],
        startYear: 1242,
        endYear: 1246,
        dateConfidence: 'CAUTIOUS',
        eventIds: ['event-ogedei-death-1241', 'event-toregene-regency-1242-1246'],
        chapterIds: ['chapter-queens-regents-throne'],
        predecessorPersonId: 'person-ogedei-khan',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
      {
        id: 'seg-guyuk-1246-1248',
        kind: 'great_khan',
        personIds: ['person-guyuk-khan'],
        startYear: 1246,
        endYear: 1248,
        dateConfidence: 'ESTABLISHED',
        eventIds: ['event-guyuk-accession-1246', 'event-guyuk-death-1248'],
        chapterIds: ['chapter-queens-regents-throne'],
        predecessorPersonId: 'person-toregene-khatun',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
      {
        id: 'seg-oghul-1248-1251',
        kind: 'succession_period',
        personIds: ['person-oghul-qaimish'],
        startYear: 1248,
        endYear: 1251,
        dateConfidence: 'ESTABLISHED',
        eventIds: ['event-oghul-qaimish-regency-1248-1251'],
        chapterIds: ['chapter-queens-regents-throne'],
        predecessorPersonId: 'person-guyuk-khan',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
      {
        id: 'seg-mongke-1251-1259',
        kind: 'great_khan',
        personIds: ['person-mongke-khan'],
        startYear: 1251,
        endYear: 1259,
        dateConfidence: 'ESTABLISHED',
        eventIds: ['event-mongke-accession-1251', 'event-mongke-death-1259'],
        chapterIds: ['chapter-mongke-united-empire-crisis'],
        predecessorPersonId: 'person-oghul-qaimish',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
      {
        id: 'seg-crisis-1259-1260',
        kind: 'disputed_succession',
        personIds: ['person-qubilai', 'person-ariq-boke'],
        startYear: 1259,
        endYear: 1260,
        dateConfidence: 'ESTABLISHED',
        eventIds: [
          'event-mongke-death-1259',
          'event-rival-claimants-1260',
          'event-united-order-rupture-1260',
        ],
        chapterIds: ['chapter-mongke-united-empire-crisis'],
        predecessorPersonId: 'person-mongke-khan',
        continuationEraId: 'mongol-world',
        sourceIds: RISE_EMPIRE_SOURCE_IDS,
      },
    ],
  },
}

export function getEraSuccession(eraId) {
  return eraSuccessions[eraId] ?? null
}

export function getSegmentDuration(segment) {
  return Math.max(1, (segment.endYear ?? segment.startYear) - segment.startYear)
}
