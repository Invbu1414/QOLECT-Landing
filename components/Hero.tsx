'use client'

import { useState } from 'react'
import SimpleModal from './SimpleModal'
import { useScrollReveal, useParallax } from '@/lib/hooks/useScrollReveal'

const experiencesData = {
  aventuras: {
    id: 1,
    title: 'Aventuras Extremas',
    subtitle: 'Montañas épicas y experiencias extremas',
    description: 'Conquista cumbres desafiantes y vive la adrenalina pura',
    longDescription: 'Sumérgete en aventuras que desafían tus límites físicos y mentales. Desde escalada en roca hasta parapente en los paisajes más espectaculares del mundo, cada experiencia está diseñada para conectarte con tu espíritu aventurero y crear recuerdos que durarán toda la vida.',
    price: '€899 - €2,499',
    duration: '3-14 días',
    difficulty: 'Intermedio - Avanzado',
    location: 'Alpes, Patagonia, Himalaya',
    included: ['Guía especializado', 'Equipo técnico', 'Alojamiento', 'Comidas', 'Seguro de aventura'],
    notIncluded: ['Vuelos internacionales', 'Bebidas alcohólicas', 'Propinas', 'Equipo personal'],
    images: ['🏔️', '🧗‍♂️', '🪂', '⛰️'],
    availableDates: ['Mar 2024', 'Jun 2024', 'Sep 2024'],
    rating: 4.9,
    reviews: 127,
    highlights: ['Vistas panorámicas únicas', 'Experiencia con guías locales', 'Equipamiento de alta calidad', 'Grupos reducidos máximo 8 personas']
  },
  playas: {
    id: 2,
    title: 'Paraísos Tropicales',
    subtitle: 'Playas vírgenes y aguas cristalinas',
    description: 'Descubre las costas más hermosas del planeta',
    longDescription: 'Escápate a destinos paradisíacos donde el tiempo se detiene. Desde playas privadas en islas remotas hasta experiencias de buceo en arrecifes de coral prístinos. Cada momento está diseñado para la relajación total y la conexión con la naturaleza marina.',
    price: '€1,299 - €3,899',
    duration: '5-12 días',
    difficulty: 'Fácil - Intermedio',
    location: 'Maldivas, Seychelles, Polinesia',
    included: ['Resort de lujo', 'Actividades acuáticas', 'Spa treatments', 'Gastronomía gourmet', 'Traslados privados'],
    notIncluded: ['Vuelos internacionales', 'Bebidas premium', 'Excursiones opcionales', 'Servicios personales'],
    images: ['🏝️', '🏖️', '🐠', '🏄‍♀️'],
    availableDates: ['Abr 2024', 'Jul 2024', 'Oct 2024'],
    rating: 4.8,
    reviews: 89,
    highlights: ['Playas privadas exclusivas', 'Buceo en arrecifes vírgenes', 'Resorts eco-sostenibles', 'Experiencias gastronómicas únicas']
  },
  retiros: {
    id: 3,
    title: 'Retiros de Bienestar',
    subtitle: 'Reconexión y crecimiento personal',
    description: 'Encuentra tu equilibrio interior en entornos sagrados',
    longDescription: 'Embárcate en un viaje de autodescubrimiento que combina prácticas milenarias con técnicas modernas de bienestar. Desde meditación en templos tibetanos hasta terapias de sonido en la selva amazónica, cada retiro está diseñado para sanar cuerpo, mente y espíritu.',
    price: '€799 - €2,199',
    duration: '4-10 días',
    difficulty: 'Todos los niveles',
    location: 'Bali, India, Costa Rica',
    included: ['Alojamiento eco-lodge', 'Sesiones de yoga', 'Meditaciones guiadas', 'Terapias holísticas', 'Alimentación orgánica'],
    notIncluded: ['Vuelos', 'Terapias adicionales', 'Compras personales', 'Excursiones opcionales'],
    images: ['🧘', '🕯️', '🌿', '🏞️'],
    availableDates: ['May 2024', 'Ago 2024', 'Nov 2024'],
    rating: 4.9,
    reviews: 156,
    highlights: ['Maestros certificados internacionalmente', 'Entornos naturales únicos', 'Programas personalizados', 'Comunidad global de buscadores']
  },
  cultura: {
    id: 4,
    title: 'Inmersión Cultural',
    subtitle: 'Historia viva y tradiciones milenarias',
    description: 'Vive la autenticidad de culturas ancestrales',
    longDescription: 'Sumérgete en la riqueza de civilizaciones que han moldeado nuestro mundo. Desde ceremonias tribales en África hasta festivales tradicionales en Asia, cada experiencia te conecta íntimamente con las tradiciones, el arte y la sabiduría de culturas extraordinarias.',
    price: '€1,099 - €2,799',
    duration: '6-15 días',
    difficulty: 'Fácil - Intermedio',
    location: 'Japón, Perú, Marruecos',
    included: ['Guías culturales locales', 'Experiencias auténticas', 'Alojamiento tradicional', 'Talleres artesanales', 'Ceremonias especiales'],
    notIncluded: ['Vuelos internacionales', 'Comidas no especificadas', 'Compras personales', 'Donaciones ceremoniales'],
    images: ['🏛️', '🎭', '🕌', '🗿'],
    availableDates: ['Mar 2024', 'Sep 2024', 'Dic 2024'],
    rating: 4.7,
    reviews: 98,
    highlights: ['Acceso a sitios restringidos', 'Encuentros con artesanos maestros', 'Participación en rituales sagrados', 'Grupos pequeños para mayor inmersión']
  },
  gastronomia: {
    id: 5,
    title: 'Viajes Gastronómicos',
    subtitle: 'Sabores auténticos del mundo',
    description: 'Descubre culturas a través de sus sabores únicos',
    longDescription: 'Embárcate en un viaje sensorial que despierta todos tus sentidos. Desde mercados locales hasta restaurantes con estrellas Michelin, cada experiencia gastronómica te lleva a descubrir los secretos culinarios mejor guardados del mundo, con chefs locales y productores artesanales.',
    price: '€1,499 - €3,299',
    duration: '5-12 días',
    difficulty: 'Todos los niveles',
    location: 'Francia, Tailandia, México',
    included: ['Chef guía especializado', 'Degustaciones exclusivas', 'Clases de cocina', 'Visitas a productores', 'Cenas en restaurantes premiados'],
    notIncluded: ['Vuelos', 'Bebidas alcohólicas premium', 'Compras en mercados', 'Propinas'],
    images: ['🍽️', '👨‍🍳', '🍷', '🦞'],
    availableDates: ['Abr 2024', 'Jun 2024', 'Oct 2024'],
    rating: 4.8,
    reviews: 142,
    highlights: ['Acceso a cocinas privadas', 'Encuentros con chefs reconocidos', 'Ingredientes locales únicos', 'Experiencias de campo a mesa']
  },
  safari: {
    id: 6,
    title: 'Safari Africano',
    subtitle: 'Vida salvaje en su hábitat natural',
    description: 'Conecta con la naturaleza más pura de África',
    longDescription: 'Vive la magia de África en estado puro, donde cada amanecer trae nuevas aventuras y encuentros únicos con la vida salvaje. Desde la Gran Migración hasta encuentros íntimos con los Big Five, cada safari está diseñado para crear conexiones profundas con la naturaleza y las comunidades locales.',
    price: '€2,299 - €4,999',
    duration: '7-14 días',
    difficulty: 'Fácil - Intermedio',
    location: 'Kenia, Tanzania, Sudáfrica',
    included: ['Lodge de lujo', 'Game drives diarios', 'Guía ranger especializado', 'Todas las comidas', 'Traslados en avioneta'],
    notIncluded: ['Vuelos internacionales', 'Bebidas alcohólicas', 'Actividades opcionales', 'Visas'],
    images: ['🦁', '🐘', '🦒', '🌅'],
    availableDates: ['Jul 2024', 'Sep 2024', 'Feb 2025'],
    rating: 4.9,
    reviews: 203,
    highlights: ['Avistamiento de los Big Five', 'Lodges eco-sostenibles', 'Experiencias con comunidades Masai', 'Fotografía de vida salvaje']
  }
}

