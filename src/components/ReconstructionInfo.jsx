import { toEvidenceCode } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'

function ReconstructionInfo({ reconstruction, compact = false }) {
  const { t } = useLocale()
  const labels = t('common.sourceInterface')
  if (!reconstruction) return null

  return (
    <aside className={`reconstruction-info${compact ? ' is-compact' : ''}`}>
      <p className="section-label">{t(`evidence.${toEvidenceCode(reconstruction.evidenceLabel ?? 'Historical Reconstruction')}`) || reconstruction.evidenceLabel}</p>
      <h2>{reconstruction.title}</h2>
      <p>{reconstruction.period}</p>
      <p>{reconstruction.summary}</p>
      {!compact ? (
        <>
          <div><strong>{labels.historicalBasis}</strong><p>{reconstruction.historicalBasis}</p></div>
          {reconstruction.knownEvidence?.length ? <div><strong>{labels.knownEvidence}</strong><ul>{reconstruction.knownEvidence.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          {reconstruction.uncertainElements?.length ? <div><strong>{labels.uncertainElements}</strong><ul>{reconstruction.uncertainElements.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          <div><strong>{labels.caution}</strong><p>{reconstruction.historicalCaution}</p></div>
          {reconstruction.sourceRefs?.length ? <small>{labels.sourceRecords}: {reconstruction.sourceRefs.join(', ')}</small> : null}
        </>
      ) : null}
    </aside>
  )
}

export default ReconstructionInfo
