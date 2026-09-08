function formatLabel(value) {
  return value?.replaceAll('_', ' ')
}

function HistoricalMedia({ media, status, note, heading = 'Visual Evidence', lazy = true, decorative = false }) {
  const assetPath = media?.asset?.largePath ?? media?.asset?.mediumPath ?? media?.asset?.originalPath
  const evidenceLabel = media?.evidenceType ?? status
  const noReliablePortrait = status === 'NO_RELIABLE_PORTRAIT'

  if (!media && !evidenceLabel) return null

  return (
    <figure className={`historical-media${assetPath ? '' : ' historical-media-empty'}`}>
      <div className="historical-media-heading">
        <span>{heading}</span>
        {evidenceLabel ? <strong>{formatLabel(evidenceLabel)}</strong> : null}
      </div>

      {assetPath ? (
        <img
          src={assetPath}
          alt={decorative ? '' : media.alt ?? ''}
          aria-hidden={decorative || undefined}
          width={media.asset.width ?? undefined}
          height={media.asset.height ?? undefined}
          loading={lazy ? 'lazy' : 'eager'}
        />
      ) : (
        <div className="historical-media-no-asset" aria-label={noReliablePortrait ? 'No reliable portrait available' : undefined}>
          <span aria-hidden="true">◇</span>
          <strong>{noReliablePortrait ? 'No reliable portrait' : 'Visual record awaiting approval'}</strong>
        </div>
      )}

      <figcaption>
        {media?.caption ? <p>{media.caption}</p> : null}
        {note ? <p>{note}</p> : null}
        {media?.objectDate || media?.imageDate || media?.subjectDate ? (
          <dl className="historical-media-metadata">
            {media.objectDate ? <><dt>Object date</dt><dd>{media.objectDate}</dd></> : null}
            {media.imageDate ? <><dt>Image date</dt><dd>{media.imageDate}</dd></> : null}
            {media.subjectDate ? <><dt>Subject date</dt><dd>{media.subjectDate}</dd></> : null}
          </dl>
        ) : null}
        {media?.historicalContext ? <div className="historical-media-context"><strong>Why this matters</strong><p>{media.historicalContext}</p></div> : null}
        {media?.evidenceCaution ? <p className="historical-media-caution">{media.evidenceCaution}</p> : null}
        {media?.institution || media?.collection ? <small>{[media.institution, media.collection].filter(Boolean).join(' · ')}</small> : null}
        {media?.attribution ? <small>Credit: {media.attribution}</small> : null}
        {media?.license || media?.reuseRestrictions ? <small>Rights: {media.license ?? media.reuseRestrictions}</small> : null}
        {media?.sourceUrl ? <a href={media.sourceUrl} target="_blank" rel="noopener noreferrer">View source record</a> : null}
      </figcaption>
    </figure>
  )
}

export default HistoricalMedia
