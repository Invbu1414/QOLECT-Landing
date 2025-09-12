import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Experiencias de Viaje <span className="hero-highlight">Premium</span> Que Transforman
          </h1>
          <p className="hero-subtitle">
            Descubre experiencias auténticas cuidadosamente curadas que te conectan con culturas locales 
            y crean recuerdos duraderos. Cada viaje está diseñado para viajeros exigentes.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Explorar Experiencias</button>
            <button className="btn-secondary">Ver Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-content">
            <div className="visual-icon">🌍</div>
            <div className="visual-text">Conectando viajeros con experiencias locales auténticas en todo el mundo</div>
          </div>
        </div>
      </div>
    </section>
  )
}