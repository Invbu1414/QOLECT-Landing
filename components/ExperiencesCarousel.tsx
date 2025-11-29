'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Experience } from '@/lib/api'
import { useTranslations } from '../contexts/LanguageContext'

interface ExperiencesCarouselProps {
    experiences: Experience[]
    isLoading?: boolean
}

export default function ExperiencesCarousel({ experiences, isLoading = false }: ExperiencesCarouselProps) {
    const t = useTranslations('experiences')
    const [showSection, setShowSection] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const whatsappNumber = '573018119374'

    useEffect(() => {
        if (!isLoading && experiences.length > 0) {
            const showTimer = setTimeout(() => setShowSection(true), 500)
            return () => clearTimeout(showTimer)
        }
    }, [isLoading, experiences])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % experiences.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    if (experiences.length === 0) return null

    const currentExperience = experiences[currentSlide]

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
                padding: '4rem 2rem'
            }}
        >
            <div style={{ maxWidth: '1400px', width: '100%', position: 'relative' }}>
                {/* Title */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '1rem',
                        textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}>
                        {t('ourExperiences')}
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        {t('discoverAdventures')}
                    </p>
                </div>

                {/* Split Screen Container */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    background: 'white',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                    minHeight: '600px',
                    position: 'relative'
                }}>

                    {/* Left Side - Image */}
                    <div style={{
                        flex: '1',
                        position: 'relative',
                        height: '600px',
                        overflow: 'hidden'
                    }}>
                        {currentExperience.plan_image && (
                            <Image
                                src={currentExperience.plan_image}
                                alt={currentExperience.plan_title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        )}
                    </div>

                    {/* Right Side - Content */}
                    <div style={{
                        flex: '1',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '1.5rem'
                    }}>
                        {/* Category Badge */}
                        {currentExperience.categoria && (
                            <div style={{
                                display: 'inline-block',
                                alignSelf: 'flex-start',
                                background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '2rem',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}>
                                {currentExperience.categoria}
                            </div>
                        )}

                        {/* Title */}
                        <h3 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                            fontWeight: '800',
                            color: '#1a1a1a',
                            margin: 0,
                            lineHeight: '1.2'
                        }}>
                            {currentExperience.plan_title}
                        </h3>

                        {/* Description */}
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            {currentExperience.descripcioncorta || currentExperience.descripcion || 'Una experiencia inolvidable te espera'}
                        </p>

                        {/* Features/Amenities (if available) */}
                        {currentExperience.destino && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#666'
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>📍</span>
                                <span style={{ fontSize: '1rem' }}>{currentExperience.destino}</span>
                            </div>
                        )}

                        {/* Price */}
                        <div style={{
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            fontWeight: '800',
                            color: '#F5C542',
                            margin: '1rem 0'
                        }}>
                            ${currentExperience.precio?.toLocaleString() || '0'}
                            <span style={{ fontSize: '1rem', color: '#999', fontWeight: '400', marginLeft: '0.5rem' }}>
                                COP
                            </span>
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hola! Estoy interesado en la experiencia: ${encodeURIComponent(currentExperience.plan_title)} - $${currentExperience.precio?.toLocaleString()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                color: 'white',
                                padding: '1rem 2.5rem',
                                borderRadius: '0.75rem',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                alignSelf: 'flex-start'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                e.currentTarget.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.5)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>💬</span>
                            {t('buyWhatsApp')}
                        </a>

                        {/* Mercado Pago Coming Soon */}
                        <p style={{
                            fontSize: '0.9rem',
                            color: '#999',
                            fontStyle: 'italic',
                            margin: 0
                        }}>
                            🔜 {t('comingSoonMercadoPago')}
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '3rem',
                            height: '3rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: '#1DB7BF',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            zIndex: 10
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'white'
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                        }}
                    >
                        ←
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '3rem',
                            height: '3rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: '#1DB7BF',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            zIndex: 10
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'white'
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                        }}
                    >
                        →
                    </button>
                </div>

                {/* Dots Navigation */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginTop: '2rem'
                }}>
                    {experiences.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: currentSlide === index ? '2.5rem' : '0.75rem',
                                height: '0.75rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.4)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
