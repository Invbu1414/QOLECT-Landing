import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Qolect</span>
              <span className="logo-subtitle">Travel</span>
            </div>
            <p className="footer-description">
              Conectando viajeros exigentes con experiencias locales auténticas 
              y oportunidades de inmersión cultural en todo el mundo.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Experiencias</h4>
            <ul className="footer-links">
              <li><a href="#">Inmersión Cultural</a></li>
              <li><a href="#">Tours Culinarios</a></li>
              <li><a href="#">Actividades de Aventura</a></li>
              <li><a href="#">Retiros de Bienestar</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Destinos</h4>
            <ul className="footer-links">
              <li><a href="#">Europa</a></li>
              <li><a href="#">Asia Pacífico</a></li>
              <li><a href="#">Américas</a></li>
              <li><a href="#">África y Medio Oriente</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Soporte</h4>
            <ul className="footer-links">
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Contáctanos</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Qolect Travel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}