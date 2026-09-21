import FamilyTreePage from '@/components/FamilyTreePage'
import { staticPageMetadata } from '@/seo/metadata'

function firstValue(value) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export async function generateMetadata() {
  return staticPageMetadata('familyTree')
}

export default async function FamilyTreeRoute({ searchParams }) {
  const params = await searchParams
  return <FamilyTreePage initialPerson={firstValue(params.person)} />
}
