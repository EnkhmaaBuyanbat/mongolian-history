/**
 * Canonical structure for the About page.
 *
 * This file holds identity only: routes, existing homepage visual roles,
 * existing evidence codes, and existing source record IDs. All prose lives in
 * the EN/MN locale bundles so no structural identifier is ever translated.
 */

export const aboutRoutes = {
  eras: '/eras',
  timeline: '/timeline',
  people: '/people',
  familyTree: '/family-tree',
  culture: '/culture',
  experience: '/experience',
}

// Reuses the approved homepage visual assignments. No new image assignment.
export const aboutVisualRoles = {
  hero: 'hero',
  learn: 'gatewayLearn',
  explore: 'gatewayExplore',
  experience: 'gatewayExperience',
  survivingEvidence: 'era1',
  reconstructed: 'featuredStory',
}

// Display order for the mission strands.
export const aboutMissionStrandKeys = ['scholarship', 'storytelling', 'exploration']

// Display order for the three platform pathways.
export const aboutPathwayKeys = ['learn', 'explore', 'experience']

// Presentation order over existing evidence codes. No new confidence values.
export const aboutEvidenceConceptCodes = [
  'ESTABLISHED',
  'INTERPRETED',
  'DEBATED',
  'SOURCE_ACCOUNT',
  'ARCHAEOLOGICAL_EVIDENCE',
]

// Presentation order over existing portrait-state codes.
export const aboutPortraitStateCodes = [
  'HISTORICAL_DEPICTION',
  'ARCHAEOLOGICAL_EVIDENCE',
  'CONTEXTUAL_HISTORICAL_RECONSTRUCTION',
  'NO_RELIABLE_PORTRAIT',
]

// Display order for the kinds of evidence described in the Sources section.
export const aboutSourceKindKeys = [
  'chronicles',
  'inscriptions',
  'archaeology',
  'documents',
  'scholarship',
  'collections',
  'archives',
]

// The medieval narrative source given its own framing callout.
export const aboutNarrativeSourceId = 'source-secret-history-mongols'

// Existing canonical source records shown as examples of the evidence base.
// Titles and citations are rendered from the canonical record in both locales.
export const aboutExampleSourceIds = [
  'source-cambridge-bulletin-soas-orkhon-inscriptions',
  'source-springer-duurlig-earcup-2025',
  'source-rashid-al-din-compendium',
  'source-unesco-orkhon-valley',
  'source-dunnell-rise-chinggis-2023',
  'source-broadbridge-women-mongol-empire-2018',
]

// Display order for the roadmap.
export const aboutFutureKeys = [
  'deeperStories',
  'connectedHistory',
  'bilingualAccess',
  'immersiveHistory',
]
