import { people } from '../data/people'
import { polities } from '../data/polities'
import { getPersonHref } from '../data/entityRoutes'

function PeopleIndexPage() {
  const visiblePeople = people.filter(
    (person) => person.status === 'researched' || person.status === 'verified',
  )

  return (
    <article className="people-index-page">
      <header className="people-index-header">
        <div className="section-inner">
          <p className="section-label">People</p>
          <h1>Historical Figures</h1>
          <p>People whose lives and historical contexts are being developed from the research record.</p>
        </div>
      </header>
      <section className="people-index-list">
        <div className="section-inner">
          <div className="people-index-grid">
            {visiblePeople.map((person) => {
              const polity = polities.find((item) => person.polityIds?.includes(item.id) || person.relatedEntityIds?.includes(item.id))
              const href = getPersonHref(person)
              return (
                <a key={person.id} href={href} className="people-index-card">
                  <strong>{person.title}</strong>
                  <span>{polity?.title ?? 'Historical figure'}</span>
                  {person.periodDisplay || person.period ? <small>{person.periodDisplay ?? person.period}</small> : null}
                  <em>{person.storyId || person.profileType === 'story' ? 'View Story' : person.profileType === 'biography' ? 'View Biography' : 'View Profile'}</em>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </article>
  )
}

export default PeopleIndexPage
