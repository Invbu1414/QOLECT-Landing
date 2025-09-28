'use client'

import ShoppingCart from '@/components/ShoppingCart'
import { useState } from 'react'

const cocoraExperience = {
  id: 2,
  title: 'Valle del Cocora',
  subtitle: 'Palmas de cera y paisajes andinos',
  description: 'Aventura en el corazón del Eje Cafetero',
  longDescription: 'Camina entre las palmas de cera más altas del mundo en un paisaje de ensueño. Descubre fincas cafeteras tradicionales, prueba el mejor café del mundo y disfruta de la hospitalidad paisa en pueblos coloridos como Salento.',
  basePrice: '$1,950,000',
  duration: '3-5 días',
  difficulty: 'Intermedio',
  location: 'Quindío, Colombia',
  included: ['Finca cafetera con alojamiento', 'Caminata Valle del Cocora', 'Tour del café completo', 'Comidas típicas', 'Transporte privado'],
  customizable: ['Noches extra en finca', 'Tour de aventura (canopy)', 'Taller de barismo', 'Visita pueblos adicionales', 'Experiencia gastronómica'],
  images: ['🌴', '☕', '🥾', '🏔️'],
  availableDates: ['Todo el año'],
  rating: 4.9,
  reviews: 203,
  highlights: ['Palmas de cera gigantes', 'Mejor café del mundo', 'Paisajes andinos únicos', 'Cultura cafetera auténtica']
}

export default function CocoraPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)' }}>
      {/* Hero Section */}
      <section style={{ padding: '8rem 0 4rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <div style={{ fontSize: '6rem', marginBottom: '2rem' }}>🌴</div>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            {cocoraExperience.title}
          </h1>
          <p style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#F5C542',
            marginBottom: '2rem',
            fontWeight: '600'
          }}>
            {cocoraExperience.subtitle}
          </p>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            {cocoraExperience.longDescription}
          </p>

          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: '#F5C542',
              color: '#0F172A',
              border: 'none',
              padding: '1.5rem 3rem',
              borderRadius: '1rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)'
            }}
          >
            🛒 Reservar Experiencia - {cocoraExperience.basePrice}
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {/* Quick Info */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '1.5rem',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#F5C542' }}>📋 Información Básica</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div><strong>⏱️ Duración:</strong> {cocoraExperience.duration}</div>
                <div><strong>📍 Ubicación:</strong> {cocoraExperience.location}</div>
                <div><strong>🎯 Dificultad:</strong> {cocoraExperience.difficulty}</div>
                <div><strong>⭐ Rating:</strong> {cocoraExperience.rating} ({cocoraExperience.reviews} reseñas)</div>
              </div>
            </div>

            {/* Included */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '1.5rem',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#F5C542' }}>✅ Incluido</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cocoraExperience.included.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '0.5rem' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '1.5rem',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#F5C542' }}>🌟 Destacados</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cocoraExperience.highlights.map((highlight, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '0.5rem' }}>🌟</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery Preview */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem' }}>🖼️ Galería de Imágenes</h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              {cocoraExperience.images.map((emoji, index) => (
                <div key={index} style={{
                  width: '150px',
                  height: '150px',
                  background: 'rgba(245, 197, 66, 0.2)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #F5C542 0%, #E6A635 100%)',
                color: '#0F172A',
                border: 'none',
                padding: '1.5rem 4rem',
                borderRadius: '1rem',
                fontSize: '1.3rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              💳 Personalizar y Reservar - {cocoraExperience.basePrice}
            </button>
          </div>
        </div>
      </section>

      {/* Shopping Cart Modal */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        experience={cocoraExperience}
        experienceKey="cocora"
      />
    </div>
  )
}