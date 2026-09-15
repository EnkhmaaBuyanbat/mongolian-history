'use client'

import { useParams } from 'next/navigation'
import SupportingEntityPage from '@/components/SupportingEntityPage'
import { organizations } from '@/data/organizations'
import { getOrganizationSlug } from '@/data/entityRoutes'

export default function OrganizationPage() {
  const { slug } = useParams()
  const record = organizations.find((item) => getOrganizationSlug(item) === slug) ?? null
  return <SupportingEntityPage kind="organization" record={record} />
}
