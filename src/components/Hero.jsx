import { useRef, useState } from 'react'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { getMediaById } from '../data/mediaResolvers'
import { heroScenes } from '../data/heroScenes'
import { MeanderLine } from './Ornament'

function Hero() {
  const heroRef = useRef(null)
  const { layerStyle, reduced } = useHeroParallax(heroRef)
  const availableScenes = heroScenes.filter((scene) => scene.approved && getMediaById(scene.mediaId)?.approved)
  const [sceneIndex, setSceneIndex] = useState(0)
  const activeScene = availableScenes[sceneIndex] ?? availableScenes[0]
  const heroMedia = getMediaById(activeScene?.mediaId)
  const mediumWidth = Math.min(heroMedia?.asset?.width ?? 900, 900)
  const largeWidth = Math.min(heroMedia?.asset?.width ?? 1600, 1600)
  const srcSet = [
    heroMedia?.asset?.mediumPath ? `${heroMedia.asset.mediumPath} ${mediumWidth}w` : null,
    heroMedia?.asset?.largePath && largeWidth !== mediumWidth ? `${heroMedia.asset.largePath} ${largeWidth}w` : null,
  ].filter(Boolean).join(', ')
  const selectAdjacentScene = (direction) => {
    setSceneIndex((current) => (current + direction + availableScenes.length) % availableScenes.length)
  }

  return (
    <section
      className="hero"
      id="top"
      ref={heroRef}
      aria-labelledby="hero-title"
    >
      <div className="hero-scene">
        {heroMedia?.approved ? (
          <img
            key={activeScene.id}
            className="hero-media-image"
            src={heroMedia.asset.largePath}
            srcSet={srcSet || undefined}
            sizes={srcSet ? '100vw' : undefined}
            width={heroMedia.asset.width}
            height={heroMedia.asset.height}
            alt=""
            aria-hidden="true"
            loading={sceneIndex === 0 ? 'eager' : 'lazy'}
            style={{ objectPosition: activeScene.position }}
          />
        ) : null}
        <div className="hero-layer hero-vignette" aria-hidden="true" />

        <div className="hero-layer hero-frame" aria-hidden="true">
          <span className="frame-line frame-line-top" />
          <span className="frame-line frame-line-right" />
          <span className="frame-line frame-line-bottom" />
          <span className="frame-line frame-line-left" />
        </div>

        <div
          className="hero-layer layer-ornament"
          style={layerStyle(0.14, -40)}
          aria-hidden="true"
        />
      </div>

      {heroMedia?.approved ? (
        <div className="hero-scene-record" aria-live="polite">
          <span>{activeScene.evidenceLabel}</span>
          <strong>{activeScene.title}</strong>
          <small>{activeScene.subtitle}</small>
          <a href={heroMedia.sourceUrl} target="_blank" rel="noopener noreferrer">{heroMedia.attribution}</a>
        </div>
      ) : null}

      <div
        className={`hero-copy${reduced ? '' : ' hero-copy-enter'}`}
        style={layerStyle(0.1, 40)}
      >
        <MeanderLine className="hero-meander" />
        <h1 id="hero-title">
          <span>Mongolian</span>
          <span>History</span>
        </h1>
        <p className="hero-kicker">
          From the Ancient Steppe
          <span>To the Modern Nation</span>
        </p>
        <p className="hero-lead">
          Explore the peoples, empires, rulers, revolutions and cultural
          transformations that shaped Mongolia and the Mongolian steppe.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="/eras">
            Begin the Journey
          </a>
          <a className="btn-secondary" href="/timeline">
            Explore Timeline
          </a>
        </div>
      </div>

      {availableScenes.length > 1 ? (
        <div className="hero-scene-controls" aria-label="Choose hero scene">
          <button type="button" onClick={() => selectAdjacentScene(-1)} aria-label="Previous hero scene">←</button>
          <div className="hero-scene-dots">
            {availableScenes.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                aria-label={`Show scene: ${scene.title}`}
                aria-pressed={index === sceneIndex}
                onClick={() => setSceneIndex(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => selectAdjacentScene(1)} aria-label="Next hero scene">→</button>
        </div>
      ) : null}

      <a className="hero-scroll-cue" href="#eras">Scroll to explore <span aria-hidden="true">↓</span></a>
    </section>
  )
}

export default Hero
