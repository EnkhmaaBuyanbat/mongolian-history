export function getPersonSlug(person) {
  return person.slug ?? person.id.replace('person-', '')
}

export function getPersonHref(person) {
  return person ? `/people/${getPersonSlug(person)}` : null
}

export function getChapterHref(chapter) {
  const slug = chapter.slug ?? chapter.id.replace('chapter-', '')
  return `/eras/${chapter.eraId}/chapters/${slug}`
}
