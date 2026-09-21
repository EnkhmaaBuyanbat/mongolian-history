import { getSiteUrl } from '../src/seo/site'

export default function robots() {
  const host = getSiteUrl()
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search'],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  }
}
