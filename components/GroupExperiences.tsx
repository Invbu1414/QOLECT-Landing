'use client'

import { useState, useEffect } from 'react'

export default function GroupExperiences() {
  const experiences = [
    {
      id: 1,
      title: "Retiro de Bienestar en Costa Rica",
      subtitle: "Naturaleza y relajación",
      description: "Sumérgete en un paraíso tropical donde la selva se encuentra con el océano. Yoga al amanecer, tratamientos spa naturales y gastronomía orgánica.",
      date: "15-22 Marzo 2024",
      duration: "7 días",
      price: "€1,299",
      icon: "🌴",
      color: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
      image: "🌺"
    },
    {
      id: 2,
      title: "Aventura en los Andes Peruanos",
      subtitle: "Montañas milenarias",
      description: "Trekking hacia Machu Picchu, noches bajo las estrellas andinas y conexión con culturas ancestrales. Una experiencia transformadora.",
      date: "10-18 Abril 2024",
      duration: "8 días",
      price: "€899",
      icon: "🏔️",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "⛰️"
    },
    {
      id: 3,
      title: "Inmersión Cultural en Japón",
      subtitle: "Tradición y modernidad",
      description: "Desde templos zen hasta la tecnología más avanzada. Ceremonia del té, jardines imperiales y la vibrante vida nocturna de Tokio.",
      date: "5-15 Mayo 2024",
      duration: "10 días",
      price: "€2,199",
      icon: "🏯",
      color: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
      image: "🎌"
    },
    {
      id: 4,
      title: "Safari Fotográfico en Kenia",
      subtitle: "Vida salvaje africana",
      description: "Captura la majestuosidad de la sabana africana. Big Five, migración de ñus y atardeceres que quedarán grabados para siempre.",
      date: "20-28 Junio 2024",
      duration: "8 días",
      price: "€1,899",
      icon: "🦁",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "🐘"
    },
    {
      id: 5,
      title: "Relajación en las Maldivas",
      subtitle: "Paraíso sobre el agua",
      description: "Villas sobre aguas cristalinas, coral pristino y la definición misma del lujo tropical. Desconexión total del mundo exterior.",
      date: "1-8 Julio 2024",
      duration: "7 días",
      price: "€2,599",
      icon: "🏝️",
      color: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)",
      image: "🐠"
    },
    {
      id: 6,
      title: "Exploración de la Patagonia",
      subtitle: "Tierra del fin del mundo",
      description: "Glaciares milenarios, fiordos infinitos y la naturaleza más salvaje del planeta. Aventura pura en el fin del mundo.",
      date: "15-25 Agosto 2024",
      duration: "10 días",
      price: "€1,499",
      icon: "🗻",
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      image: "🐧"
    },
    {
      id: 7,
      title: "Tour Gastronómico por Italia",
      subtitle: "Sabores auténticos",
      description: "De Toscana a Sicilia, descubre los secretos de la cocina italiana. Cooking classes, vineyards tours y mercados tradicionales.",
      date: "10-17 Septiembre 2024",
      duration: "7 días",
      price: "€1,799",
      icon: "🍝",
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      image: "🍷"
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
          console.log('Group experiences animating to index:', nextIndex)
          return nextIndex
        })
      }, 4000) // 4 segundos por experiencia (tiempo optimal para leer)
    }, 2000) // 2 segundos de delay inicial

    return () => {
      clearTimeout(initialDelay)
      if (interval) clearInterval(interval)
    }
  }, [experiences.length, isAnimating, isPaused, isMounted])

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
            {/* Estado actual */}
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
                key={experience.id}
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
                    padding: '2rem',
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
                  {/* Background gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: experience.color,
                      opacity: isActive ? 0.1 : 0.05,
                      transition: 'opacity 0.4s ease',
                      borderRadius: '1.5rem'
                    }}
                  />

                  {/* Floating image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      fontSize: '3rem',
                      opacity: 0.15,
                      transition: 'all 0.4s ease',
                      transform: isActive ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    {experience.image}
                  </div>

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: '4rem',
                        height: '4rem',
                        background: experience.color,
                        borderRadius: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        fontSize: '1.75rem'
                      }}
                    >
                      {experience.icon}
                    </div>

                    {/* Title & Subtitle */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#0F172A',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3'
                      }}
                    >
                      {experience.title}
                    </h3>

                    <p
                      style={{
                        color: '#1DB7BF',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }}
                    >
                      {experience.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        color: '#64748B',
                        lineHeight: '1.6',
                        marginBottom: 'auto',
                        flexGrow: 1,
                        fontSize: '0.875rem'
                      }}
                    >
                      {experience.description}
                    </p>

                    {/* Stats */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '1.5rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid rgba(226, 232, 240, 0.5)'
                      }}
                    >
                      <div>
                        <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Fecha</p>
                        <p style={{ color: '#0F172A', fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>{experience.date}</p>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Duración</p>
                        <p style={{ color: '#64748B', fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>{experience.duration}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Precio</p>
                        <p style={{ color: '#1DB7BF', fontWeight: '700', fontSize: '1rem', margin: 0 }}>{experience.price}</p>
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
            Ventajas de reservar en grupo
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
            ¿Listo para planificar tu experiencia grupal?
          </h3>
          <p 
            style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: 0.9
            }}
          >
            Nuestro equipo te ayudará a diseñar la experiencia perfecta para tu grupo
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
              Ver experiencias grupales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}