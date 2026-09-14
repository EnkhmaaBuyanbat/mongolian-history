'use client'

import { useParams } from 'next/navigation'
import CultureTopicPage from '@/components/CultureTopicPage'
import { getCultureTopicBySlug } from '@/data/cultureTopics'

export default function CultureTopicRoute() {
  const { slug } = useParams()
  return <CultureTopicPage topic={getCultureTopicBySlug(slug) ?? null} />
}
