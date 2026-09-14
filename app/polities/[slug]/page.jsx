'use client'

import { useParams } from 'next/navigation'
import HistoricalEntityPage from '@/components/EntityDetailPage'
import { polities } from '@/data/polities'

export default function PolityPage() {
  const { slug } = useParams()
  const entity = polities.find((item) => item.id === `polity-${slug}`) ?? null
  return <HistoricalEntityPage entity={entity} />
}
