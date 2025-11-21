'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const cards = [
  {
    id: 1,
    title: "¿Qué es Qolect?",
    emoji: "🌍",
    description: "Somos una plataforma que conecta viajeros apasionados con experiencias auténticas y transformadoras alrededor del mundo.",
    gradient: "linear-gradient(135deg, #7DD3FC 0%, #38BDF8 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    features: ["Experiencias curadas", "Viajeros verificados", "Soporte 24/7"]
  },
  {
    id: 2,
    title: "Nuestra Misión",
    emoji: "✨",
    description: "Democratizar el acceso a experiencias de viaje únicas, conectando culturas y creando memorias que duran toda la vida.",
    gradient: "linear-gradient(135deg, #FEF08A 0%, #FACC15 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E",
    features: ["Conexiones globales", "Cultura auténtica", "Impacto positivo"]
  },
  {
    id: 3,
    title: "Cómo Funciona",
    emoji: "🚀",
    description: "Proceso simple y efectivo para conectar con experiencias únicas y viajeros afines en destinos increíbles.",
    gradient: "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpolygon points='10,0 20,10 10,20 0,10'/%3E%3C/g%3E%3C/svg%3E",
    features: ["Explora", "Conecta", "Vive"]
  },
  {
    id: 4,
    title: "¿Listo para la Aventura?",
    emoji: "🎯",
    description: "Únete a miles de viajeros que ya han descubierto el mundo de manera diferente con Qolect.",
    gradient: "linear-gradient(135deg, #FBCFE8 0%, #F472B6 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='22' cy='22' r='3'/%3E%3Ccircle cx='8' cy='22' r='3'/%3E%3Ccircle cx='36' cy='22' r='3'/%3E%3C/g%3E%3C/svg%3E",
    features: ["Aventuras únicas", "Comunidad global", "Memorias eternas"]
  }
]

export default function AOSStack() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 0,
      disable: false,
      startEvent: 'DOMContentLoaded'
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <section id="que-es-qolect" style={{
      background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.1) 0%, #F8FAFC 20%, #E2E8F0 70%, #CBD5E1 100%)',
      padding: '0 0 5rem 0',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '-2rem'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%)',
        filter: 'blur(40px)'
      }} />

      <div style={{
        position: 'absolute',
        top: '60%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(196, 181, 253, 0.04) 100%)',
        filter: 'blur(50px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '20%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(251, 207, 232, 0.05) 100%)',
        filter: 'blur(35px)'
      }} />

      <div style={{ minHeight: '250vh', position: 'relative', padding: '2rem 0' }}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 150}
            data-aos-offset="200"
            data-aos-anchor-placement="top-bottom"
            style={{
              position: 'sticky',
              top: `${30 + index * 15}px`,
              zIndex: cards.length - index,
              margin: '2rem auto',
              maxWidth: '1000px',
              width: '90%',
              minHeight: '300px',
              background: card.gradient,
              backgroundImage: `url("${card.pattern}")`,
              borderRadius: '24px',
              padding: '0',
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              color: '#1F2937',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 30px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              overflow: 'hidden',
            }}
          >
            {/* Glassmorphism overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(5px)',
              zIndex: 1
            }} />

            {/* Content area */}
            <div style={{
              flex: 1,
              padding: '3rem',
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}>
                {card.emoji}
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {card.title}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                opacity: '0.9',
                marginBottom: '2rem',
                maxWidth: '500px'
              }}>
                {card.description}
              </p>

              {/* Features */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {card.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      color: '#374151'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side with decorative elements */}
            <div style={{
              width: '200px',
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              {/* Large emoji background */}
              <div style={{
                fontSize: '8rem',
                opacity: '0.2',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                {card.emoji}
              </div>

              {/* Button for last card */}
              {card.id === 4 && (
                <button
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#BE185D',
                    padding: '1rem 2rem',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 3
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Explorar Experiencias
                </button>
              )}
            </div>

            {/* Floating decoration */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              filter: 'blur(20px)',
              zIndex: 0
            }} />
          </div>
        ))}
      </div>

      {/* Wave transition to next section */}
      <div style={{
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: '100%',
        height: '100px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(15, 127, 163, 0.1) 100%)',
        clipPath: 'polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)'
      }} />
    </section>
  )
}
