'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from '../contexts/LanguageContext'
import AOSStack from '@/components/ScrollAnimations/AOSStack'
import BrandsCarousel from '@/components/BrandsCarousel'

// Experiencias de viaje en Colombia
const colombiaExperiences = {
  cartagena: {
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
  },
  cocora: {
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
  },
  amazonas: {
    id: 3,
    title: 'Amazonas Colombiano',
    subtitle: 'Inmersión en la selva tropical',
    description: 'Conecta con la naturaleza más pura',
    longDescription: 'Adéntrate en el pulmón del mundo y descubre la biodiversidad más rica del planeta. Navega por el río Amazonas, conoce comunidades indígenas, observa delfines rosados y experimenta la magia de la selva nocturna.',
    basePrice: '$3,450,000',
    duration: '4-8 días',
    difficulty: 'Intermedio-Avanzado',
    location: 'Leticia, Amazonas',
    included: ['Lodge en plena selva', 'Navegación río Amazonas', 'Encuentro comunidades indígenas', 'Observación fauna nocturna', 'Guía especializado'],
    customizable: ['Días adicionales (Amazonas)', 'Expedición avanzada', 'Ceremonia ancestral', 'Pesca deportiva', 'Investigación científica'],
    images: ['🐅', '🦋', '🛶', '🌿'],
    availableDates: ['May-Sep (época seca)', 'Oct-Abr (época lluviosa)'],
    rating: 4.7,
    reviews: 89,
    highlights: ['Biodiversidad única mundial', 'Comunidades indígenas auténticas', 'Delfines rosados', 'Experiencia selvática total']
  },
  tayrona: {
    id: 4,
    title: 'Parque Tayrona',
    subtitle: 'Selva tropical y playas vírgenes',
    description: 'Donde la Sierra Nevada se encuentra con el mar',
    longDescription: 'Explora uno de los parques más biodiversos de Colombia, donde playas de arena dorada se encuentran con selva tropical. Descubre la cultura indígena Kogui, camina senderos ancestrales y relájate en playas paradisíacas.',
    basePrice: '$2,150,000',
    duration: '3-6 días',
    difficulty: 'Intermedio',
    location: 'Santa Marta, Magdalena',
    included: ['Camping/Cabañas ecológicas', 'Entrada al parque', 'Senderismo guiado', 'Encuentro comunidad Kogui', 'Comidas orgánicas'],
    customizable: ['Upgrade alojamiento', 'Días adicionales (Tayrona)', 'Tour arqueológico', 'Actividades acuáticas (Tayrona)', 'Retiro wellness'],
    images: ['🏝️', '🦎', '🥾', '🏕️'],
    availableDates: ['Dic-Abr', 'Jun-Ago'],
    rating: 4.6,
    reviews: 134,
    highlights: ['Playas vírgenes protegidas', 'Biodiversidad excepcional', 'Cultura indígena viva', 'Senderismo tropical único']
  }
}

// Respiración de Palabras - Animación definitiva
function BreathingWords({ text, className = "", style = {}, delay = 0, isPageLoading = false }: {
  text: string, className?: string, style?: React.CSSProperties, delay?: number, isPageLoading?: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    if (!isPageLoading) {
      const timer = setTimeout(() => setIsVisible(true), delay)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [delay, isPageLoading])

  return (
    <span className={className} style={{ ...style, display: 'inline-block' }}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: `all 0.8s ease ${index * 200}ms`,
            animation: isVisible ? `breatheScale ${3 + (index % 2)}s ease-in-out infinite ${index * 0.5}s` : 'none',
            marginRight: index < words.length - 1 ? '0.4em' : '0'
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}


// Simple BlurText for other elements
function BlurText({ text, className = "", style = {}, delay = 0, isPageLoading = false }: { text: string, className?: string, style?: React.CSSProperties, delay?: number, isPageLoading?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPageLoading) {
      const timer = setTimeout(() => setIsVisible(true), delay)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [delay, isPageLoading])

  return (
    <span
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        wordBreak: 'keep-all',
        hyphens: 'none',
        WebkitHyphens: 'none',
        msHyphens: 'none',
        filter: isVisible ? 'blur(0px)' : 'blur(12px)',
        opacity: isVisible ? 1 : 0.1,
        transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.8)',
        transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'filter, opacity, transform'
      }}
    >
      {text}
    </span>
  )
}

