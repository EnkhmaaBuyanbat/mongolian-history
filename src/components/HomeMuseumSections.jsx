import { useRef } from 'react'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { getApprovedMedia, getMediaById } from '../data/mediaResolvers'
import { people } from '../data/people'
import { eras } from '../data/eras'
import { getHomepageEvidenceHref, homepageEvidencePresentation, homepagePeopleRoles } from '../data/homepageFeatured'
import { resolveHomeVisual } from '../data/homeVisualManifest'
import { getLocalizedReconstruction } from '../data/visualLocalization'
import { getLocalizedMedia } from '../data/mediaLocalization'
import { getPersonPresentation } from '../data/personPresentation'
import { getLocalizedEntity } from '../data/entityLocalization'
import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'
import { getLocalizedPerson } from '../data/personLocalization'
import { getPersonHref } from '../data/entityRoutes'
import CinematicStill from './CinematicStill'
import HomeGenealogyPreview from './HomeGenealogyPreview'

const representativePeopleIds = [
  'person-temujin-chinggis-khan',
  'person-sorghaghtani-beki',
  'person-zanabazar',
]

const evidenceMediaIds = [
  'media-deer-stones-uushgiin-uvur-01',
  'media-kul-tegin-inscription-01',
  'media-xiongnu-belt-buckle-01',
  'media-jami-al-tawarikh-folio-01',
  'media-zanabazar-maitreya-01',
]

function PersonGalleryCard({ person, featured = false }) {
  const { t, localeSection, localizedRecord } = useLocale()
  const copy = t('home.people')
  const labels = t('common.sourceInterface')
  const entityLocale = localeSection('entities')
  const era = eras.find((item) => item.id === person.eraId)
  const eraPresentation = era ? localizedRecord('eras', era.id, era) : null
  const visual = resolveHomeVisual(homepagePeopleRoles[person.id])
  const presentation = getPersonPresentation(person)
  const polity = presentation.polities[0]
    ? getLocalizedEntity(presentation.polities[0], entityLocale)
    : null
  const atmosphereLabel = visual?.presentation === 'related-object'
    ? copy.relatedObject
    : visual?.presentation === 'contextual-reconstruction'
      ? copy.contextualReconstruction
      : labels.noPortrait
  const evidenceLabel = visual?.evidenceLabel
    ? (t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel)
    : null

  return (
    <li className={featured ? 'people-gallery-item is-featured' : 'people-gallery-item is-secondary'}>
      <a
        className={`person-select is-${visual?.presentation ?? 'typographic'}${featured ? ' is-featured' : ''}`}
        href={getPersonHref(person)}
      >
        <CinematicStill
          visual={visual?.presentation === 'related-object' ? { ...visual, crop: undefined } : visual}
          className="person-select-visual"
          sizes={featured ? '(max-width: 1000px) 100vw, 50vw' : '(max-width: 1000px) 100vw, 28vw'}
        />
        <div className="person-select-shade" aria-hidden="true" />
        <div className="person-select-copy">
          <span className="person-select-period">{person.periodDisplay ?? person.period}</span>
          <strong>{person.displayName}</strong>
          <small>{person.role}</small>
          {polity ? <em>{polity.title}</em> : eraPresentation ? <em>{eraPresentation.title}</em> : null}
          {evidenceLabel ? <span className="person-select-note">{evidenceLabel}</span> : null}
          <span className="person-select-note">{atmosphereLabel}</span>
          <span className="person-select-note is-secondary">{labels.noPortrait}</span>
        </div>
      </a>
    </li>
  )
}

