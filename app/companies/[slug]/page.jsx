import { notFound } from 'next/navigation'
import SupportingEntityPage from '@/components/SupportingEntityPage'
import { companies } from '@/data/companies'
import { getCompanyHref, getCompanySlug } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const record = companies.find((item) => getCompanySlug(item) === slug) ?? null
  return recordPageMetadata({
    path: record ? getCompanyHref(record) : `/companies/${slug}`,
    record,
    collection: 'supporting',
    fallbackTitle: slug,
  })
}

export default async function CompanyPage({ params }) {
  const slug = firstParam((await params).slug)
  const record = companies.find((item) => getCompanySlug(item) === slug) ?? null
  if (!record || !getCompanyHref(record)) notFound()
  return <SupportingEntityPage kind="company" record={record} />
}
