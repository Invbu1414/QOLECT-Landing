import React from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Landing/Hero'
import Gallery from '@/components/Landing/Gallery'
import Testimonials from '@/components/Landing/Testimonials'
import CTA from '@/components/Landing/CTA'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}