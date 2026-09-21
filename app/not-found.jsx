import NotFoundPage from '@/components/NotFoundPage'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('notFound')
}

export default function NotFound() {
  return <NotFoundPage />
}
