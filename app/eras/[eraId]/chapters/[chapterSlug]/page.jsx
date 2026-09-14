'use client'

import { notFound, useParams } from 'next/navigation'
import ChapterPage from '@/components/ChapterPage'
import { chapters } from '@/data/chapters'
import { eras } from '@/data/eras'

export default function ChapterRoutePage() {
  const { eraId, chapterSlug } = useParams()
  const matchedEra = eras.find((item) => item.id === eraId || item.slug === eraId)
  const chapter = chapters.find(
    (item) => item.eraId === matchedEra?.id
      && (item.slug ?? item.id.replace('chapter-', '')) === chapterSlug,
  ) ?? null

  if (!chapter) notFound()

  return <ChapterPage chapter={chapter} />
}
