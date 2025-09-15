'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Valencia, España',
      experience: 'Retiro de Mindfulness en Bali',
      rating: 5,
      comment: 'Una experiencia que cambió completamente mi perspectiva sobre la vida. Los facilitadores fueron excepcionales y el entorno simplemente mágico.',
      avatar: '👩‍💼',
      verified: true
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      location: 'México City, México',
      experience: 'Safari Fotográfico en Kenia',
      rating: 5,
      comment: 'Increíble aventura que superó todas mis expectativas. Ver la migración en persona fue algo indescriptible. Qolect organizó cada detalle a la perfección.',
      avatar: '👨‍💻',
      verified: true
    },
    {
      id: 3,
      name: 'Ana Martín',
      location: 'Buenos Aires, Argentina',
      experience: 'Tour Gastronómico en Tokio',
      rating: 5,
      comment: 'Como chef, este viaje me abrió un mundo de sabores completamente nuevo. La autenticidad de cada experiencia fue extraordinaria.',
      avatar: '👩‍🍳',
      verified: true
    }
  ]

  return (
    <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1rem'
            }}
          >
            Lo que dicen nuestros viajeros
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto' }}>
            Miles de experiencias transformadoras avalan nuestra propuesta de valor único
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: index % 2 === 1 ? 'translateY(2rem)' : 'translateY(0)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = (index % 2 === 1 ? 'translateY(2rem)' : 'translateY(0)') + ' scale(1.03)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(29, 183, 191, 0.3)'
                const glow = e.currentTarget.querySelector('.testimonial-glow') as HTMLElement
                if (glow) {
                  glow.style.opacity = '0.1'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = index % 2 === 1 ? 'translateY(2rem) scale(1)' : 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                const glow = e.currentTarget.querySelector('.testimonial-glow') as HTMLElement
                if (glow) {
                  glow.style.opacity = '0'
                }
              }}
            >
              {/* Glow effect */}
              <div 
                className="testimonial-glow"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, #1DB7BF 0%, #F5C542 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  borderRadius: '1.5rem'
                }}
              />
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Quote icon */}
                <div 
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                    color: 'white'
                  }}
                >
                  "
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#F5C542', fontSize: '1.25rem' }}>★</span>
                  ))}
                </div>

                {/* Comment */}
                <p 
                  style={{
                    color: '#334155',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    fontStyle: 'italic',
                    fontSize: '1.125rem'
                  }}
                >
                  "{testimonial.comment}"
                </p>

                {/* User info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'linear-gradient(135deg, #F5C542 0%, #FF8E53 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <div 
                          style={{
                            background: '#1DB7BF',
                            borderRadius: '50%',
                            width: '1rem',
                            height: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            color: 'white'
                          }}
                          title="Viajero verificado"
                        >
                          ✓
                        </div>
                      )}
                    </div>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>
                      {testimonial.location}
                    </p>
                    <p style={{ color: '#1DB7BF', fontSize: '0.875rem', fontWeight: '600', margin: '0.25rem 0 0 0' }}>
                      {testimonial.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#1DB7BF',
                marginBottom: '0.5rem'
              }}
            >
              4.9/5
            </div>
            <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Valoración promedio</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#F5C542',
                marginBottom: '0.5rem'
              }}
            >
              2,500+
            </div>
            <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Experiencias realizadas</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#FF6B6B',
                marginBottom: '0.5rem'
              }}
            >
              98%
            </div>
            <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Recomendación</p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            style={{
              background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
              color: 'white',
              padding: '1rem 2.5rem',
              border: 'none',
              borderRadius: '1rem',
              fontSize: '1.125rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(29, 183, 191, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 183, 191, 0.4)'
              e.currentTarget.style.filter = 'brightness(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(29, 183, 191, 0.3)'
              e.currentTarget.style.filter = 'brightness(1)'
            }}
          >
            Lee más reseñas
          </button>
        </div>
      </div>
    </section>
  )
}