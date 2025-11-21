'use client'

import { useEffect, useState } from 'react'
import { Experience, getFeaturedExperiences } from '@/lib/api'
import Image from 'next/image'

export default function BrandsCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)

    // Fetch experiences
    getFeaturedExperiences().then(setExperiences)

    return () => clearTimeout(timer)
  }, [])

  if (!experiences || experiences.length === 0) {
    return null
  }

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
          Experiencias Destacadas
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
          animation: 'scroll-brands 40s linear infinite',
          width: 'fit-content'
        }}>
          {/* Primera serie */}
          {experiences.map((experience) => (
            <div
              key={`first-${experience.plan_id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minWidth: '280px',
                height: '200px',
                margin: '0 1rem',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '120px', overflow: 'hidden' }}>
                <Image
                  src={experience.plan_image || '/placeholder-experience.jpg'}
                  alt={experience.plan_title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '0.75rem', width: '100%' }}>
                <h4 style={{
                  color: '#0F172A',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  marginBottom: '0.25rem',
                  lineHeight: '1.2',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {experience.plan_title}
                </h4>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#1DB7BF',
                    fontSize: '1rem',
                    fontWeight: '700'
                  }}>
                    ${experience.precio.toLocaleString()}
                  </span>
                  <span style={{
                    color: '#F5C542',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    ⭐ {experience.plan_rating || '4.8'}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Segunda serie para efecto infinito */}
          {experiences.map((experience) => (
            <div
              key={`second-${experience.plan_id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minWidth: '280px',
                height: '200px',
                margin: '0 1rem',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '120px', overflow: 'hidden' }}>
                <Image
                  src={experience.plan_image || '/placeholder-experience.jpg'}
                  alt={experience.plan_title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '0.75rem', width: '100%' }}>
                <h4 style={{
                  color: '#0F172A',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  marginBottom: '0.25rem',
                  lineHeight: '1.2',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {experience.plan_title}
                </h4>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#1DB7BF',
                    fontSize: '1rem',
                    fontWeight: '700'
                  }}>
                    ${experience.precio.toLocaleString()}
                  </span>
                  <span style={{
                    color: '#F5C542',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    ⭐ {experience.plan_rating || '4.8'}
                  </span>
                </div>
              </div>
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