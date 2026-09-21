import { notFound } from 'next/navigation'
import CultureTopicPage from '@/components/CultureTopicPage'
import { getCultureTopicBySlug } from '@/data/cultureTopics'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const topic = getCultureTopicBySlug(slug)
  return recordPageMetadata({
    path: `/culture/${slug}`,
    record: topic,
    collection: 'culture',
    fallbackTitle: slug,
  })
}

export default async function CultureTopicRoute({ params }) {
  const slug = firstParam((await params).slug)
  const topic = getCultureTopicBySlug(slug)
  if (!topic) notFound()
  return <CultureTopicPage topic={topic} />
}
