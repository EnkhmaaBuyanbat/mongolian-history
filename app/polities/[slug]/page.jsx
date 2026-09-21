import { notFound } from 'next/navigation'
import HistoricalEntityPage from '@/components/EntityDetailPage'
import { polities } from '@/data/polities'
import { getEntityHref } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const entity = polities.find((item) => item.id === `polity-${slug}`) ?? null
  return recordPageMetadata({
    path: entity ? getEntityHref(entity) : `/polities/${slug}`,
    record: entity,
    collection: 'entities',
    fallbackTitle: slug,
  })
}

export default async function PolityPage({ params }) {
  const slug = firstParam((await params).slug)
  const entity = polities.find((item) => item.id === `polity-${slug}`) ?? null
  if (!entity) notFound()
  return <HistoricalEntityPage entity={entity} />
}
