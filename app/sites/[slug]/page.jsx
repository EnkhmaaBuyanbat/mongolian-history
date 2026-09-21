import { notFound } from 'next/navigation'
import EntityExplorerPage from '@/components/EntityExplorerPage'
import { sites } from '@/data/sites'
import { getEntityHref } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const entity = sites.find((item) => item.id === `site-${slug}`) ?? null
  return recordPageMetadata({
    path: entity ? getEntityHref(entity) : `/sites/${slug}`,
    record: entity,
    collection: 'entities',
    fallbackTitle: slug,
  })
}

export default async function SitePage({ params }) {
  const slug = firstParam((await params).slug)
  const entity = sites.find((item) => item.id === `site-${slug}`) ?? null
  if (!entity) notFound()
  return <EntityExplorerPage entity={entity} />
}
