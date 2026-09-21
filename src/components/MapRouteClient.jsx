'use client'

import dynamic from 'next/dynamic'

const HistoricalMapPage = dynamic(() => import('@/components/HistoricalMapPage'), {
  ssr: false,
  loading: () => <div className="section-inner map-loading">Loading historical map…</div>,
})

export default function MapRouteClient() {
  return <HistoricalMapPage />
}
