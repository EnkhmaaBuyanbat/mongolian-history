'use client'

import { useParams } from 'next/navigation'
import SupportingEntityPage from '@/components/SupportingEntityPage'
import { claims } from '@/data/claims'
import { getClaimSlug } from '@/data/entityRoutes'

export default function ClaimPage() {
  const { slug } = useParams()
  const record = claims.find((item) => getClaimSlug(item) === slug) ?? null
  return <SupportingEntityPage kind="claim" record={record} />
}
