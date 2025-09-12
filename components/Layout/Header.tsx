import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Qolect</span>
            <span className="logo-subtitle">Travel</span>
          </div>
          
          <nav className="nav">
            <a href="#experiences" className="nav-link">Experiences</a>
            <a href="#destinations" className="nav-link">Destinations</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-ghost">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}