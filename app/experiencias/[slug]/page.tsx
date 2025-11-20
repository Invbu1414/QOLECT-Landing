'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

// Misma data de experiencias (después puedes moverla a un archivo compartido)
const experiences = [
  {
    id: 1,
    slug: "retiro-bienestar-costa-rica",
    title: "Retiro de Bienestar en Costa Rica",
    subtitle: "Naturaleza y relajación",
    description: "Sumérgete en un paraíso tropical donde la selva se encuentra con el océano. Yoga al amanecer, tratamientos spa naturales y gastronomía orgánica.",
    fullDescription: "Descubre la paz interior en este retiro de bienestar de 7 días en la costa pacífica de Costa Rica. Despierta con el sonido de las olas y comienza cada día con sesiones de yoga al amanecer frente al océano. Disfruta de tratamientos spa con ingredientes naturales locales, practica meditación en la selva tropical y degusta una exquisita gastronomía orgánica preparada con productos de la región.",
    date: "15-22 Marzo 2024",
    duration: "7 días",
    price: "€1,299",
    icon: "🌴",
    color: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
    imageUrl: "/images/experiences/costa-rica.jpg",
    highlights: [
      "Yoga diario frente al océano",
      "Tratamientos spa naturales",
      "Gastronomía orgánica local",
      "Meditación guiada en la selva",
      "Excursiones a playas vírgenes",
      "Alojamiento eco-friendly de lujo"
    ],
    included: [
      "Alojamiento 7 noches",
      "Todas las comidas y bebidas",
      "Clases de yoga diarias",
      "3 tratamientos spa",
      "Excursiones guiadas",
      "Traslados aeropuerto"
    ]
  },
  {
    id: 2,
    slug: "aventura-andes-peruanos",
    title: "Aventura en los Andes Peruanos",
    subtitle: "Montañas milenarias",
    description: "Trekking hacia Machu Picchu, noches bajo las estrellas andinas y conexión con culturas ancestrales. Una experiencia transformadora.",
    fullDescription: "Embárcate en una aventura épica de 8 días por los majestuosos Andes peruanos. Camina por antiguos senderos incas, atraviesa valles sagrados y culmina tu travesía en la mística ciudadela de Machu Picchu. Conecta con comunidades locales, acampa bajo cielos estrellados y vive una experiencia que cambiará tu perspectiva del mundo.",
    date: "10-18 Abril 2024",
    duration: "8 días",
    price: "€899",
    icon: "🏔️",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    imageUrl: "/images/experiences/peru.jpg",
    highlights: [
      "Trekking al Machu Picchu",
      "Valle Sagrado de los Incas",
      "Camping bajo estrellas andinas",
      "Visitas a comunidades quechuas",
      "Gastronomía peruana auténtica",
      "Guías expertos locales"
    ],
    included: [
      "Alojamiento y camping",
      "Todas las comidas",
      "Guías certificados",
      "Entradas a sitios arqueológicos",
      "Equipo de trekking",
      "Transporte interno"
    ]
  },
  // Agrega las demás experiencias según necesites
]

export default function ExperienciaDetalle() {
  const params = useParams()
  const router = useRouter()
  const [numPersonas, setNumPersonas] = useState(1)

  const experience = experiences.find(exp => exp.slug === params.slug)

  if (!experience) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Experiencia no encontrada</h1>
        <button onClick={() => router.push('/')}>Volver al inicio</button>
      </div>
    )
  }

  const precioBase = parseInt(experience.price.replace(/[€,]/g, ''))
  const precioTotal = precioBase * numPersonas

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Hero con imagen */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '500px' }}>
        {experience.imageUrl && (
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)'
            }} />
          </div>
        )}

        <div className="container" style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '3rem 1rem'
        }}>
          <button
            onClick={() => router.push('/')}
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0.75rem',
              padding: '0.75rem 1.5rem',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            ← Volver
          </button>

          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem'
          }}>
            {experience.icon}
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)'
          }}>
            {experience.title}
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500',
            textShadow: '0 1px 10px rgba(0,0,0,0.5)'
          }}>
            {experience.subtitle}
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Columna izquierda - Info */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Info rápida */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
                borderRadius: '1rem',
                padding: '1.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Duración</p>
                <p style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '700' }}>{experience.duration}</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
                borderRadius: '1rem',
                padding: '1.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Fecha</p>
                <p style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '700' }}>{experience.date}</p>
              </div>
            </div>

            {/* Descripción completa */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '1.5rem'
              }}>
                Sobre esta experiencia
              </h2>
              <p style={{
                color: '#64748B',
                fontSize: '1.125rem',
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                {experience.fullDescription || experience.description}
              </p>
            </div>

            {/* Highlights */}
            {experience.highlights && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '1.5rem'
                }}>
                  Highlights
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {experience.highlights.map((highlight, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: '#F8FAFC',
                      borderRadius: '0.75rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>✨</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Incluye */}
            {experience.included && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '1.5rem'
                }}>
                  Qué incluye
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  {experience.included.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <span style={{ color: '#10B981', fontSize: '1.25rem' }}>✓</span>
                      <span style={{ color: '#475569' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Columna derecha - Reserva */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              position: 'sticky',
              top: '2rem',
              background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '2px solid rgba(29, 183, 191, 0.2)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
              }}>
                <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Precio por persona</p>
                <p style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  background: experience.color,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {experience.price}
                </p>
              </div>

              {/* Selector de personas */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  color: '#0F172A',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  Número de personas
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={numPersonas}
                  onChange={(e) => setNumPersonas(parseInt(e.target.value) || 1)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #E2E8F0',
                    borderRadius: '0.75rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}
                />
              </div>

              {/* Total */}
              <div style={{
                background: 'rgba(29, 183, 191, 0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Precio total</p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#1DB7BF'
                }}>
                  €{precioTotal.toLocaleString()}
                </p>
              </div>

              {/* Botón de reserva */}
              <button
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                  color: 'white',
                  padding: '1.25rem',
                  border: 'none',
                  borderRadius: '1rem',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(29, 183, 191, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Reservar ahora
              </button>

              <button
                style={{
                  width: '100%',
                  background: 'white',
                  color: '#1DB7BF',
                  padding: '1rem',
                  border: '2px solid #1DB7BF',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1DB7BF'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.color = '#1DB7BF'
                }}
              >
                Consultar disponibilidad
              </button>

              <p style={{
                color: '#64748B',
                fontSize: '0.875rem',
                textAlign: 'center',
                marginTop: '1.5rem'
              }}>
                🔒 Reserva segura • Cancelación flexible
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
