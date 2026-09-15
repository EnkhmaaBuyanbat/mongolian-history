'use client'

import { useParams } from 'next/navigation'
import SupportingEntityPage from '@/components/SupportingEntityPage'
import { companies } from '@/data/companies'
import { getCompanySlug } from '@/data/entityRoutes'

export default function CompanyPage() {
  const { slug } = useParams()
  const record = companies.find((item) => getCompanySlug(item) === slug) ?? null
  return <SupportingEntityPage kind="company" record={record} />
}
