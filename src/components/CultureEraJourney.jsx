import { chapters } from '../data/chapters'
import { eras } from '../data/eras'
import { getChapterHref } from '../data/entityRoutes'

function CultureEraJourney({ topic, copy, labels }) {
  return (
    <div className="culture-era-journey">
      {eras.filter((era) => topic.eraIds.includes(era.id)).map((era) => {
        const related = era.chapterIds.map((id) => chapters.find((chapter) => chapter.id === id)).filter((chapter) => chapter && topic.chapterIds.includes(chapter.id))
        return (
          <article key={era.id} className="culture-era-stop">
            <div><span>{labels.eraLabel} {era.numeral}</span><strong>{era.title}</strong><small>{era.period}</small></div>
            <div>
              <p>{copy.eraText[era.id]}</p>
              {related.length ? <nav aria-label={`${era.title} related chapters`}>{related.map((chapter) => <a key={chapter.id} href={getChapterHref(chapter)}>{chapter.title}</a>)}</nav> : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default CultureEraJourney
