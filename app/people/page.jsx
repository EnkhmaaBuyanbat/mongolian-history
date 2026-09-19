'use client'

import { Suspense } from 'react'
import PeopleIndexPage from '@/components/PeopleIndexPage'

export default function PeoplePage() {
  return (
    <Suspense>
      <PeopleIndexPage />
    </Suspense>
  )
}
