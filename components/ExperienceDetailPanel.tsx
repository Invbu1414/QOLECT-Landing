'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ExperienceData {
  id: number
  title: string
  subtitle: string
  description: string
  longDescription: string
  price: string
  duration: string
  difficulty: string
  location: string
  included: string[]
  notIncluded: string[]
  images: string[]
  availableDates: string[]
  rating: number
  reviews: number
  highlights: string[]
}

interface ExperienceDetailPanelProps {
  isOpen: boolean
  onClose: () => void
  experience: ExperienceData | null
}

export default function ExperienceDetailPanel({ isOpen, onClose, experience }: ExperienceDetailPanelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !experience) return null


  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % experience.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + experience.images.length) % experience.images.length)
  }

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onClick={onClose}
      />

      {/* Panel Card */}
      <div
        className="experience-panel"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
          width: '90%',
          maxWidth: '900px',
          height: '85vh',
          maxHeight: '700px',
          background: 'rgba(255, 255, 255, 0.95)','
          backdropFilter: 'blur(20px)',
          borderRadius: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
          zIndex: 1001,
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div
          className="header"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '2rem 2rem 0 0',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              {experience.title}
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', margin: '0.25rem 0 0 0', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              {experience.location}
            </p>
          </div>
          
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.5rem',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div 
          className="content" 
          style={{ 
            flex: 1,
            overflowY: 'auto',
            padding: '2rem',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
          }}
        >
          {/* Two Column Layout */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              minHeight: '100%'
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Image Gallery */}
              <div
                className="gallery"
                style={{
                  position: 'relative',
                  height: '250px',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, rgba(29, 183, 191, 0.8) 0%, rgba(15, 127, 163, 0.8) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle" x="50">${experience.images[currentImageIndex] || '🏔️'}</text></svg>')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem'
                  }}
                >
                  {experience.images[currentImageIndex] || '🏔️'}
                </div>

                {/* Navigation arrows */}
                {experience.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '1.5rem',
                        color: '#0F172A'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                        e.currentTarget.style.background = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      ←
                    </button>
                    
                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '1.5rem',
                        color: '#0F172A'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                        e.currentTarget.style.background = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      →
                    </button>
                  </>
                )}

                {/* Image indicators */}
                {experience.images.length > 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '0.5rem'
                    }}
                  >
                    {experience.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          border: 'none',
                          background: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Info */}
              <div
                className="quick-info"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    background: 'rgba(29, 183, 191, 0.2)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    border: '1px solid rgba(29, 183, 191, 0.3)'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}>Precio</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#F5C542' }}>{experience.price}</div>
                </div>
                
                <div
                  style={{
                    background: 'rgba(245, 197, 66, 0.2)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    border: '1px solid rgba(245, 197, 66, 0.3)'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}>Duración</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white' }}>{experience.duration}</div>
                </div>
              </div>

              {/* Rating */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < experience.rating ? '#F5C542' : '#E2E8F0', fontSize: '1.5rem' }}>
                      ★
                    </span>
                  ))}
                </div>
                <span style={{ fontWeight: '700', color: 'white', fontSize: '1.25rem' }}>{experience.rating}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>({experience.reviews} reseñas)</span>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Description */}
              <div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                  Descripción
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '1rem' }}>
                  {experience.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                  Lo más destacado
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {experience.highlights.map((highlight, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          background: '#F5C542',
                          borderRadius: '50%',
                          flexShrink: 0
                        }}
                      />
                      <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included/Not Included */}
              <div className="included-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    <span style={{ color: '#22C55E' }}>✓</span> Incluido
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {experience.included.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ color: '#22C55E', fontSize: '0.875rem' }}>✓</span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    <span style={{ color: '#EF4444' }}>✕</span> No incluido
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {experience.notIncluded.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ color: '#EF4444', fontSize: '0.875rem' }}>✕</span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ padding: '2rem 0 0 0', borderTop: '1px solid rgba(255, 255, 255, 0.2)', marginTop: '2rem' }}>
            <button
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                color: 'white',
                padding: '1.5rem 2rem',
                border: 'none',
                borderRadius: '1.5rem',
                fontSize: '1.25rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(29, 183, 191, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 183, 191, 0.5)'
                e.currentTarget.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 183, 191, 0.4)'
                e.currentTarget.style.filter = 'brightness(1)'
              }}
            >
              Reservar Experiencia - {experience.price}
            </button>

            <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', margin: '1rem 0 0 0' }}>
              Disponibilidad: {experience.availableDates.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .content::-webkit-scrollbar {
          width: 8px;
        }
        
        .content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .experience-panel {
            width: 95% !important;
            height: 90vh !important;
            max-height: 90vh !important;
          }
          
          .content {
            padding: 1.5rem !important;
          }
          
          .content > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .gallery {
            height: 200px !important;
          }
          
          .quick-info {
            grid-template-columns: 1fr !important;
          }
          
          .included-section {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .header {
            padding: 1rem 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .experience-panel {
            width: 100% !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
          
          .header {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  )
}