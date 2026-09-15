'use client'

import { notFound, useParams } from 'next/navigation'
import EraDetailPage from '@/components/EraDetailPage'
import { eras } from '@/data/eras'

function firstParam(value) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export default function EraPage() {
  const { eraId } = useParams()
  const requested = firstParam(eraId)
  const era = eras.find((item) => item.id === requested || item.slug === requested) ?? null
  if (!era) notFound()
  return <EraDetailPage era={era} />
}
