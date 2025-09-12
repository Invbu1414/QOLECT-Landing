import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Qolect</span>
              <span className="logo-subtitle">Travel</span>
            </div>
            <p className="footer-description">
              Conectamos viajeros con experiencias auténticas y culturas locales 
              para crear recuerdos inolvidables.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"></a>
              <a href="#" className="social-link" aria-label="Instagram"></a>
              <a href="#" className="social-link" aria-label="Twitter"></a>
              <a href="#" className="social-link" aria-label="LinkedIn"></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Experiencias</h4>
            <ul className="footer-links">
              <li><a href="#">Aventuras</a></li>
              <li><a href="#">Cultura Local</a></li>
              <li><a href="#">Gastronomía</a></li>
              <li><a href="#">Naturaleza</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Destinos</h4>
            <ul className="footer-links">
              <li><a href="#">Europa</a></li>
              <li><a href="#">Asia</a></li>
              <li><a href="#">África</a></li>
              <li><a href="#">América</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Ayuda</h4>
            <ul className="footer-links">
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Términos de Uso</a></li>
              <li><a href="#">Privacidad</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Recibe las mejores experiencias y ofertas exclusivas
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="tu@email.com" className="newsletter-input" aria-label="Email para newsletter" />
              <button type="submit" className="btn-primary">Suscribirse</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Qolect Travel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}