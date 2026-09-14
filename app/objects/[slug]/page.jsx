'use client'

import { useParams } from 'next/navigation'
import EntityExplorerPage from '@/components/EntityExplorerPage'
import { objects } from '@/data/objects'

export default function ObjectPage() {
  const { slug } = useParams()
  const entity = objects.find((item) => item.id === `object-${slug}`) ?? null
  return <EntityExplorerPage entity={entity} />
}
