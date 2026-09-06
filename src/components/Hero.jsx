import { useRef } from 'react'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { MeanderLine } from './Ornament'

function Hero() {
  const heroRef = useRef(null)
  const { layerStyle, reduced } = useHeroParallax(heroRef)

  return (
    <section
      className="hero"
      id="top"
      ref={heroRef}
      aria-labelledby="hero-title"
    >
      <div className="hero-scene">
        <div
          className="hero-layer layer-sky"
          style={layerStyle(0.08, -120)}
          aria-hidden="true"
        />

        <div className="hero-layer hero-vignette" aria-hidden="true" />

        <div className="hero-layer hero-frame" aria-hidden="true">
          <span className="frame-line frame-line-top" />
          <span className="frame-line frame-line-right" />
          <span className="frame-line frame-line-bottom" />
          <span className="frame-line frame-line-left" />
        </div>

        <svg
          className="hero-layer layer-mountains"
          style={layerStyle(0.2, -80)}
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="ridge ridge-far"
            d="M0 248 C 120 236, 210 198, 340 214 C 470 230, 560 176, 720 196 C 880 216, 980 168, 1140 190 C 1260 206, 1360 188, 1440 200 L 1440 420 L 0 420 Z"
          />
          <path
            className="ridge ridge-mid"
            d="M0 286 C 180 268, 300 312, 460 284 C 620 256, 760 300, 940 272 C 1100 248, 1260 292, 1440 270 L 1440 420 L 0 420 Z"
          />
        </svg>

        <div
          className="hero-layer layer-ornament"
          style={layerStyle(0.14, -40)}
          aria-hidden="true"
        />

        <div
          className="hero-layer hero-steppe hero-steppe-back"
          style={layerStyle(0.16, -70)}
          aria-hidden="true"
        />

        <div
          className="hero-layer hero-steppe hero-steppe-mid"
          style={layerStyle(0.28, -40)}
          aria-hidden="true"
        />

        <div
          className="hero-layer layer-banners"
          style={layerStyle(0.32, -20)}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
        </div>

        <div
          className="hero-layer hero-steppe hero-steppe-front"
          style={layerStyle(0.52, 0)}
          aria-hidden="true"
        />

        <svg
          className="hero-layer layer-foreground"
          style={layerStyle(0.55, 0)}
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="ridge ridge-near"
            d="M0 168 C 160 154, 280 198, 430 172 C 590 146, 740 188, 910 164 C 1080 140, 1240 176, 1440 158 L 1440 280 L 0 280 Z"
          />
        </svg>
      </div>

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
    </section>
  )
}

export default Hero
