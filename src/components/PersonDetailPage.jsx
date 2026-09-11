import { chapters } from '../data/chapters'
import { campaigns } from '../data/campaigns'
import { eras } from '../data/eras'
import { events } from '../data/events'
import { objects } from '../data/objects'
import { places } from '../data/places'
import { personRelationships } from '../data/personRelationships'
import { people } from '../data/people'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import { getChapterHref, getEntityHref } from '../data/entityRoutes'
import { sortChronologically } from '../data/chronology'
import { getMediaForPerson, resolvePortrait } from '../data/mediaResolvers'
import { MeanderLine } from './Ornament'
import ConfidenceBadge from './ConfidenceBadge'
import HistoricalMedia from './HistoricalMedia'
import { getPersonHeaderVisual } from '../data/pageVisualResolvers'
import CinematicPageHeader from './CinematicPageHeader'
import { getLocalizedPerson, getLocalizedRelationship, getParentChildIds } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedEntity } from '../data/entityLocalization'
import { getLocalizedEvent } from '../data/eventLocalization'

function uniqueRecords(records) {
  return [...new Map(records.map((record) => [record.id, record])).values()]
}

function PersonDetailPage({ person }) {
  const { localeSection, localizedRecord } = useLocale()
  const peopleLocale = localeSection('people')
  const entityLocale = localeSection('entities')
  const ui = peopleLocale.ui
  if (!person) {
    return (
      <article className="person-profile-page">
        <div className="section-inner person-profile-empty">
          <p className="section-label">{ui.people}</p>
          <h1>{ui.personNotFound}</h1>
          <a href="/people">{ui.returnToPeople}</a>
        </div>
      </article>
    )
  }

  const displayPerson = getLocalizedPerson(person, peopleLocale)
  const relatedIds = person.relatedEntityIds ?? []
  const personEvents = sortChronologically(events.filter(
    (event) => event.people?.includes(person.id) || relatedIds.includes(event.id),
  )).map((event) => getLocalizedEvent(event, localeSection('events')))
  const personPolities = uniqueRecords([
    ...polities.filter((polity) => person.polityIds?.includes(polity.id) || relatedIds.includes(polity.id)),
    ...polities.filter((polity) => personEvents.some((event) => event.polities?.includes(polity.id))),
  ])
  const personChapters = chapters.filter((chapter) => chapter.relatedPeopleIds?.includes(person.id))
  const personPlaces = places.filter(
    (place) => relatedIds.includes(place.id) || personEvents.some((event) => event.places?.includes(place.id)),
  )
  const personSites = sites.filter(
    (site) => relatedIds.includes(site.id) || personEvents.some((event) => event.sites?.includes(site.id)),
  )
  const personObjects = objects.filter(
    (object) => relatedIds.includes(object.id) || personEvents.some((event) => event.objects?.includes(object.id)),
  )
  const relationships = personRelationships
    .filter((relationship) => relationship.personId === person.id || relationship.relatedPersonId === person.id)
    .map((relationship) => ({
      ...relationship,
      person: people.find((item) => item.id === (relationship.personId === person.id ? relationship.relatedPersonId : relationship.personId)),
    }))
  const familyRelationships = relationships.filter((relationship) => relationship.type.includes('parent') || relationship.type === 'spouse')
  const isParentOfPerson = (relationship) => getParentChildIds(relationship)?.childId === person.id
  const familyGroups = [
    [ui.parents, ui.parent, familyRelationships.filter((relationship) => relationship.type.includes('parent') && isParentOfPerson(relationship))],
    [ui.spouse, ui.spouse, familyRelationships.filter((relationship) => relationship.type === 'spouse')],
    [ui.children, ui.child, familyRelationships.filter((relationship) => relationship.type.includes('parent') && !isParentOfPerson(relationship))],
  ].filter(([, , records]) => records.length)
  const sourceIds = new Set([
    ...(person.sourceRefs ?? []),
    ...(person.characterAndReputation?.traits ?? []).flatMap((trait) => trait.sourceIds ?? []),
    ...(person.portrait?.sourceIds ?? []),
    ...personEvents.flatMap((event) => event.sources ?? []),
    ...relationships.flatMap((relationship) => [
      ...(relationship.sourceIds ?? []),
      ...(relationship.phases ?? []).flatMap((phase) => phase.sourceIds ?? []),
    ]),
  ])
  const personSources = sources.filter((source) => sourceIds.has(source.id))
  const personCampaigns = campaigns.filter((campaign) => campaign.commanders?.includes(person.id))
  const era = eras.find((item) => item.id === person.eraId)
  const referenceRecords = [
    ...personPlaces.map((record) => ({ ...record, kind: 'Place' })),
    ...personSites.map((record) => ({ ...record, kind: 'Site' })),
    ...personObjects.map((record) => ({ ...record, kind: 'Object' })),
  ]
  const portrait = resolvePortrait(person)
  const personMedia = getMediaForPerson(person.id).filter((record) => record.id !== portrait.media?.id)
  const headerVisual = getPersonHeaderVisual(person)
  const profileLabel = person.profileType === 'story' ? ui.story : person.profileType === 'biography' ? ui.historicalBiography : ui.referenceProfile
  const portraitLabel = person.portrait
    ? (localeSection('evidence')[portrait.status] ?? portrait.status?.replaceAll('_', ' '))
    : null
  const displayEra = era ? localizedRecord('eras', era.id, era) : null

  return (
    <article className="person-profile-page">
      <CinematicPageHeader
        variant="person"
        className="entity-header person-profile-header cinematic-context-header"
        innerClassName="entity-header-inner"
        visual={headerVisual}
        context={era ? <a href={`/eras/${era.slug ?? era.id}`}>{displayEra.title}</a> : null}
        label={profileLabel}
        title={displayPerson.title}
        subtitle={displayPerson.role}
        period={displayPerson.periodDisplay ?? displayPerson.period}
        summary={displayPerson.summary ?? displayPerson.shortBio}
        status={person.status === 'verified' ? ui.sourceBacked : ui.researched}
        portraitStatus={portraitLabel}
        dataAttributes={{ 'data-era-id': person.eraId, 'data-person-id': person.id }}
      >
          {person.alternativeNames?.length ? <p className="person-profile-aliases">{ui.alsoKnownAs} {person.alternativeNames.join(', ')}</p> : null}
          {personPolities.length ? <p className="person-profile-affiliation">{personPolities.map((polity) => getLocalizedEntity(polity, entityLocale).title).join(' / ')}</p> : null}
          <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      {person.portrait ? (
        <section className="entity-section person-visual-evidence-section">
          <div className="section-inner person-profile-inner">
            <HistoricalMedia media={portrait.media} status={portrait.status} note={portrait.status === 'NO_RELIABLE_PORTRAIT' ? ui.noPortraitExplanation : portrait.note} />
          </div>
        </section>
      ) : null}

      {personMedia.map((record) => (
        <section key={record.id} className="entity-section person-visual-evidence-section">
          <div className="section-inner person-profile-inner">
            <HistoricalMedia media={record} heading={ui.associatedEvidence} />
          </div>
        </section>
      ))}

      {displayPerson.shortBio ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.shortHistory}</p><h2>{ui.lifeRole}</h2></div>
            <p className="entity-copy">{displayPerson.shortBio}</p>
          </div>
        </section>
      ) : null}

      {displayPerson.summary ? (
        <section className={`entity-section${displayPerson.shortBio ? ' entity-section-alt' : ''}`}>
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">01</p><h2>{ui.whoWas}</h2></div>
            <p className="entity-copy">{displayPerson.summary}</p>
          </div>
        </section>
      ) : null}

      {displayPerson.biographySections?.map((section, index) => (
        <section key={section.id} className={`entity-section${index % 2 ? ' entity-section-alt' : ''}`}>
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{section.number}</p><h2>{section.title}</h2></div>
            <div className="person-biography-copy">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {section.callout ? (
              <aside className="chapter-callout">
                <p className="chapter-callout-label">{section.callout.label}</p>
                <p className="chapter-callout-text">{section.callout.text}</p>
                <ConfidenceBadge label={section.callout.confidence} />
              </aside>
            ) : null}
          </div>
        </section>
      ))}

      {familyGroups.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.familyDynasty}</p><h2>{ui.dynasticRelationships}</h2></div>
            <div className="person-profile-links">
              {familyGroups.flatMap(([label, singular, records]) => records.map((relationship) => relationship.person ? (
                <a key={`${label}-${relationship.person.id}`} href={getEntityHref(relationship.person)}>
                  <span>{singular}</span><strong>{getLocalizedPerson(relationship.person, peopleLocale).title}</strong>
                </a>
              ) : null))}
            </div>
          </div>
        </section>
      ) : null}

      {displayPerson.characterAndReputation ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.characterReputation}</p><h2>{ui.sourceReputation}</h2></div>
            <p className="entity-copy">{displayPerson.characterAndReputation.overview}</p>
            <div className="chapter-record-grid">
              {displayPerson.characterAndReputation.traits.map((trait) => {
                const traitSources = sources.filter((source) => trait.sourceIds.includes(source.id))
                return <article key={trait.label} className="chapter-record-card"><ConfidenceBadge label={trait.treatment} /><strong>{trait.label}</strong><p>{trait.summary}</p><small>{traitSources.map((source) => source.title).join('; ')}</small></article>
              })}
            </div>
            <p className="map-caution">{displayPerson.characterAndReputation.caution}</p>
          </div>
        </section>
      ) : null}

      {era || personPolities.length || personChapters.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.historicalContext}</p><h2>{ui.politicalWorldChapter}</h2></div>
            <div className="person-profile-links">
              {era ? <a href={`/eras/${era.id}`}><span>{ui.era}</span><strong>{displayEra.title}</strong></a> : null}
              {personPolities.map((polity) => <a key={polity.id} href={`/polities/${polity.id.replace('polity-', '')}`}><span>{ui.politicalWorld}</span><strong>{getLocalizedEntity(polity, entityLocale).title}</strong></a>)}
              {personChapters.map((chapter) => { const displayChapter=localizedRecord('chapters',chapter.id,chapter); return <a key={chapter.id} href={getChapterHref(chapter)}><span>{ui.chapter} {chapter.number}</span><strong>{displayChapter.title}</strong></a> })}
            </div>
          </div>
        </section>
      ) : null}

      {personEvents.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.timeline}</p><h2>{ui.datedRecords}</h2></div>
            <ol className="era-event-list">
              {personEvents.map((event) => <li key={event.id} className="era-event-record"><time>{event.dateDisplay}</time><div><strong>{event.title}</strong><p>{event.summary}</p></div></li>)}
            </ol>
          </div>
        </section>
      ) : null}

      {personCampaigns.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.campaigns}</p><h2>{ui.connectedCampaigns}</h2></div>
            <div className="chapter-record-grid">{personCampaigns.map((campaign) => <article key={campaign.id} className="chapter-record-card"><small>{campaign.dateDisplay}</small><strong>{campaign.title}</strong><p>{campaign.summary}</p></article>)}</div>
          </div>
        </section>
      ) : null}

      {relationships.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.connectedPeople}</p><h2>{ui.familyChangingRelationships}</h2></div>
            <div className="person-profile-links">
              {relationships.map((relationship) => relationship.person ? (
                <a key={`${relationship.personId}-${relationship.relatedPersonId}`} href={getEntityHref(relationship.person)}>
                  <span>{getLocalizedRelationship(relationship, localeSection('personRelationships')).displayLabel}</span><strong>{getLocalizedPerson(relationship.person, peopleLocale).title}</strong>
                  {relationship.phases?.map((phase) => <small key={`${phase.type}-${phase.period}`}>{phase.period}: {localeSection('personRelationships').types?.[phase.type] ?? phase.type}</small>)}
                </a>
              ) : null)}
            </div>
          </div>
        </section>
      ) : null}

      {referenceRecords.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.connectedHistory}</p><h2>{ui.referenceRecords}</h2></div>
            <div className="chapter-record-grid">
              {referenceRecords.map((record) => {
                const href = getEntityHref(record)
                const card = <article className="chapter-record-card"><small>{ui.recordKinds?.[record.kind] ?? record.kind}</small><strong>{record.title}</strong></article>
                return href ? <a key={record.id} href={href} className="chapter-record-link">{card}</a> : <div key={record.id}>{card}</div>
              })}
            </div>
          </div>
        </section>
      ) : null}

      {personSources.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.sources}</p><h2>{ui.furtherReading}</h2></div>
            <ul className="chapter-source-list">{personSources.map((source) => <li key={source.id}><strong>{source.title}</strong><span>{source.institution}</span></li>)}</ul>
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default PersonDetailPage
