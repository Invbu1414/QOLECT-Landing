import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Descubre el mundo a través de 
          <span className="hero-highlight"> experiencias auténticas</span>
        </h1>
        <p className="hero-subtitle">
          Conecta con culturas locales, vive aventuras únicas y crea recuerdos inolvidables 
          con Qolect Travel. Tu próxima experiencia de viaje te está esperando.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Explorar Experiencias</button>
          <button className="btn-secondary">Cómo Funciona</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>
    </section>
  )
}