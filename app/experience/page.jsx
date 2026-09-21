import ExperienceRouteClient from '@/components/ExperienceRouteClient'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('experience')
}

export default function ExperienceRoute() {
  return <ExperienceRouteClient />
}
