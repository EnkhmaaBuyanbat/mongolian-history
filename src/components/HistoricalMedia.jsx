import { useLocale } from '../i18n/useLocale'

function formatLabel(value) {
  return value?.replaceAll('_', ' ')
}

function HistoricalMedia({ media, status, note, heading, lazy = true, decorative = false }) {
  const { t } = useLocale()
  const labels = t('common.sourceInterface')
  const assetPath = media?.asset?.largePath ?? media?.asset?.mediumPath ?? media?.asset?.originalPath
  const mediumWidth = Math.min(media?.asset?.width ?? 900, 900)
  const largeWidth = Math.min(media?.asset?.width ?? 1600, 1600)
  const srcSet = [
    media?.asset?.mediumPath ? `${media.asset.mediumPath} ${mediumWidth}w` : null,
    media?.asset?.largePath && largeWidth !== mediumWidth ? `${media.asset.largePath} ${largeWidth}w` : null,
  ].filter(Boolean).join(', ')
  const resolvedHeading = heading ?? labels.visualEvidence
  const evidenceCode = media?.evidenceType ?? status
  const evidenceLabel = t(`evidence.${evidenceCode}`) || evidenceCode
  const noReliablePortrait = status === 'NO_RELIABLE_PORTRAIT'

  if (!media && !evidenceLabel) return null

  return (
    <figure className={`historical-media${assetPath ? '' : ' historical-media-empty'}`}>
      <div className="historical-media-heading">
        <span>{resolvedHeading}</span>
        {evidenceLabel ? <strong>{formatLabel(evidenceLabel)}</strong> : null}
      </div>

      {assetPath ? (
        <img
          src={assetPath}
          srcSet={srcSet || undefined}
          sizes={srcSet ? '(max-width: 760px) 100vw, 672px' : undefined}
          alt={decorative ? '' : media.alt ?? ''}
          aria-hidden={decorative || undefined}
          width={media.asset.width ?? undefined}
          height={media.asset.height ?? undefined}
          loading={lazy ? 'lazy' : 'eager'}
        />
      ) : (
        <div className="historical-media-no-asset" aria-label={noReliablePortrait ? labels.noPortraitAvailable : undefined}>
          <span aria-hidden="true">◇</span>
          <strong>{noReliablePortrait ? labels.noPortrait : labels.awaitingApproval}</strong>
        </div>
      )}

      <figcaption>
        {media?.caption ? <p>{media.caption}</p> : null}
        {note ? <p>{note}</p> : null}
        {media?.objectDate || media?.imageDate || media?.subjectDate ? (
          <dl className="historical-media-metadata">
            {media.objectDate ? <><dt>{labels.objectDate}</dt><dd>{media.objectDate}</dd></> : null}
            {media.imageDate ? <><dt>{labels.imageDate}</dt><dd>{media.imageDate}</dd></> : null}
            {media.subjectDate ? <><dt>{labels.subjectDate}</dt><dd>{media.subjectDate}</dd></> : null}
          </dl>
        ) : null}
        {media?.historicalContext ? <div className="historical-media-context"><strong>{labels.whyMatters}</strong><p>{media.historicalContext}</p></div> : null}
        {media?.evidenceCaution ? <p className="historical-media-caution">{media.evidenceCaution}</p> : null}
        {media?.institution || media?.collection ? <small>{[media.institution, media.collection].filter(Boolean).join(' · ')}</small> : null}
        {media?.attribution ? <small>{labels.credit}: {media.attribution}</small> : null}
        {media?.license || media?.reuseRestrictions ? <small>{labels.rights}: {media.license ?? media.reuseRestrictions}</small> : null}
        {media?.sourceUrl ? <a href={media.sourceUrl} target="_blank" rel="noopener noreferrer">{labels.viewCollection}</a> : null}
      </figcaption>
    </figure>
  )
}

export default HistoricalMedia
