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
            <a href="#experiencias" className="nav-link">Experiencias</a>
            <a href="#destinos" className="nav-link">Destinos</a>
            <a href="#como-funciona" className="nav-link">Cómo Funciona</a>
            <a href="#sobre-nosotros" className="nav-link">Sobre Nosotros</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-ghost">Iniciar Sesión</button>
            <button className="btn-primary">Registrarse</button>
          </div>
        </div>
      </div>
    </header>
  )
}