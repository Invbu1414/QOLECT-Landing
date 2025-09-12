import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Qolect</span>
              <span className="logo-subtitle">TRAVEL</span>
            </div>
            <p className="footer-description">
              No solo planificamos viajes - arquitectamos experiencias que cambian la vida 
              para aventureros que se niegan a vivir vidas ordinarias.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>AVENTURAS</h4>
            <ul className="footer-links">
              <li><a href="#">Deportes Extremos</a></li>
              <li><a href="#">Cultura Subterránea</a></li>
              <li><a href="#">Naturaleza Salvaje</a></li>
              <li><a href="#">Exploración Urbana</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>DESTINOS</h4>
            <ul className="footer-links">
              <li><a href="#">Europa Oculta</a></li>
              <li><a href="#">Asia Salvaje</a></li>
              <li><a href="#">Américas Crudas</a></li>
              <li><a href="#">África Indómita</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>TRIBU</h4>
            <ul className="footer-links">
              <li><a href="#">Únete a la Comunidad</a></li>
              <li><a href="#">Comparte Historias</a></li>
              <li><a href="#">Obtén Apoyo</a></li>
              <li><a href="#">Conviértete en Guía</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Qolect Travel. Nacido para ser salvaje. 🌈✨</p>
        </div>
      </div>
    </footer>
  )
}