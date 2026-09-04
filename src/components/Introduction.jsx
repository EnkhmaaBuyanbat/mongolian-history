import { MeanderLine } from './Ornament'

function Introduction() {
  return (
    <section className="introduction" id="introduction">
      <div className="section-inner introduction-layout">
        <p className="section-label">The platform</p>
        <div className="introduction-copy">
          <h2>More Than an Empire</h2>
          <MeanderLine />
          <p>
            Mongolian history did not begin with Chinggis Khan, and it did not
            end with the Mongol Empire.
          </p>
          <p>
            This project will follow the Mongolian steppe from ancient societies
            and early steppe powers, through the rise of the Mongols and the
            Mongol world, into later Mongol states, Qing rule, independence,
            socialism, democratic transition, and modern Mongolia.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduction
