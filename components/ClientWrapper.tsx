'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ExperiencesCarousel from '@/components/ExperiencesCarousel'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import CommunityForm from '@/components/CommunityForm'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollProgress from '@/components/ScrollProgress'
import NewsSection from '@/components/NewsSection'
import { Experience, News } from '@/lib/api'

interface ClientWrapperProps {
    experiences: Experience[]
    news: News[]
}

export default function ClientWrapper({ experiences, news }: ClientWrapperProps) {
    const [isLoading, setIsLoading] = useState(true)

    const handleLoadingComplete = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        // Force scroll to top on page load/refresh
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0)
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }, [])

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
                <Hero isLoading={isLoading} />
                <ExperiencesCarousel experiences={experiences} isLoading={isLoading} />
                <Testimonials />
                <NewsSection news={news} />
                <HowItWorks />
                <CommunityForm />
                <Footer />
            </main>
            <ScrollToTop />
        </>
    )
}
