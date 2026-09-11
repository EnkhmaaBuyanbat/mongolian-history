import { useEffect, useMemo, useRef, useState } from 'react'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { getMediaById } from '../data/mediaResolvers'
import { getReconstructionById, isApprovedReconstruction } from '../data/reconstructionResolvers'
import { heroScenes } from '../data/heroScenes'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'
import { getLocalizedHeroScene, getLocalizedReconstruction } from '../data/visualLocalization'

function resolveScene(canonicalScene, heroLocale, reconstructionLocale) {
  const scene = getLocalizedHeroScene(canonicalScene, heroLocale)
  if (!scene || Boolean(scene.mediaId) === Boolean(scene.reconstructionId)) return null

  if (scene.mediaId) {
    const media = getMediaById(scene.mediaId)
    if (!scene.approved || !media?.approved) return null
    return {
      scene,
      asset: media.asset,
      evidenceLabel: scene.evidenceLabel ?? media.evidenceType,
      period: scene.subtitle,
      caption: scene.caption ?? media.caption,
      attribution: media.attribution,
      sourceUrl: media.sourceUrl,
      isReconstruction: false,
    }
  }

  const canonicalReconstruction = getReconstructionById(scene.reconstructionId)
  if (!scene.approved || !isApprovedReconstruction(canonicalReconstruction)) return null
  const reconstruction = getLocalizedReconstruction(canonicalReconstruction, reconstructionLocale)
  return {
    scene,
    asset: reconstruction.asset,
    evidenceLabel: reconstruction.evidenceLabel ?? 'HISTORICAL RECONSTRUCTION',
    period: reconstruction.dateDisplay ?? reconstruction.period,
    caption: scene.caption ?? reconstruction.summary,
    attribution: null,
    sourceUrl: null,
    isReconstruction: true,
  }
}

function Hero() {
  const { t, localeSection } = useLocale()
  const copy = t('home.hero')
  const heroLocale = localeSection('heroScenes')
  const reconstructionLocale = localeSection('reconstructions')
  const heroRef = useRef(null)
  const { layerStyle, reduced } = useHeroParallax(heroRef)
  const availableScenes = useMemo(
    () => heroScenes.filter((scene) => scene.homepageEnabled).map((scene) => resolveScene(scene, heroLocale, reconstructionLocale)).filter(Boolean),
    [heroLocale, reconstructionLocale],
  )
  const [sceneIndex, setSceneIndex] = useState(0)
  const activeVisual = availableScenes[sceneIndex] ?? availableScenes[0]
  const activeScene = activeVisual?.scene
  const activeAsset = activeVisual?.asset
  const mediumWidth = Math.min(activeAsset?.width ?? 1200, 1200)
  const largeWidth = Math.min(activeAsset?.width ?? 1920, 1920)
  const srcSet = [
    activeAsset?.mobilePath ? `${activeAsset.mobilePath} 800w` : null,
    activeAsset?.mediumPath ? `${activeAsset.mediumPath} ${mediumWidth}w` : null,
    activeAsset?.largePath && largeWidth !== mediumWidth ? `${activeAsset.largePath} ${largeWidth}w` : null,
  ].filter(Boolean).join(', ')

  useEffect(() => {
    if (availableScenes.length < 2) return
    const nextScene = availableScenes[(sceneIndex + 1) % availableScenes.length]
    const nextPath = nextScene.asset?.mediumPath ?? nextScene.asset?.largePath
    if (!nextPath) return
    const preload = new Image()
    preload.src = nextPath
  }, [availableScenes, sceneIndex])

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
        {activeVisual ? (
          <img
            key={activeScene.id}
            className="hero-media-image"
            src={activeAsset.largePath ?? activeAsset.mediumPath ?? activeAsset.mobilePath}
            srcSet={srcSet || undefined}
            sizes={srcSet ? '100vw' : undefined}
            width={activeAsset.width ?? undefined}
            height={activeAsset.height ?? undefined}
            alt=""
            aria-hidden="true"
            loading={sceneIndex === 0 ? 'eager' : 'lazy'}
            style={{
              '--hero-object-position': activeScene.position,
              '--hero-object-position-mobile': activeScene.mobilePosition ?? activeScene.position,
            }}
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

      {activeVisual ? (
        <div className="hero-scene-record" aria-live="polite">
          <span>{t(`evidence.${toEvidenceCode(activeVisual.evidenceLabel)}`) || activeVisual.evidenceLabel}</span>
          <strong>{activeScene.title}</strong>
          <small>{activeVisual.period}</small>
          <small>{activeVisual.caption}</small>
          {activeVisual.sourceUrl ? <a href={activeVisual.sourceUrl} target="_blank" rel="noopener noreferrer">{activeVisual.attribution}</a> : null}
        </div>
      ) : null}

      <div
        className={`hero-copy${reduced ? '' : ' hero-copy-enter'}`}
        style={layerStyle(0.1, 40)}
      >
        <MeanderLine className="hero-meander" />
        <h1 id="hero-title">
          {copy.title.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p className="hero-kicker">
          {copy.kicker[0]}
          <span>{copy.kicker[1]}</span>
        </p>
        <p className="hero-lead">{copy.lead}</p>
        <div className="hero-actions">
          <a className="btn-primary" href="/eras">
            {copy.begin}
          </a>
          <a className="btn-secondary" href="/timeline">
            {copy.timeline}
          </a>
        </div>
      </div>

      {availableScenes.length > 1 ? (
        <div className="hero-scene-controls" aria-label={copy.chooseScene}>
          <button type="button" onClick={() => selectAdjacentScene(-1)} aria-label={copy.previousScene}>←</button>
          <div className="hero-scene-dots">
            {availableScenes.map((visual, index) => (
              <button
                key={visual.scene.id}
                type="button"
                aria-label={`${copy.showScene}: ${visual.scene.title}`}
                aria-pressed={index === sceneIndex}
                aria-current={index === sceneIndex ? 'true' : undefined}
                onClick={() => setSceneIndex(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => selectAdjacentScene(1)} aria-label={copy.nextScene}>→</button>
        </div>
      ) : null}

      <a className="hero-scroll-cue" href="#eras">{copy.scroll} <span aria-hidden="true">↓</span></a>
    </section>
  )
}

export default Hero
