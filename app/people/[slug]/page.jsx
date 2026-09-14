'use client'

import { useParams } from 'next/navigation'
import PeopleStoryPage from '@/components/PeopleStoryPage'
import PersonDetailPage from '@/components/PersonDetailPage'
import PersonDossierPage from '@/components/PersonDossierPage'
import { dossierPersonIds } from '@/data/personPresentation'
import { people } from '@/data/people'

export default function PersonPage() {
  const { slug } = useParams()
  const person = people.find((item) => (item.slug ?? item.id.replace('person-', '')) === slug) ?? null

  if (person && dossierPersonIds.has(person.id)) {
    return <PersonDossierPage person={person} />
  }

  if (person?.storyId) {
    return <PeopleStoryPage person={person} />
  }

  return <PersonDetailPage person={person} />
}
