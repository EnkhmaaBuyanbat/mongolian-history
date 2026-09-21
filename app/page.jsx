import HomePage from '@/components/HomePage'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('home')
}

export default function Page() {
  return <HomePage />
}
