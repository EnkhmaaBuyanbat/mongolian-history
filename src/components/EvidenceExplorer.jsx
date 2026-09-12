import { useMemo, useState } from 'react'
import { objects } from '../data/objects'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import { getLocalizedEntity } from '../data/entityLocalization'
import { formatTemplate } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'
import ConfidenceBadge from './ConfidenceBadge'

function EvidenceExplorer({ cases, selectedSiteId, onSiteSelect }) {
  const { localeSection } = useLocale()
  const ui = localeSection('chapters').ui
  const entityLocale = localeSection('entities')
  const [internalCaseId, setInternalCaseId] = useState(cases[0]?.id)
  const selectedCase = cases.find((item) => item.siteId === selectedSiteId)
  const activeCaseId = selectedCase?.id ?? (cases.some((item) => item.id === internalCaseId)
    ? internalCaseId
    : cases[0]?.id)
  const activeCase = cases.find((item) => item.id === activeCaseId) ?? cases[0]
  const site = sites.find((item) => item.id === activeCase?.siteId)
  const displaySite = site ? getLocalizedEntity(site, entityLocale) : null
  const object = objects.find((item) => item.id === activeCase?.evidenceObjectId)
  const displayObject = object ? getLocalizedEntity(object, entityLocale) : null
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
        <p className="section-label">{ui.readingTheEvidence}</p>
        <h3>{ui.evidenceExplorerTitle}</h3>
        <p>{ui.evidenceExplorerIntro}</p>
      </header>

      <div className="evidence-explorer-layout">
        <div className="evidence-selector" role="tablist" aria-label={ui.evidenceCasesAria}>
          {cases.map((evidenceCase) => {
            const caseSite = sites.find((item) => item.id === evidenceCase.siteId)
            const localizedSite = caseSite ? getLocalizedEntity(caseSite, entityLocale) : null
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
                <span>{(localizedSite?.title ?? caseSite?.title ?? '').replace(' / Noin-Ula', '')}</span>
                <strong>{evidenceCase.evidenceTitle}</strong>
              </button>
            )
          })}
        </div>

        <article className="evidence-case" role="tabpanel">
          <div className="evidence-case-object">
            <span className="evidence-case-number">{formatTemplate(ui.objectNumber, { n: String(cases.indexOf(activeCase) + 1).padStart(2, '0') })}</span>
            <strong>{activeCase.evidenceTitle}</strong>
            <span>{(displaySite.title ?? site.title).replace(' / Noin-Ula', '')}</span>
            <small>{ui.archaeologicalObjectPending}</small>
          </div>

          <div className="evidence-case-flow">
            <section className="evidence-stage">
              <p className="evidence-stage-label">{ui.site}</p>
              <h4>{displaySite.title}</h4>
              <p>{activeCase.evidenceSummary}</p>
            </section>
            <section className="evidence-stage">
              <p className="evidence-stage-label">{ui.evidence}</p>
              <h4>{displayObject?.title ?? activeCase.evidenceTitle}</h4>
              <p>{activeCase.evidenceSummary}</p>
            </section>
            <section className="evidence-stage evidence-stage-interpretation">
              <p className="evidence-stage-label">{ui.whatItTellsUs}</p>
              <p>{activeCase.interpretation || activeCase.evidenceSummary}</p>
            </section>
            <section className="evidence-stage evidence-stage-caution">
              <p className="evidence-stage-label">{ui.whatItDoesNotProve}</p>
              <p>{activeCase.caution}</p>
              <ConfidenceBadge label={activeCase.confidence} />
            </section>
          </div>

          {caseSources.length ? (
            <div className="evidence-sources">
              <p className="evidence-stage-label">{ui.sources}</p>
              {caseSources.map((source) => (
                <span key={source.id}>
                  {source.title}
                  {source.url ? <a href={source.url}>{ui.viewSource}</a> : null}
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
