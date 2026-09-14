'use client'

import { useParams } from 'next/navigation'
import EntityExplorerPage from '@/components/EntityExplorerPage'
import { places } from '@/data/places'

export default function PlacePage() {
  const { slug } = useParams()
  const entity = places.find((item) => item.id === `place-${slug}`) ?? null
  return <EntityExplorerPage entity={entity} />
}
