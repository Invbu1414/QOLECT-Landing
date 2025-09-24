'use client'

import { useState, useEffect, useRef } from 'react'

interface Feature {
  number: string
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    number: '01',
    title: 'Experiencias Premium',
    description: 'Cuidadosamente seleccionadas y diseñadas para superar tus expectativas en cada detalle.',
    color: 'blue'
  },
  {
    number: '02',
    title: 'Guías Expertos',
    description: 'Conectamos con guías locales certificados que conocen cada secreto de los destinos.',
    color: 'cyan'
  },
  {
    number: '03',
    title: 'Precios Transparentes',
    description: 'Sin costos ocultos. Todo incluido desde el primer momento para una experiencia sin sorpresas.',
    color: 'purple'
  },
  {
    number: '04',
    title: 'Viaje Seguro',
    description: 'Protocolos de seguridad rigurosos y seguros de viaje para tu total tranquilidad.',
    color: 'green'
  }
]

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate features one by one
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleFeatures(prev => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 border-blue-200',
      cyan: 'text-cyan-600 border-cyan-200',
      purple: 'text-purple-600 border-purple-200',
      green: 'text-green-600 border-green-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-white">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-6">
            💎 Por qué elegirnos
          </div>
          <h2 className="mb-6">¿Por qué elegir Qolect?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos diferenciamos por nuestro compromiso con la calidad, la autenticidad 
            y la creación de experiencias verdaderamente memorables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative group transition-all duration-700 ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number Badge */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 border-2 rounded-xl 
                               font-bold text-2xl transition-all duration-300 group-hover:scale-110
                               ${getColorClasses(feature.color)}`}>
                  {feature.number}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle Hover Line */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300
                            ${feature.color === 'blue' ? 'from-blue-400 to-blue-600' :
                              feature.color === 'cyan' ? 'from-cyan-400 to-cyan-600' :
                              feature.color === 'purple' ? 'from-purple-400 to-purple-600' :
                              'from-green-400 to-green-600'}`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              ¿Listo para tu próxima aventura?
            </h3>
            <p className="text-gray-600 mb-6">
              Descubre experiencias únicas diseñadas especialmente para ti.
            </p>
            <button className="btn btn-primary text-lg px-8 py-4">
              Ver Todas las Experiencias
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}