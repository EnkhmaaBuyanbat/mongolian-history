import { campaigns } from '../data/campaigns'
import { chapters } from '../data/chapters'
import { events } from '../data/events'
import { people } from '../data/people'
import { personRelationships } from '../data/personRelationships'
import { sources } from '../data/sources'
import { getChapterHref, getEntityHref, getPersonHref, getPersonSlug } from '../data/entityRoutes'
import { getPersonPresentation } from '../data/personPresentation'
import { moduChanyuStory } from '../data/personStories/moduChanyu'
import { sortChronologically } from '../data/chronology'
import CinematicPageHeader from './CinematicPageHeader'
import ConfidenceBadge from './ConfidenceBadge'
import PersonEvidencePanel from './PersonEvidencePanel'
import PersonRelationshipVisual from './PersonRelationshipVisual'
import PersonStorySection from './PersonStorySection'
import { MeanderLine } from './Ornament'

function unique(records) {
  return [...new Map(records.map((record) => [record.id, record])).values()]
}

function Section({ number, label, title, children, alt = false }) {
  return <section className={`entity-section person-dossier-section${alt ? ' entity-section-alt' : ''}`}><div className="section-inner person-profile-inner"><div className="entity-section-heading"><p className="section-label">{number} · {label}</p><h2>{title}</h2></div>{children}</div></section>
}

