function CinematicPageHeader({
  variant,
  className = '',
  innerClassName = '',
  visual,
  context,
  label,
  title,
  progress,
  subtitle,
  period,
  summary,
  status,
  portraitStatus,
  actions = [],
  children,
  dataAttributes = {},
}) {
  const assetPath = visual?.asset?.mediumPath ?? visual?.asset?.largePath ?? visual?.asset?.mobilePath

  return (
    <header
      className={`cinematic-page-header cinematic-page-header-${variant} ${visual ? 'has-visual' : 'is-fallback'} ${className}`.trim()}
      {...dataAttributes}
    >
      {assetPath ? <img className="cinematic-page-header-image" src={assetPath} alt="" aria-hidden="true" loading="eager" /> : null}
      <div className="cinematic-page-header-atmosphere" aria-hidden="true" />
      <div className="cinematic-page-header-frame" aria-hidden="true" />
      <div className={`section-inner cinematic-page-header-inner ${innerClassName}`.trim()}>
        {context ? <div className="cinematic-page-header-context">{context}</div> : null}
        <div className="cinematic-page-header-copy">
          {label ? <p className="section-label">{label}</p> : null}
          {progress ? <p className="chapter-progress">{progress}</p> : null}
          <h1>{title}</h1>
          {subtitle ? <p className="cinematic-page-header-subtitle">{subtitle}</p> : null}
          {period ? <p className="cinematic-page-header-period">{period}</p> : null}
          {summary ? <p className="cinematic-page-header-summary">{summary}</p> : null}
          {(status || portraitStatus) ? <div className="cinematic-page-header-status">{status ? <span>{status}</span> : null}{portraitStatus ? <span>{portraitStatus}</span> : null}</div> : null}
          {children}
          {actions.length ? <div className="cinematic-page-header-actions">{actions.map((action) => <a key={action.href} href={action.href}>{action.label}</a>)}</div> : null}
        </div>
      </div>
      {visual ? (
        <div className="cinematic-page-header-visual-record">
          <span>{visual.label}</span>
          <small>{visual.caption}</small>
          {visual.sourceUrl ? <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer">{visual.attribution}</a> : null}
        </div>
      ) : null}
    </header>
  )
}

export default CinematicPageHeader
