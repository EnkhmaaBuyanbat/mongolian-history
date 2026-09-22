'use client'

import { chapters } from '../data/chapters'
import { claims } from '../data/claims'
import { companies } from '../data/companies'
import { events } from '../data/events'
import { organizations } from '../data/organizations'
import { people } from '../data/people'
import { places } from '../data/places'
import { sources } from '../data/sources'
import { sortChronologically } from '../data/chronology'
import { getChapterHref, getClaimHref, getCompanyHref, getEntityHref, getEventHref, getOrganizationHref, getPersonHref } from '../data/entityRoutes'
import { getLocalizedEvent } from '../data/eventLocalization'
import { getLocalizedPerson } from '../data/personLocalization'
import { getLocalizedClaim, getLocalizedCompany, getLocalizedOrganization, getLocalizedSource } from '../data/supportingLocalization'
import { useLocale } from '../i18n/useLocale'
import { MeanderLine } from './Ornament'
import CompareSources from './CompareSources'
import RecordFeedbackLink from './RecordFeedbackLink'

function uniqueById(records) {
  return [...new Map(records.filter(Boolean).map((record) => [record.id, record])).values()]
}

function isPublicRecord(record) {
  if (!record?.id || String(record.id).startsWith('demo-')) return false
  if (record.status === 'draft') return false
  if (record.status && record.status !== 'researched' && record.status !== 'verified') return false
  return true
}

function recordsByIds(collection, ids = []) {
  return uniqueById(ids.map((id) => collection.find((record) => record.id === id)).filter(isPublicRecord))
}

function RelatedLinks({ label, items }) {
  const visible = items.filter((item) => item.href)
  if (!visible.length) return null
  return (
    <div className="explorer-related-group">
      <h3>{label}</h3>
      <div className="explorer-link-grid">
        {visible.map((item) => (
          <a key={item.id} href={item.href}>
            <span>{item.kind}</span>
            <strong>{item.title}</strong>
            {item.detail ? <small>{item.detail}</small> : null}
          </a>
        ))}
      </div>
    </div>
  )
}

