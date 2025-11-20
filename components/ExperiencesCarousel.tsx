'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Experience } from '@/lib/api'

interface ExperiencesCarouselProps {
    experiences: Experience[]
    isLoading?: boolean
}

export default function ExperiencesCarousel({ experiences, isLoading = false }: ExperiencesCarouselProps) {
    const [cardsVisible, setCardsVisible] = useState([false, false, false, false])
    const [showSection, setShowSection] = useState(false)

    useEffect(() => {
        if (!isLoading && experiences.length > 0) {
            const showTimer = setTimeout(() => setShowSection(true), 500)
            const cardTimers = [
                setTimeout(() => setCardsVisible(prev => [true, ...prev.slice(1)]), 800),
                setTimeout(() => setCardsVisible(prev => [prev[0], true, ...prev.slice(2)]), 1100),
                setTimeout(() => setCardsVisible(prev => [...prev.slice(0, 2), true, prev[3]]), 1400),
                setTimeout(() => setCardsVisible(prev => [...prev.slice(0, 3), true]), 1700)
            ]
            return () => {
                clearTimeout(showTimer)
                cardTimers.forEach(clearTimeout)
            }
        }
    }, [isLoading, experiences])

    const displayExperiences = experiences.slice(0, 4)

    return (
        <section
            id="experiences-carousel"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                position: 'relative',
                overflow: 'hidden',
                opacity: showSection ? 1 : 0,
                transition: 'opacity 1s ease',
                padding: '4rem 0'
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '1rem',
                        textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}>
                        Nuestras Experiencias
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Explora nuestras aventuras cuidadosamente curadas para cada tipo de viajero
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: '500px'
                }}>
                    <div style={{
                        position: 'relative',
                        width: 'min(70rem, 90vw)',
                        height: '45rem',
                        margin: '0 auto'
                    }}>
                        {displayExperiences.map((experience, index) => (
                            <div
                                key={experience.plan_id}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: 'min(35rem, 85vw)',
                                    height: '40rem',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    borderRadius: '1.5rem',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem',
                                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                                    transition: 'all 0.7s ease',
                                    transform: cardsVisible[index]
                                        ? `translateX(${index * 80}px) scale(1)`
                                        : `translateX(${index * 80}px) scale(0.8)`,
                                    opacity: cardsVisible[index] ? 1 : 0,
                                    cursor: 'pointer',
                                    zIndex: 20 - index
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = `translateX(${index * 80}px) scale(1.05)`
                                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.3)'
                                    e.currentTarget.style.zIndex = '30'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = `translateX(${index * 80}px) scale(1)`
                                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                                    e.currentTarget.style.zIndex = String(20 - index)
                                }}
                            >
                                <div style={{ textAlign: 'center', color: 'white', width: '100%' }}>
                                    {experience.plan_image && (
                                        <div style={{
                                            position: 'relative',
                                            width: '30rem',
                                            height: '30rem',
                                            margin: '0 auto 1rem',
                                            borderRadius: '1rem',
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            <Image
                                                src={experience.plan_image}
                                                alt={experience.plan_title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="30rem"
                                            />
                                        </div>
                                    )}

                                    <p style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.3rem' }}>
                                        {experience.plan_title}
                                    </p>
                                    <p style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '0.5rem' }}>
                                        {experience.descripcioncorta || experience.categoria}
                                    </p>
                                    <p style={{ fontSize: '1.5rem', color: '#F5C542', fontWeight: '700' }}>
                                        ${experience.precio?.toLocaleString() || '0'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
