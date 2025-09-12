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
            <a href="#experiences" className="nav-link">Experiencias</a>
            <a href="#destinations" className="nav-link">Destinos</a>
            <a href="#about" className="nav-link">Acerca de</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-ghost">Iniciar Sesión</button>
            <button className="btn-primary">Comenzar</button>
          </div>
        </div>
      </div>
    </header>
  )
}