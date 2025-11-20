import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ExperiencesShowcase from '@/components/ExperiencesShowcase'
import Benefits from '@/components/Benefits'
import FeaturedExperiences from '@/components/FeaturedExperiences'
import Categories from '@/components/Categories'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import GroupExperiences from '@/components/GroupExperiences'
import CommunityForm from '@/components/CommunityForm'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'
import ClientWrapper from '@/components/ClientWrapper'
import { getFeaturedExperiences } from '@/lib/api'

export default async function HomePage() {
  // Fetch data on the server
  const experiences = await getFeaturedExperiences()

  return (
    <ClientWrapper experiences={experiences} />
  )
}