function SupportingEntityPage({ kind, record }) {
  const { localeSection, localizedRecord } = useLocale()
  const supportingLocale = localeSection('supporting')
  const ui = supportingLocale.ui
  const eventLocale = localeSection('events')
  const peopleLocale = localeSection('people')
  const href = kind === 'organization'
    ? getOrganizationHref(record)
    : kind === 'company'
      ? getCompanyHref(record)
      : getClaimHref(record)

  if (!record || !href) {
    return (
      <article className="explorer-page">
        <div className="section-inner explorer-empty">
          <p className="section-label">{ui[kind] ?? ui.organization}</p>
          <h1>{ui.notFound}</h1>
          <a href="/">{ui.returnHome}</a>
        </div>
      </article>
    )
  }

  const display = kind === 'organization'
    ? getLocalizedOrganization(record, supportingLocale)
    : kind === 'company'
      ? getLocalizedCompany(record, supportingLocale)
      : getLocalizedClaim(record, supportingLocale)
  const typeLabel = display.type ?? display.companyType ?? ui.claim
  const aliases = (display.alternativeNames ?? []).filter(Boolean)
  const relatedEventRecords = sortChronologically(recordsByIds(events, record.relatedEventIds ?? record.relatedEvents ?? []))
  const relatedPeopleRecords = recordsByIds(people, [...(record.leaderIds ?? []), ...(record.memberIds ?? []), ...(record.relatedPersonIds ?? []), ...(record.relatedPeople ?? [])])
  const relatedPlaceRecords = recordsByIds(places, record.relatedPlaceIds ?? record.relatedPlaces ?? [])
  const relatedClaimRecords = recordsByIds(claims, record.relatedClaimIds ?? []).filter((item) => item.id !== record.id)
  const relatedOrganizationRecords = recordsByIds(organizations, [
    ...(record.predecessorIds ?? []),
    ...(record.successorIds ?? []),
    ...(record.relatedOrganizationIds ?? []),
  ]).filter((item) => item.id !== record.id)
  const relatedCompanyRecords = recordsByIds(companies, [
    ...(record.predecessorIds ?? []),
    ...(record.successorIds ?? []),
    ...(record.relatedCompanyIds ?? []),
    ...(record.companyIds ?? []),
  ]).filter((item) => item.id !== record.id)
  const relatedChapterRecords = chapters.filter((chapter) => (
    chapter.status !== 'draft'
    && !String(chapter.id).startsWith('demo-')
    && (
      chapter.organizationIds?.includes(record.id)
      || chapter.companyIds?.includes(record.id)
      || chapter.claimIds?.includes(record.id)
    )
  ))
  const sourceRecords = uniqueById([
    ...(record.sourceRefs ?? []),
    ...(record.sourceSupport ?? []).map((item) => item.sourceId),
  ].map((id) => sources.find((source) => source.id === id)))
  const eraLabels = (record.eraIds ?? []).map((eraId) => localizedRecord('eras', eraId, { id: eraId, title: eraId }).title).filter(Boolean)

  const eventLinks = relatedEventRecords.map((event) => {
    const localized = getLocalizedEvent(event, eventLocale)
    return { id: event.id, href: getEventHref(event), kind: ui.relatedEvents, title: localized.title, detail: localized.dateDisplay }
  })
  const personLinks = relatedPeopleRecords.map((person) => {
    const localized = getLocalizedPerson(person, peopleLocale)
    return { id: person.id, href: getPersonHref(person), kind: ui.relatedPeople, title: localized.title, detail: localized.role }
  })
  const placeLinks = relatedPlaceRecords.map((place) => ({
    id: place.id,
    href: getEntityHref(place),
    kind: ui.relatedPlaces,
    title: localizedRecord('entities', place.id, place).title ?? place.title,
    detail: place.period,
  })).filter((item) => item.href)
  const claimLinks = relatedClaimRecords.map((claim) => {
    const localized = getLocalizedClaim(claim, supportingLocale)
    return { id: claim.id, href: getClaimHref(claim), kind: ui.relatedClaims, title: localized.title }
  })
  const organizationLinks = relatedOrganizationRecords.map((organization) => {
    const localized = getLocalizedOrganization(organization, supportingLocale)
    return { id: organization.id, href: getOrganizationHref(organization), kind: ui.relatedOrganizations, title: localized.title, detail: localized.type }
  }).filter((item) => item.href)
  const companyLinks = relatedCompanyRecords.map((company) => {
    const localized = getLocalizedCompany(company, supportingLocale)
    return { id: company.id, href: getCompanyHref(company), kind: ui.relatedCompanies, title: localized.title, detail: localized.companyType }
  }).filter((item) => item.href)
  const chapterLinks = relatedChapterRecords.map((chapter) => {
    const localized = localizedRecord('chapters', chapter.id, chapter)
    return { id: chapter.id, href: getChapterHref(chapter), kind: ui.relatedChapters, title: localized.title, detail: localized.period }
  })

  return (
    <article className="explorer-page supporting-entity-page">
      <header className="entity-header explorer-header">
        <div className="section-inner entity-header-inner">
          <p className="section-label">{ui[kind] ?? typeLabel}</p>
          <h1>{display.title}</h1>
          {typeLabel ? <p className="entity-period">{typeLabel}</p> : null}
          {display.period ? <p className="entity-period">{display.period}</p> : null}
          {eraLabels.length ? <p className="entity-period">{eraLabels.join(' · ')}</p> : null}
          {record.status ? (
            <div className="entity-status-row">
              <span className="entity-status-badge">{record.status === 'verified' ? localeSection('entities').ui.sourceBacked : (localeSection('entities').ui[record.status] ?? record.status)}</span>
            </div>
          ) : null}
          {aliases.length ? <p className="person-profile-aliases">{ui.alsoKnownAs} {aliases.join(', ')}</p> : null}
          <MeanderLine className="entity-meander" />
        </div>
      </header>

      {display.summary || display.text ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading">
              <p className="section-label">01</p>
              <h2>{kind === 'claim' ? ui.claim : ui.historicalContext}</h2>
            </div>
            <p className="entity-copy">{display.summary || display.text}</p>
            {display.treatment ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.treatment}</p><p className="chapter-callout-text">{display.treatment}</p></aside> : null}
          </div>
        </section>
      ) : null}

      {display.evidenceCaution || display.caution ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading">
              <p className="section-label">{ui.evidenceCaution}</p>
              <h2>{ui.evidenceCaution}</h2>
            </div>
            <p className="entity-copy">{display.evidenceCaution || display.caution}</p>
          </div>
        </section>
      ) : null}

      {kind === 'claim' ? <CompareSources claim={display} hideLead /> : null}

      {display.nameHistory?.length ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">02</p><h2>{ui.nameHistory}</h2></div>
            <div className="supporting-history">
              {display.nameHistory.map((item, index) => (
                <article key={`${item.title}-${index}`}>
                  <span>{[item.startYear, item.endYear].filter((value) => value != null).join('–') || display.period}</span>
                  <strong>{item.title}</strong>
                  {item.context ? <p>{item.context}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {display.ownershipHistory?.length ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">02</p><h2>{ui.ownershipHistory}</h2></div>
            <div className="supporting-history">
              {display.ownershipHistory.map((item, index) => (
                <article key={`${item.period}-${index}`}>
                  <span>{item.period}</span>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {eventLinks.length || personLinks.length || placeLinks.length || claimLinks.length || organizationLinks.length || companyLinks.length || chapterLinks.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.continueExploring}</p><h2>{ui.relatedHistory}</h2></div>
            <RelatedLinks label={ui.relatedEvents} items={eventLinks} />
            <RelatedLinks label={ui.relatedPeople} items={personLinks} />
            <RelatedLinks label={ui.relatedPlaces} items={placeLinks} />
            <RelatedLinks label={ui.relatedClaims} items={claimLinks} />
            <RelatedLinks label={ui.relatedOrganizations} items={organizationLinks} />
            <RelatedLinks label={ui.relatedCompanies} items={companyLinks} />
            <RelatedLinks label={ui.relatedChapters} items={chapterLinks} />
          </div>
        </section>
      ) : null}

      {sourceRecords.length ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.sources}</p><h2>{ui.furtherReading}</h2></div>
            <ul className="chapter-source-list">
              {sourceRecords.map((source) => {
                const localized = getLocalizedSource(source, supportingLocale)
                return (
                  <li key={source.id}>
                    <strong>{localized.title}</strong>
                    <span>{localized.institution ?? localized.author}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <div className="section-inner explorer-inner">
        <RecordFeedbackLink />
      </div>
    </article>
  )
}

export default SupportingEntityPage
