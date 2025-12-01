// Main landing page for the Walkman Retrofuture marketing site.
// Imports and renders all sections in order.

import Hero from '@/components/sections/Hero'
import ProductOverview from '@/components/sections/ProductOverview'
import ProductGallery from '@/components/sections/ProductGallery'
import Features from '@/components/sections/Features'
import StorySection from '@/components/sections/StorySection'
import UIScreens from '@/components/sections/UIScreens'
import TechSpecs from '@/components/sections/TechSpecs'
import Scenarios from '@/components/sections/Scenarios'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductOverview />
      <ProductGallery />
      <Features />
      <StorySection />
      <UIScreens />
      <TechSpecs />
      <Scenarios />
      <FAQ />
      <FinalCTA />
    </>
  )
}
