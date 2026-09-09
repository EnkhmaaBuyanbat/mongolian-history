import { eras } from './eras'
import { media } from './media'
import { polities } from './polities'
import { familyTreePersonIds } from './familyTreePeople'
import { personRelationships } from './personRelationships'
import { events } from './events'
import { chapters } from './chapters'

export const dossierPersonIds = new Set([
  'person-modu-chanyu',
  'person-temujin-chinggis-khan',
  'person-sorghaghtani-beki',
  'person-kul-tegin',
  'person-zanabazar',
  'person-batmonkh',
  'person-bilge-khagan',
  'person-bumin-qaghan',
  'person-tanshihuai',
  'person-yujiulu-shelun',
  'person-borte',
  'person-jamukha',
  'person-toghrul-ong-khan',
  'person-ogedei-khan',
  'person-mongke-khan',
  'person-tolui',
  'person-qubilai',
  'person-mandukhai-khatun',
])

const roleRules = [
  ['RELIGIOUS & CULTURAL', /religious|khutuktu|artist|lama|monastic|scholar|historian|translator/i],
  ['MILITARY', /commander|military|general/i],
  ['RULER & STATE LEADER', /ruler|khan|khagan|qaghan|chanyu|emperor|president|prime minister|party and state leader|regent/i],
  ['DYNASTIC & HOUSEHOLD', /spouse|wife|consort|mother|son|daughter|prince|household/i],
  ['POLITICAL FIGURE', /political|statesman|minister|diplomat|revolutionary|organizer/i],
]

export function getRoleCategory(person) {
  const role = person.role ?? ''
  return roleRules.find(([, pattern]) => pattern.test(role))?.[0] ?? null
}

export function getPersonPolities(person) {
  const ids = new Set([
    ...(person.polityIds ?? []),
    ...(person.relatedEntityIds ?? []).filter((id) => id.startsWith('polity-')),
  ])
  return polities.filter((polity) => ids.has(polity.id))
}

export function getProfileDepth(person) {
  if (person.storyId) return { key: 'story', label: 'STORY', action: 'READ STORY' }
  if (person.biographySections?.length) return { key: 'extended', label: 'EXTENDED BIOGRAPHY', action: 'READ BIOGRAPHY' }
  if (person.summary || person.shortBio) return { key: 'profile', label: 'PROFILE', action: 'VIEW PROFILE' }
  return { key: 'reference', label: 'REFERENCE', action: 'VIEW REFERENCE' }
}

export function getEvidenceState(person) {
  const directMedia = media.filter((record) => record.approved && record.reviewStatus === 'APPROVED' && record.relatedPersonIds?.includes(person.id))
  if (directMedia.length) return { label: directMedia[0].evidenceType.replaceAll('_', ' '), media: directMedia }
  if (person.portrait?.status === 'NO_RELIABLE_PORTRAIT') return { label: 'NO RELIABLE PORTRAIT', media: [] }
  return { label: 'NO RELIABLE PORTRAIT', media: [] }
}

export function getPersonPresentation(person) {
  const eraIds = person.eraIds ?? (person.eraId ? [person.eraId] : [])
  const personEras = eras.filter((era) => eraIds.includes(era.id))
  const depth = getProfileDepth(person)
  const evidence = getEvidenceState(person)
  const relationships = personRelationships.filter((record) => record.personId === person.id || record.relatedPersonId === person.id)
  const relatedIds = person.relatedEntityIds ?? []
  const hasTimeline = events.some((event) => event.people?.includes(person.id) || person.eventIds?.includes(event.id) || relatedIds.includes(event.id))
  const hasChapters = chapters.some((chapter) => chapter.relatedPeopleIds?.includes(person.id))
  return {
    depth,
    evidence,
    eras: personEras,
    period: person.periodDisplay ?? person.period ?? 'Dates not securely established',
    periodEstablished: Boolean(person.periodDisplay ?? person.period),
    roleCategory: getRoleCategory(person),
    polities: getPersonPolities(person),
    familyTreeEligible: familyTreePersonIds.includes(person.id),
    isDossier: dossierPersonIds.has(person.id),
    availableSections: {
      overview: Boolean(person.summary || person.shortBio || person.storyId || person.biographySections?.length),
      context: Boolean(personEras.length || getPersonPolities(person).length || hasChapters),
      timeline: hasTimeline,
      family: relationships.some((record) => record.type === 'spouse' || record.type.includes('parent')),
      politicalNetwork: relationships.some((record) => record.type !== 'spouse' && record.type !== 'parent'),
      characterAndReputation: Boolean(person.characterAndReputation),
      evidence: Boolean(evidence.label),
      story: Boolean(person.storyId),
      familyTree: familyTreePersonIds.includes(person.id),
    },
  }
}
