'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    id: 1,
    title: "¿Qué es Qolect? 🌍",
    description: "Somos una plataforma que conecta viajeros apasionados con experiencias auténticas y transformadoras alrededor del mundo.",
    gradient: "linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)"
  },
  {
    id: 2,
    title: "Nuestra Misión ✨",
    description: "Democratizar el acceso a experiencias de viaje únicas, conectando culturas y creando memorias que duran toda la vida.",
    gradient: "linear-gradient(135deg, #F5C542 0%, #E4B429 100%)"
  },
  {
    id: 3,
    title: "Cómo Funciona 🚀",
    description: "1. Explora experiencias curadas • 2. Conecta con viajeros afines • 3. Vive aventuras inolvidables",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
  },
  {
    id: 4,
    title: "¿Listo para la Aventura? 🎯",
    description: "Únete a miles de viajeros que ya han descubierto el mundo de manera diferente.",
    gradient: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)"
  }
]

export default function FramerMotionStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '5rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
          1. Framer Motion Stack
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Animaciones suaves basadas en physics</p>
      </div>

      <div ref={containerRef} style={{ minHeight: '300vh', position: 'relative' }}>
        {cards.map((card, index) => {
          const start = index * 0.25
          const end = start + 0.5

          const y = useTransform(scrollYProgress, [start, end], [100, -100])
          const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])
          const opacity = useTransform(scrollYProgress, [start, end], [0.6, 1])

          return (
            <motion.div
              key={card.id}
              style={{
                position: 'sticky',
                top: `${20 + index * 20}px`,
                y,
                scale,
                opacity,
                zIndex: cards.length - index,
                margin: '2rem auto',
                maxWidth: '900px',
                width: '85%',
                height: '250px',
                background: card.gradient,
                borderRadius: '20px',
                padding: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: card.id === 2 ? '#0F172A' : 'white',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  position: 'relative'
                }}>
                  {card.title}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  opacity: '0.95',
                  maxWidth: '600px',
                  position: 'relative'
                }}>
                  {card.description}
                </p>
              </div>
              {card.id === 4 && (
                <button style={{
                  background: 'white',
                  color: '#BE185D',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Explorar Experiencias
                </button>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}