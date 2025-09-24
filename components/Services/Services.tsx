'use client'

import { useState, useEffect, useRef } from 'react'

interface Service {
  id: string
  category: string
  title: string
  description: string
  price: string
  features: string[]
  popular?: boolean
}

const services: Service[] = [
  {
    id: 'aventura',
    category: 'AVENTURA',
    title: 'Experiencias Extremas',
    description: 'Para los amantes de la adrenalina y las experiencias intensas.',
    price: 'Desde €299',
    features: [
      'Actividades de alto impacto',
      'Guías especializados',
      'Equipo de seguridad incluido',
      'Grupos reducidos máximo 8 personas'
    ]
  },
  {
    id: 'cultural',
    category: 'CULTURA',
    title: 'Inmersión Cultural',
    description: 'Conecta con las tradiciones y culturas locales auténticas.',
    price: 'Desde €199',
    features: [
      'Experiencias con comunidades locales',
      'Talleres tradicionales',
      'Gastronomía típica incluida',
      'Guías nativos expertos'
    ],
    popular: true
  },
  {
    id: 'relax',
    category: 'BIENESTAR',
    title: 'Retiros de Bienestar',
    description: 'Desconecta y reconecta contigo mismo en entornos naturales.',
    price: 'Desde €399',
    features: [
      'Spa y tratamientos naturales',
      'Yoga y meditación',
      'Alojamiento premium',
      'Alimentación saludable'
    ]
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState(1) // Start with popular service
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate services
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section 
      id="servicios" 
      ref={sectionRef} 
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #f8fafc 100%)' }}
    >
      {/* Minimal Background Shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-100 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-6">
            🌟 Nuestros Servicios
          </div>
          <h2 className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Experiencias que Transforman
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Cada experiencia está cuidadosamente diseñada para ofrecerte momentos únicos 
            que se convertirán en recuerdos para toda la vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card p-8 relative group cursor-pointer transition-all duration-500 ${
                activeService === index ? 'scale-105 shadow-2xl border-2 border-blue-200' : 'hover:scale-102'
              } ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                background: activeService === index 
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))' 
                  : undefined
              }}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                  MÁS POPULAR
                </div>
              )}

              {/* Category */}
              <div className="mb-4">
                <span className={`inline-block text-xs font-bold tracking-wider px-3 py-1 rounded-full ${
                  index === 0 ? 'bg-orange-100 text-orange-600' :
                  index === 1 ? 'bg-blue-100 text-blue-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {service.category}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {service.price}
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`btn w-full transition-all duration-300 ${
                activeService === index ? 'btn-primary' : 'btn-glass'
              }`}>
                {activeService === index ? 'Ver Detalles' : 'Más Información'}
              </button>

              {/* Active Border */}
              {activeService === index && (
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        {/* Service Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveService(index)}
              aria-label={`Seleccionar servicio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}