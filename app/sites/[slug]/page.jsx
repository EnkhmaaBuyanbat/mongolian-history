'use client'

import { useParams } from 'next/navigation'
import EntityExplorerPage from '@/components/EntityExplorerPage'
import { sites } from '@/data/sites'

export default function SitePage() {
  const { slug } = useParams()
  const entity = sites.find((item) => item.id === `site-${slug}`) ?? null
  return <EntityExplorerPage entity={entity} />
}
