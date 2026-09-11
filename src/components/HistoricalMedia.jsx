import { useLocale } from '../i18n/useLocale'
import { toEvidenceCode } from '../i18n/locale'
import { getLocalizedMedia } from '../data/mediaLocalization'

function formatLabel(value) {
  return value?.replaceAll('_', ' ')
}

function HistoricalMedia({ media, status, note, heading, lazy = true, decorative = false }) {
  const { t, localeSection } = useLocale()
  const labels = t('common.sourceInterface')
  const displayMedia = getLocalizedMedia(media, localeSection('media'))
  const assetPath = media?.asset?.largePath ?? media?.asset?.mediumPath ?? media?.asset?.originalPath
  const mediumWidth = Math.min(media?.asset?.width ?? 900, 900)
  const largeWidth = Math.min(media?.asset?.width ?? 1600, 1600)
  const srcSet = [
    media?.asset?.mediumPath ? `${media.asset.mediumPath} ${mediumWidth}w` : null,
    media?.asset?.largePath && largeWidth !== mediumWidth ? `${media.asset.largePath} ${largeWidth}w` : null,
  ].filter(Boolean).join(', ')
  const resolvedHeading = heading ?? labels.visualEvidence
  const evidenceCode = media?.evidenceType ?? status
  const evidenceLabel = t(`evidence.${toEvidenceCode(evidenceCode)}`) || evidenceCode
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
          alt={decorative ? '' : displayMedia.alt ?? ''}
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
        {displayMedia?.caption ? <p>{displayMedia.caption}</p> : null}
        {note ? <p>{note}</p> : null}
        {media?.objectDate || media?.imageDate || media?.subjectDate ? (
          <dl className="historical-media-metadata">
            {displayMedia.objectDate ? <><dt>{labels.objectDate}</dt><dd>{displayMedia.objectDate}</dd></> : null}
            {displayMedia.imageDate ? <><dt>{labels.imageDate}</dt><dd>{displayMedia.imageDate}</dd></> : null}
            {displayMedia.subjectDate ? <><dt>{labels.subjectDate}</dt><dd>{displayMedia.subjectDate}</dd></> : null}
          </dl>
        ) : null}
        {displayMedia?.historicalContext ? <div className="historical-media-context"><strong>{labels.whyMatters}</strong><p>{displayMedia.historicalContext}</p></div> : null}
        {displayMedia?.evidenceCaution ? <p className="historical-media-caution">{displayMedia.evidenceCaution}</p> : null}
        {media?.institution || media?.collection ? <small>{labels.collection}: {[media.institution, media.collection].filter(Boolean).join(' · ')}</small> : null}
        {media?.attribution ? <small>{labels.attribution}: {media.attribution}</small> : null}
        {media?.license || media?.reuseRestrictions ? <small>{labels.license}: {media.license ?? media.reuseRestrictions}</small> : null}
        {media?.sourceUrl ? <a href={media.sourceUrl} target="_blank" rel="noopener noreferrer">{labels.viewCollection}</a> : null}
      </figcaption>
    </figure>
  )
}

export default HistoricalMedia
