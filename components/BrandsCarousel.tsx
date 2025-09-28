'use client'

import { useEffect, useState } from 'react'

const brands = [
  { name: 'Avianca', logo: '✈️' },
  { name: 'Hilton', logo: '🏨' },
  { name: 'Mastercard', logo: '💳' },
  { name: 'TripAdvisor', logo: '🌟' },
  { name: 'Booking.com', logo: '🏠' },
  { name: 'Expedia', logo: '🧳' },
  { name: 'Colombian Tourism', logo: '🇨🇴' },
  { name: 'National Geographic', logo: '📸' },
  { name: 'Lonely Planet', logo: '🗺️' },
  { name: 'Amadeus', logo: '🌐' }
]

export default function BrandsCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, rgba(29, 183, 191, 0.95) 0%, rgba(15, 127, 163, 0.9) 50%, rgba(248, 250, 252, 0.1) 100%)',
        padding: '4rem 0 6rem 0',
        backdropFilter: 'blur(15px)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 1s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Wave transition from headline */}
      <div style={{
        position: 'absolute',
        top: '-2px',
        left: 0,
        width: '100%',
        height: '50px',
        background: 'linear-gradient(180deg, rgba(29, 183, 191, 1) 0%, transparent 100%)',
        clipPath: 'polygon(0 0%, 100% 0%, 100% 80%, 0% 100%)'
      }} />

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-30px',
        right: '-30px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(245, 197, 66, 0.2)',
        filter: 'blur(30px)'
      }} />

      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1.1rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '2rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Colaboramos con las mejores marcas
        </p>
      </div>

      {/* Carrusel infinito */}
      <div style={{
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          animation: 'scroll-brands 30s linear infinite',
          width: 'fit-content'
        }}>
          {/* Primera serie de logos */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '180px',
                height: '120px',
                margin: '0 1rem',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.5rem'
              }}>
                {brand.logo}
              </div>
              <span style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.85rem',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                {brand.name}
              </span>
            </div>
          ))}

          {/* Segunda serie de logos para efecto infinito */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '180px',
                height: '120px',
                margin: '0 1rem',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.5rem'
              }}>
                {brand.logo}
              </div>
              <span style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.85rem',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}