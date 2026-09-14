'use client'

import { useParams } from 'next/navigation'
import EraDetailPage from '@/components/EraDetailPage'
import { eras } from '@/data/eras'

export default function EraPage() {
  const { eraId } = useParams()
  const era = eras.find((item) => item.id === eraId || item.slug === eraId) ?? null
  return <EraDetailPage era={era} />
}
