import { Suspense } from 'react'
import SearchResultsPage from '@/components/SearchResultsPage'

function SearchFallback() {
  return <article className="search-page" />
}

export default function SearchRoute() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResultsPage />
    </Suspense>
  )
}
