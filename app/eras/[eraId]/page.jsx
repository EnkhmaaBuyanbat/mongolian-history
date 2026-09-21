import { notFound } from 'next/navigation'
import EraDetailPage from '@/components/EraDetailPage'
import { eras } from '@/data/eras'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const requested = firstParam((await params).eraId)
  const era = eras.find((item) => item.id === requested || item.slug === requested) ?? null
  return recordPageMetadata({
    path: `/eras/${requested}`,
    record: era,
    collection: 'eras',
    fallbackTitle: requested,
  })
}

export default async function EraPage({ params }) {
  const requested = firstParam((await params).eraId)
  const era = eras.find((item) => item.id === requested || item.slug === requested) ?? null
  if (!era) notFound()
  return <EraDetailPage era={era} />
}
