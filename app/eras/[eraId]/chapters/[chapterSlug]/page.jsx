'use client'

import { notFound, useParams } from 'next/navigation'
import ChapterPage from '@/components/ChapterPage'
import { chapters } from '@/data/chapters'
import { eras } from '@/data/eras'

function firstParam(value) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export default function ChapterRoutePage() {
  const { eraId, chapterSlug } = useParams()
  const requestedEra = firstParam(eraId)
  const requestedChapter = firstParam(chapterSlug)
  const matchedEra = eras.find((item) => item.id === requestedEra || item.slug === requestedEra)
  if (!matchedEra) notFound()

  const chapter = chapters.find(
    (item) => item.eraId === matchedEra.id
      && (item.slug ?? item.id.replace('chapter-', '')) === requestedChapter,
  ) ?? null

  if (!chapter) notFound()

  return <ChapterPage chapter={chapter} />
}