export default function Hero() {
  const [selectedExperience, setSelectedExperience] = useState<any>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleCardClick = (experienceKey: keyof typeof experiencesData) => {
    setSelectedExperience(experiencesData[experienceKey])
    setIsPanelOpen(true)
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false)
    setTimeout(() => setSelectedExperience(null), 300)
  }
  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: '5rem',
            paddingBottom: '5rem'
          }}
          className="lg:grid-cols-2"
        >
          {/* Content */}
          <div style={{ textAlign: 'center' }} className="lg:text-left">
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                color: 'white',
                marginBottom: '1.5rem',
                lineHeight: '1.1',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Descubre experiencias{' '}
              <span style={{ color: '#F5C542', display: 'block' }}>
                inolvidables
              </span>
            </h1>
            
            <p 
              style={{
                fontSize: '1.125rem',
                color: 'white',
                marginBottom: '2.5rem',
                maxWidth: '32rem',
                margin: '0 auto 2.5rem auto',
                fontWeight: '500',
                lineHeight: '1.6',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}
              className="lg:mx-0"
            >
              Viaja con propósito y transforma tu manera de ver el mundo
            </p>

            <button
              style={{
                background: '#F5C542',
                color: '#0F172A',
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
                e.currentTarget.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.filter = 'brightness(1)'
              }}
            >
              Explorar experiencias
            </button>
          </div>

          {/* Book stack of cards */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
            className="lg:justify-end"
          >
            <div 
              style={{
                position: 'relative',
                width: '45rem',
                height: '26rem'
              }}
            >
              {/* Card 1 - Aventuras */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(0px)',
                  zIndex: 20,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick('aventuras')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(0px) scale(1.1) rotateY(-8deg) rotateX(2deg)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '20';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🏔️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Aventuras
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Montañas épicas y experiencias extremas
                  </p>
                </div>
                
                <div 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: '#F5C542',
                    color: '#0F172A',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.625rem',
                    fontWeight: '700'
                  }}
                >
                  ✨
                </div>
              </div>

              {/* Card 2 - Playas */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(45px)',
                  zIndex: 19,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick('playas')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(45px) scale(1.1) rotateY(-6deg) rotateX(1deg)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(45px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '19';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🏝️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Playas
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Paraísos tropicales únicos
                  </p>
                </div>
              </div>

              {/* Card 3 - Retiros */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(90px)',
                  zIndex: 18,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick('retiros')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(90px) scale(1.1) rotateY(-4deg) rotateX(1deg)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(90px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '18';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🧘
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Retiros
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Bienestar y crecimiento personal
                  </p>
                </div>
              </div>

              {/* Card 4 - Cultura */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(135px)',
                  zIndex: 17,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick('cultura')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(135px) scale(1.1) rotateY(-2deg) rotateX(0.5deg)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(135px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '17';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🏛️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Cultura
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Historia viva y tradiciones
                  </p>
                </div>
              </div>

              {/* Card 5 - Gastronomía */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(180px)',
                  zIndex: 16,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick('gastronomia')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(180px) scale(1.1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(180px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '16';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🍽️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Gastronomía
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Sabores auténticos del mundo
                  </p>
                </div>
              </div>

              {/* Card 6 - Safari */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(225px)',
                  zIndex: 15,
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick('safari')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(225px) scale(1.1) rotateY(2deg) rotateX(-0.5deg)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'left center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(225px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = '15';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🦁
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Safari
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Vida salvaje africana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Simple Modal for Testing */}
      <SimpleModal 
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        experience={selectedExperience}
      />
    </section>
  )
}