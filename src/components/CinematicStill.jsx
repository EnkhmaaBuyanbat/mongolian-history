function CinematicStill({ visual, className = '', sizes = '100vw', eager = false }) {
  const asset = visual?.asset
  if (!asset) {
    return <div className={`${className} cinematic-fallback`} aria-hidden="true" />
  }

  const srcSet = [
    asset.mobilePath ? `${asset.mobilePath} 800w` : null,
    asset.mediumPath ? `${asset.mediumPath} 1200w` : null,
    asset.largePath ? `${asset.largePath} 1920w` : null,
  ].filter(Boolean).join(', ')

  return (
    <div className={`${className} cinematic-media`} aria-hidden="true">
      <img
        src={asset.largePath ?? asset.mediumPath ?? asset.mobilePath ?? asset.originalPath}
        srcSet={srcSet || undefined}
        sizes={srcSet ? sizes : undefined}
        width={asset.width}
        height={asset.height}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        style={visual.crop ? { objectPosition: visual.crop } : undefined}
      />
    </div>
  )
}

export default CinematicStill
