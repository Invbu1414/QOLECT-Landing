'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from '../contexts/LanguageContext'

export default function FeaturedExperiences() {
  const t = useTranslations('experiences')
  const experiences = [
    {
      id: 1,
      title: "Retiro de Bienestar en Costa Rica",
      date: "15-22 Marzo 2024",
      price: "€1,299",
      image: "🌴"
    },
    {
      id: 2,
      title: "Aventura en los Andes Peruanos",
      date: "10-18 Abril 2024",
      price: "€899",
      image: "🏔️"
    },
    {
      id: 3,
      title: "Inmersión Cultural en Japón",
      date: "5-15 Mayo 2024",
      price: "€2,199",
      image: "🏯"
    },
    {
      id: 4,
      title: "Safari Fotográfico en Kenia",
      date: "20-28 Junio 2024",
      price: "€1,899",
      image: "🦁"
    },
    {
      id: 5,
      title: "Relajación en las Maldivas",
      date: "1-8 Julio 2024",
      price: "€2,599",
      image: "🏝️"
    },
    {
      id: 6,
      title: "Exploración de la Patagonia",
      date: "15-25 Agosto 2024",
      price: "€1,499",
      image: "🗻"
    },
    {
      id: 7,
      title: "Tour Gastronómico por Italia",
      date: "10-17 Septiembre 2024",
      price: "€1,799",
      image: "🍝"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !isAnimating || isPaused) return

    // Respetar prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsAnimating(false)
      return
    }

    let interval: NodeJS.Timeout

    // Delay inicial para que se vea la primera card
    const initialDelay = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % experiences.length
          console.log('Animating to index:', nextIndex)
          return nextIndex
        })
      }, 4000) // 4 segundos por experiencia
    }, 2000) // 2 segundos de delay inicial

    return () => {
      clearTimeout(initialDelay)
      if (interval) clearInterval(interval)
    }
  }, [experiences.length, isAnimating, isPaused, isMounted])

  // Duplicar experiencias para efecto infinito
  const duplicatedExperiences = [...experiences, ...experiences]

  const getTransformValue = () => {
    const cardWidth = 320 // 300px + 20px gap
    const translateX = currentIndex * cardWidth
    console.log('Transform:', `translateX(-${translateX}px)`, 'Index:', currentIndex)
    return `translateX(-${translateX}px)`
  }

  const getTransitionStyle = () => {
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return prefersReducedMotion ? 'none' : 'transform 1.2s ease-in-out'
  }

  return (
    <section id="experiencias" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1rem'
            }}
          >
            {t('title')}
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '32rem', margin: '0 auto' }}>
            {t('subtitle')}
          </p>

          {/* Controles de animación */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            {/* Estado actual */}
            <div style={{
              fontSize: '0.875rem',
              color: '#64748B',
              background: '#f1f5f9',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem'
            }}>
              {t('experienceOf')} {currentIndex + 1} {t('of')} {experiences.length} |
              {isAnimating ? (isPaused ? ` 🟡 ${t('paused')}` : ` 🟢 ${t('active')}`) : ` 🔴 ${t('manual')}`}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setIsPaused(!isPaused)}
                style={{
                  background: isPaused ? '#F5C542' : '#64748B',
                  color: isPaused ? '#0F172A' : 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {isPaused ? `▶️ ${t('resume')}` : `⏸️ ${t('pause')}`}
              </button>

              <button
                onClick={() => setIsAnimating(!isAnimating)}
                style={{
                  background: isAnimating ? '#1DB7BF' : '#64748B',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {isAnimating ? `🔄 ${t('auto')}` : `📌 ${t('manual')}`}
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % experiences.length)}
                style={{
                  background: '#94a3b8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                ➡️ {t('next')}
              </button>
            </div>
          </div>
        </div>

        {/* Contenedor del carrusel */}
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            background: '#f8fafc',
            borderRadius: '1rem',
            padding: '2rem'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              transition: getTransitionStyle(),
              transform: getTransformValue(),
              width: 'fit-content',
              paddingLeft: '2rem'
            }}
          >
            {duplicatedExperiences.map((experience, index) => (
              <div
                key={`${experience.id}-${index}`}
                style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  minWidth: '300px',
                  flex: '0 0 300px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: '12rem',
                    background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  {experience.image}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#0F172A',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {experience.title}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <span
                      style={{
                        color: '#64748B',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      📅 {experience.date}
                    </span>

                    <span
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#1DB7BF'
                      }}
                    >
                      {experience.price}
                    </span>
                  </div>

                  <button
                    style={{
                      width: '100%',
                      background: '#F5C542',
                      color: '#0F172A',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '0.75rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.filter = 'brightness(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.filter = 'brightness(1)'
                    }}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de progreso */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}
          >
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentIndex === index ? '#1DB7BF' : '#D1D5DB',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}