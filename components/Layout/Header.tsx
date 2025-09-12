import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Qolect</span>
            <span className="logo-subtitle">TRAVEL</span>
          </div>
          
          <nav className="nav">
            <a href="#adventures" className="nav-link">AVENTURAS</a>
            <a href="#destinations" className="nav-link">LUGARES</a>
            <a href="#stories" className="nav-link">HISTORIAS</a>
            <a href="#community" className="nav-link">TRIBU</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-ghost">INICIAR SESIÓN</button>
            <button className="btn-primary">ÚNETE AHORA</button>
          </div>
        </div>
      </div>
    </header>
  )
}