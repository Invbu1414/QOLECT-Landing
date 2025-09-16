'use client'

import { useState, useEffect } from 'react'
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
import LoadingScreen from '@/components/LoadingScreen'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <ScrollProgress />
      <main style={{ 
        opacity: isLoading ? 0 : 1, 
        transition: 'opacity 1s ease-in-out',
        transform: isLoading ? 'scale(0.95)' : 'scale(1)'
      }}>
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
      <ScrollToTop />
    </>
  )
}