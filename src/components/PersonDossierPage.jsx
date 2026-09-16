import { campaigns } from '../data/campaigns'
import { chapters } from '../data/chapters'
import { events } from '../data/events'
import { people } from '../data/people'
import { personRelationships } from '../data/personRelationships'
import { sources } from '../data/sources'
import { getCampaignHref, getChapterHref, getEntityHref, getEventHref, getPersonHref, getPersonSlug, getTimelineHref } from '../data/entityRoutes'
import { getPersonPresentation } from '../data/personPresentation'
import { getPersonContextHeaderVisual } from '../data/pageVisualResolvers'
import { moduChanyuStory } from '../data/personStories/moduChanyu'
import { sortChronologically } from '../data/chronology'
import CinematicPageHeader from './CinematicPageHeader'
import ConfidenceBadge from './ConfidenceBadge'
import PersonEvidencePanel from './PersonEvidencePanel'
import PersonRelationshipVisual from './PersonRelationshipVisual'
import PersonStorySection from './PersonStorySection'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedEntity } from '../data/entityLocalization'
import { getLocalizedPerson, getLocalizedPersonStory } from '../data/personLocalization'
import { getLocalizedEvent } from '../data/eventLocalization'
import { getLocalizedCampaign } from '../data/supportingLocalization'

function unique(records) {
  return [...new Map(records.map((record) => [record.id, record])).values()]
}

function Section({ number, label, title, children, alt = false }) {
  return <section className={`entity-section person-dossier-section${alt ? ' entity-section-alt' : ''}`}><div className="section-inner person-profile-inner"><div className="entity-section-heading"><p className="section-label">{number} · {label}</p><h2>{title}</h2></div>{children}</div></section>
}

