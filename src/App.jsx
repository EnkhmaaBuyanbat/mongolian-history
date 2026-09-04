import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import EraPreview from './components/EraPreview'
import JourneyPreview from './components/JourneyPreview'
import GlobalTimelinePage from './components/GlobalTimelinePage'
import Footer from './components/Footer'
import HistoricalEntityPage from './components/EntityDetailPage'
import EraDetailPage from './components/EraDetailPage'
import ChapterPage from './components/ChapterPage'
import PeopleIndexPage from './components/PeopleIndexPage'
import PeopleStoryPage from './components/PeopleStoryPage'
import PersonDetailPage from './components/PersonDetailPage'
import { eras } from './data/eras'
import { chapters } from './data/chapters'
import { people } from './data/people'
import { polities } from './data/polities'
import './App.css'

function getCurrentPath() {
  return window.location.pathname || '/'
}

function App() {
  const [route, setRoute] = useState(getCurrentPath)

  useEffect(() => {
    const handleChange = () => setRoute(getCurrentPath())

    window.addEventListener('popstate', handleChange)
    return () => window.removeEventListener('popstate', handleChange)
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
    return eras.find((item) => item.id === slug) ?? null
  }, [route])

  const chapter = useMemo(() => {
    const match = route.match(/^\/eras\/([^/]+)\/chapters\/([^/]+)$/)
    if (!match) {
      return null
    }

    const [, eraId, chapterSlug] = match
    return chapters.find(
      (item) => item.eraId === eraId
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

  const showEntityPage = Boolean(entity)
  const showEraPage = Boolean(era)
  const showChapterPage = Boolean(chapter)
  const showTimelinePage = route === '/timeline'
  const showPeopleIndexPage = route === '/people'
  const showPeopleStoryPage = Boolean(person?.storyId)
  const showPersonDetailPage = /^\/people\/[^/]+$/.test(route) && !showPeopleStoryPage

  return (
    <>
      <Header />
      <main>
        {showEntityPage ? (
          <HistoricalEntityPage entity={entity} />
        ) : showChapterPage ? (
          <ChapterPage chapter={chapter} />
        ) : showEraPage ? (
          <EraDetailPage era={era} />
        ) : showTimelinePage ? (
          <GlobalTimelinePage />
        ) : showPeopleStoryPage ? (
          <PeopleStoryPage person={person} />
        ) : showPersonDetailPage ? (
          <PersonDetailPage person={person} />
        ) : showPeopleIndexPage ? (
          <PeopleIndexPage />
        ) : (
          <>
            <Hero />
            <Introduction />
            <EraPreview />
            <JourneyPreview />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