function PersonDossierPage({ person }) {
  const presentation = getPersonPresentation(person)
  const relatedIds = person.relatedEntityIds ?? []
  const personEvents = sortChronologically(events.filter((event) => event.people?.includes(person.id) || person.eventIds?.includes(event.id) || relatedIds.includes(event.id)))
  const relationships = personRelationships.filter((record) => record.personId === person.id || record.relatedPersonId === person.id).map((record) => ({
    ...record,
    person: people.find((candidate) => candidate.id === (record.personId === person.id ? record.relatedPersonId : record.personId)),
  })).filter((record) => record.person)
  const family = relationships.filter((record) => record.type === 'spouse' || record.type.includes('parent'))
  const political = relationships.filter((record) => record.type !== 'spouse' && record.type !== 'parent')
  const relatedPeople = unique(relatedIds.filter((id) => id.startsWith('person-')).map((id) => people.find((candidate) => candidate.id === id)).filter(Boolean)).filter((candidate) => !relationships.some((record) => record.person.id === candidate.id))
  const personChapters = chapters.filter((chapter) => chapter.relatedPeopleIds?.includes(person.id))
  const personCampaigns = campaigns.filter((campaign) => campaign.commanders?.includes(person.id))
  const story = person.id === moduChanyuStory.personId ? moduChanyuStory : null
  const sourceIds = new Set([...(person.sourceRefs ?? []), ...(person.characterAndReputation?.traits ?? []).flatMap((trait) => trait.sourceIds ?? []), ...relationships.flatMap((record) => record.sourceIds ?? [])])
  const personSources = sources.filter((source) => sourceIds.has(source.id))

  return (
    <article className="person-profile-page person-dossier-page">
      <CinematicPageHeader variant="person" className="entity-header person-profile-header cinematic-context-header" innerClassName="entity-header-inner" visual={null} context={presentation.eras.map((era) => <a key={era.id} href={`/eras/${era.slug ?? era.id}`}>Era {era.numeral} · {era.title}</a>)} label={presentation.depth.label} title={person.title} subtitle={person.role} period={presentation.period} summary={person.summary ?? person.shortBio} status="Source-backed" portraitStatus={presentation.evidence.label} dataAttributes={{ 'data-era-id': person.eraId, 'data-person-id': person.id }}>
        {person.alternativeNames?.length ? <p className="person-profile-aliases">Also known as {person.alternativeNames.join(', ')}</p> : null}
        <MeanderLine className="entity-meander" />
      </CinematicPageHeader>

      <Section number="01" label="Overview" title="Life and historical role">
        {story?.introduction?.map((paragraph) => <p key={paragraph} className="entity-copy">{paragraph}</p>)}
        {!story && person.shortBio ? <p className="entity-copy">{person.shortBio}</p> : null}
        {person.biographySections?.length ? <div className="person-dossier-narrative">{person.biographySections.map((section) => <article key={section.id}><h3>{section.title}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.callout ? <aside><ConfidenceBadge label={section.callout.confidence} /><strong>{section.callout.label}</strong><p>{section.callout.text}</p></aside> : null}</article>)}</div> : null}
      </Section>

      {(presentation.eras.length || presentation.polities.length || personChapters.length) ? <Section number="02" label="Historical Context" title="The world around this person" alt><div className="person-dossier-links">{presentation.eras.map((era) => <a key={era.id} href={`/eras/${era.slug ?? era.id}`}><span>Era {era.numeral}</span><strong>{era.title}</strong></a>)}{presentation.polities.map((polity) => <a key={polity.id} href={getEntityHref(polity)}><span>Political world</span><strong>{polity.title}</strong></a>)}{personChapters.slice(0, 4).map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>Chapter {chapter.number}</span><strong>{chapter.title}</strong></a>)}</div></Section> : null}

      {personEvents.length ? <Section number="03" label="Life / Political Timeline" title="Dated records"><ol className="era-event-list">{personEvents.map((event) => <li key={event.id} className="era-event-record"><time>{event.dateDisplay}</time><div><strong>{event.title}</strong><p>{event.summary}</p></div></li>)}</ol></Section> : null}

      {family.length ? <Section number="04" label="Family & Dynasty" title="Where this person fits" alt><PersonRelationshipVisual person={person} relationships={family} label="Family and dynasty" />{presentation.familyTreeEligible ? <a className="person-family-tree-cta" href={`/family-tree?person=${getPersonSlug(person)}`}>View in Family Tree →</a> : null}</Section> : null}

      {political.length || personCampaigns.length ? <Section number="05" label="Political Network" title="Power, cooperation and succession"><PersonRelationshipVisual person={person} relationships={political} label="Political" />{personCampaigns.map((campaign) => <article key={campaign.id} className="person-campaign-record"><span>{campaign.dateDisplay}</span><strong>{campaign.title}</strong><p>{campaign.summary}</p></article>)}</Section> : null}

      {person.characterAndReputation ? <Section number="06" label="Character & Reputation" title="Source reputation and interpretation" alt><p className="entity-copy">{person.characterAndReputation.overview}</p><div className="chapter-record-grid">{person.characterAndReputation.traits.map((trait) => <article key={trait.label} className="chapter-record-card"><ConfidenceBadge label={trait.treatment} /><strong>{trait.label}</strong><p>{trait.summary}</p></article>)}</div><p className="map-caution">{person.characterAndReputation.caution}</p></Section> : null}

      <Section number="07" label="Evidence & Depictions" title="What the visual record can support"><PersonEvidencePanel person={person} /></Section>

      {story?.sections?.length ? <Section number="08" label="Long-form Story" title="Modu Chanyu in the historical record" alt><div className="person-story-sections">{story.sections.map((section) => <PersonStorySection key={section.id} section={section} />)}</div></Section> : null}

      {relatedPeople.length ? <Section number="09" label="Related People" title="Further connections"><div className="person-dossier-links">{relatedPeople.map((candidate) => <a key={candidate.id} href={getPersonHref(candidate)}><span>Person</span><strong>{candidate.title}</strong></a>)}</div></Section> : null}

      <Section number="10" label="Continue Exploring" title="Continue through the collection" alt><div className="person-dossier-links"><a href="/people"><span>People</span><strong>All historical figures</strong></a>{personEvents.length ? <a href="/timeline"><span>Timeline</span><strong>Explore the wider chronology</strong></a> : null}{presentation.eras.map((era) => <a key={era.id} href={`/eras/${era.slug ?? era.id}`}><span>Era {era.numeral}</span><strong>{era.title}</strong></a>)}{presentation.familyTreeEligible ? <a href={`/family-tree?person=${getPersonSlug(person)}`}><span>Interactive exhibit</span><strong>View in Family Tree</strong></a> : null}{personChapters.slice(0, 2).map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}><span>Chapter</span><strong>{chapter.title}</strong></a>)}</div>{personSources.length ? <details className="person-dossier-sources"><summary>View sources</summary><ul>{personSources.map((source) => <li key={source.id}>{source.title}</li>)}</ul></details> : null}</Section>
    </article>
  )
}

export default PersonDossierPage
