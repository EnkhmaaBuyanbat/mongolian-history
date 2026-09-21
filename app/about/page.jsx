import AboutPage from '@/components/AboutPage'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('about')
}

export default function AboutRoute() {
  return <AboutPage />
}
