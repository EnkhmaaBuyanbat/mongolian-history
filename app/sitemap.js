import { publicSitemapPaths } from '../src/seo/catalog'
import { getSiteUrl } from '../src/seo/site'

export default function sitemap() {
  const lastModified = new Date()
  return publicSitemapPaths().map((path) => ({
    url: path === '/' ? getSiteUrl() : `${getSiteUrl()}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length <= 2 ? 0.8 : 0.6,
  }))
}
