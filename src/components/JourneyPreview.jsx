import { journeyPaths } from '../data/journey'
import { MeanderLine } from './Ornament'

function JourneyPreview() {
  return (
    <section className="journey" id="journey">
      <div className="section-inner">
        <div className="journey-heading">
          <p className="section-label">The model</p>
          <h2>How you will travel</h2>
          <MeanderLine />
        </div>

        <ul className="journey-grid">
          {journeyPaths.map((path) => (
            <li key={path.id} className="journey-panel">
              <h3>{path.title}</h3>
              <p>{path.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default JourneyPreview
