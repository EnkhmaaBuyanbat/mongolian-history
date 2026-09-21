import { notFound } from 'next/navigation'
import EntityExplorerPage from '@/components/EntityExplorerPage'
import { places } from '@/data/places'
import { getEntityHref } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const entity = places.find((item) => item.id === `place-${slug}`) ?? null
  return recordPageMetadata({
    path: entity ? getEntityHref(entity) : `/places/${slug}`,
    record: entity,
    collection: 'entities',
    fallbackTitle: slug,
  })
}

export default async function PlacePage({ params }) {
  const slug = firstParam((await params).slug)
  const entity = places.find((item) => item.id === `place-${slug}`) ?? null
  if (!entity) notFound()
  return <EntityExplorerPage entity={entity} />
}
