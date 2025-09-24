'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState([false, false, false])

  useEffect(() => {
    // Show title and logo immediately
    setTitleVisible(true)

    // Show cards one by one with delay
    const timers = [
      setTimeout(() => setCardsVisible(prev => [true, prev[1], prev[2]]), 800),
      setTimeout(() => setCardsVisible(prev => [prev[0], true, prev[2]]), 1100),
      setTimeout(() => setCardsVisible(prev => [prev[0], prev[1], true]), 1400)
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
      }}
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Glass Shapes - Minimal */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 glass rounded-full opacity-20 animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 glass rounded-lg opacity-15" 
             style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 glass rounded-full opacity-10" 
             style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '3s' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* Hero Content - Typography Focused */}
          <div className={`transition-all duration-1000 ${titleVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-6">
                ✨ Experiencias Auténticas de Viaje
              </span>
            </div>
            
            <h1 className="mb-8 leading-tight">
              Descubre el mundo
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                con Qolect Travel
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Conectamos viajeros apasionados con experiencias únicas y memorables. 
              Cada aventura está cuidadosamente diseñada para crear recuerdos que durarán toda la vida.
            </p>

            {/* CTA Buttons - Simplified */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="btn btn-primary text-lg px-8 py-4 font-semibold">
                Explorar Experiencias
              </button>
              
              <button className="btn btn-glass text-lg px-8 py-4 font-medium">
                Conocer Más
              </button>
            </div>
          </div>

          {/* Stats Cards - Clean Design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className={`glass-card p-6 text-center transition-all duration-700 ${
              cardsVisible[0] ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Experiencias Únicas</div>
              <div className="text-sm text-gray-500 mt-1">En todo el mundo</div>
            </div>

            <div className={`glass-card p-6 text-center transition-all duration-700 ${
              cardsVisible[1] ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-3xl font-bold text-cyan-600 mb-2">10k+</div>
              <div className="text-gray-600 font-medium">Viajeros Satisfechos</div>
              <div className="text-sm text-gray-500 mt-1">Y creciendo</div>
            </div>

            <div className={`glass-card p-6 text-center transition-all duration-700 ${
              cardsVisible[2] ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Destinos Globales</div>
              <div className="text-sm text-gray-500 mt-1">Cinco continentes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Simple */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs mb-2 font-medium">Desliza para explorar</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}