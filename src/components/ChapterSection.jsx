'use client'

import ConfidenceBadge from './ConfidenceBadge'
import ArchaeologyMap from './ArchaeologyMap'
import EvidenceExplorer from './EvidenceExplorer'
import PoliticalRelations from './PoliticalRelations'
import EducationalVisual from './EducationalVisual'
import EvidenceNote from './EvidenceNote'
import { useLocale } from '../i18n/useLocale'

function ChapterSection({ section, selectedSiteId, onSiteSelect }) {
  const { localeSection } = useLocale()
  const { ui } = localeSection('chapters')
  return (
    <section id={section.id} className={`chapter-narrative-section${section.questions?.length ? ' chapter-questions-section' : ''}`}>
      <div className="chapter-readable-column">
        <p className="chapter-section-number">{section.number}</p>
        <h2>{section.title}</h2>
        {section.period ? <p className="chapter-section-period">{section.period}</p> : null}
        {section.lead ? <p className="chapter-section-lead">{section.lead}</p> : null}
        <div className="chapter-section-body">
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.link ? <p><a href={section.link.href}>{section.link.label}</a></p> : null}
        </div>
        {section.questions?.length ? (
          <details className="chapter-check">
            <summary>{ui.takeaway}</summary>
            <div className="chapter-question-list">
              {section.questions.map((item) => (
                <article key={item.question} className="chapter-question-card">
                  <p className="chapter-question">{item.question}</p>
                  <p className="chapter-answer">{item.answer}</p>
                  <ConfidenceBadge label={item.confidence} />
                </article>
              ))}
            </div>
          </details>
        ) : null}
        {section.evidenceComparison?.length ? (
          <div className="chapter-evidence-comparison">
            {section.evidenceComparison.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        ) : null}
        {section.relationsVisual ? <PoliticalRelations {...section.relationsVisual} /> : null}
        {section.educationalVisual ? <EducationalVisual {...section.educationalVisual} /> : null}
        {section.evidenceNote ? <EvidenceNote {...section.evidenceNote} /> : null}
        {section.callouts?.map((callout) => (
          <aside key={callout.label} className="chapter-callout">
            <p className="chapter-callout-label">{callout.label}</p>
            <p className="chapter-callout-text">{callout.text}</p>
            <ConfidenceBadge label={callout.confidence} />
          </aside>
        ))}
        {section.mapSlot?.type === 'archaeology-map' ? (
          <ArchaeologyMap
            siteIds={section.mapSlot.siteIds}
            selectedSiteId={selectedSiteId}
            onSiteSelect={onSiteSelect}
          />
        ) : null}
        {section.evidenceCases?.length ? (
          <EvidenceExplorer
            cases={section.evidenceCases}
            selectedSiteId={selectedSiteId}
            onSiteSelect={onSiteSelect}
          />
        ) : null}
        {section.mediaSlot ? (
          <div className="chapter-media-slot">
            <span className="chapter-media-label">{section.mediaSlot.label}</span>
            <span>{section.mediaSlot.text}</span>
          </div>
        ) : null}
        {section.continuation ? (
          <aside className="chapter-continuation">
            <p className="chapter-callout-label">{section.continuation.title}</p>
            {section.continuation.href ? (
              <a href={section.continuation.href}>
                <strong>{section.continuation.text}</strong>
                <span>{section.continuation.status}</span>
              </a>
            ) : (
              <>
                <strong>{section.continuation.text}</strong>
                <span>{section.continuation.status}</span>
              </>
            )}
          </aside>
        ) : null}
      </div>
    </section>
  )
}

export default ChapterSection
