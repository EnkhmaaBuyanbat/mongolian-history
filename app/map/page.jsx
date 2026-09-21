import MapRouteClient from '@/components/MapRouteClient'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('map')
}

export default function MapPage() {
  return <MapRouteClient />
}
