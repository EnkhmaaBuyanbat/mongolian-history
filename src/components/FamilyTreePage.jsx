import FamilyTree from './FamilyTree'
import { MeanderLine } from './Ornament'

function FamilyTreePage() {
  return (
    <article className="family-tree-page">
      <header className="family-tree-header">
        <div className="section-inner">
          <p className="section-label">Era III · Family &amp; Dynasty</p>
          <h1>Chinggisid Family Tree</h1>
          <p>Explore the first generations of the imperial family, their dynastic branches and their roles in a changing political order.</p>
          <MeanderLine className="entity-meander" />
        </div>
      </header>
      <section className="family-tree-section">
        <div className="section-inner family-tree-section-inner">
          <div className="family-tree-intro"><div><p className="section-label">Interactive Exhibit</p><h2>Family, household and political power</h2></div><p>Select a person to trace immediate family connections and open a source-aware short history. This is a focused educational tree, not a complete genealogy.</p></div>
          <div className="family-tree-legend" aria-label="Dynastic branch legend"><span className="jochid">Jochid</span><span className="chagataid">Chagataid</span><span className="ogedeid">Ögedeid</span><span className="toluid">Toluid</span><i>Marriage</i><b>Parent and child</b></div>
          <FamilyTree />
        </div>
      </section>
    </article>
  )
}

export default FamilyTreePage
