import { eras } from '../data/eras'
import EraCard from './EraCard'
import { MeanderLine } from './Ornament'

function EraPreview() {
  return (
    <section className="eras" id="eras">
      <div className="section-inner">
        <div className="eras-heading">
          <p className="section-label">Chapters</p>
          <h2>Explore History by Era</h2>
          <MeanderLine />
          <p className="eras-intro">
            Eight provisional chapters for finding your way. They are a
            navigation structure, not a finished academic periodization.
          </p>
        </div>

        <div className="era-grid">
          {eras.map((era) => (
            <EraCard key={era.id} era={era} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EraPreview
