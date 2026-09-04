export function getChronologyYear(record) {
  return record.year ?? record.endYear ?? record.startYear ?? null
}

export function sortChronologically(records) {
  return [...records].sort((first, second) => {
    const firstYear = getChronologyYear(first)
    const secondYear = getChronologyYear(second)

    if (firstYear === null && secondYear === null) return 0
    if (firstYear === null) return 1
    if (secondYear === null) return -1
    return firstYear - secondYear
  })
}
