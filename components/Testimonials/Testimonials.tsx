'use client'

import { useState, useEffect, useRef } from 'react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  comment: string
  avatar: string
  experience: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    location: 'Madrid, España',
    rating: 5,
    comment: 'Una experiencia absolutamente increíble. Los guías fueron excepcionales y cada detalle estaba perfectamente organizado. Sin duda repetiré con Qolect.',
    avatar: 'MG',
    experience: 'Aventura en los Andes'
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    location: 'Barcelona, España',
    rating: 5,
    comment: 'La inmersión cultural que vivimos fue auténtica y transformadora. Conocimos lugares y personas que nunca hubiéramos descubierto por nuestra cuenta.',
    avatar: 'CR',
    experience: 'Inmersión Cultural Maya'
  },
  {
    id: 3,
    name: 'Ana Martín',
    location: 'Valencia, España',
    rating: 5,
    comment: 'El retiro de bienestar superó todas mis expectativas. Regresé completamente renovada y con una perspectiva nueva sobre la vida.',
    avatar: 'AM',
    experience: 'Retiro de Bienestar'
  },
  {
    id: 4,
    name: 'David López',
    location: 'Sevilla, España',
    rating: 5,
    comment: 'Profesionales de primera clase. La atención al detalle y el cuidado por la seguridad hicieron que pudiera disfrutar al máximo de cada momento.',
    avatar: 'DL',
    experience: 'Expedición Patagónica'
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ))
  }

  return (
    <section 
      id="testimonios" 
      ref={sectionRef}
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        {[
          { left: 15, top: 25, duration: 4.2, delay: 0.5 },
          { left: 75, top: 60, duration: 3.8, delay: 1.2 },
          { left: 40, top: 85, duration: 4.5, delay: 0.8 },
          { left: 90, top: 30, duration: 3.6, delay: 1.8 },
          { left: 20, top: 70, duration: 4.8, delay: 0.3 },
          { left: 65, top: 15, duration: 3.2, delay: 1.5 },
          { left: 85, top: 90, duration: 4.1, delay: 0.9 },
          { left: 30, top: 45, duration: 3.9, delay: 1.7 },
          { left: 55, top: 20, duration: 4.3, delay: 0.6 },
          { left: 10, top: 80, duration: 3.7, delay: 1.3 }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Lo que dicen nuestros viajeros
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Miles de aventureros han confiado en nosotros para crear sus experiencias más memorables.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className={`glass-card p-8 md:p-12 text-center relative transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-200">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Avatar */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg">
                {testimonials[currentTestimonial].avatar}
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            {/* Comment */}
            <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].comment}"
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-semibold text-lg text-gray-800 mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-600 mb-2">
                {testimonials[currentTestimonial].location}
              </p>
              <p className="text-sm text-blue-600 font-medium">
                {testimonials[currentTestimonial].experience}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="flex justify-center space-x-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`flex-shrink-0 transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'scale-110 opacity-100' 
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg ${
                currentTestimonial === index 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                  : 'bg-gray-400'
              }`}>
                {testimonial.avatar}
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Ver testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Puntuación Media</div>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">10,000+</div>
            <div className="text-gray-600">Reseñas Verificadas</div>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Recomendarían Qolect</div>
          </div>
        </div>
      </div>
    </section>
  )
}