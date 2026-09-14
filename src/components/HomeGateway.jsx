import { resolveHomeVisual } from '../data/homeVisualManifest'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'
import CinematicStill from './CinematicStill'

function GatewayPortal({ kicker, text, href, action, visual, evidenceLabel, status, pending = false, portalClass = '' }) {
  return (
    <a className={`gateway-portal${pending ? ' is-pending' : ''}${portalClass ? ` ${portalClass}` : ''}`} href={href}>
      <CinematicStill visual={visual} className="gateway-portal-visual" sizes="(max-width: 1100px) 100vw, 32vw" />
      <div className="gateway-portal-shade" aria-hidden="true" />
      <div className="gateway-portal-copy">
        {status ? <p className="gateway-portal-status">{status}</p> : null}
        <h3>{kicker}</h3>
        <p>{text}</p>
        <span className="gateway-portal-action">{action}</span>
        {evidenceLabel ? <small>{evidenceLabel}</small> : null}
      </div>
    </a>
  )
}

function HomeGateway() {
  const { t } = useLocale()
  const copy = t('home.gateway')
  const learn = resolveHomeVisual('gatewayLearn')
  const explore = resolveHomeVisual('gatewayExplore')
  const experience = resolveHomeVisual('gatewayExperience')
  const labelFor = (visual) => (visual?.evidenceLabel
    ? (t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel)
    : null)

  return (
    <section className="home-gateway" id="enter" aria-labelledby="gateway-title">
      <p className="home-gateway-kicker" id="gateway-title">{copy.title} — {copy.pathways}</p>
      <div className="gateway-portals">
        <GatewayPortal
          kicker={copy.learn.kicker}
          text={copy.learn.text}
          href="/eras"
          action={copy.learn.primary}
          visual={learn}
          evidenceLabel={labelFor(learn)}
          portalClass="is-learn"
        />
        <GatewayPortal
          kicker={copy.explore.kicker}
          text={copy.explore.text}
          href="/people"
          action={copy.explore.primary}
          visual={explore}
          evidenceLabel={labelFor(explore)}
          portalClass="is-explore"
        />
        <GatewayPortal
          kicker={copy.experience.kicker}
          text={copy.experience.text}
          href="/experience"
          action={copy.experience.link}
          visual={experience}
          evidenceLabel={labelFor(experience)}
          status={copy.experience.status}
          portalClass="is-experience"
        />
      </div>
    </section>
  )
}

export default HomeGateway
