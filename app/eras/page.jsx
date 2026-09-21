import EraPreview from '@/components/EraPreview'
import { staticPageMetadata } from '@/seo/metadata'

export async function generateMetadata() {
  return staticPageMetadata('eras')
}

export default function ErasPage() {
  return <EraPreview />
}
