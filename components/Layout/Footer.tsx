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
              Connecting discerning travelers with authentic local experiences 
              and cultural immersion opportunities worldwide.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Experiences</h4>
            <ul className="footer-links">
              <li><a href="#">Cultural Immersion</a></li>
              <li><a href="#">Culinary Tours</a></li>
              <li><a href="#">Adventure Activities</a></li>
              <li><a href="#">Wellness Retreats</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Destinations</h4>
            <ul className="footer-links">
              <li><a href="#">Europe</a></li>
              <li><a href="#">Asia Pacific</a></li>
              <li><a href="#">Americas</a></li>
              <li><a href="#">Africa & Middle East</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Qolect Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}