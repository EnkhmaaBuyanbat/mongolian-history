function ChapterNav({ sections }) {
  return (
    <nav className="chapter-nav" aria-label="On this page">
      <p className="section-label">On This Page</p>
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
