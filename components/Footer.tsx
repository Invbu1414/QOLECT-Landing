'use client'

import { useTranslations } from '../contexts/LanguageContext'

export default function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Experiencias',
      links: [
        { name: 'Aventura & Deportes', href: '#' },
        { name: 'Bienestar & Retiros', href: '#' },
        { name: 'Cultura & Historia', href: '#' },
        { name: 'Gastronomía & Sabores', href: '#' },
        { name: 'Experiencias Grupales', href: '#' }
      ]
    },
    {
      title: 'Destinos',
      links: [
        { name: 'España', href: '#' },
        { name: 'Portugal', href: '#' },
        { name: 'Marruecos', href: '#' },
        { name: 'Italia', href: '#' },
        { name: 'Grecia', href: '#' }
      ]
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Sobre Qolect', href: '#' },
        { name: 'Nuestro Equipo', href: '#' },
        { name: 'Trabaja con Nosotros', href: '#' },
        { name: 'Prensa', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Centro de Ayuda', href: '#' },
        { name: 'Contacto', href: '#' },
        { name: 'Política de Cancelación', href: '#' },
        { name: 'Términos y Condiciones', href: '#' },
        { name: 'Privacidad', href: '#' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📸', href: '#', color: 'linear-gradient(135deg, #E4405F 0%, #FD1D1D 50%, #FCB045 100%)' },
    { name: 'Facebook', icon: '👥', href: '#', color: 'linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'linear-gradient(135deg, #1DA1F2 0%, #0D8BDB 100%)' },
    { name: 'YouTube', icon: '🎥', href: '#', color: 'linear-gradient(135deg, #FF0000 0%, #FF4444 100%)' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)' }
  ]

  const certifications = [
    { name: 'Turismo Responsable', icon: '🌱' },
    { name: 'Seguridad Certificada', icon: '🛡️' },
    { name: 'Calidad Garantizada', icon: '⭐' }
  ]

  return (
    <footer style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: 'white' }}>
      {/* Newsletter Section */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
          padding: '3rem 0'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}
              >
                {t('newsletter.title')}
              </h3>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                {t('newsletter.subtitle')}
              </p>
            </div>
            
            <div 
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                minWidth: '300px'
              }}
            >
              <input
                type="email"
                placeholder={t('newsletter.emailPlaceholder')}
                style={{
                  flex: 1,
                  padding: '1rem 1.5rem',
                  border: 'none',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  outline: 'none',
                  minWidth: '200px'
                }}
              />
              <button
                style={{
                  background: 'white',
                  color: '#1DB7BF',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {t('newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{ padding: '4rem 0 2rem 0' }}>
        <div className="container">
          {/* Top Section */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}
          >
            {/* Brand Section */}
            <div style={{ gridColumn: 'span 1' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div 
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(135deg, #1DB7BF 0%, #F5C542 100%)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  ✨
                </div>
                <span 
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #1DB7BF 0%, #F5C542 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Qolect
                </span>
              </div>
              
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}
              >
                {t('description')}
              </p>

              {/* Certifications */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span>{cert.icon}</span>
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: 'white'
                  }}
                >
                  {section.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} style={{ marginBottom: '0.75rem' }}>
                      <a
                        href={link.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#1DB7BF'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div 
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
              margin: '3rem 0'
            }}
          />

          {/* Bottom Section */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            {/* Copyright */}
            <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              <p style={{ margin: 0 }}>
                © {currentYear} Qolect Travel. {t('allRightsReserved')}.
              </p>
            </div>

            {/* Social Media */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.name}
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: social.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 183, 191, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#1DB7BF' }}>🔒</span>
              <span style={{ fontSize: '0.875rem' }}>Pago 100% Seguro</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#F5C542' }}>🛡️</span>
              <span style={{ fontSize: '0.875rem' }}>Garantía de Satisfacción</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#FF6B6B' }}>📞</span>
              <span style={{ fontSize: '0.875rem' }}>Soporte 24/7</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#4ECDC4' }}>🌍</span>
              <span style={{ fontSize: '0.875rem' }}>Experiencias Verificadas</span>
            </div>
          </div>
          {/* Legal Info */}
          <div
            style={{
              marginTop: '1.5rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.45)',
              fontSize: '0.75rem',
              lineHeight: '1.6'
            }}
          >
            <p style={{ margin: 0 }}>
              Click and Cut SAS &nbsp;·&nbsp; NIT: 901.466.512-8 &nbsp;·&nbsp; RNT: 165877
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}