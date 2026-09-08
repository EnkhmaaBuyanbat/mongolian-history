import { getApprovedMedia, getMediaById } from '../data/mediaResolvers'
import { people } from '../data/people'
import HistoricalMedia from './HistoricalMedia'
import { MeanderLine } from './Ornament'

const representativePeopleIds = [
  'person-temujin-chinggis-khan',
  'person-sorghaghtani-beki',
  'person-zanabazar',
]

const evidenceMediaIds = [
  'media-deer-stones-uushgiin-uvur-01',
  'media-xiongnu-belt-buckle-01',
  'media-kul-tegin-inscription-01',
  'media-jami-al-tawarikh-folio-01',
  'media-zanabazar-maitreya-01',
]

function SectionHeading({ label, title, text }) {
  return (
    <div className="museum-home-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <MeanderLine />
      {text ? <p>{text}</p> : null}
    </div>
  )
}

export function FeaturedStory() {
  return (
    <section className="museum-home-section featured-world">
      <div className="section-inner featured-world-layout">
        <SectionHeading label="Featured World" title="The Steppe and the World" />
        <div className="featured-world-copy">
          <p>Mongolian history connects landscape, mobility, political power, exchange, belief, and cultural change across centuries.</p>
          <div className="featured-world-actions">
            <a href="/eras/ancient-steppe">Enter Ancient Steppe Worlds</a>
            <a href="/timeline">Follow the chronology</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PeopleAndDynasties() {
  const representativePeople = representativePeopleIds
    .map((id) => people.find((person) => person.id === id))
    .filter(Boolean)

  return (
    <section className="museum-home-section people-pathway">
      <div className="section-inner">
        <SectionHeading
          label="Explore People"
          title="People and Dynasties"
          text="Enter through biographies, changing relationships, households, and dynastic branches—without substituting invented portraits for evidence."
        />
        <div className="people-pathway-grid">
          {representativePeople.map((person) => (
            <a key={person.id} href={`/people/${person.slug ?? person.id.replace('person-', '')}`}>
              <span>{person.period}</span>
              <strong>{person.title}</strong>
              <small>{person.role}</small>
            </a>
          ))}
        </div>
        <div className="museum-home-actions">
          <a href="/people">Explore People</a>
          <a href="/family-tree">Explore Family Tree</a>
        </div>
      </div>
    </section>
  )
}

export function ObjectsAndEvidence() {
  const evidenceMedia = getApprovedMedia(
    evidenceMediaIds.map(getMediaById).filter(Boolean),
  )

  return (
    <section className="museum-home-section evidence-pathway">
      <div className="section-inner">
        <SectionHeading
          label="History Through Evidence"
          title="Objects and Evidence"
          text="Archaeology, documents, depictions, and photographs answer different questions. Each visual record states what it can show—and what it cannot."
        />
        <div className="evidence-pathway-rail">
          {evidenceMedia.map((record) => (
            <HistoricalMedia key={record.id} media={record} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceHistory() {
  const plannedExperiences = [
    { title: 'Xiongnu Elite Tomb', type: 'Archaeological reconstruction' },
    { title: 'The Order of 1206', type: 'Historical reconstruction' },
    { title: 'Karakorum', type: 'Archaeological reconstruction' },
    { title: 'Buddhist Artistic Worlds', type: 'Contextual historical reconstruction' },
  ]

  return (
    <section className="museum-home-section experience-pathway">
      <div className="section-inner experience-layout">
        <SectionHeading
          label="Future Experience"
          title="Experience History"
          text="Selected environments will become carefully researched, explorable historical spaces. Reconstruction will remain visibly distinct from surviving evidence."
        />
        <div className="experience-portals" aria-label="Planned historical experiences">
          {plannedExperiences.map((experience) => (
            <article key={experience.title}>
              <span>In development</span>
              <h3>{experience.title}</h3>
              <small>{experience.type}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
