import FamilyTree from './FamilyTree'
import { MeanderLine } from './Ornament'
import { useLocale } from '../i18n/useLocale'

function FamilyTreePage() {
  const { localeSection } = useLocale()
  const copy = localeSection('familyTree')
  const ui = copy.ui
  const branches = localeSection('people').branches
  return (
    <article className="family-tree-page">
      <header className="family-tree-header">
        <div className="section-inner">
          <p className="section-label">{ui.eyebrow}</p>
          <h1>{ui.title}</h1>
          <p>{ui.intro}</p>
          <MeanderLine className="entity-meander" />
        </div>
      </header>
      <section className="family-tree-section">
        <div className="section-inner family-tree-section-inner">
          <div className="family-tree-intro"><div><p className="section-label">{ui.exhibit}</p><h2>{ui.exhibitTitle}</h2></div><p>{ui.exhibitIntro}</p></div>
          <div className="family-tree-legend" aria-label={ui.legend}><span className="jochid">{branches.JOCHID}</span><span className="chagataid">{branches.CHAGATAID}</span><span className="ogedeid">{branches.OGEDEID}</span><span className="toluid">{branches.TOLUID}</span><i>{ui.marriage}</i><b>{ui.parentChild}</b></div>
          <FamilyTree />
        </div>
      </section>
    </article>
  )
}

export default FamilyTreePage
