import { toEvidenceCode } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'
import { getLocalizedReconstruction } from '../data/visualLocalization'

function ReconstructionInfo({ reconstruction, presentation, compact = false }) {
  const { t, localeSection } = useLocale()
  const labels = t('common.sourceInterface')
  if (!reconstruction) return null
  const display = getLocalizedReconstruction(reconstruction, localeSection('reconstructions'), presentation)

  return (
    <aside className={`reconstruction-info${compact ? ' is-compact' : ''}`}>
      <p className="section-label">{t(`evidence.${toEvidenceCode(reconstruction.evidenceLabel ?? 'Historical Reconstruction')}`) || display.evidenceLabel}</p>
      <h2>{display.title}</h2>
      <p>{display.period}</p>
      <p>{display.summary}</p>
      {!compact ? (
        <>
          <div><strong>{labels.historicalBasis}</strong><p>{display.historicalBasis}</p></div>
          {display.knownEvidence?.length ? <div><strong>{labels.knownEvidence}</strong><ul>{display.knownEvidence.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          {display.uncertainElements?.length ? <div><strong>{labels.uncertainElements}</strong><ul>{display.uncertainElements.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          <div><strong>{labels.caution}</strong><p>{display.historicalCaution}</p></div>
          {reconstruction.sourceRefs?.length ? <small>{labels.sourceRecords}: {reconstruction.sourceRefs.join(', ')}</small> : null}
        </>
      ) : null}
    </aside>
  )
}

export default ReconstructionInfo
