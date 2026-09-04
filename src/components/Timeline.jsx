import { useEffect, useRef, useState } from 'react'
import { timelineEntries } from '../data/timeline'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { MeanderLine } from './Ornament'

function Timeline() {
  const reduced = usePrefersReducedMotion()
  const [visibleItems, setVisibleItems] = useState({})
  const itemRefs = useRef([])

  useEffect(() => {
    if (reduced) {
      setVisibleItems(
        Object.fromEntries(timelineEntries.map((entry) => [entry.id, true])),
      )
      return undefined
    }

    const nodes = itemRefs.current.filter(Boolean)
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.timelineId
            setVisibleItems((current) => ({ ...current, [id]: true }))
          }
        })
      },
      { threshold: 0.18 },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [reduced])

  return (
    <section className="timeline" id="timeline" aria-labelledby="timeline-title">
      <div className="section-inner timeline-inner">
        <header className="timeline-header">
          <p className="section-label">Timeline</p>
          <h2 id="timeline-title">A provisional view of the long arc</h2>
          <MeanderLine />
          <p className="timeline-intro">
            Eight provisional chapters for navigation, designed as a flexible
            framework rather than a final historical claim.
          </p>
        </header>

        <div className="timeline-rail" aria-hidden="true" />

        <ol className="timeline-list">
          {timelineEntries.map((entry, index) => {
            const isVisible = visibleItems[entry.id] || reduced

            return (
              <li
                key={entry.id}
                className={`timeline-item${isVisible ? ' is-visible' : ''}`}
                data-timeline-id={entry.id}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
              >
                <article className="timeline-card" tabIndex={0}>
                  <div className="timeline-marker" aria-hidden="true">
                    <span>{entry.number}</span>
                  </div>

                  <div className="timeline-content">
                    <p className="timeline-period">{entry.period}</p>
                    <h3>
                      <a className="timeline-era-title" href={`/eras/${entry.id}`}>
                        {entry.title}
                      </a>
                    </h3>
                    <p>{entry.description}</p>
                    <a
                      className="timeline-action"
                      href={`/eras/${entry.id}`}
                      aria-label={`Explore ${entry.title}`}
                    >
                      Explore Era
                    </a>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Timeline
