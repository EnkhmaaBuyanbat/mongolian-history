import { validateSearchIndex } from './validateSearchIndex'

const searchIndexValidation = validateSearchIndex()
if (searchIndexValidation.errors.length) {
  throw new Error(`Search index validation failed:\n${searchIndexValidation.errors.join('\n')}`)
}
