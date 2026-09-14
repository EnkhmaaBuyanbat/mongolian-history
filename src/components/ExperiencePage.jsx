'use client'

import { useMemo, useState } from 'react'
import { events } from '../data/events'
import { chapters } from '../data/chapters'
import { people } from '../data/people'
import { getChapterHref, getPersonHref } from '../data/entityRoutes'
import { useLocale } from '../i18n/useLocale'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { resolveHomeVisual } from '../data/homeVisualManifest'
import CinematicStill from './CinematicStill'
import ExperienceCanvas from './ExperienceCanvas'
import '../experience.css'

const EVENT_ID = 'event-new-mongol-order-1206'
const CHAPTER_ID = 'chapter-new-order-1206'
const PERSON_ID = 'person-temujin-chinggis-khan'

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

function ExperiencePage() {
  const { t, localizedRecord } = useLocale()
  const copy = t('experience')
  const homeExperience = t('home.experience')
  const reducedMotion = usePrefersReducedMotion()
  const [paused, setPaused] = useState(false)
  const [webgl] = useState(() => supportsWebGL())
  const visual = resolveHomeVisual('experience')
  const event = events.find((item) => item.id === EVENT_ID)
  const chapter = chapters.find((item) => item.id === CHAPTER_ID)
  const person = people.find((item) => item.id === PERSON_ID)
  const eventPresentation = event ? localizedRecord('events', event.id, event) : null
  const chapterPresentation = chapter ? localizedRecord('chapters', chapter.id, chapter) : null
  const showCanvas = webgl

  const plannedWorlds = useMemo(() => homeExperience.items ?? [], [homeExperience])

  return (
    <article className="experience-page">
      <div className="experience-stage">
        {showCanvas ? (
          <ExperienceCanvas
            reducedMotion={reducedMotion}
            paused={paused || reducedMotion}
            label={`${copy.classification}. ${copy.sceneTitle}`}
          />
        ) : (
          <div className="experience-fallback">
            <CinematicStill visual={visual} className="experience-fallback-still" eager sizes="100vw" />
            <p>{webgl ? copy.reducedMotion : copy.webglUnavailable}</p>
          </div>
        )}

        <div className="experience-hud">
          <p className="experience-kicker">{copy.kicker}</p>
          <p className="experience-year">{copy.year}</p>
          <h1>{copy.sceneTitle}</h1>
          <p className="experience-class">{copy.classification}</p>
          {showCanvas && !reducedMotion ? (
            <button type="button" className="experience-orbit" onClick={() => setPaused((value) => !value)}>
              {paused ? copy.resumeOrbit : copy.pauseOrbit}
            </button>
          ) : null}
        </div>
      </div>

      <div className="experience-study">
        <section className="experience-notes">
          <p className="section-label">{copy.kicker}</p>
          <h2>{copy.title}</h2>
          <p>{copy.lead}</p>
          {eventPresentation ? <p className="experience-source-line">{eventPresentation.summary}</p> : null}
          {chapterPresentation ? <p>{chapterPresentation.intro ?? chapterPresentation.summary}</p> : null}
          <p className="experience-controls-note">{copy.controls}</p>
          <div className="experience-actions">
            {chapter ? <a className="btn-primary" href={getChapterHref(chapter)}>{copy.readChapter}</a> : null}
            {person ? <a className="btn-secondary" href={getPersonHref(person)}>{copy.readPerson}</a> : null}
            <a className="btn-secondary" href="/eras/before-chinggis">{copy.exploreEra}</a>
          </div>
        </section>

        <section className="experience-limits">
          <div>
            <h3>{copy.canShowLabel}</h3>
            <ul>{copy.canShow.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>{copy.cannotShowLabel}</h3>
            <ul>{copy.cannotShow.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="experience-worlds" aria-labelledby="experience-worlds-title">
          <p className="section-label">{copy.worldsLabel}</p>
          <h2 id="experience-worlds-title">{copy.worldsLabel}</h2>
          <p>{copy.worldsIntro}</p>
          <ul>
            <li className="is-active">
              <strong>{copy.sceneTitle}</strong>
              <span>{copy.active}</span>
            </li>
            {plannedWorlds.map((world) => (
              <li key={world.title}>
                <strong>{world.title}</strong>
                <span>{copy.planned} · {world.type}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default ExperiencePage
