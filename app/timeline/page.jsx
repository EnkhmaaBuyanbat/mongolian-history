import { Suspense } from 'react'
import GlobalTimelinePage from '@/components/GlobalTimelinePage'
import { staticPageMetadata } from '@/seo/metadata'

function TimelineFallback() {
  return <article className="global-timeline-page" />
}

function firstValue(value) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export async function generateMetadata() {
  return staticPageMetadata('timeline')
}

export default async function TimelinePage({ searchParams }) {
  const params = await searchParams
  return (
    <Suspense fallback={<TimelineFallback />}>
      <GlobalTimelinePage
        initialEra={firstValue(params.era)}
        initialEvent={firstValue(params.event)}
      />
    </Suspense>
  )
}
