import { Suspense } from 'react'
import PeopleIndexPage from '@/components/PeopleIndexPage'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('people')
}

export default function PeoplePage() {
  return (
    <Suspense>
      <PeopleIndexPage />
    </Suspense>
  )
}
