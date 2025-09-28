'use client'

import ShoppingCart from '@/components/ShoppingCart'
import { useState } from 'react'

const cartagenaExperience = {
  id: 1,
  title: 'Cartagena Colonial',
  subtitle: 'Historia, cultura y playas caribeñas',
  description: 'Descubre la magia de la ciudad amurallada',
  longDescription: 'Sumérgete en la historia viva de Cartagena de Indias, donde cada calle empedrada cuenta una historia. Explora la arquitectura colonial, disfruta de la vibrante vida nocturna y relájate en las islas del Rosario con aguas cristalinas.',
  basePrice: '$2,890,000',
  duration: '4-7 días',
  difficulty: 'Fácil',
  location: 'Cartagena, Colombia',
  included: ['Hotel boutique en Ciudad Amurallada', 'Tour histórico con guía experto', 'Excursión Islas del Rosario', 'Cena gourmet', 'Traslados aeropuerto'],
  customizable: ['Noches adicionales', 'Upgrade a suite', 'Tour gastronómico', 'Experiencias de spa', 'Actividades acuáticas (Cartagena)'],
  images: ['🏰', '🏖️', '⛵', '🎭'],
  availableDates: ['Ene 2025', 'Feb 2025', 'Mar 2025'],
  rating: 4.8,
  reviews: 156,
  highlights: ['Ciudad Patrimonio de la Humanidad', 'Arquitectura colonial única', 'Gastronomía caribeña auténtica', 'Playas paradisíacas cercanas']
}

export default function CartagenaPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)' }}>
      {/* Hero Section */}
      <section style={{ padding: '8rem 0 4rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <div style={{ fontSize: '6rem', marginBottom: '2rem' }}>🏰</div>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            {cartagenaExperience.title}
          </h1>
          <p style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#F5C542',
            marginBottom: '2rem',
            fontWeight: '600'
          }}>
            {cartagenaExperience.subtitle}
          </p>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            {cartagenaExperience.longDescription}
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
            🛒 Reservar Experiencia - {cartagenaExperience.basePrice}
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
                <div><strong>⏱️ Duración:</strong> {cartagenaExperience.duration}</div>
                <div><strong>📍 Ubicación:</strong> {cartagenaExperience.location}</div>
                <div><strong>🎯 Dificultad:</strong> {cartagenaExperience.difficulty}</div>
                <div><strong>⭐ Rating:</strong> {cartagenaExperience.rating} ({cartagenaExperience.reviews} reseñas)</div>
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
                {cartagenaExperience.included.map((item, index) => (
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
                {cartagenaExperience.highlights.map((highlight, index) => (
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
              {cartagenaExperience.images.map((emoji, index) => (
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
              💳 Personalizar y Reservar - {cartagenaExperience.basePrice}
            </button>
          </div>
        </div>
      </section>

      {/* Shopping Cart Modal */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        experience={cartagenaExperience}
        experienceKey="cartagena"
      />
    </div>
  )
}