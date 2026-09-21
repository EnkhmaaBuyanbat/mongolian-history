'use client'

import PeopleStoryPage from '@/components/PeopleStoryPage'
import PersonDetailPage from '@/components/PersonDetailPage'
import PersonDossierPage from '@/components/PersonDossierPage'
import { dossierPersonIds } from '@/data/personPresentation'

export default function PersonRoutePage({ person }) {
  if (person && dossierPersonIds.has(person.id)) {
    return <PersonDossierPage person={person} />
  }

  if (person?.storyId) {
    return <PeopleStoryPage person={person} />
  }

  return <PersonDetailPage person={person} />
}
