import { notFound } from 'next/navigation'
import EntityExplorerPage from '@/components/EntityExplorerPage'
import { objects } from '@/data/objects'
import { getEntityHref } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const entity = objects.find((item) => item.id === `object-${slug}`) ?? null
  return recordPageMetadata({
    path: entity ? getEntityHref(entity) : `/objects/${slug}`,
    record: entity,
    collection: 'entities',
    fallbackTitle: slug,
  })
}

export default async function ObjectPage({ params }) {
  const slug = firstParam((await params).slug)
  const entity = objects.find((item) => item.id === `object-${slug}`) ?? null
  if (!entity) notFound()
  return <EntityExplorerPage entity={entity} />
}
