import { events } from '../data/events'
import { people } from '../data/people'
import { chapters } from '../data/chapters'
import { getChapterHref, getEventHref, getPersonHref } from '../data/entityRoutes'
import { getLocalizedPerson } from '../data/personLocalization'
import { useLocale } from '../i18n/useLocale'

const KIND_LEGEND = {
  great_khan: 'greatKhan',
  regent: 'regent',
  succession_period: 'successionPeriod',
  disputed_succession: 'disputed',
}

function resolvePerson(personId) {
  return people.find((person) => person.id === personId) ?? null
}

function SuccessionSegment({ segment, copy, nextSegment, nextCopy }) {
  const { localeSection } = useLocale()
  const ui = localeSection('succession').ui
  const peopleLocale = localeSection('people')
  const persons = segment.personIds.map(resolvePerson).filter(Boolean)
  const chapter = chapters.find((item) => item.id === segment.chapterIds?.[0])
  const event = events.find((item) => item.id === segment.eventIds?.[0])
  const nextName = nextCopy?.cardName
    ?? (nextSegment ? getLocalizedPerson(resolvePerson(nextSegment.personIds[0]) ?? { id: '', title: '' }, peopleLocale).displayName : '')

  return (
    <article className={`succession-segment succession-segment--${segment.kind}`}>
      <p className="succession-years">
        <time dateTime={`${segment.startYear}`}>{segment.startYear}</time>
        <span aria-hidden="true">–</span>
        <time dateTime={`${segment.endYear}`}>{segment.endYear}</time>
      </p>
      <p className="succession-status">{copy.role}</p>
      {segment.kind === 'disputed_succession' ? (
        <h3 className="succession-names">
          {persons.map((person, index) => {
            const localized = getLocalizedPerson(person, peopleLocale)
            return (
              <span key={person.id}>
                {index ? <span className="succession-and">{ui.and}</span> : null}
                <a href={getPersonHref(person)}>{localized.displayName}</a>
              </span>
            )
          })}
        </h3>
      ) : (
        <h3 className="succession-name">
          {persons[0] ? <a href={getPersonHref(persons[0])}>{copy.cardName}</a> : copy.cardName}
        </h3>
      )}
      {copy.relation ? <p className="succession-relation">{copy.relation}</p> : null}
      <p className="succession-why">
        <span>{ui.whyThisMatters}</span>
        {copy.whyMatters}
      </p>
      {copy.yearCaution ? <p className="succession-caution">{copy.yearCaution}</p> : null}
      <div className="succession-links">
        {persons.map((person) => {
          const localized = getLocalizedPerson(person, peopleLocale)
          return (
            <a key={person.id} href={getPersonHref(person)}>
              {persons.length > 1 ? localized.displayName : ui.viewBiography}
            </a>
          )
        })}
        {chapter ? <a href={getChapterHref(chapter)}>{ui.viewChapter}</a> : null}
        {event ? <a href={getEventHref(event)}>{ui.viewRecord}</a> : null}
      </div>
      {nextName ? (
        <p className="succession-next">
          <span>{ui.next}</span> {nextName}
        </p>
      ) : null}
    </article>
  )
}

export default SuccessionSegment
export { KIND_LEGEND }
