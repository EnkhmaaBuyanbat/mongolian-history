import { useRef } from 'react'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { resolveHomeVisual } from '../data/homeVisualManifest'
import { getLocalizedReconstruction } from '../data/visualLocalization'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'

function Hero() {
  const { t, localeSection } = useLocale()
  const copy = t('home.hero')
  const heroRef = useRef(null)
  const { layerStyle, reduced } = useHeroParallax(heroRef)
  const visual = resolveHomeVisual('hero')
  const reconstruction = visual?.reconstruction
    ? getLocalizedReconstruction(visual.reconstruction, localeSection('reconstructions'))
    : null
  const asset = visual?.asset
  const mediumWidth = Math.min(asset?.width ?? 1200, 1200)
  const largeWidth = Math.min(asset?.width ?? 1920, 1920)
  const srcSet = [
    asset?.mobilePath ? `${asset.mobilePath} 800w` : null,
    asset?.mediumPath ? `${asset.mediumPath} ${mediumWidth}w` : null,
    asset?.largePath && largeWidth !== mediumWidth ? `${asset.largePath} ${largeWidth}w` : null,
  ].filter(Boolean).join(', ')
  const evidenceLabel = visual?.evidenceLabel
    ? (t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel)
    : null

  return (
    <section
      className="hero"
      id="top"
      ref={heroRef}
      aria-labelledby="hero-title"
    >
      <div className="hero-scene">
        <div className="hero-layer hero-depth-bg" style={layerStyle(0.08, -80, { scale: true })} aria-hidden="true">
          {asset ? (
            <img
              className="hero-media-image"
              src={asset.largePath ?? asset.mediumPath ?? asset.mobilePath}
              srcSet={srcSet || undefined}
              sizes={srcSet ? '100vw' : undefined}
              width={asset.width ?? undefined}
              height={asset.height ?? undefined}
              alt=""
              loading="eager"
              style={{ '--hero-object-position': visual.focalPoint }}
            />
          ) : null}
        </div>
        <div className="hero-layer hero-atmosphere" style={layerStyle(0.16, -40)} aria-hidden="true" />
        <div className="hero-layer hero-light" style={layerStyle(0.26, -20)} aria-hidden="true" />
        <div className="hero-layer hero-vignette" aria-hidden="true" />
      </div>

      <div
        className={`hero-copy${reduced ? '' : ' hero-copy-enter'}`}
        style={layerStyle(0.035, 40)}
      >
        {copy.eyebrow ? <p className="hero-eyebrow">{copy.eyebrow}</p> : null}
        <MeanderLine className="hero-meander" />
        <h1 id="hero-title">
          {copy.title.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p className="hero-kicker">
          {copy.kicker[0]}
          <span>{copy.kicker[1]}</span>
        </p>
        <p className="hero-lead">{copy.leadShort ?? copy.lead}</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#enter">
            {copy.begin}
          </a>
          <a className="btn-secondary" href="/timeline">
            {copy.timeline}
          </a>
        </div>
      </div>

      {reconstruction ? (
        <div className="hero-scene-record" aria-live="polite" style={layerStyle(0.02, 20)}>
          <span>{evidenceLabel}</span>
          <strong>{reconstruction.title}</strong>
          <small>{copy.reconstructionNote ?? reconstruction.dateDisplay ?? reconstruction.period}</small>
        </div>
      ) : null}

      <a className="hero-scroll-cue" href="#enter">{copy.scroll} <span aria-hidden="true">↓</span></a>
    </section>
  )
}

export default Hero