function PersonDossierPage({ person }) {
  const { localeSection, localizedRecord } = useLocale()
  const peopleLocale = localeSection('people')
  const entityLocale = localeSection('entities')
  const ui = peopleLocale.ui
  const displayPerson = getLocalizedPerson(person, peopleLocale)
  const presentation = getPersonPresentation(displayPerson)
  const relatedIds = person.relatedEntityIds ?? []
  const personEvents = sortChronologically(events.filter((event) => event.people?.includes(person.id) || person.eventIds?.includes(event.id) || relatedIds.includes(event.id))).map((event) => getLocalizedEvent(event, localeSection('events')))
  const relationships = personRelationships.filter((record) => record.personId === person.id || record.relatedPersonId === person.id).map((record) => ({
    ...record,
    person: people.find((candidate) => candidate.id === (record.personId === person.id ? record.relatedPersonId : record.personId)),
  })).filter((record) => record.person)
  const family = relationships.filter((record) => record.type === 'spouse' || record.type.includes('parent'))
  const political = relationships.filter((record) => record.type !== 'spouse' && record.type !== 'parent')
  const relatedPeople = unique(relatedIds.filter((id) => id.startsWith('person-')).map((id) => people.find((candidate) => candidate.id === id)).filter(Boolean)).filter((candidate) => !relationships.some((record) => record.person.id === candidate.id))
  const personChapters = chapters.filter((chapter) => chapter.relatedPeopleIds?.includes(person.id))
  const personCampaigns = campaigns
    .filter((campaign) => campaign.commanders?.includes(person.id))
    .map((campaign) => getLocalizedCampaign(campaign, localeSection('supporting')))
  const aliases = displayPerson.localizedAlternativeNames?.length
    ? displayPerson.localizedAlternativeNames
    : displayPerson.canonicalAlternativeNames
  const story = person.id === moduChanyuStory.personId ? getLocalizedPersonStory(moduChanyuStory, peopleLocale.stories?.[person.storyId]) : null
  const sourceIds = new Set([...(person.sourceRefs ?? []), ...(person.characterAndReputation?.traits ?? []).flatMap((trait) => trait.sourceIds ?? []), ...relationships.flatMap((record) => record.sourceIds ?? [])])
  const personSources = sources.filter((source) => sourceIds.has(source.id))
  const headerVisual = getPersonContextHeaderVisual(person)

  return (
    <article className="person-profile-page person-dossier-page">
      <CinematicPageHeader variant="person" className="entity-header person-profile-header cinematic-context-header" innerClassName="entity-header-inner" visual={headerVisual} context={presentation.eras.map((era) => { const localized=localizedRecord('eras',era.id,era); return <a key={era.id} href={`/eras/${era.slug ?? era.id}`}>{ui.era} {era.numeral} · {localized.title}</a> })} label={ui[presentation.depth.key]} title={displayPerson.title} subtitle={displayPerson.role} period={presentation.periodEstablished ? presentation.period : ui.datesUnknown} summary={displayPerson.summary ?? displayPerson.shortBio} status={ui.sourceBacked} portraitStatus={localeSection('evidence')[presentation.evidence.code] ?? presentation.evidence.label} dataAttributes={{ 'data-era-id': person.eraId, 'data-person-id': person.id }}>
        {aliases?.length ? <p className="person-profile-aliases">{ui.alsoKnownAs} {aliases.join(', ')}</p> : null}
        <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      <Section number="01" label={ui.overview} title={ui.lifeRole}>
        {story?.introduction?.map((paragraph) => <p key={paragraph} className="entity-copy">{paragraph}</p>)}
        {!story && displayPerson.shortBio && !displayPerson.biographySections?.length ? <p className="entity-copy">{displayPerson.shortBio}</p> : null}
        {displayPerson.biographySections?.length ? <div className="person-dossier-narrative">
          {displayPerson.biographySections.length > 7 ? <nav className="person-dossier-contents" aria-label={ui.onThisLifeAria}><p className="section-label">{ui.onThisLife}</p><ol>{displayPerson.biographySections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav> : null}
          {displayPerson.biographySections.map((section) => <article key={section.id} id={section.id}>{section.number ? <p className="section-label">{section.number}</p> : null}<h3>{section.title}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.callout ? <aside><ConfidenceBadge label={section.callout.confidence} /><strong>{section.callout.label}</strong><p>{section.callout.text}</p></aside> : null}</article>)}
        </div> : null}
      </Section>

      {(presentation.eras.length || presentation.polities.length || personChapters.length) ? <Section number="02" label={ui.historicalContext} title={ui.worldAround} alt><div className="person-dossier-links">{presentation.eras.map((era) => { const localized=localizedRecord('eras',era.id,era); return <a key={era.id} href={`/eras/${era.slug ?? era.id}`}><span>{ui.era} {era.numeral}</span><strong>{localized.title}</strong></a> })}{presentation.polities.map((polity) => <a key={polity.id} href={getEntityHref(polity)}><span>{ui.politicalWorld}</span><strong>{getLocalizedEntity(polity, entityLocale).title}</strong></a>)}{personChapters.slice(0, 4).map((chapter) => { const localized=localizedRecord('chapters',chapter.id,chapter); return <a key={chapter.id} href={getChapterHref(chapter)}><span>{ui.chapter} {chapter.number}</span><strong>{localized.title}</strong></a> })}</div></Section> : null}

      {personEvents.length ? <Section number="03" label={ui.lifeTimeline} title={ui.datedRecords}><ol className="era-event-list">{personEvents.map((event) => <li key={event.id}><a href={getEventHref(event)} className="era-event-record"><time>{event.dateDisplay}</time><div><strong>{event.title}</strong><p>{event.summary}</p></div></a></li>)}</ol></Section> : null}

      {family.length ? <Section number="04" label={ui.familyDynasty} title={ui.whereFits} alt><PersonRelationshipVisual person={displayPerson} relationships={family} label={ui.familyDynasty} />{presentation.familyTreeEligible ? <a className="person-family-tree-cta" href={`/family-tree?person=${getPersonSlug(person)}`}>{ui.viewFamilyTree} →</a> : null}</Section> : null}

      {political.length || personCampaigns.length ? <Section number="05" label={ui.politicalNetwork} title={ui.powerSuccession}><PersonRelationshipVisual person={displayPerson} relationships={political} label={ui.politicalNetwork} />{personCampaigns.map((campaign) => <a key={campaign.id} href={getCampaignHref(campaign)} className="person-campaign-record"><span>{campaign.dateDisplay}</span><strong>{campaign.title}</strong><p>{campaign.summary}</p></a>)}</Section> : null}

      {displayPerson.characterAndReputation ? <Section number="06" label={ui.characterReputation} title={ui.sourceReputation} alt><p className="entity-copy">{displayPerson.characterAndReputation.overview}</p><div className="chapter-record-grid">{displayPerson.characterAndReputation.traits.map((trait) => <article key={trait.label} className="chapter-record-card"><ConfidenceBadge label={trait.treatment} /><strong>{trait.label}</strong><p>{trait.summary}</p></article>)}</div><p className="map-caution">{displayPerson.characterAndReputation.caution}</p></Section> : null}

      <Section number="07" label={ui.evidenceDepictions} title={ui.visualSupport}><PersonEvidencePanel person={displayPerson} /></Section>

      {story?.sections?.length ? <Section number="08" label={ui.longStory} title={ui.moduRecord} alt><div className="person-story-sections">{story.sections.map((section) => <PersonStorySection key={section.id} section={section} />)}</div></Section> : null}

      {relatedPeople.length ? <Section number="09" label={ui.relatedPeople} title={ui.furtherConnections}><div className="person-dossier-links">{relatedPeople.map((candidate) => { const localized=getLocalizedPerson(candidate,peopleLocale); return <a key={candidate.id} href={getPersonHref(candidate)}><span>{ui.person}</span><strong>{localized.title}</strong></a> })}</div></Section> : null}

      <Section number="10" label={ui.continueExploring} title={ui.continueCollection} alt><div className="person-dossier-links"><a href="/people"><span>{ui.people}</span><strong>{ui.allHistoricalFigures}</strong></a>{personEvents.length ? <a href={getTimelineHref({ eraId: person.eraId, eventId: personEvents[0]?.id })}><span>{ui.timeline}</span><strong>{ui.widerChronology}</strong></a> : null}{presentation.eras.map((era) => { const localized=localizedRecord('eras',era.id,era); return <a key={era.id} href={`/eras/${era.slug ?? era.id}`}><span>{ui.era} {era.numeral}</span><strong>{localized.title}</strong></a> })}{presentation.familyTreeEligible ? <a href={`/family-tree?person=${getPersonSlug(person)}`}><span>{ui.interactiveExhibit}</span><strong>{ui.viewTree}</strong></a> : null}{personChapters.slice(0, 2).map((chapter) => { const localized=localizedRecord('chapters',chapter.id,chapter); return <a key={chapter.id} href={getChapterHref(chapter)}><span>{ui.chapter}</span><strong>{localized.title}</strong></a> })}</div>{personSources.length ? <details className="person-dossier-sources"><summary>{ui.viewSources}</summary><ul>{personSources.map((source) => <li key={source.id}>{source.title}</li>)}</ul></details> : null}</Section>
    </article>
  )
}

export default PersonDossierPage
