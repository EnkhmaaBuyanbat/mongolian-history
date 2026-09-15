import { SEARCH_FILTERS } from '../search/searchConfig'

export default function SearchFilters({ value, onChange, labels, labelledBy }) {
  return (
    <div className="search-filters" role="toolbar" aria-label={labelledBy}>
      {SEARCH_FILTERS.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className="search-filter"
          aria-pressed={value === filter.id}
          onClick={() => onChange(filter.id)}
        >
          {labels[filter.id]}
        </button>
      ))}
    </div>
  )
}
