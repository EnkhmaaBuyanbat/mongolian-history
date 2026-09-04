import { useMemo } from 'react'
import { events } from '../data/events'
import { people } from '../data/people'
import { polities } from '../data/polities'
import { sources } from '../data/sources'
import { chapters } from '../data/chapters'
import { eras } from '../data/eras'
import { moduChanyuStory } from '../data/personStories/moduChanyu'
import ConfidenceBadge from './ConfidenceBadge'
import HistoricalRelationships from './HistoricalRelationships'
import PersonStorySection from './PersonStorySection'
import PersonTimeline from './PersonTimeline'
import { MeanderLine } from './Ornament'

const navigationItems = [
  ['world-modu-entered', 'The World Modu Entered'],
  ['shijis-story', "The Shiji's Story"],
  ['becoming-chanyu', 'Becoming Chanyu'],
  ['building-steppe-power', 'Building Steppe Power'],
  ['baideng', 'Baideng'],
  ['diplomacy-with-han', 'Diplomacy with Han'],
  ['death-and-succession', 'Death and Succession'],
  ['why-modu-matters', 'Why Modu Matters'],
]

function PersonStoryPage({ person }) {
  const story = person.id === moduChanyuStory.personId ? moduChanyuStory : null
  const personEvents = useMemo(
    () => person.eventIds
      .map((eventId) => events.find((event) => event.id === eventId))
      .filter(Boolean),
    [person.eventIds],
  )
  const polity = polities.find((item) => person.polityIds?.includes(item.id))
  const personSources = sources.filter((source) => person.sourceRefs?.includes(source.id))
  const era = eras.find((item) => item.id === person.eraId)
  const chapter = story ? chapters.find((item) => item.id === story.chapterId) : null
  const timelineItems = [
    {
      id: 'modu-source-account',
      date: 'Before c. 209 BCE',
      title: 'Shiji narrative of Modu before accession',
      text: "The Shiji's account of Modu before his accession.",
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

  const relationshipData = [
    {
      personId: person.id,
      relatedPersonId: 'person-touman',
      type: 'parent',
      label: 'Father',
      confidence: 'TRADITION / SOURCE ACCOUNT',
      sourceIds: ['source-oxford-xiongnu'],
    },
    {
      personId: person.id,
      relatedPersonId: 'person-laoshang-chanyu',
      type: 'successor',
      label: 'Successor',
      confidence: 'ESTABLISHED',
      sourceIds: ['source-oxford-xiongnu'],
    },
  ]

  return (
    <article className="person-story-page">
      <header className="person-story-header">
        <div className="section-inner person-story-header-inner">
          <p className="person-context">{era?.title ?? person.eraId} / People</p>
          <p className="section-label">Person 001</p>
          <h1>{person.title}</h1>
          <p className="person-story-subtitle">{person.subtitle}</p>
          <div className="person-story-facts">
            <div><span>Reign</span><strong>{person.periodDisplay}</strong></div>
            <div><span>Death</span><strong>174 BCE</strong></div>
            <div><span>Polity</span><strong>{polity?.title ?? 'Unknown'}</strong></div>
          </div>
          <MeanderLine className="entity-meander" />
          <div className="person-portrait-placeholder">
            <span>Historical Figure</span>
            <strong>No contemporary portrait known</strong>
          </div>
        </div>
      </header>

      <div className="section-inner person-story-layout">
        <main className="person-story-content">
          <section className="person-introduction">
            <p className="section-label">Introduction</p>
            {story.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <nav className="person-on-this-life" aria-label="On this life">
            <p className="section-label">On This Life</p>
            <ol>
              {navigationItems.map(([id, label], index) => (
                <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a></li>
              ))}
            </ol>
          </nav>

          <div className="person-story-sections">
            {story.sections.map((section) => <PersonStorySection key={section.id} section={section} />)}
          </div>

          <PersonTimeline items={timelineItems} />

          <HistoricalRelationships
            personId={person.id}
            relationships={relationshipData}
            people={people}
          />

          <section className="connected-history">
            <div className="person-section-heading">
              <p className="section-label">Connected History</p>
              <h2>Across the Xiongnu world</h2>
            </div>
            <div className="connected-history-grid">
              {polity ? <a href={`/polities/${polity.id.replace('polity-', '')}`} className="connected-history-card"><span>Polity</span><strong>{polity.title}</strong></a> : null}
              {chapter ? <a href={`/eras/${chapter.eraId}/chapters/${chapter.id.replace('chapter-', '')}`} className="connected-history-card"><span>Chapter</span><strong>{chapter.title}</strong></a> : null}
              {personEvents.map((event) => <a key={event.id} href="#life-timeline" className="connected-history-card"><span>Event</span><strong>{event.dateDisplay} / {event.title}</strong></a>)}
            </div>
          </section>

          <section className="person-sources">
            <div className="person-section-heading">
              <p className="section-label">Sources</p>
              <h2>Further Reading</h2>
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
