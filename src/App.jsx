import { lazy, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import EraPreview from './components/EraPreview'
import HomeGateway from './components/HomeGateway'
import FeaturedStory from './components/HomeFeaturedStory'
import { ExperienceHistory, ObjectsAndEvidence, PeopleAndDynasties } from './components/HomeMuseumSections'
import GlobalTimelinePage from './components/GlobalTimelinePage'
import Footer from './components/Footer'
import HistoricalEntityPage from './components/EntityDetailPage'
import EraDetailPage from './components/EraDetailPage'
import ChapterPage from './components/ChapterPage'
import PeopleIndexPage from './components/PeopleIndexPage'
import PeopleStoryPage from './components/PeopleStoryPage'
import PersonDetailPage from './components/PersonDetailPage'
import PersonDossierPage from './components/PersonDossierPage'
import FamilyTreePage from './components/FamilyTreePage'
import EntityExplorerPage from './components/EntityExplorerPage'
import CultureIndexPage from './components/CultureIndexPage'
import CultureTopicPage from './components/CultureTopicPage'
import { eras } from './data/eras'
import { chapters } from './data/chapters'
import { people } from './data/people'
import { polities } from './data/polities'
import { places } from './data/places'
import { sites } from './data/sites'
import { objects } from './data/objects'
import { dossierPersonIds } from './data/personPresentation'
import { getCultureTopicBySlug } from './data/cultureTopics'
import './App.css'
import './homepage.css'

const HistoricalMapPage = lazy(() => import('./components/HistoricalMapPage'))
const ExperiencePage = lazy(() => import('./components/ExperiencePage'))

function getCurrentPath() {
  return window.location.pathname || '/'
}

function App() {
  const [route, setRoute] = useState(getCurrentPath)
  const scrollToTopAfterNavigation = useRef(false)

  useLayoutEffect(() => {
    if (!scrollToTopAfterNavigation.current) return

    scrollToTopAfterNavigation.current = false
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [route])

  useEffect(() => {
    const handleChange = () => setRoute(getCurrentPath())
    const handleNavigation = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return
      const destination = new URL(link.href, window.location.href)
      if (destination.origin !== window.location.origin || destination.hash) return

      event.preventDefault()
      if (destination.pathname === window.location.pathname) {
        window.scrollTo({ top:0, behavior:'auto' })
        return
      }
      window.history.pushState({}, '', `${destination.pathname}${destination.search}`)
      scrollToTopAfterNavigation.current = true
      setRoute(destination.pathname)
    }

    window.addEventListener('popstate', handleChange)
    document.addEventListener('click', handleNavigation)
    return () => {
      window.removeEventListener('popstate', handleChange)
      document.removeEventListener('click', handleNavigation)
    }
  }, [])

  const entity = useMemo(() => {
    if (!route.startsWith('/polities/')) {
      return null
    }

    const slug = route.split('/').filter(Boolean).at(-1)
    if (!slug) {
      return null
    }

    const id = `polity-${slug}`
    return polities.find((item) => item.id === id) ?? null
  }, [route])

  const era = useMemo(() => {
    if (!route.startsWith('/eras/') || route.includes('/chapters/')) {
      return null
    }

    const slug = route.split('/').filter(Boolean).at(-1)
    return eras.find((item) => item.id === slug || item.slug === slug) ?? null
  }, [route])

  const chapter = useMemo(() => {
    const match = route.match(/^\/eras\/([^/]+)\/chapters\/([^/]+)$/)
    if (!match) {
      return null
    }

    const [, eraId, chapterSlug] = match
    const matchedEra = eras.find((item) => item.id === eraId || item.slug === eraId)
    return chapters.find(
      (item) => item.eraId === matchedEra?.id
        && (item.slug ?? item.id.replace('chapter-', '')) === chapterSlug,
    ) ?? null
  }, [route])

  const person = useMemo(() => {
    const match = route.match(/^\/people\/([^/]+)$/)
    if (!match) {
      return null
    }

    const [, slug] = match
    return people.find((item) => (item.slug ?? item.id.replace('person-', '')) === slug) ?? null
  }, [route])

  const explorerEntity = useMemo(() => {
    const match = route.match(/^\/(places|sites|objects)\/([^/]+)$/)
    if (!match) return undefined

    const [, type, slug] = match
    const collections = { places, sites, objects }
    const prefixes = { places: 'place-', sites: 'site-', objects: 'object-' }
    return collections[type].find((item) => item.id === `${prefixes[type]}${slug}`) ?? null
  }, [route])

  const cultureTopicRoute = route.match(/^\/culture\/([^/]+)$/)
  const cultureTopic = cultureTopicRoute ? getCultureTopicBySlug(cultureTopicRoute[1]) : null

  const showEntityPage = Boolean(entity)
  const showEraPage = Boolean(era)
  const showChapterPage = Boolean(chapter)
  const showTimelinePage = route === '/timeline'
  const showMapPage = route === '/map'
  const showExperiencePage = route === '/experience'
  const showPeopleIndexPage = route === '/people'
  const showErasIndexPage = route === '/eras'
  const showFamilyTreePage = route === '/family-tree'
  const showPeopleStoryPage = Boolean(person?.storyId)
  const showPersonDossierPage = Boolean(person && dossierPersonIds.has(person.id))
  const showPersonDetailPage = /^\/people\/[^/]+$/.test(route) && !showPeopleStoryPage
  const showExplorerPage = explorerEntity !== undefined
  const showCultureIndexPage = route === '/culture'
  const showCultureTopicPage = Boolean(cultureTopicRoute)

  return (
    <>
      <Header route={route} />
      <main>
        {showMapPage ? (
          <Suspense fallback={<div className="section-inner map-loading">Loading historical map…</div>}><HistoricalMapPage /></Suspense>
        ) : showExperiencePage ? (
          <Suspense fallback={<div className="section-inner map-loading" aria-busy="true" />}><ExperiencePage /></Suspense>
        ) : showEntityPage ? (
          <HistoricalEntityPage entity={entity} />
        ) : showChapterPage ? (
          <ChapterPage chapter={chapter} />
        ) : showEraPage ? (
          <EraDetailPage era={era} />
        ) : showExplorerPage ? (
          <EntityExplorerPage entity={explorerEntity} />
        ) : showTimelinePage ? (
          <GlobalTimelinePage />
        ) : showFamilyTreePage ? (
          <FamilyTreePage />
        ) : showErasIndexPage ? (
          <EraPreview />
        ) : showPersonDossierPage ? (
          <PersonDossierPage person={person} />
        ) : showPeopleStoryPage ? (
          <PeopleStoryPage person={person} />
        ) : showPersonDetailPage ? (
          <PersonDetailPage person={person} />
        ) : showPeopleIndexPage ? (
          <PeopleIndexPage />
        ) : showCultureTopicPage ? (
          <CultureTopicPage topic={cultureTopic} />
        ) : showCultureIndexPage ? (
          <CultureIndexPage />
        ) : (
          <>
            <div className="home-cinematic">
              <Hero />
              <HomeGateway />
              <EraPreview variant="home" />
              <FeaturedStory />
              <PeopleAndDynasties />
              <ObjectsAndEvidence />
              <ExperienceHistory />
              <Introduction />
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
