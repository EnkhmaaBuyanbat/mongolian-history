'use client'

import Hero from './Hero'
import Introduction from './Introduction'
import EraPreview from './EraPreview'
import HomeGateway from './HomeGateway'
import FeaturedStory from './HomeFeaturedStory'
import { ExperienceHistory, ObjectsAndEvidence, PeopleAndDynasties } from './HomeMuseumSections'

export default function HomePage() {
  return (
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
  )
}
