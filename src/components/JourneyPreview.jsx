import { journeyPaths } from '../data/journey'
import { MeanderLine } from './Ornament'

function JourneyPreview() {
  return (
    <section className="journey" id="journey">
      <div className="section-inner">
        <div className="journey-heading">
          <p className="section-label">Explore the Project</p>
          <h2>Choose Your Path</h2>
          <MeanderLine />
        </div>

        <ul className="journey-grid">
          {journeyPaths.map((path) => <li key={path.id}>{path.href ? <a href={path.href} className="journey-panel journey-panel-link"><h3>{path.title}</h3><p>{path.text}</p><span>Open {path.title} →</span></a> : <article className="journey-panel journey-panel-pending"><h3>{path.title}</h3><p>{path.text}</p><span>Coming Soon</span></article>}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default JourneyPreview
