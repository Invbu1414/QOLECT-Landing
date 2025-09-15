'use client'

import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const destinations = [
    'Aventura en los Andes',
    'Inmersión Cultural Maya',
    'Safari Africano',
    'Retiro de Bienestar',
    'Expedición Patagónica',
    'Otro destino'
  ]

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="contact-animation">
          {[
            { left: 12, top: 25, delay: 0.5, duration: 5.2 },
            { left: 88, top: 70, delay: 2.3, duration: 4.8 },
            { left: 45, top: 15, delay: 1.7, duration: 6.1 },
            { left: 70, top: 85, delay: 3.2, duration: 4.5 },
            { left: 25, top: 60, delay: 0.8, duration: 5.7 },
            { left: 95, top: 35, delay: 4.1, duration: 4.3 },
            { left: 15, top: 90, delay: 1.4, duration: 6.4 },
            { left: 60, top: 20, delay: 2.9, duration: 4.9 },
            { left: 35, top: 75, delay: 0.3, duration: 5.8 },
            { left: 80, top: 45, delay: 3.7, duration: 4.7 },
            { left: 5, top: 55, delay: 1.9, duration: 6.2 },
            { left: 55, top: 5, delay: 4.5, duration: 4.6 },
            { left: 40, top: 95, delay: 0.9, duration: 5.4 },
            { left: 75, top: 30, delay: 2.6, duration: 6.8 },
            { left: 20, top: 80, delay: 1.2, duration: 5.1 }
          ].map((element, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Comienza tu próxima aventura
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Cuéntanos qué tipo de experiencia buscas y nuestros expertos diseñarán 
            el viaje perfecto para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`glass-card p-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Experiencia de interés
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona una experiencia</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos más sobre tu viaje ideal
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe qué tipo de experiencia buscas, fechas preferidas, número de personas..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary text-lg py-4 group"
              >
                <span>Solicitar Información</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Contacta con nuestros expertos
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+34 900 123 456</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">hello@qolect.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horario</h4>
                    <p className="text-gray-600">Lun-Vie: 9:00-18:00</p>
                    <p className="text-gray-600">Sáb: 10:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Respuesta rápida garantizada
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de expertos te responderá en menos de 24 horas con 
                una propuesta personalizada para tu próxima aventura.
              </p>
              
              <div className="flex items-center text-green-600">
                <span className="text-lg mr-2">✅</span>
                <span className="font-medium">Respuesta en menos de 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}