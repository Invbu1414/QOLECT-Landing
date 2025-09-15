'use client'

export default function Hero() {
  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: '5rem',
            paddingBottom: '5rem'
          }}
          className="lg:grid-cols-2"
        >
          {/* Content */}
          <div style={{ textAlign: 'center' }} className="lg:text-left">
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                color: 'white',
                marginBottom: '1.5rem',
                lineHeight: '1.1',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Descubre experiencias{' '}
              <span style={{ color: '#F5C542', display: 'block' }}>
                inolvidables
              </span>
            </h1>
            
            <p 
              style={{
                fontSize: '1.125rem',
                color: 'white',
                marginBottom: '2.5rem',
                maxWidth: '32rem',
                margin: '0 auto 2.5rem auto',
                fontWeight: '500',
                lineHeight: '1.6',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}
              className="lg:mx-0"
            >
              Viaja con propósito y transforma tu manera de ver el mundo
            </p>

            <button
              style={{
                background: '#F5C542',
                color: '#0F172A',
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
                e.target.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                e.target.style.filter = 'brightness(1)'
              }}
            >
              Explorar experiencias
            </button>
          </div>

          {/* Image cards grid */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
            className="lg:justify-end"
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                maxWidth: '24rem'
              }}
            >
              {/* Card 1 */}
              <div 
                style={{
                  width: '11rem',
                  height: '14rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 0.75rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    🏔️
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Aventuras
                  </p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                    Montañas épicas
                  </p>
                </div>
                
                {/* Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    background: '#F5C542',
                    color: '#0F172A',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.625rem',
                    fontWeight: '700'
                  }}
                >
                  ✨
                </div>
              </div>

              {/* Card 2 */}
              <div 
                style={{
                  width: '11rem',
                  height: '14rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 0.75rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    🏝️
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Playas
                  </p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                    Paraísos tropicales
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                style={{
                  width: '11rem',
                  height: '14rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 0.75rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    🧘
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Retiros
                  </p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                    Bienestar personal
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div 
                style={{
                  width: '11rem',
                  height: '14rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 0.75rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    🏛️
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Cultura
                  </p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                    Historia viva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          <div 
            style={{
              width: '0.25rem',
              height: '4rem',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '9999px',
              margin: '0 auto 0.5rem auto',
              position: 'relative'
            }}
          >
            <div 
              style={{
                width: '0.25rem',
                height: '1rem',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '9999px',
                animation: 'pulse 2s infinite'
              }}
            ></div>
          </div>
          <p style={{ fontSize: '0.875rem' }}>Desliza hacia abajo</p>
        </div>
      </div>
    </section>
  )
}