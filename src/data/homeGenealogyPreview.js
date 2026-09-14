import { personRelationships } from './personRelationships'
import { branchGroups, householdGroups } from './familyTreePeople'
import { getParentChildIds } from './personLocalization'

const ROOT_ID = 'person-temujin-chinggis-khan'
const LATER_PREVIEW_ID = 'person-qubilai'

function parentChildPairs() {
  return personRelationships.map(getParentChildIds).filter(Boolean)
}

export function getHomeGenealogyPreview() {
  const pairs = parentChildPairs()
  const branchHeads = [...new Set(Object.values(branchGroups).map((ids) => ids[0]))]
  const dynasticSons = householdGroups.sons.filter((childId) => (
    branchHeads.includes(childId)
    && pairs.some((pair) => pair.parentId === ROOT_ID && pair.childId === childId)
  ))
  const laterParentId = dynasticSons.find((parentId) => (
    pairs.some((pair) => pair.parentId === parentId && pair.childId === LATER_PREVIEW_ID)
  )) ?? null

  return {
    rootId: ROOT_ID,
    generationTwoIds: dynasticSons,
    laterBranch: laterParentId
      ? { parentId: laterParentId, childId: LATER_PREVIEW_ID }
      : null,
  }
}
