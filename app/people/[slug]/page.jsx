import { notFound } from 'next/navigation'
import PersonRoutePage from '@/components/PersonRoutePage'
import { getPersonSlug } from '@/data/entityRoutes'
import { people } from '@/data/people'
import { recordPageMetadata } from '@/seo/metadata'
import { firstParam } from '@/seo/site'

export async function generateMetadata({ params }) {
  const slug = firstParam((await params).slug)
  const person = people.find((item) => getPersonSlug(item) === slug) ?? null
  return recordPageMetadata({
    path: `/people/${slug}`,
    record: person,
    collection: 'people',
    fallbackTitle: slug,
  })
}

export default async function PersonPage({ params }) {
  const slug = firstParam((await params).slug)
  const person = people.find((item) => getPersonSlug(item) === slug) ?? null
  if (!person) notFound()
  return <PersonRoutePage person={person} />
}
