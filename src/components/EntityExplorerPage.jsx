import { chapters } from '../data/chapters'
import { campaigns } from '../data/campaigns'
import { claims } from '../data/claims'
import { companies } from '../data/companies'
import { organizations } from '../data/organizations'
import { eras } from '../data/eras'
import { events } from '../data/events'
import { objects } from '../data/objects'
import { people } from '../data/people'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import { getChapterHref, getEntityHref } from '../data/entityRoutes'
import { MeanderLine } from './Ornament'
import CompareSources from './CompareSources'
import SourcePerspective from './SourcePerspective'
import { getLocalizedEntity } from '../data/entityLocalization'
import { getLocalizedEvent } from '../data/eventLocalization'
import { getLocalizedPerson } from '../data/personLocalization'
import { getLocalizedCampaign, getLocalizedClaim, getLocalizedCompany, getLocalizedOrganization, mergePresentationList } from '../data/supportingLocalization'
import { useLocale } from '../i18n/useLocale'
import { mergeLocaleValues } from '../i18n/locale'

const entityCollections = [
  { label: 'People', records: people },
  { label: 'Political Worlds', records: polities },
  { label: 'Places', records: places },
  { label: 'Sites', records: sites },
  { label: 'Objects / Monuments', records: objects },
  { label: 'Events', records: events },
  { label: 'Organizations', records: organizations },
  { label: 'Companies', records: companies },
]

function references(record, entityId) {
  const fields = [
    record.relatedEntityIds,
    record.people,
    record.polities,
    record.places,
    record.sites,
    record.objects,
    record.relatedPlaceIds,
    record.relatedPlaces,
    record.relatedOrganizationIds,
    record.relatedCompanyIds,
  ]
  return fields.some((ids) => ids?.includes(entityId))
}

function getEntityLabel(entity, ui) {
  if (entity.id.startsWith('place-')) return ui.place
  if (entity.type?.includes('inscription')) return ui.inscription
  if (entity.id.startsWith('object-')) return ui.objectMonument
  return entity.type?.includes('archaeological') ? ui.archaeologicalSite : ui.site
}

