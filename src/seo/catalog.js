import { chapters } from '../data/chapters'
import { claims } from '../data/claims'
import { companies } from '../data/companies'
import { cultureTopics } from '../data/cultureTopics'
import { eras } from '../data/eras'
import {
  getChapterHref,
  getClaimHref,
  getCompanyHref,
  getEntityHref,
  getOrganizationHref,
  getPersonHref,
} from '../data/entityRoutes'
import { objects } from '../data/objects'
import { organizations } from '../data/organizations'
import { people } from '../data/people'
import { places } from '../data/places'
import { polities } from '../data/polities'
import { sites } from '../data/sites'
import { PAGE_PATHS } from './site'

function unique(hrefs) {
  return [...new Set(hrefs.filter(Boolean))]
}

export function publicSitemapPaths() {
  return unique([
    PAGE_PATHS.home,
    PAGE_PATHS.eras,
    PAGE_PATHS.timeline,
    PAGE_PATHS.people,
    PAGE_PATHS.familyTree,
    PAGE_PATHS.culture,
    PAGE_PATHS.experience,
    PAGE_PATHS.about,
    PAGE_PATHS.contact,
    PAGE_PATHS.map,
    ...eras.map((era) => `/eras/${era.slug ?? era.id}`),
    ...chapters.map((chapter) => getChapterHref(chapter)),
    ...people.map((person) => getPersonHref(person)),
    ...cultureTopics.map((topic) => `/culture/${topic.slug}`),
    ...objects.map((record) => getEntityHref(record)),
    ...sites.map((record) => getEntityHref(record)),
    ...places.map((record) => getEntityHref(record)),
    ...polities.map((record) => getEntityHref(record)),
    ...organizations.map((record) => getOrganizationHref(record)),
    ...companies.map((record) => getCompanyHref(record)),
    ...claims.map((record) => getClaimHref(record)),
  ])
}
