import FamilyTree from './FamilyTree'
import { MeanderLine } from './Ornament'

function FamilyTreePage() {
  return (
    <article className="family-tree-page">
      <header className="family-tree-header">
        <div className="section-inner">
          <p className="section-label">Chinggisid Dynasty · Family &amp; Political Power</p>
          <h1>Chinggisid Family Tree</h1>
          <p>Explore the Chinggisid family across the Mongol Empire, successor realms, Northern Yuan and later Mongol political orders.</p>
          <MeanderLine className="entity-meander" />
        </div>
      </header>
      <section className="family-tree-section">
        <div className="section-inner family-tree-section-inner">
          <div className="family-tree-intro"><div><p className="section-label">Interactive Exhibit</p><h2>Family, household and political power</h2></div><p>Explore the Chinggisid family across generations, dynastic branches, successor realms and later Mongol political orders. This is a focused educational tree, not a complete genealogy.</p></div>
          <div className="family-tree-legend" aria-label="Dynastic branch legend"><span className="jochid">Jochid</span><span className="chagataid">Chagataid</span><span className="ogedeid">Ögedeid</span><span className="toluid">Toluid</span><i>Marriage</i><b>Parent and child</b></div>
          <FamilyTree />
        </div>
      </section>
    </article>
  )
}

export default FamilyTreePage
