'use client'

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: 'Aventura & Deportes',
      description: 'Experiencias extremas y deportes de adrenalina que desafían tus límites',
      icon: '🏔️',
      color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      experiences: '120+ experiencias'
    },
    {
      id: 2,
      title: 'Bienestar & Retiros',
      description: 'Reconecta contigo mismo en espacios de paz y crecimiento personal',
      icon: '🧘',
      color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      experiences: '85+ experiencias'
    },
    {
      id: 3,
      title: 'Cultura & Historia',
      description: 'Sumérgete en tradiciones milenarias y patrimonio cultural único',
      icon: '🏛️',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      experiences: '200+ experiencias'
    },
    {
      id: 4,
      title: 'Gastronomía & Sabores',
      description: 'Descubre sabores auténticos y tradiciones culinarias del mundo',
      icon: '🍽️',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      experiences: '150+ experiencias'
    }
  ]

  return (
    <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
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
            Explora por categorías
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto' }}>
            Encuentra la experiencia perfecta para ti entre nuestras categorías cuidadosamente seleccionadas
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)'
                e.currentTarget.style.borderColor = 'transparent'
                const gradient = e.currentTarget.querySelector('.gradient-overlay') as HTMLElement
                if (gradient) {
                  gradient.style.opacity = '0.1'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)'
                const gradient = e.currentTarget.querySelector('.gradient-overlay') as HTMLElement
                if (gradient) {
                  gradient.style.opacity = '0'
                }
              }}
            >
              {/* Gradient overlay */}
              <div 
                className="gradient-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: category.color,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  borderRadius: '1.5rem'
                }}
              />
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Icon */}
                <div 
                  style={{
                    width: '4rem',
                    height: '4rem',
                    background: category.color,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.75rem'
                  }}
                >
                  {category.icon}
                </div>

                {/* Title */}
                <h3 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '1rem'
                  }}
                >
                  {category.title}
                </h3>

                {/* Description */}
                <p 
                  style={{
                    color: '#64748B',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}
                >
                  {category.description}
                </p>

                {/* Experience count */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span 
                    style={{
                      color: '#1DB7BF',
                      fontWeight: '600',
                      fontSize: '0.875rem'
                    }}
                  >
                    {category.experiences}
                  </span>
                  
                  <div 
                    style={{
                      background: '#F8FAFC',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#64748B" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
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
            Ver todas las categorías
          </button>
        </div>
      </div>
    </section>
  )
}