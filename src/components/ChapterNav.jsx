import { useLocale } from '../i18n/useLocale'

function ChapterNav({ sections }) {
  const { localeSection } = useLocale()
  const { ui } = localeSection('chapters')
  return (
    <nav className="chapter-nav" aria-label={ui.onThisPage}>
      <p className="section-label">{ui.onThisPage}</p>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              <span>{section.number}</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default ChapterNav
