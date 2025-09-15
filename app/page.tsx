import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import FeaturedExperiences from '@/components/FeaturedExperiences'
import HowItWorks from '@/components/HowItWorks'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedExperiences />
      <HowItWorks />
    </main>
  )
}