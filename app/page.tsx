import React from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Landing/Hero'
import ExperiencesGrid from '@/components/Landing/ExperiencesGrid'
import HowItWorks from '@/components/Landing/HowItWorks'
import Community from '@/components/Landing/Community'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperiencesGrid />
        <HowItWorks />
        <Community />
      </main>
      <Footer />
    </>
  )
}