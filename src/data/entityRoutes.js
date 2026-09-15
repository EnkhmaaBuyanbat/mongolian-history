import { eras } from './eras'
import { events } from './events'

export function getPersonSlug(person) {
  return person.slug ?? person.id.replace('person-', '')
}

function isPublicChronologyEvent(event) {
  return Boolean(event?.id)
    && !String(event.id).startsWith('demo-')
    && (event.status === 'researched' || event.status === 'verified')
}

export function getTimelineHref({ eraId = '', eventId = '' } = {}) {
  const params = new URLSearchParams()
  const era = eras.find((item) => item.id === eraId)
  const event = events.find((item) => item.id === eventId)
  if (era) params.set('era', era.id)
  if (isPublicChronologyEvent(event)) params.set('event', event.id)
  const search = params.toString()
  return search ? `/timeline?${search}` : '/timeline'
}

export function getEventHref(event) {
  if (!isPublicChronologyEvent(event)) return '/timeline'
  return getTimelineHref({ eraId: event.eraId, eventId: event.id })
}

export function getPersonHref(person) {
  return person ? `/people/${getPersonSlug(person)}` : null
}

function isPublicSupportingRecord(record) {
  if (!record?.id || String(record.id).startsWith('demo-')) return false
  if (record.status === 'draft') return false
  if (record.status && record.status !== 'researched' && record.status !== 'verified') return false
  return true
}

export function getOrganizationSlug(organization) {
  return organization?.slug ?? String(organization?.id ?? '').replace('organization-', '')
}

export function getOrganizationHref(organization) {
  if (!isPublicSupportingRecord(organization)) return null
  const slug = getOrganizationSlug(organization)
  return slug ? `/organizations/${slug}` : null
}

export function getCompanySlug(company) {
  return company?.slug ?? String(company?.id ?? '').replace('company-', '')
}

export function getCompanyHref(company) {
  if (!isPublicSupportingRecord(company)) return null
  const slug = getCompanySlug(company)
  return slug ? `/companies/${slug}` : null
}

export function getClaimSlug(claim) {
  return claim?.slug ?? String(claim?.id ?? '').replace(/^claim-/, '')
}

export function getClaimHref(claim) {
  if (!claim?.id || String(claim.id).startsWith('demo-')) return null
  const slug = getClaimSlug(claim)
  return slug ? `/claims/${slug}` : null
}

export function getChapterHref(chapter) {
  const slug = chapter.slug ?? chapter.id.replace('chapter-', '')
  const era = eras.find((item) => item.id === chapter.eraId)
  return `/eras/${era?.slug ?? chapter.eraId}/chapters/${slug}`
}

export function getEntityHref(record) {
  if (!record || record.status === 'draft') return null
  if (record.id.startsWith('person-')) return getPersonHref(record)
  if (record.id.startsWith('event-')) return isPublicChronologyEvent(record) ? getEventHref(record) : null
  if (record.id.startsWith('organization-')) return getOrganizationHref(record)
  if (record.id.startsWith('company-')) return getCompanyHref(record)
  if (record.id.startsWith('claim-')) return getClaimHref(record)
  if (record.id.startsWith('polity-')) return `/polities/${record.id.replace('polity-', '')}`
  if (record.id.startsWith('place-')) return `/places/${record.id.replace('place-', '')}`
  if (record.id.startsWith('site-')) return `/sites/${record.id.replace('site-', '')}`
  if (record.id.startsWith('object-')) return `/objects/${record.id.replace('object-', '')}`
  return null
}
