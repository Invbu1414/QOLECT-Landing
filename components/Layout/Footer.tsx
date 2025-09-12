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
              We don't just plan trips - we architect life-changing experiences 
              for adventurers who refuse to live ordinary lives.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>ADVENTURES</h4>
            <ul className="footer-links">
              <li><a href="#">Extreme Sports</a></li>
              <li><a href="#">Underground Culture</a></li>
              <li><a href="#">Wild Nature</a></li>
              <li><a href="#">Urban Exploration</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>DESTINATIONS</h4>
            <ul className="footer-links">
              <li><a href="#">Hidden Europe</a></li>
              <li><a href="#">Wild Asia</a></li>
              <li><a href="#">Raw Americas</a></li>
              <li><a href="#">Untamed Africa</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>TRIBE</h4>
            <ul className="footer-links">
              <li><a href="#">Join Community</a></li>
              <li><a href="#">Share Stories</a></li>
              <li><a href="#">Get Support</a></li>
              <li><a href="#">Become Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Qolect Travel. Born to be wild. 🌈✨</p>
        </div>
      </div>
    </footer>
  )
}