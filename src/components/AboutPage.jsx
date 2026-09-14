'use client'

import { eras } from '../data/eras'
import { sources } from '../data/sources'
import {
  aboutEvidenceConceptCodes,
  aboutExampleSourceIds,
  aboutFutureKeys,
  aboutMissionStrandKeys,
  aboutNarrativeSourceId,
  aboutPathwayKeys,
  aboutPortraitStateCodes,
  aboutRoutes,
  aboutSourceKindKeys,
  aboutVisualRoles,
} from '../data/aboutPage'
import { getHomeEraVisualRole, resolveHomeVisual } from '../data/homeVisualManifest'
import { getMediaById } from '../data/mediaResolvers'
import { getLocalizedReconstruction } from '../data/visualLocalization'
import { getLocalizedMedia } from '../data/mediaLocalization'
import { getLocalizedSource } from '../data/supportingLocalization'
import { toEvidenceCode } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'
import CinematicStill from './CinematicStill'
import SectionReveal from './SectionReveal'
import { MeanderLine } from './Ornament'
import '../about.css'

function findSource(id) {
  return sources.find((record) => record.id === id) ?? null
}

function eraHref(era) {
  return `${aboutRoutes.eras}/${era.slug ?? era.id}`
}

function AboutHero() {
  const { t, localeSection } = useLocale()
  const copy = t('about.hero')
  const visual = resolveHomeVisual(aboutVisualRoles.hero)
  const reconstruction = visual?.reconstruction
    ? getLocalizedReconstruction(visual.reconstruction, localeSection('reconstructions'))
    : null
  const evidenceLabel = visual?.evidenceLabel
    ? t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel
    : null

  return (
    <header className="about-hero" aria-labelledby="about-hero-title">
      <CinematicStill visual={visual} className="about-hero-still" eager sizes="100vw" />
      <div className="about-hero-atmosphere" aria-hidden="true" />

      <div className="section-inner about-hero-inner">
        <p className="section-label">{copy.eyebrow}</p>
        <MeanderLine className="about-hero-meander" />
        <h1 id="about-hero-title">{copy.title}</h1>
        <p className="about-hero-statement">
          {copy.statement.map((line) => <span key={line}>{line}</span>)}
        </p>
        <div className="about-hero-intro">
          {copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="about-framing">
          <p className="section-label">{copy.framingLabel}</p>
          <p>{copy.framingNote}</p>
        </div>
      </div>

      {reconstruction ? (
        <div className="about-hero-record">
          {evidenceLabel ? <span>{evidenceLabel}</span> : null}
          <strong>{reconstruction.title}</strong>
          <small>{reconstruction.period}</small>
        </div>
      ) : null}
    </header>
  )
}

function AboutMission() {
  const { t } = useLocale()
  const copy = t('about.mission')

  return (
    <SectionReveal className="about-section about-mission" aria-labelledby="about-mission-title">
      <div className="section-inner about-editorial">
        <div className="about-editorial-lead">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-mission-title">{copy.title}</h2>
        </div>
        <div className="about-editorial-body">
          <p className="about-lead-text">{copy.lead}</p>
          <dl className="about-strands">
            {aboutMissionStrandKeys.map((key) => (
              <div className="about-strand" key={key}>
                <dt>{copy.strands[key].title}</dt>
                <dd>{copy.strands[key].text}</dd>
              </div>
            ))}
          </dl>
          <div className="about-questions">
            <p className="section-label">{copy.questionsLabel}</p>
            <ul>
              {copy.questions.map((question) => <li key={question}>{question}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

function AboutContinuity() {
  const { t, localizedRecord } = useLocale()
  const copy = t('about.continuity')

  return (
    <SectionReveal className="about-section about-continuity" aria-labelledby="about-continuity-title">
      <div className="section-inner">
        <div className="about-section-head">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-continuity-title">{copy.title}</h2>
          <p className="about-lead-text">{copy.lead}</p>
        </div>
      </div>

      <ol className="about-era-track" aria-label={copy.title}>
        {eras.map((era) => {
          const presentation = localizedRecord('eras', era.id, era)
          const visual = resolveHomeVisual(getHomeEraVisualRole(era.id))
          return (
            <li className={`about-era-panel tone-${era.id}`} key={era.id}>
              <a
                href={eraHref(era)}
                aria-label={`${copy.explore} ${presentation.title}`}
              >
                <CinematicStill
                  visual={visual}
                  className="about-era-visual"
                  sizes="(max-width: 720px) 78vw, (max-width: 1000px) 34vw, 14vw"
                />
                <div className="about-era-copy">
                  <span className="about-era-numeral">{era.numeral}</span>
                  <h3>{presentation.title}</h3>
                  <p className="about-era-period">{presentation.period}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ol>

      <div className="section-inner about-continuity-foot">
        <p className="about-note">{copy.caution}</p>
        <a className="about-inline-link" href={aboutRoutes.timeline}>{copy.viewTimeline}</a>
      </div>
    </SectionReveal>
  )
}

function PathwayPanel({ pathway, copy, actions }) {
  const visual = resolveHomeVisual(aboutVisualRoles[pathway])

  return (
    <article className="about-pathway">
      <CinematicStill
        visual={visual}
        className="about-pathway-visual"
        sizes="(max-width: 1000px) 92vw, 32vw"
      />
      <div className="about-pathway-body">
        <p className="section-label">{copy.kicker}</p>
        <h3>{copy.title}</h3>
        <p>{copy.text}</p>
        <ul className="about-pathway-points">
          {copy.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        {copy.caution ? <p className="about-caution">{copy.caution}</p> : null}
        <div className="about-pathway-actions">
          {actions.map((action, index) => (
            <a
              key={action.href}
              className={index === 0 ? 'btn-primary' : 'btn-secondary'}
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function AboutPathways() {
  const { t } = useLocale()
  const copy = t('about.pathways')
  const actionsByPathway = {
    learn: [
      { href: aboutRoutes.eras, label: copy.learn.primary },
      { href: aboutRoutes.timeline, label: copy.learn.secondary },
    ],
    explore: [
      { href: aboutRoutes.people, label: copy.explore.primary },
      { href: aboutRoutes.familyTree, label: copy.explore.secondary },
      { href: aboutRoutes.culture, label: copy.explore.tertiary },
    ],
    experience: [
      { href: aboutRoutes.experience, label: copy.experience.primary },
    ],
  }

  return (
    <SectionReveal className="about-section about-pathways" aria-labelledby="about-pathways-title">
      <div className="section-inner">
        <div className="about-section-head">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-pathways-title">{copy.title}</h2>
          <p className="about-lead-text">{copy.lead}</p>
        </div>

        <div className="about-pathway-grid">
          {aboutPathwayKeys.map((pathway) => (
            <PathwayPanel
              key={pathway}
              pathway={pathway}
              copy={copy[pathway]}
              actions={actionsByPathway[pathway]}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

function AboutEvidence() {
  const { t } = useLocale()
  const copy = t('about.evidence')

  return (
    <SectionReveal className="about-section about-evidence" aria-labelledby="about-evidence-title">
      <div className="section-inner">
        <div className="about-editorial">
          <div className="about-editorial-lead">
            <p className="section-label">{copy.label}</p>
            <h2 id="about-evidence-title">{copy.title}</h2>
          </div>
          <div className="about-editorial-body">
            <p className="about-lead-text">{copy.lead}</p>
            <p>{copy.intro}</p>
          </div>
        </div>

        <dl className="about-concepts">
          {aboutEvidenceConceptCodes.map((code) => (
            <div className="about-concept" key={code}>
              <dt>{t(`evidence.${code}`)}</dt>
              <dd>{copy.concepts[code]}</dd>
            </div>
          ))}
        </dl>

        <p className="about-note">{copy.note}</p>
      </div>
    </SectionReveal>
  )
}

function AboutSources() {
  const { t, localeSection } = useLocale()
  const copy = t('about.sources')
  const supporting = localeSection('supporting')
  const narrativeSource = findSource(aboutNarrativeSourceId)
  const exampleSources = aboutExampleSourceIds
    .map((id) => findSource(id))
    .filter(Boolean)
    .map((record) => getLocalizedSource(record, supporting))

  return (
    <SectionReveal className="about-section about-sources" aria-labelledby="about-sources-title">
      <div className="section-inner">
        <div className="about-section-head">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-sources-title">{copy.title}</h2>
          <p className="about-lead-text">{copy.lead}</p>
        </div>

        <ul className="about-source-kinds">
          {aboutSourceKindKeys.map((key) => (
            <li key={key}>
              <h3>{copy.kinds[key].title}</h3>
              <p>{copy.kinds[key].text}</p>
            </li>
          ))}
        </ul>

        {narrativeSource ? (
          <aside className="about-source-spotlight">
            <p className="section-label">{copy.narrativeLabel}</p>
            <h3 lang="en">{narrativeSource.title}</h3>
            <p>{copy.narrativeText}</p>
            <p className="about-citation" lang="en">{narrativeSource.citation}</p>
          </aside>
        ) : null}

        {exampleSources.length ? (
          <div className="about-source-records">
            <p className="section-label">{copy.recordsLabel}</p>
            <ul>
              {exampleSources.map((record) => (
                <li key={record.id}>
                  <h4 lang="en">{record.title}</h4>
                  {record.perspective ? <p className="about-source-perspective">{record.perspective}</p> : null}
                  <p className="about-citation" lang="en">{record.citation}</p>
                  {record.url ? (
                    <a href={record.url} target="_blank" rel="noopener noreferrer">{copy.viewSource}</a>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="about-note">{copy.recordsNote}</p>
          </div>
        ) : null}
      </div>
    </SectionReveal>
  )
}

function ComparisonPanel({ variant, visual, title, text, caption }) {
  const { t } = useLocale()
  const evidenceLabel = visual?.evidenceLabel
    ? t(`evidence.${toEvidenceCode(visual.evidenceLabel)}`) || visual.evidenceLabel
    : null

  return (
    <article className={`about-comparison-panel is-${variant}`}>
      <CinematicStill
        visual={visual}
        className="about-comparison-visual"
        sizes="(max-width: 900px) 92vw, 46vw"
      />
      <div className="about-comparison-body">
        {evidenceLabel ? <p className="section-label">{evidenceLabel}</p> : null}
        <h3>{title}</h3>
        <p>{text}</p>
        {caption ? <p className="about-comparison-caption">{caption}</p> : null}
      </div>
    </article>
  )
}

function AboutReconstruction() {
  const { t, localeSection } = useLocale()
  const copy = t('about.reconstruction')
  const survivingVisual = resolveHomeVisual(aboutVisualRoles.survivingEvidence)
  const reconstructedVisual = resolveHomeVisual(aboutVisualRoles.reconstructed)
  const survivingRecord = getLocalizedMedia(
    getMediaById(survivingVisual?.mediaId),
    localeSection('media'),
  )
  const reconstructedRecord = reconstructedVisual?.reconstruction
    ? getLocalizedReconstruction(reconstructedVisual.reconstruction, localeSection('reconstructions'))
    : null

  return (
    <SectionReveal className="about-section about-reconstruction" aria-labelledby="about-reconstruction-title">
      <div className="section-inner">
        <div className="about-section-head">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-reconstruction-title">{copy.title}</h2>
          <p className="about-lead-text">{copy.lead}</p>
        </div>

        <div className="about-comparison">
          <ComparisonPanel
            variant="evidence"
            visual={survivingVisual}
            title={copy.surviving.title}
            text={copy.surviving.text}
            caption={survivingRecord?.caption ?? null}
          />
          <div className="about-comparison-divider" aria-hidden="true" />
          <ComparisonPanel
            variant="reconstruction"
            visual={reconstructedVisual}
            title={copy.reconstructed.title}
            text={copy.reconstructed.text}
            caption={reconstructedRecord?.summary ?? null}
          />
        </div>

        <div className="about-rules">
          <p className="section-label">{copy.rulesLabel}</p>
          <ol>
            {copy.rules.map((rule) => <li key={rule}>{rule}</li>)}
          </ol>
        </div>
      </div>
    </SectionReveal>
  )
}

function AboutPortraits() {
  const { t } = useLocale()
  const copy = t('about.portraits')

  return (
    <SectionReveal className="about-section about-portraits" aria-labelledby="about-portraits-title">
      <div className="section-inner about-editorial">
        <div className="about-editorial-lead">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-portraits-title">{copy.title}</h2>
          <div className="about-empty-frame" aria-hidden="true">
            <span>{t('evidence.NO_RELIABLE_PORTRAIT')}</span>
          </div>
        </div>
        <div className="about-editorial-body">
          <p className="about-lead-text">{copy.lead}</p>
          <p>{copy.intro}</p>
          <dl className="about-concepts is-compact">
            {aboutPortraitStateCodes.map((code) => (
              <div className="about-concept" key={code}>
                <dt>{t(`evidence.${code}`)}</dt>
                <dd>{copy.states[code]}</dd>
              </div>
            ))}
          </dl>
          <p className="about-pull-quote">{copy.closing}</p>
          <a className="btn-secondary" href={aboutRoutes.people}>{copy.action}</a>
        </div>
      </div>
    </SectionReveal>
  )
}

function AboutGenealogy() {
  const { t } = useLocale()
  const copy = t('about.genealogy')

  return (
    <SectionReveal className="about-section about-genealogy" aria-labelledby="about-genealogy-title">
      <div className="section-inner">
        <div className="about-section-head">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-genealogy-title">{copy.title}</h2>
          <p className="about-lead-text">{copy.lead}</p>
          <p>{copy.intro}</p>
        </div>

        <ul className="about-genealogy-rules">
          {copy.rules.map((rule) => (
            <li key={rule.title}>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </li>
          ))}
        </ul>

        <a className="btn-primary" href={aboutRoutes.familyTree}>{copy.action}</a>
      </div>
    </SectionReveal>
  )
}

function AboutProject() {
  const { t } = useLocale()
  const copy = t('about.project')

  return (
    <SectionReveal className="about-section about-project" aria-labelledby="about-project-title">
      <div className="section-inner about-editorial">
        <div className="about-editorial-lead">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-project-title">{copy.title}</h2>
        </div>
        <div className="about-editorial-body">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-disclaimer">
            <p className="section-label">{copy.disclaimerLabel}</p>
            <p>{copy.disclaimer}</p>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

function AboutFuture() {
  const { t } = useLocale()
  const copy = t('about.future')

  return (
    <SectionReveal className="about-section about-future" aria-labelledby="about-future-title">
      <div className="section-inner">
        <div className="about-section-head">
          <p className="section-label">{copy.label}</p>
          <h2 id="about-future-title">{copy.title}</h2>
          <p className="about-lead-text">{copy.lead}</p>
        </div>

        <ol className="about-roadmap">
          {aboutFutureKeys.map((key, index) => (
            <li key={key}>
              <span className="about-roadmap-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{copy.items[key].title}</h3>
              <p>{copy.items[key].text}</p>
            </li>
          ))}
        </ol>

        <p className="about-note">{copy.note}</p>
      </div>
    </SectionReveal>
  )
}

function AboutClosing() {
  const { t } = useLocale()
  const copy = t('about.closing')

  return (
    <SectionReveal className="about-section about-closing" aria-labelledby="about-closing-title">
      <div className="section-inner about-closing-inner">
        <p className="section-label">{copy.label}</p>
        <MeanderLine className="about-closing-meander" />
        <h2 id="about-closing-title">{copy.title}</h2>
        <p>{copy.text}</p>
        <div className="about-closing-actions">
          <a className="btn-primary" href={aboutRoutes.eras}>{copy.eras}</a>
          <a className="btn-secondary" href={aboutRoutes.timeline}>{copy.timeline}</a>
        </div>
      </div>
    </SectionReveal>
  )
}

function AboutPage() {
  return (
    <article className="about-page">
      <AboutHero />
      <AboutMission />
      <AboutContinuity />
      <AboutPathways />
      <AboutEvidence />
      <AboutSources />
      <AboutReconstruction />
      <AboutPortraits />
      <AboutGenealogy />
      <AboutProject />
      <AboutFuture />
      <AboutClosing />
    </article>
  )
}

export default AboutPage
