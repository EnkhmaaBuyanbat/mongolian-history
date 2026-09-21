import { notFound } from 'next/navigation'
import ChapterPage from '@/components/ChapterPage'
import { chapters } from '@/data/chapters'
import { eras } from '@/data/eras'
import { getChapterHref } from '@/data/entityRoutes'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

function findChapter(eraId, chapterSlug) {
  const matchedEra = eras.find((item) => item.id === eraId || item.slug === eraId)
  if (!matchedEra) return { era: null, chapter: null }
  const chapter = chapters.find(
    (item) => item.eraId === matchedEra.id
      && (item.slug ?? item.id.replace('chapter-', '')) === chapterSlug,
  ) ?? null
  return { era: matchedEra, chapter }
}

export async function generateMetadata({ params }) {
  const { eraId, chapterSlug } = await params
  const requestedEra = firstParam(eraId)
  const requestedChapter = firstParam(chapterSlug)
  const { chapter } = findChapter(requestedEra, requestedChapter)
  return recordPageMetadata({
    path: chapter ? getChapterHref(chapter) : `/eras/${requestedEra}/chapters/${requestedChapter}`,
    record: chapter,
    collection: 'chapters',
    fallbackTitle: requestedChapter,
  })
}

export default async function ChapterRoutePage({ params }) {
  const { eraId, chapterSlug } = await params
  const { chapter } = findChapter(firstParam(eraId), firstParam(chapterSlug))
  if (!chapter) notFound()
  return <ChapterPage chapter={chapter} />
}
