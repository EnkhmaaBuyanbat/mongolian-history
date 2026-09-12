import { useMemo } from 'react'
import { events } from '../data/events'
import { people } from '../data/people'
import { polities } from '../data/polities'
import { sources } from '../data/sources'
import { chapters } from '../data/chapters'
import { eras } from '../data/eras'
import { moduChanyuStory } from '../data/personStories/moduChanyu'
import { personRelationships } from '../data/personRelationships'
import HistoricalRelationships from './HistoricalRelationships'
import PersonStorySection from './PersonStorySection'
import PersonTimeline from './PersonTimeline'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedPerson, getLocalizedPersonStory, getLocalizedRelationship, formatTemplate } from '../data/personLocalization'
import { getLocalizedEvent } from '../data/eventLocalization'
import { getLocalizedEntity } from '../data/entityLocalization'
import { getChapterHref, getEntityHref } from '../data/entityRoutes'

function PersonStoryPage({ person }) {
  const { localeSection, localizedRecord } = useLocale()
  const peopleLocale = localeSection('people')
  const ui = peopleLocale.ui
  const displayPerson = getLocalizedPerson(person, peopleLocale)
  const story = person.id === moduChanyuStory.personId
    ? getLocalizedPersonStory(moduChanyuStory, peopleLocale.stories?.[person.storyId])
    : null
  const personEvents = useMemo(
    () => person.eventIds
      .map((eventId) => events.find((event) => event.id === eventId))
      .filter(Boolean)
      .map((event) => getLocalizedEvent(event, localeSection('events'))),
    [localeSection, person.eventIds],
  )
  const canonicalPolity = polities.find((item) => person.polityIds?.includes(item.id))
  const polity = getLocalizedEntity(canonicalPolity, localeSection('entities'))
  const personSources = sources.filter((source) => person.sourceRefs?.includes(source.id))
  const canonicalEra = eras.find((item) => item.id === person.eraId)
  const era = canonicalEra ? localizedRecord('eras', canonicalEra.id, canonicalEra) : null
  const canonicalChapter = story ? chapters.find((item) => item.id === story.chapterId) : null
  const chapter = canonicalChapter ? localizedRecord('chapters', canonicalChapter.id, canonicalChapter) : null
  const deathEvent = personEvents.find((event) => event.id === 'event-death-modu-chanyu')
  const timelineItems = [
    {
      id: 'modu-source-account',
      date: ui.storySourceDate,
      title: ui.storySourceTitle,
      text: ui.storySourceText,
      confidence: 'TRADITION / SOURCE ACCOUNT',
      sourceAccount: true,
    },
    ...personEvents.map((event) => ({
      id: event.id,
      date: event.dateDisplay,
      title: event.title,
      text: event.summary,
      confidence: 'ESTABLISHED',
    })),
  ]

  if (!story) {
    return null
  }

  const relationshipData = personRelationships
    .filter((relationship) => relationship.personId === person.id)
    .map((relationship) => getLocalizedRelationship(relationship, localeSection('personRelationships')))
  const localizedPeople = people.map((candidate) => getLocalizedPerson(candidate, peopleLocale))

  return (
    <article className="person-story-page">
      <header className="person-story-header">
        <div className="section-inner person-story-header-inner">
          <p className="person-context">{era?.title ?? person.eraId} / {ui.people}</p>
          <p className="section-label">{ui.personRecord}</p>
          <h1>{displayPerson.title}</h1>
          <p className="person-story-subtitle">{displayPerson.subtitle ?? displayPerson.role}</p>
          <div className="person-story-facts">
            <div><span>{ui.reign}</span><strong>{displayPerson.periodDisplay}</strong></div>
            <div><span>{ui.death}</span><strong>{deathEvent?.dateDisplay ?? ui.unknown}</strong></div>
            <div><span>{ui.polity}</span><strong>{polity?.title ?? ui.unknown}</strong></div>
          </div>
          <MeanderLine className="entity-meander" />
          <div className="person-portrait-placeholder">
            <span>{ui.historicalFigure}</span>
            <strong>{ui.noContemporaryPortrait}</strong>
          </div>
        </div>
      </header>

      <div className="section-inner person-story-layout">
        <main className="person-story-content">
          <section className="person-introduction">
            <p className="section-label">{ui.introduction}</p>
            {story.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <nav className="person-on-this-life" aria-label={ui.onThisLifeAria}>
            <p className="section-label">{ui.onThisLife}</p>
            <ol>
              {story.sections.map((section, index) => (
                <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a></li>
              ))}
            </ol>
          </nav>

          <div className="person-story-sections">
            {story.sections.map((section) => <PersonStorySection key={section.id} section={section} />)}
          </div>

          <PersonTimeline items={timelineItems} label={ui.lifeTimeline} title={ui.lifeHistoricalRecord} />

          <HistoricalRelationships
            personId={person.id}
            relationships={relationshipData}
            people={localizedPeople}
            label={ui.historicalRelationships}
            title={formatTemplate(ui.peopleAround, { name: displayPerson.title })}
            subjectLabel={ui.subjectStory}
          />

          <section className="connected-history">
            <div className="person-section-heading">
              <p className="section-label">{ui.connectedHistory}</p>
              <h2>{ui.acrossXiongnuWorld}</h2>
            </div>
            <div className="connected-history-grid">
              {polity ? <a href={getEntityHref(canonicalPolity)} className="connected-history-card"><span>{ui.polity}</span><strong>{polity.title}</strong></a> : null}
              {chapter ? <a href={getChapterHref(canonicalChapter)} className="connected-history-card"><span>{ui.chapter}</span><strong>{chapter.title}</strong></a> : null}
              {personEvents.map((event) => <a key={event.id} href="#life-timeline" className="connected-history-card"><span>{ui.event}</span><strong>{event.dateDisplay} / {event.title}</strong></a>)}
            </div>
          </section>

          <section className="person-sources">
            <div className="person-section-heading">
              <p className="section-label">{ui.sources}</p>
              <h2>{ui.furtherReading}</h2>
            </div>
            <ul>
              {personSources.map((source) => <li key={source.id}><strong>{source.title}</strong><span>{source.institution}</span></li>)}
            </ul>
          </section>
        </main>
      </div>
    </article>
  )
}

export default PersonStoryPage
