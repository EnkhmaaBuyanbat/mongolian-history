import { notFound } from 'next/navigation'
import SupportingEntityPage from '@/components/SupportingEntityPage'
import { organizations } from '@/data/organizations'
import { getOrganizationHref, getOrganizationSlug } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const record = organizations.find((item) => getOrganizationSlug(item) === slug) ?? null
  return recordPageMetadata({
    path: record ? getOrganizationHref(record) : `/organizations/${slug}`,
    record,
    collection: 'supporting',
    fallbackTitle: slug,
  })
}

export default async function OrganizationPage({ params }) {
  const slug = firstParam((await params).slug)
  const record = organizations.find((item) => getOrganizationSlug(item) === slug) ?? null
  if (!record || !getOrganizationHref(record)) notFound()
  return <SupportingEntityPage kind="organization" record={record} />
}
