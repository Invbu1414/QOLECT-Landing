import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Travel <span className="hero-highlight">Experiences</span> That Transform
          </h1>
          <p className="hero-subtitle">
            Discover carefully curated, authentic experiences that connect you with local cultures 
            and create lasting memories. Every journey is designed for discerning travelers.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Explore Experiences</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-content">
            <div className="visual-icon">🌍</div>
            <div className="visual-text">Connecting travelers with authentic local experiences worldwide</div>
          </div>
        </div>
      </div>
    </section>
  )
}