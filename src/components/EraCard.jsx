import { CornerFrame } from './Ornament'

function EraCard({ era }) {
  return (
    <article className="era-card">
      <CornerFrame />
      <header className="era-card-head">
        <span className="era-numeral">{era.numeral}</span>
        <span className="era-years">{era.period}</span>
      </header>
      <h3>{era.title}</h3>
      <p>{era.description}</p>
      <a
        href={`/eras/${era.id}`}
        className="era-explore"
        aria-label={`Explore ${era.title}`}
      >
        Explore
      </a>
    </article>
  )
}

export default EraCard
