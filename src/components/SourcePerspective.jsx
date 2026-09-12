import { getLocalizedSource } from '../data/supportingLocalization'
import { useLocale } from '../i18n/useLocale'

function SourcePerspective({ source, role, note }) {
  const { localeSection } = useLocale()
  const ui = localeSection('entities').ui
  const displaySource = getLocalizedSource(source, localeSection('supporting'))
  if (!displaySource) return null

  return (
    <article className="chapter-record-card source-perspective-card">
      <small>{displaySource.category ?? ui.historicalSource}</small>
      <strong>{displaySource.title}</strong>
      {displaySource.perspective ? <p><b>{ui.perspectiveContext}</b> {displaySource.perspective}</p> : null}
      {displaySource.temporalRelationship ? <p><b>{ui.temporalRelationship}</b> {displaySource.temporalRelationship}</p> : null}
      {role ? <p><b>{ui.roleInThisClaim}</b> {role}</p> : null}
      {note ? <p>{note}</p> : null}
    </article>
  )
}

export default SourcePerspective
