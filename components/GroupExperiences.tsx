'use client'

import { useState, useEffect } from 'react'
import { Experience } from '@/lib/api'
import Image from 'next/image'

interface GroupExperiencesProps {
  experiences: Experience[]
}

export default function GroupExperiences({ experiences }: GroupExperiencesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !isAnimating || isPaused || !experiences.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsAnimating(false)
      return
    }

    let interval: NodeJS.Timeout

    const initialDelay = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length)
      }, 4000)
    }, 2000)

    return () => {
      clearTimeout(initialDelay)
      if (interval) clearInterval(interval)
    }
  }, [experiences.length, isAnimating, isPaused, isMounted])

  if (!experiences || experiences.length === 0) {
    return null
  }

  const benefits = [
    {
      icon: '🎯',
      title: 'Personalización Total',
      description: 'Adaptamos cada experiencia al tamaño y dinámicas específicas de tu grupo'
    },
    {
      icon: '💰',
      title: 'Descuentos Progresivos',
      description: 'Mejores precios por persona según el tamaño del grupo, hasta 30% de descuento'
    },
    {
      icon: '📋',
      title: 'Coordinación Completa',
      description: 'Nos encargamos de toda la logística para que solo te preocupes por disfrutar'
    },
    {
      icon: '🔄',
      title: 'Flexibilidad Total',
      description: 'Cambios de fecha sin costo adicional hasta 48h antes de la experiencia'
    }
  ]

  return (
    <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1rem'
            }}
          >
            Nuestras Experiencias
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto' }}>
            Descubre destinos únicos que transformarán tu manera de viajar. Cada experiencia está diseñada para crear recuerdos inolvidables.
          </p>

          {/* Controles de animación */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              fontSize: '0.875rem',
              color: '#64748B',
              background: '#f1f5f9',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem'
            }}>
              Experiencia {currentIndex + 1} de {experiences.length} |
              {isAnimating ? (isPaused ? ' 🟡 Pausado' : ' 🟢 Rotación activa') : ' 🔴 Manual'}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                {isPaused ? '▶️ Reanudar' : '⏸️ Pausar'}
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
                {isAnimating ? '🔄 Auto' : '📌 Manual'}
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
                ➡️ Siguiente
              </button>
            </div>
          </div>
        </div>

        {/* Experiencias Cards con animación en abanico */}
        <div
          style={{
            position: 'relative',
            height: '500px',
            marginBottom: '5rem',
            perspective: '1000px'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {experiences.map((experience, index) => {
            const isActive = index === currentIndex
            const offset = index - currentIndex
            const absOffset = Math.abs(offset)

            return (
              <div
                key={experience.plan_id}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '320px',
                  height: '420px',
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 40}px)
                    translateZ(${-absOffset * 50}px)
                    rotateY(${offset * 8}deg)
                    scale(${isActive ? 1 : 0.9 - absOffset * 0.1})
                  `,
                  opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
                  zIndex: experiences.length - absOffset,
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '1.5rem',
                    padding: '0',
                    boxShadow: isActive
                      ? '0 25px 60px rgba(0, 0, 0, 0.2)'
                      : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    border: isActive
                      ? '2px solid rgba(29, 183, 191, 0.3)'
                      : '1px solid rgba(255, 255, 255, 0.3)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <Image
                      src={experience.plan_image || '/placeholder-experience.jpg'}
                      alt={experience.plan_title}
                      fill
                      className="object-cover"
                    />
                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#0F172A'
                    }}>
                      {experience.categoria || 'Aventura'}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#0F172A',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3'
                      }}
                    >
                      {experience.plan_title}
                    </h3>

                    <p
                      style={{
                        color: '#64748B',
                        lineHeight: '1.6',
                        marginBottom: 'auto',
                        flexGrow: 1,
                        fontSize: '0.875rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {experience.descripcioncorta || experience.descripcion}
                    </p>

                    {/* Stats */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(226, 232, 240, 0.5)'
                      }}
                    >
                      <div>
                        <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Rating</p>
                        <p style={{ color: '#F5C542', fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>
                          ⭐ {experience.plan_rating || '4.8'}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Precio</p>
                        <p style={{ color: '#1DB7BF', fontWeight: '700', fontSize: '1rem', margin: 0 }}>
                          ${experience.precio.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

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
                  transition: 'all 0.3s ease',
                  transform: currentIndex === index ? 'scale(1.3)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
            borderRadius: '2rem',
            padding: '3rem',
            marginBottom: '4rem'
          }}
        >
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0F172A',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            Ventajas de reservar con Qolect
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    fontSize: '1.5rem'
                  }}
                >
                  {benefit.icon}
                </div>
                <h4
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '0.75rem'
                  }}
                >
                  {benefit.title}
                </h4>
                <p
                  style={{
                    color: '#64748B',
                    lineHeight: '1.6',
                    fontSize: '0.875rem'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
            borderRadius: '2rem',
            padding: '3rem',
            color: 'white'
          }}
        >
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}
          >
            ¿Listo para tu próxima aventura?
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: 0.9
            }}
          >
            Nuestro equipo te ayudará a diseñar la experiencia perfecta
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button
              style={{
                background: 'white',
                color: '#1DB7BF',
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Consulta personalizada
            </button>

            <button
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                border: '2px solid white',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#1DB7BF'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Ver todas las experiencias
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}