export function PeopleAndDynasties() {
  const { t, localeSection } = useLocale()
  const copy = t('home.people')
  const familyUi = localeSection('familyTree').ui
  const peopleLocale = localeSection('people')
  const representativePeople = representativePeopleIds
    .map((id) => people.find((person) => person.id === id))
    .filter(Boolean)
    .map((person) => getLocalizedPerson(person, peopleLocale))
  const featured = representativePeople[0]
  const secondary = representativePeople.slice(1)

  return (
    <section className="people-pathway">
      <div className="people-pathway-bar">
        <div>
          <p className="people-pathway-kicker">{copy.label}</p>
          <h2>{copy.title}</h2>
          <p className="people-pathway-lead">{copy.text}</p>
        </div>
        <a href="/people">{copy.explorePeople}</a>
      </div>
      <ul className="people-gallery">
        {featured ? <PersonGalleryCard key={featured.id} person={featured} featured /> : null}
        {secondary.map((person) => (
          <PersonGalleryCard key={person.id} person={person} />
        ))}
        <li className="people-gallery-item is-tree">
          <a className="family-tree-pathway" href="/family-tree">
            <HomeGenealogyPreview />
            <div className="family-tree-copy">
              <p className="section-label">{copy.familyTreeKicker}</p>
              <h3>{copy.familyTreeTitle}</h3>
              <p>{copy.familyTreeText}</p>
              <p className="home-tree-gap-note"><strong>{familyUi.gap}</strong> {familyUi.gapLine}</p>
              <span>{copy.exploreTree}</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
}

function HomeEvidenceCard({ media, copy }) {
  const { localeSection } = useLocale()
  const display = getLocalizedMedia(media, localeSection('media'))
  const presentation = homepageEvidencePresentation[media.id] ?? { classKey: 'object', fit: 'object' }
  const classLabel = copy.classes?.[presentation.classKey] ?? presentation.classKey
  const asset = media.asset
  const src = asset?.mediumPath ?? asset?.largePath ?? asset?.originalPath
  const srcSet = [
    asset?.mediumPath ? `${asset.mediumPath} 900w` : null,
    asset?.largePath ? `${asset.largePath} 1600w` : null,
  ].filter(Boolean).join(', ')
  const href = getHomepageEvidenceHref(media)

  return (
    <figure className={`home-evidence-card is-${presentation.fit}`}>
      <a href={href}>
        <div className={`home-evidence-stage is-${presentation.fit}`}>
          <img
            src={src}
            srcSet={srcSet || undefined}
            sizes="(max-width: 1000px) 70vw, 18vw"
            alt={display.alt ?? ''}
            width={asset?.width}
            height={asset?.height}
            loading="lazy"
          />
        </div>
        <figcaption>
          <span className="home-evidence-class">{classLabel}</span>
          <strong>{display.title}</strong>
          <span className="home-evidence-view">{copy.explore}</span>
        </figcaption>
      </a>
    </figure>
  )
}

export function ObjectsAndEvidence() {
  const { t } = useLocale()
  const copy = t('home.evidence')
  const evidenceMedia = getApprovedMedia(
    evidenceMediaIds.map(getMediaById).filter(Boolean),
  )

  return (
    <section className="evidence-pathway">
      <div className="people-pathway-bar">
        <div>
          <p className="people-pathway-kicker">{copy.label}</p>
          <h2>{copy.title}</h2>
          <p className="people-pathway-lead">{copy.voices}</p>
        </div>
        <a href="/culture">{copy.viewAll}</a>
      </div>
      <div
        className="evidence-gallery"
        role="list"
        aria-label={copy.gallery}
      >
        {evidenceMedia.map((record) => (
          <HomeEvidenceCard key={record.id} media={record} copy={copy} />
        ))}
      </div>
    </section>
  )
}

export function ExperienceHistory() {
  const { t, localeSection } = useLocale()
  const copy = t('home.experience')
  const experienceRef = useRef(null)
  const { layerStyle } = useHeroParallax(experienceRef)
  const visual = resolveHomeVisual('experience')
  const reconstruction = visual?.reconstruction
    ? getLocalizedReconstruction(visual.reconstruction, localeSection('reconstructions'))
    : null
  const evidenceLabel = visual?.evidenceLabel
    ? (t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel)
    : null

  return (
    <section className="experience-pathway" id="experience" ref={experienceRef}>
      <div className="experience-depth-bg" style={layerStyle(0.1, -40, { scale: true })}>
        <CinematicStill visual={visual} className="experience-still" sizes="(max-width: 1100px) 100vw, 50vw" />
      </div>
      <div className="experience-depth-mid" aria-hidden="true" />
      <div className="experience-dust" aria-hidden="true" />
      <div className="experience-copy" style={layerStyle(0.04, 20)}>
        <p className="experience-status">{copy.openNow}</p>
        <h2>{copy.lead}</h2>
        <p className="cinematic-copy">{copy.text}</p>
        <div className="experience-primary">
          <span>{copy.primaryYear}</span>
          <h3>{copy.primaryTitle}</h3>
          <small>{copy.primaryKind ?? copy.primaryType}</small>
          <a className="btn-primary" href="/experience">{copy.enterScene}</a>
        </div>
        {copy.items?.length ? (
          <ul className="experience-later" aria-label={copy.plannedLabel}>
            {copy.items.map((world) => (
              <li key={world.title}>
                <strong>{world.title}</strong>
                <span>{copy.comingSoon}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {evidenceLabel ? (
          <p className="experience-disclosure">
            <span>{evidenceLabel}</span>
            {reconstruction?.historicalCaution ? <small>{reconstruction.historicalCaution}</small> : null}
          </p>
        ) : null}
      </div>
    </section>
  )
}
