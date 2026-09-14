import { people } from '../data/people'
import { eras } from '../data/eras'
import { homepageActiveFeaturedStoryId, homepageFeaturedStories } from '../data/homepageFeatured'
import { resolveHomeVisual } from '../data/homeVisualManifest'
import { getLocalizedPerson, getLocalizedPersonStory, formatTemplate } from '../data/personLocalization'
import { getLocalizedReconstruction } from '../data/visualLocalization'
import { getPersonHref } from '../data/entityRoutes'
import { toEvidenceCode } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'
import { moduChanyuStory } from '../data/personStories/moduChanyu'
import CinematicStill from './CinematicStill'

const storySources = {
  'modu-chanyu': moduChanyuStory,
}

export function FeaturedStory({ storyId = homepageActiveFeaturedStoryId }) {
  const { t, localeSection } = useLocale()
  const copy = t('home.featured')
  const peopleLocale = localeSection('people')
  const config = homepageFeaturedStories.find((item) => item.id === storyId)
  const person = people.find((item) => item.id === config?.personId)
  const canonicalStory = person?.storyId ? storySources[person.storyId] : null
  const story = canonicalStory
    ? getLocalizedPersonStory(canonicalStory, peopleLocale.stories?.[person.storyId])
    : null
  const localizedPerson = person ? getLocalizedPerson(person, peopleLocale) : null
  const era = eras.find((item) => item.id === person?.eraId)
  const storyCopy = copy.stories?.[config?.id] ?? {}
  const visual = resolveHomeVisual(config?.visualRole ?? 'featuredStory')
  const reconstruction = visual?.reconstruction
    ? getLocalizedReconstruction(visual.reconstruction, localeSection('reconstructions'))
    : null
  const evidenceLabel = visual?.evidenceLabel
    ? (t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel)
    : null
  const caution = reconstruction?.historicalCaution ?? visual?.caution

  if (!config || !localizedPerson || !story?.introduction?.[0]) return null

  const href = getPersonHref(localizedPerson)
  const eraHref = era ? `/eras/${era.id}` : '/eras'
  const eraLine = era ? formatTemplate(copy.era, { numeral: era.numeral }) : null

  return (
    <section className="featured-story" aria-labelledby="featured-story-title">
      <div className="featured-story-scene">
        <CinematicStill visual={visual} className="featured-story-visual" eager={false} sizes="(max-width: 1100px) 100vw, 50vw" />
        <div className="featured-story-shade" aria-hidden="true" />
        <div className="featured-story-copy">
          {eraLine ? (
            <p className="featured-story-context">
              {copy.label} · {eraLine}
            </p>
          ) : (
            <p className="section-label">{copy.label}</p>
          )}
          <h2 id="featured-story-title">{localizedPerson.displayName}</h2>
          {storyCopy.subtitle ? <p className="featured-story-subtitle">{storyCopy.subtitle}</p> : null}
          <p className="cinematic-copy">{storyCopy.hook ?? story.introduction[0]}</p>
          <div className="featured-story-actions">
            <a className="btn-primary featured-story-read" href={href}>{copy.read}</a>
            <a className="btn-secondary featured-story-era" href={eraHref}>{formatTemplate(copy.eraPathway, { numeral: era?.numeral ?? 'I' })}</a>
          </div>
          {evidenceLabel ? (
            <p className="featured-story-disclosure">
              <span>{evidenceLabel}</span>
              {caution ? <small>{caution}</small> : null}
              {storyCopy.xiongnuNote ? <small>{storyCopy.xiongnuNote}</small> : null}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default FeaturedStory
