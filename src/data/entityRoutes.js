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

export function getEntityHref(record) {
  if (!record || record.status === 'draft') return null
  if (record.id.startsWith('person-')) return getPersonHref(record)
  if (record.id.startsWith('polity-')) return `/polities/${record.id.replace('polity-', '')}`
  if (record.id.startsWith('place-')) return `/places/${record.id.replace('place-', '')}`
  if (record.id.startsWith('site-')) return `/sites/${record.id.replace('site-', '')}`
  if (record.id.startsWith('object-')) return `/objects/${record.id.replace('object-', '')}`
  return null
}
