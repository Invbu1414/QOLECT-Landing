import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">LIBÉRATE • EXPLORA CON AUDACIA • VIVE PLENAMENTE</div>
        <h1 className="hero-title">
          DESATA TU 
          <br />SED DE AVENTURA
        </h1>
        <p className="hero-subtitle">
          Deja de soñar, empieza a vivir. Qolect Travel crea experiencias extraordinarias 
          para rebeldes, aventureros y espíritus libres que se niegan a seguir el camino trillado.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">ENCUENTRA MI AVENTURA</button>
          <button className="btn-secondary">VER HISTORIAS</button>
        </div>
      </div>
      <div className="hero-scroll">↓ DESCUBRE LO EXTRAORDINARIO</div>
    </section>
  )
}