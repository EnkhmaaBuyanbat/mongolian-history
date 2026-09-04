/** Era metadata now lives canonically in eras.js. */
export { eras as timelineEntries } from './eras'

export const timelineStatusOptions = ['draft', 'researched', 'verified']

/**
 * Event-level record shape prepared for future researched entries.
 * The structure is intentionally flexible so it can support editorial review,
 * visual map/3D features, and source tracking without hard-coding a single UI.
 *
 * Each field exists to support a future historical event record that can be
 * queried, filtered, enriched, and surfaced in a richer timeline experience.
 */
export const timelineEvents = [
  {
    id: 'demo-placeholder-01',
    year: null,
    endYear: null,
    dateDisplay: 'DEMO — TBD',
    title: 'DEMO — Placeholder Event',
    summary:
      'This is a non-historical placeholder record used to demonstrate the future event schema. No factual claim is intended.',
    eraId: 'ancient-steppe',
    type: 'event',
    importance: 'draft',
    people: [],
    places: [],
    relatedEvents: [],
    mapAvailable: false,
    experience3dAvailable: false,
    sources: [],
    status: 'draft',
  },
  {
    id: 'demo-placeholder-02',
    year: null,
    endYear: null,
    dateDisplay: 'DEMO — TBD',
    title: 'DEMO — Researchable Event',
    summary:
      'A second placeholder showing how a researched event record is shaped before historical sources are added.',
    eraId: 'before-chinggis',
    type: 'political',
    importance: 'medium',
    people: [],
    places: [],
    relatedEvents: ['demo-placeholder-01'],
    mapAvailable: false,
    experience3dAvailable: false,
    sources: [],
    status: 'researched',
  },
  {
    id: 'demo-placeholder-03',
    year: null,
    endYear: null,
    dateDisplay: 'DEMO — TBD',
    title: 'DEMO — Verified Event Template',
    summary:
      'A final placeholder showing the fully reviewed workflow state expected for later verified entries.',
    eraId: 'modern',
    type: 'social',
    importance: 'high',
    people: [],
    places: [],
    relatedEvents: [],
    mapAvailable: false,
    experience3dAvailable: false,
    sources: [],
    status: 'verified',
  },
]

export const timelineEventFieldGuide = {
  id: 'Unique stable identifier used for keys, filters, and future references across the timeline system.',
  year: 'Primary start year for chronological sorting. Use null when the exact year is not yet known.',
  endYear: 'Optional end year for multi-year spans, transitions, or ongoing periods.',
  dateDisplay: 'Human-readable label for display in a card or detail view; may include ranges, approximate dates, or text like “TBD”.',
  title: 'Plain-language event title used in historic summaries or detail cards.',
  summary: 'Short explanatory summary written for editorial use and future display; kept intentionally concise.',
  eraId: 'Links the event to the provisional era/category it belongs to for navigation and filtering.',
  type: 'Broad classification such as political, social, military, cultural, or generic event.',
  importance: 'Editorial urgency or weight scale used for highlighting notable moments or lower-priority entries.',
  people: 'Array of people or figures connected to the event, stored as stable IDs or names for later linking.',
  places: 'Array of associated place names or location IDs for map and spatial context.',
  relatedEvents: 'List of related event IDs, useful for chronology linking and cross-references.',
  mapAvailable: 'Boolean flag indicating whether a map layer or geographic context is available for this event.',
  experience3dAvailable: 'Boolean flag reserving space for future immersive 3D or scene-based experience support.',
  sources: 'Array of source references or citation objects when historical research is added later.',
  status: 'Editorial workflow state: draft, researched, or verified.',
}