export default function Hero({ isLoading = false }: { isLoading?: boolean }) {
  const router = useRouter()
  const t = useTranslations('hero')

  // Cards informativas sobre Qolect
  const qolectInfoCards = [
    {
      id: 1,
      titleKey: 'cards.curatedExperiences.title',
      descriptionKey: 'cards.curatedExperiences.description',
      videoUrl: '/videos/curated-experiences.mp4',
      icon: '✨',
      color: 'rgba(245, 197, 66, 0.3)'
    },
    {
      id: 2,
      titleKey: 'cards.globalCommunity.title',
      descriptionKey: 'cards.globalCommunity.description',
      videoUrl: '/videos/global-community.mp4',
      icon: '🌍',
      color: 'rgba(29, 183, 191, 0.3)'
    },
    {
      id: 3,
      titleKey: 'cards.premiumAllInclusive.title',
      descriptionKey: 'cards.premiumAllInclusive.description',
      videoUrl: '/videos/premium-service.mp4',
      icon: '👑',
      color: 'rgba(139, 69, 193, 0.3)'
    },
    {
      id: 4,
      titleKey: 'cards.sustainableImpact.title',
      descriptionKey: 'cards.sustainableImpact.description',
      videoUrl: '/videos/sustainable-impact.mp4',
      icon: '🌱',
      color: 'rgba(34, 197, 94, 0.3)'
    }
  ]
  const [cardsVisible, setCardsVisible] = useState([false, false, false, false])
  const [showCards, setShowCards] = useState(false)
  const [qolectCardsVisible, setQolectCardsVisible] = useState([false, false, false, false])
  const [showQolectSection, setShowQolectSection] = useState(false)

  const handleCardClick = (experienceKey: keyof typeof colombiaExperiences) => {
    router.push(`/experiencias/${experienceKey}`)
  }

  useEffect(() => {
    if (!isLoading) {
      // Show Qolect info section after headline animation (sin scroll automático)
      const showQolectTimer = setTimeout(() => {
        setShowQolectSection(true)
      }, 2000) // Wait for headline to be fully visible

      // Show Qolect cards one by one
      const showQolectTimers = [
        setTimeout(() => setQolectCardsVisible(prev => [true, ...prev.slice(1)]), 2500),
        setTimeout(() => setQolectCardsVisible(prev => [prev[0], true, ...prev.slice(2)]), 3000),
        setTimeout(() => setQolectCardsVisible(prev => [...prev.slice(0, 2), true, prev[3]]), 3500),
        setTimeout(() => setQolectCardsVisible(prev => [...prev.slice(0, 3), true]), 4000)
      ]

      // Show experiences section after Qolect cards (sin scroll automático)
      const showExperiencesTimer = setTimeout(() => {
        setShowCards(true)
      }, 5000) // After Qolect cards are shown

      // Show experience cards one by one with more delay between each
      const showTimers = [
        setTimeout(() => setCardsVisible(prev => [true, ...prev.slice(1)]), 5500),
        setTimeout(() => setCardsVisible(prev => [prev[0], true, ...prev.slice(2)]), 6000),
        setTimeout(() => setCardsVisible(prev => [...prev.slice(0, 2), true, prev[3]]), 6500),
        setTimeout(() => setCardsVisible(prev => [...prev.slice(0, 3), true]), 7000)
      ]

      return () => {
        clearTimeout(showQolectTimer)
        clearTimeout(showExperiencesTimer)
        showQolectTimers.forEach(clearTimeout)
        showTimers.forEach(clearTimeout)
      }
    }
  }, [isLoading])
  return (
    <>
      {/* Headline Section - Full Screen */}
      <section
        id="inicio"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #1DB7BF 0%, #0F7FA3 80%, rgba(29, 183, 191, 0.95) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(245, 197, 66, 0.3) 0%, rgba(245, 197, 66, 0.1) 100%)',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite'
        }} />

        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(15, 127, 163, 0.4) 0%, rgba(15, 127, 163, 0.1) 100%)',
          filter: 'blur(30px)',
          animation: 'float 7s ease-in-out infinite'
        }} />

        {/* Geometric decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '60px',
          height: '60px',
          border: '2px solid rgba(245, 197, 66, 0.3)',
          borderRadius: '12px',
          transform: 'rotate(45deg)',
          animation: 'rotate 10s linear infinite'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '30%',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }} />

        {/* SVG Pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: '900',
                color: 'white',
                marginBottom: '2rem',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'none',
                overflowWrap: 'normal',
                WebkitHyphens: 'none',
                msHyphens: 'none'
              }}
            >
              <BreathingWords text={t('title')} isPageLoading={isLoading} />
              <span style={{
                color: '#F5C542',
                display: 'block',
                marginTop: '0.5rem',
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                transform: 'scale(0.8)'
              }}>
                <BreathingWords text={t('titleHighlight')} delay={800} isPageLoading={isLoading} />
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '0',
                fontWeight: '500',
                lineHeight: '1.6',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                maxWidth: '800px',
                margin: '0 auto',
                wordBreak: 'keep-all',
                hyphens: 'none',
                overflowWrap: 'break-word',
                WebkitHyphens: 'none',
                msHyphens: 'none'
              }}
            >
              <BlurText text={t('subtitle')} delay={400} isPageLoading={isLoading} />
            </p>
          </div>
        </div>
      </section>

      {/* Brands Carousel - No gap */}
      <BrandsCarousel />

      {/* AOS Stack Animation - No gap */}
      <AOSStack />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes breatheScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>

    </>
  )
}