import FamilyTreePage from '@/components/FamilyTreePage'

function firstValue(value) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export default async function FamilyTreeRoute({ searchParams }) {
  const params = await searchParams
  return <FamilyTreePage initialPerson={firstValue(params.person)} />
}
