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
        <div className="hero-eyebrow">BREAK FREE • EXPLORE BOLDLY • LIVE FULLY</div>
        <h1 className="hero-title">
          UNLEASH YOUR 
          <br />WANDERLUST
        </h1>
        <p className="hero-subtitle">
          Stop dreaming, start living. Qolect Travel creates extraordinary experiences 
          for rebels, adventurers, and free spirits who refuse to follow the beaten path.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">FIND MY ADVENTURE</button>
          <button className="btn-secondary">WATCH STORIES</button>
        </div>
      </div>
      <div className="hero-scroll">↓ DISCOVER THE EXTRAORDINARY</div>
    </section>
  )
}