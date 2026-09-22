import { Suspense } from 'react'
import ContactPage from '@/components/ContactPage'
import { staticPageMetadata } from '@/seo/metadata'

function ContactFallback() {
  return <article className="contact-page" />
}

export async function generateMetadata() {
  return staticPageMetadata('contact')
}

export default function ContactRoute() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactPage />
    </Suspense>
  )
}
