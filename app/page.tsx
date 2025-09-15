import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import FeaturedExperiences from '@/components/FeaturedExperiences'
import Categories from '@/components/Categories'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import GroupExperiences from '@/components/GroupExperiences'
import CommunityForm from '@/components/CommunityForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedExperiences />
      <Categories />
      <Testimonials />
      <HowItWorks />
      <GroupExperiences />
      <CommunityForm />
      <Footer />
    </main>
  )
}