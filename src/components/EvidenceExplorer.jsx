import { useMemo, useState } from 'react'
import { objects } from '../data/objects'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import ConfidenceBadge from './ConfidenceBadge'

function EvidenceExplorer({ cases, selectedSiteId, onSiteSelect }) {
  const [internalCaseId, setInternalCaseId] = useState(cases[0]?.id)
  const selectedCase = cases.find((item) => item.siteId === selectedSiteId)
  const activeCaseId = selectedCase?.id ?? (cases.some((item) => item.id === internalCaseId)
    ? internalCaseId
    : cases[0]?.id)
  const activeCase = cases.find((item) => item.id === activeCaseId) ?? cases[0]
  const site = sites.find((item) => item.id === activeCase?.siteId)
  const object = objects.find((item) => item.id === activeCase?.evidenceObjectId)
  const caseSources = useMemo(
    () => sources.filter((source) => activeCase?.sourceIds?.includes(source.id)),
    [activeCase],
  )

  if (!activeCase || !site) {
    return null
  }

  const selectCase = (evidenceCase) => {
    setInternalCaseId(evidenceCase.id)
    onSiteSelect?.(evidenceCase.siteId)
  }

  return (
    <div className="evidence-explorer">
      <header className="evidence-explorer-heading">
        <p className="section-label">Reading the Evidence</p>
        <h3>What can archaeological objects actually tell us?</h3>
        <p>
          Archaeological objects can reveal connections, technologies and social contexts. But an object's presence does not automatically tell us the identity of its owner or the exact route by which it travelled.
        </p>
      </header>

      <div className="evidence-explorer-layout">
        <div className="evidence-selector" role="tablist" aria-label="Evidence cases">
          {cases.map((evidenceCase) => {
            const caseSite = sites.find((item) => item.id === evidenceCase.siteId)
            const isSelected = evidenceCase.id === activeCase.id
            return (
              <button
                key={evidenceCase.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`evidence-selector-item${isSelected ? ' is-selected' : ''}`}
                onClick={() => selectCase(evidenceCase)}
              >
                <span>{caseSite?.title.replace(' / Noin-Ula', '')}</span>
                <strong>{evidenceCase.evidenceTitle}</strong>
              </button>
            )
          })}
        </div>

        <article className="evidence-case" role="tabpanel">
          <div className="evidence-case-object">
            <span className="evidence-case-number">Object {String(cases.indexOf(activeCase) + 1).padStart(2, '0')}</span>
            <strong>{activeCase.evidenceTitle}</strong>
            <span>{site.title.replace(' / Noin-Ula', '')}</span>
            <small>Archaeological object · Image record — to be added</small>
          </div>

          <div className="evidence-case-flow">
            <section className="evidence-stage">
              <p className="evidence-stage-label">Site</p>
              <h4>{site.title}</h4>
              <p>{activeCase.evidenceSummary}</p>
            </section>
            <section className="evidence-stage">
              <p className="evidence-stage-label">Evidence</p>
              <h4>{object?.title ?? activeCase.evidenceTitle}</h4>
              <p>{activeCase.evidenceSummary}</p>
            </section>
            <section className="evidence-stage evidence-stage-interpretation">
              <p className="evidence-stage-label">What It Tells Us</p>
              <p>{activeCase.interpretation || activeCase.evidenceSummary}</p>
            </section>
            <section className="evidence-stage evidence-stage-caution">
              <p className="evidence-stage-label">What It Does Not Prove</p>
              <p>{activeCase.caution}</p>
              <ConfidenceBadge label={activeCase.confidence} />
            </section>
          </div>

          {caseSources.length ? (
            <div className="evidence-sources">
              <p className="evidence-stage-label">Sources</p>
              {caseSources.map((source) => (
                <span key={source.id}>
                  {source.title}
                  {source.url ? <a href={source.url}>View source</a> : null}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      </div>
    </div>
  )
}

export default EvidenceExplorer
