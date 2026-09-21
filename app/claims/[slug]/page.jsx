import { notFound } from 'next/navigation'
import SupportingEntityPage from '@/components/SupportingEntityPage'
import { claims } from '@/data/claims'
import { getClaimHref, getClaimSlug } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const record = claims.find((item) => getClaimSlug(item) === slug) ?? null
  return recordPageMetadata({
    path: record ? getClaimHref(record) : `/claims/${slug}`,
    record,
    collection: 'supporting',
    fallbackTitle: slug,
  })
}

export default async function ClaimPage({ params }) {
  const slug = firstParam((await params).slug)
  const record = claims.find((item) => getClaimSlug(item) === slug) ?? null
  if (!record || !getClaimHref(record)) notFound()
  return <SupportingEntityPage kind="claim" record={record} />
}
