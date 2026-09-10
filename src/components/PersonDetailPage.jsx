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
import { getParentChildIds } from '../data/personLocalization'

function uniqueRecords(records) {
  return [...new Map(records.map((record) => [record.id, record])).values()]
}

function PersonDetailPage({ person }) {
  if (!person) {
    return (
      <article className="person-profile-page">
        <div className="section-inner person-profile-empty">
          <p className="section-label">People</p>
          <h1>Person not found</h1>
          <a href="/people">Return to People</a>
        </div>
      </article>
    )
  }

  const relatedIds = person.relatedEntityIds ?? []
  const personEvents = sortChronologically(events.filter(
    (event) => event.people?.includes(person.id) || relatedIds.includes(event.id),
  ))
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
    ['Parents', familyRelationships.filter((relationship) => relationship.type.includes('parent') && isParentOfPerson(relationship))],
    ['Spouse', familyRelationships.filter((relationship) => relationship.type === 'spouse')],
    ['Children', familyRelationships.filter((relationship) => relationship.type.includes('parent') && !isParentOfPerson(relationship))],
  ].filter(([, records]) => records.length)
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
  const profileLabel = person.profileType === 'story' ? 'Story' : person.profileType === 'biography' ? 'Historical Biography' : 'Reference Profile'
  const portraitLabel = person.portrait
    ? (portrait.status === 'NO_RELIABLE_PORTRAIT' ? 'No reliable portrait' : portrait.status?.replaceAll('_', ' '))
    : null

  return (
    <article className="person-profile-page">
      <CinematicPageHeader
        variant="person"
        className="entity-header person-profile-header cinematic-context-header"
        innerClassName="entity-header-inner"
        visual={headerVisual}
        context={era ? <a href={`/eras/${era.slug ?? era.id}`}>{era.title}</a> : null}
        label={profileLabel}
        title={person.title}
        subtitle={person.role}
        period={person.periodDisplay ?? person.period}
        summary={person.summary ?? person.shortBio}
        status={person.status === 'verified' ? 'Source-backed' : person.status}
        portraitStatus={portraitLabel}
        dataAttributes={{ 'data-era-id': person.eraId, 'data-person-id': person.id }}
      >
          {person.alternativeNames?.length ? <p className="person-profile-aliases">Also known as {person.alternativeNames.join(', ')}</p> : null}
          {personPolities.length ? <p className="person-profile-affiliation">{personPolities.map((polity) => polity.title).join(' / ')}</p> : null}
          <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      {person.portrait ? (
        <section className="entity-section person-visual-evidence-section">
          <div className="section-inner person-profile-inner">
            <HistoricalMedia media={portrait.media} status={portrait.status} note={portrait.note} />
          </div>
        </section>
      ) : null}

      {personMedia.map((record) => (
        <section key={record.id} className="entity-section person-visual-evidence-section">
          <div className="section-inner person-profile-inner">
            <HistoricalMedia media={record} heading="Associated Visual Evidence" />
          </div>
        </section>
      ))}

      {person.shortBio ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Short History</p><h2>Life and historical role</h2></div>
            <p className="entity-copy">{person.shortBio}</p>
          </div>
        </section>
      ) : null}

      {person.summary ? (
        <section className={`entity-section${person.shortBio ? ' entity-section-alt' : ''}`}>
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">01</p><h2>Who was this person?</h2></div>
            <p className="entity-copy">{person.summary}</p>
          </div>
        </section>
      ) : null}

      {person.biographySections?.map((section, index) => (
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
            <div className="entity-section-heading"><p className="section-label">Family</p><h2>Dynastic relationships</h2></div>
            <div className="person-profile-links">
              {familyGroups.flatMap(([label, records]) => records.map((relationship) => relationship.person ? (
                <a key={`${label}-${relationship.person.id}`} href={getEntityHref(relationship.person)}>
                  <span>{label === 'Spouse' ? 'Spouse' : label.slice(0, -1)}</span><strong>{relationship.person.title}</strong>
                </a>
              ) : null))}
            </div>
          </div>
        </section>
      ) : null}

      {person.characterAndReputation ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Character &amp; Reputation</p><h2>Source reputation and historical interpretation</h2></div>
            <p className="entity-copy">{person.characterAndReputation.overview}</p>
            <div className="chapter-record-grid">
              {person.characterAndReputation.traits.map((trait) => {
                const traitSources = sources.filter((source) => trait.sourceIds.includes(source.id))
                return <article key={trait.label} className="chapter-record-card"><ConfidenceBadge label={trait.treatment} /><strong>{trait.label}</strong><p>{trait.summary}</p><small>{traitSources.map((source) => source.title).join('; ')}</small></article>
              })}
            </div>
            <p className="map-caution">{person.characterAndReputation.caution}</p>
          </div>
        </section>
      ) : null}

      {era || personPolities.length || personChapters.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Historical Context</p><h2>Political world and chapter</h2></div>
            <div className="person-profile-links">
              {era ? <a href={`/eras/${era.id}`}><span>Era</span><strong>{era.title}</strong></a> : null}
              {personPolities.map((polity) => <a key={polity.id} href={`/polities/${polity.id.replace('polity-', '')}`}><span>Political World</span><strong>{polity.title}</strong></a>)}
              {personChapters.map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>Chapter {chapter.number}</span><strong>{chapter.title}</strong></a>)}
            </div>
          </div>
        </section>
      ) : null}

      {personEvents.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Timeline</p><h2>Dated records</h2></div>
            <ol className="era-event-list">
              {personEvents.map((event) => <li key={event.id} className="era-event-record"><time>{event.dateDisplay}</time><div><strong>{event.title}</strong><p>{event.summary}</p></div></li>)}
            </ol>
          </div>
        </section>
      ) : null}

      {personCampaigns.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Campaigns</p><h2>Connected campaign records</h2></div>
            <div className="chapter-record-grid">{personCampaigns.map((campaign) => <article key={campaign.id} className="chapter-record-card"><small>{campaign.dateDisplay}</small><strong>{campaign.title}</strong><p>{campaign.summary}</p></article>)}</div>
          </div>
        </section>
      ) : null}

      {relationships.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Connected People</p><h2>Family and changing relationships</h2></div>
            <div className="person-profile-links">
              {relationships.map((relationship) => relationship.person ? (
                <a key={`${relationship.personId}-${relationship.relatedPersonId}`} href={getEntityHref(relationship.person)}>
                  <span>{relationship.label}</span><strong>{relationship.person.title}</strong>
                  {relationship.phases?.map((phase) => <small key={`${phase.type}-${phase.period}`}>{phase.period}: {phase.type}</small>)}
                </a>
              ) : null)}
            </div>
          </div>
        </section>
      ) : null}

      {referenceRecords.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Connected History</p><h2>Reference records</h2></div>
            <div className="chapter-record-grid">
              {referenceRecords.map((record) => {
                const href = getEntityHref(record)
                const card = <article className="chapter-record-card"><small>{record.kind}</small><strong>{record.title}</strong></article>
                return href ? <a key={record.id} href={href} className="chapter-record-link">{card}</a> : <div key={record.id}>{card}</div>
              })}
            </div>
          </div>
        </section>
      ) : null}

      {personSources.length ? (
        <section className="entity-section">
          <div className="section-inner person-profile-inner">
            <div className="entity-section-heading"><p className="section-label">Sources</p><h2>Further reading</h2></div>
            <ul className="chapter-source-list">{personSources.map((source) => <li key={source.id}><strong>{source.title}</strong><span>{source.institution}</span></li>)}</ul>
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default PersonDetailPage