function EntityExplorerPage({ entity }) {
  const { localeSection, localizedRecord } = useLocale()
  const entityLocale = localeSection('entities')
  const eventLocale = localeSection('events')
  const peopleLocale = localeSection('people')
  const { ui } = entityLocale

  if (!entity) {
    return (
      <article className="explorer-page">
        <div className="section-inner explorer-empty">
          <p className="section-label">{ui.entityExplorer}</p>
          <h1>{ui.entityNotFound}</h1>
          <a href="/eras/ancient-steppe">{ui.returnToAncientSteppe}</a>
        </div>
      </article>
    )
  }

  const displayEntity = getLocalizedEntity(entity, entityLocale)
  const localizeRelated = (record) => {
    if (record.id.startsWith('person-')) return getLocalizedPerson(record, peopleLocale)
    if (record.id.startsWith('event-')) return getLocalizedEvent(record, eventLocale)
    if (record.id.startsWith('organization-')) return getLocalizedOrganization(record, localeSection('supporting'))
    if (record.id.startsWith('company-')) return getLocalizedCompany(record, localeSection('supporting'))
    return getLocalizedEntity(record, entityLocale)
  }

  const directIds = new Set([
    ...(entity.relatedEntityIds ?? []),
    ...(entity.companyIds ?? []),
    ...(entity.organizationIds ?? []),
  ])
  const connectingEvents = events.filter(
    (event) => directIds.has(event.id) || references(event, entity.id),
  )
  const eventConnectedIds = new Set(connectingEvents.flatMap((event) => [
    ...(event.people ?? []),
    ...(event.polities ?? []),
    ...(event.places ?? []),
    ...(event.sites ?? []),
    ...(event.objects ?? []),
  ]))
  const relatedGroups = entityCollections.map((group) => ({
    ...group,
    records: group.records.filter(
      (record) => record.id !== entity.id
        && (directIds.has(record.id) || eventConnectedIds.has(record.id) || references(record, entity.id)),
    ),
  })).filter((group) => group.records.length)
  const relatedChapters = chapters.filter((chapter) => {
    const fields = [
      chapter.relatedPlaceIds,
      chapter.relatedSiteIds,
      chapter.relatedObjectIds,
      chapter.organizationIds,
      chapter.companyIds,
      chapter.claimIds,
    ]
    return fields.some((ids) => ids?.includes(entity.id))
      || chapter.sections?.some((section) => section.relatedEntityIds?.includes(entity.id))
  })
  const evidenceCases = chapters.flatMap((chapter) => {
    const chapterPresentation = localizedRecord('chapters', chapter.id, chapter)
    return (chapter.sections ?? []).map((section) => {
      const sectionPresentation = chapterPresentation.sectionPresentation?.[section.id]
      return {
        ...mergeLocaleValues(section, { ...sectionPresentation, evidenceCases: undefined, relationsVisual: undefined }),
        evidenceCases: section.evidenceCases
          ? mergePresentationList(section.evidenceCases, sectionPresentation?.evidenceCases)
          : section.evidenceCases,
      }
    })
  })
    .flatMap((section) => section.evidenceCases ?? [])
    .filter((item) => item.evidenceObjectId === entity.id)
  const sourceIds = new Set([
    ...(entity.sourceRefs ?? []),
    ...sources.filter((source) => source.relatedEntityIds?.includes(entity.id)).map((source) => source.id),
    ...evidenceCases.flatMap((item) => item.sourceIds ?? []),
  ])
  const entitySources = sources.filter((source) => sourceIds.has(source.id))
  const entityCampaigns = campaigns.filter((campaign) =>
    entity.campaignIds?.includes(campaign.id)
      || campaign.places?.includes(entity.id)
      || campaign.politicalActors?.includes(entity.id),
  ).map((campaign) => getLocalizedCampaign(campaign, localeSection('supporting')))
  const entityClaims = claims.filter((claim) =>
    entity.claimIds?.includes(claim.id)
      || claim.relatedPlaces?.includes(entity.id),
  ).map((claim) => getLocalizedClaim(claim, localeSection('supporting')))
  const era = eras.find((item) => item.id === entity.eraId || entity.eraIds?.includes(item.id))
  const isPlace = entity.id.startsWith('place-')
  const isSite = entity.id.startsWith('site-')
  const isInscription = entity.type?.includes('inscription')
  const hasContext = era || relatedChapters.length || relatedGroups.some((group) => group.label === 'Political Worlds')

  return (
    <article className="explorer-page">
      <header className="entity-header explorer-header">
        <div className="section-inner entity-header-inner">
          <p className="section-label">{getEntityLabel(entity, ui)}</p>
          <h1>{displayEntity.title}</h1>
          {displayEntity.type ? <p className="entity-period">{displayEntity.type}</p> : null}
          {displayEntity.period ? <p className="entity-period">{displayEntity.period}</p> : null}
          <div className="entity-status-row"><span className="entity-status-badge">{entity.status === 'verified' ? ui.sourceBacked : (ui[entity.status] ?? entity.status)}</span></div>
          <MeanderLine className="entity-meander" />
        </div>
      </header>

      {displayEntity.summary ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">01</p><h2>{isPlace ? ui.whyPlaceMatters : isSite ? ui.whatIsSite : ui.whatIsIt}</h2></div>
            <p className="entity-copy">{displayEntity.summary}</p>
          </div>
        </section>
      ) : null}

      {displayEntity.caution ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.evidenceLimit}</p><h2>{ui.notEstablish}</h2></div>
            <p className="entity-copy">{displayEntity.caution}</p>
          </div>
        </section>
      ) : null}

      {displayEntity.evidenceSections?.map((section) => (
        <section key={section.id} className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.evidence}</p><h2>{section.title}</h2></div>
            {section.paragraphs?.map((paragraph) => <p key={paragraph} className="entity-copy">{paragraph}</p>)}
            {section.sourceReports ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.sourcesReport}</p><p className="chapter-callout-text">{section.sourceReports}</p></aside> : null}
            {section.remainsInterpretive ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.remainsInterpretive}</p><p className="chapter-callout-text">{section.remainsInterpretive}</p></aside> : null}
            {section.canTell ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.canTell}</p><p className="chapter-callout-text">{section.canTell}</p></aside> : null}
            {section.cannotProve ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.cannotProve}</p><p className="chapter-callout-text">{section.cannotProve}</p></aside> : null}
          </div>
        </section>
      ))}

      {entityCampaigns.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.campaignContext}</p><h2>{ui.connectedCampaigns}</h2></div>
            <div className="chapter-record-grid">{entityCampaigns.map((campaign) => <article key={campaign.id} className="chapter-record-card"><small>{campaign.dateDisplay} · {campaign.routeConfidence} {ui.route}</small><strong>{campaign.title}</strong><p>{campaign.summary}</p>{campaign.stages?.length ? <ol>{campaign.stages.map((stage) => <li key={stage.title}><b>{stage.title}:</b> {stage.text}</li>)}</ol> : null}{campaign.caution ? <p>{campaign.caution}</p> : null}</article>)}</div>
          </div>
        </section>
      ) : null}

      {entityClaims.map((claim) => <CompareSources key={claim.id} claim={claim} />)}

      {hasContext ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.historicalContext}</p><h2>{ui.eraChaptersWorlds}</h2></div>
            <div className="explorer-link-grid">
              {era ? <a href={`/eras/${era.id}`}><span>{ui.era}</span><strong>{localizedRecord('eras', era.id, era).title}</strong></a> : null}
              {relatedChapters.map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>{ui.chapter} {chapter.number}</span><strong>{localizedRecord('chapters', chapter.id, chapter).title}</strong></a>)}
              {relatedGroups.filter((group) => group.label === 'Political Worlds').flatMap((group) => group.records).map((record) => <a key={record.id} href={getEntityHref(record)}><span>{ui.politicalWorld}</span><strong>{getLocalizedEntity(record, entityLocale).title}</strong></a>)}
            </div>
          </div>
        </section>
      ) : null}

      {isPlace && entity.eraIds?.length > 1 ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.historyAcrossTime}</p><h2>{ui.sameLandscape}</h2></div>
            <p className="entity-copy">{ui.continuityCaution}</p>
          </div>
        </section>
      ) : null}

      {evidenceCases.map((item) => (
        <section key={item.id} className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.materialEvidence}</p><h2>{item.evidenceTitle}</h2></div>
            {item.evidenceSummary ? <p className="entity-copy">{item.evidenceSummary}</p> : null}
            {item.interpretation ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.tellsUs}</p><p className="chapter-callout-text">{item.interpretation}</p></aside> : null}
            {item.caution ? <aside className="chapter-callout"><p className="chapter-callout-label">{ui.notProveAlone}</p><p className="chapter-callout-text">{item.caution}</p></aside> : null}
          </div>
        </section>
      ))}

      {isInscription ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.sourceCharacter}</p><h2>{ui.inscriptionCharacter}</h2></div>
            <p className="entity-copy">{ui.inscriptionExplanation}</p>
            <aside className="chapter-callout"><p className="chapter-callout-label">{ui.evidenceLimit}</p><p className="chapter-callout-text">{ui.noVerifiedPassage}</p></aside>
          </div>
        </section>
      ) : null}

      {isSite ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.evidenceCaution}</p><h2>{ui.archaeologyCannotProve}</h2></div>
            <p className="entity-copy">{ui.archaeologyCaution}</p>
          </div>
        </section>
      ) : null}

      {relatedGroups.length ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.connectedHistory}</p><h2>{ui.relatedRecords}</h2></div>
            {relatedGroups.map((group) => (
              <div key={group.label} className="explorer-related-group">
                <h3>{ui[{ People: 'people', 'Political Worlds': 'politicalWorlds', Places: 'places', Sites: 'sites', 'Objects / Monuments': 'objectsMonuments', Events: 'events', Organizations: 'organizations', Companies: 'companies' }[group.label]]}</h3>
                <div className="chapter-record-grid">
                  {group.records.map((record) => {
                    const localized = localizeRelated(record)
                    const href = getEntityHref(record)
                    const card = <article className="chapter-record-card"><strong>{localized.title}</strong>{!href ? <small>{ui.referenceOnly}</small> : null}</article>
                    return href ? <a key={record.id} href={href} className="chapter-record-link">{card}</a> : <div key={record.id}>{card}</div>
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {entitySources.length ? (
        <section className="entity-section">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.sources}</p><h2>{ui.furtherReading}</h2></div>
            <ul className="chapter-source-list">{entitySources.map((source) => <li key={source.id}><strong>{source.title}</strong><span>{source.institution}</span></li>)}</ul>
          </div>
        </section>
      ) : null}

      {entitySources.some((source) => source.perspective || source.temporalRelationship) ? (
        <section className="entity-section entity-section-alt">
          <div className="section-inner explorer-inner">
            <div className="entity-section-heading"><p className="section-label">{ui.sourcePerspectives}</p><h2>{ui.whoProduced}</h2></div>
            <div className="chapter-record-grid">{entitySources.filter((source) => source.perspective || source.temporalRelationship).map((source) => <SourcePerspective key={source.id} source={source} />)}</div>
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default EntityExplorerPage
