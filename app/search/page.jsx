import { Suspense } from 'react'
import SearchResultsPage from '@/components/SearchResultsPage'
import { staticPageMetadata } from '@/seo/metadata'

function SearchFallback() {
  return <article className="search-page" />
}

export async function generateMetadata() {
  return staticPageMetadata('search')
}

export default function SearchRoute() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResultsPage />
    </Suspense>
  )
}
