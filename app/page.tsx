import React from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Landing/Hero'
import Features from '@/components/Landing/Features'
import Process from '@/components/Landing/Process'
import Stats from '@/components/Landing/Stats'
import CTA from '@/components/Landing/CTA'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}