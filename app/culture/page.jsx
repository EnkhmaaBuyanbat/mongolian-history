import CultureIndexPage from '@/components/CultureIndexPage'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('culture')
}

export default function CulturePage() {
  return <CultureIndexPage />
}
