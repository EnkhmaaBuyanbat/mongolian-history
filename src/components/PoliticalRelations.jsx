import { useLocale } from '../i18n/useLocale'

function PoliticalRelations({ center, nodes, note }) {
  const { localeSection } = useLocale()
  const ui = localeSection('chapters').ui
  return (
    <figure className="political-relations" aria-label={ui.politicalRelationships}>
      <figcaption>{ui.politicalRelationships}</figcaption>
      <div className="political-relations-grid">
        <div className="political-relations-center">{center}</div>
        {nodes.map((node) => (
          <div key={node.title} className="political-relations-node">
            <strong>{node.title}</strong>
            <span>{node.label}</span>
          </div>
        ))}
      </div>
      <p className="political-relations-note">{note}</p>
      <p className="political-relations-caution">{ui.politicalRelationshipsCaution}</p>
    </figure>
  )
}

export default PoliticalRelations
