import { displayAlternateTitle, displayMeta, displaySummary, displayTitle, groupHeading, groupSearchResults } from '../search/searchRecords'

function SearchResultCard({ record, locale, copy, active, id, showType, listbox, onSelect }) {
  const title = displayTitle(record, locale)
  const alternate = displayAlternateTitle(record, locale)
  const summary = displaySummary(record, locale)
  const meta = displayMeta(record, locale, copy.eraLabel)

  return (
    <a
      id={id}
      href={record.route}
      className={active ? 'search-result is-active' : 'search-result'}
      role={listbox ? 'option' : undefined}
      aria-selected={listbox ? active : undefined}
      onClick={onSelect}
    >
      {showType ? <span className="search-result-type">{copy.types[record.type]}</span> : null}
      <span className="search-result-title" lang={locale === 'mn' ? 'mn' : 'en'}>{title}</span>
      {alternate ? (
        <span className="search-result-alternate" lang={locale === 'mn' ? 'en' : 'mn'}>{alternate}</span>
      ) : null}
      {summary ? <span className="search-result-summary">{summary}</span> : null}
      {meta ? <span className="search-result-meta">{meta}</span> : null}
    </a>
  )
}

export default function SearchResultList({
  records,
  locale,
  copy,
  activeId,
  grouped = true,
  showType,
  listbox = false,
  labelledBy,
  onSelect,
}) {
  const typeVisible = showType ?? !grouped
  const cards = grouped ? groupSearchResults(records) : [{ type: 'all', items: records }]

  return (
    <div id={labelledBy} className="search-result-list" role={listbox ? 'listbox' : undefined} aria-label={copy.resultsLabel}>
      {cards.map((group) => (
        <section key={group.type} className="search-group">
          {grouped ? <p className="search-group-label">{groupHeading(group.type, copy)}</p> : null}
          {group.items.map((record) => (
            <SearchResultCard
              key={record.id}
              record={record}
              locale={locale}
              copy={copy}
              active={record.id === activeId}
              showType={typeVisible}
              listbox={listbox}
              id={`search-option-${record.id}`}
              onSelect={() => onSelect?.(record)}
            />
          ))}
        </section>
      ))}
    </div>
  )
}
