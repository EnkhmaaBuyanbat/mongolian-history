'use client'

import dynamic from 'next/dynamic'

const ExperiencePage = dynamic(() => import('@/components/ExperiencePage'), {
  ssr: false,
  loading: () => <div className="section-inner map-loading" aria-busy="true" />,
})

export default function ExperienceRoute() {
  return <ExperiencePage />
}
