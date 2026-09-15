const COMBINING_MARKS = /[\u0300-\u036f]/g
const QUOTES = /[''`´ʻʼʹ′‘’‚‛]/g
const DASHES = /[‐‑‒–—―-]/g
const NON_TEXT = /[^\p{L}\p{N}]+/gu

export function normalizeSearchText(value) {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(COMBINING_MARKS, '')
    .replace(QUOTES, '')
    .replace(DASHES, ' ')
    .replace(NON_TEXT, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

export function uniqueTexts(values) {
  const seen = new Set()
  const result = []
  values.forEach((value) => {
    const text = typeof value === 'string' ? value.trim() : ''
    if (!text) return
    const key = normalizeSearchText(text)
    if (!key || seen.has(key)) return
    seen.add(key)
    result.push(text)
  })
  return result
}

export function parseYearQuery(query) {
  const trimmed = String(query ?? '').trim()
  if (/^-?\d{3,4}$/.test(trimmed)) return Number(trimmed)
  const normalized = normalizeSearchText(trimmed)
  if (/^\d{3,4}$/.test(normalized)) return Number(normalized)
  return null
}

export function parsePeriodBounds(period) {
  const text = String(period ?? '')
  if (!text.trim() || /bce|bc\b|б\.э\.ө/i.test(text)) return { startYear: null, endYear: null }
  const match = text.match(/(-?\d{3,4})\s*[–—-]\s*(-?\d{3,4})/)
  if (!match) return { startYear: null, endYear: null }
  return { startYear: Number(match[1]), endYear: Number(match[2]) }
}

export function yearAppearsInText(text, year) {
  if (year == null || !text) return false
  const absolute = String(Math.abs(year))
  return new RegExp(`(^|[^0-9])${absolute}([^0-9]|$)`).test(String(text))
}

export function recordCoversYear(record, year) {
  if (year == null) return false
  if (record.year === year || record.endYear === year || record.startYear === year) return true
  if (record.startYear != null && record.endYear != null) {
    const start = Math.min(record.startYear, record.endYear)
    const end = Math.max(record.startYear, record.endYear)
    if (year >= start && year <= end) return true
  }
  return (
    yearAppearsInText(record.dateDisplay, year)
    || yearAppearsInText(record.period, year)
    || yearAppearsInText(record.localizedPeriod, year)
  )
}
