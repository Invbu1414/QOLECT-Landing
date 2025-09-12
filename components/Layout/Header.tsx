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
            <a href="#adventures" className="nav-link">ADVENTURES</a>
            <a href="#destinations" className="nav-link">PLACES</a>
            <a href="#stories" className="nav-link">STORIES</a>
            <a href="#community" className="nav-link">TRIBE</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-ghost">LOGIN</button>
            <button className="btn-primary">JOIN NOW</button>
          </div>
        </div>
      </div>
    </header>
  )
}