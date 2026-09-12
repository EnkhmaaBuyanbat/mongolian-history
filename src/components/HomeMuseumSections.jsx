import { getApprovedMedia, getMediaById } from '../data/mediaResolvers'
import { people } from '../data/people'
import HistoricalMedia from './HistoricalMedia'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedPerson } from '../data/personLocalization'

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
  const { t } = useLocale()
  const copy = t('home.featured')
  return (
    <section className="museum-home-section featured-world">
      <div className="section-inner featured-world-layout">
        <SectionHeading label={copy.label} title={copy.title} />
        <div className="featured-world-copy">
          <p>{copy.text}</p>
          <div className="featured-world-actions">
            <a href="/eras/ancient-steppe">{copy.ancient}</a>
            <a href="/timeline">{copy.chronology}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PeopleAndDynasties() {
  const { t, localeSection } = useLocale()
  const copy = t('home.people')
  const peopleLocale = localeSection('people')
  const representativePeople = representativePeopleIds
    .map((id) => people.find((person) => person.id === id))
    .filter(Boolean)
    .map((person) => getLocalizedPerson(person, peopleLocale))

  return (
    <section className="museum-home-section people-pathway">
      <div className="section-inner">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          text={copy.text}
        />
        <div className="people-pathway-grid">
          {representativePeople.map((person) => (
            <a key={person.id} href={`/people/${person.slug ?? person.id.replace('person-', '')}`}>
              <span>{person.periodDisplay ?? person.period}</span>
              <strong>{person.title}</strong>
              <small>{person.role}</small>
            </a>
          ))}
        </div>
        <div className="museum-home-actions">
          <a href="/people">{copy.explorePeople}</a>
          <a href="/family-tree">{copy.exploreTree}</a>
        </div>
      </div>
    </section>
  )
}

export function ObjectsAndEvidence() {
  const { t } = useLocale()
  const copy = t('home.evidence')
  const evidenceMedia = getApprovedMedia(
    evidenceMediaIds.map(getMediaById).filter(Boolean),
  )

  return (
    <section className="museum-home-section evidence-pathway">
      <div className="section-inner">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          text={copy.text}
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
  const { t } = useLocale()
  const copy = t('home.experience')
  const plannedExperiences = copy.items

  return (
    <section className="museum-home-section experience-pathway">
      <div className="section-inner experience-layout">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          text={copy.text}
        />
        <div className="experience-portals" aria-label={copy.plannedLabel}>
          {plannedExperiences.map((experience) => (
            <article key={experience.title}>
              <span>{copy.development}</span>
              <h3>{experience.title}</h3>
              <small>{experience.type}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
