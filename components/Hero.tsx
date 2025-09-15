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
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
                e.currentTarget.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.filter = 'brightness(1)'
              }}
            >
              Explorar experiencias
            </button>
          </div>

          {/* Book stack of cards */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
            className="lg:justify-end"
          >
            <div 
              style={{
                position: 'relative',
                width: '45rem',
                height: '26rem'
              }}
            >
              {/* Card 1 - Aventuras */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(0px)',
                  zIndex: 20,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(0px) scale(1.1) rotateY(-8deg) rotateX(2deg)';
                  e.currentTarget.style.zIndex = 30;
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 20;
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🏔️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Aventuras
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Montañas épicas y experiencias extremas
                  </p>
                </div>
                
                <div 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
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

              {/* Card 2 - Playas */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(45px)',
                  zIndex: 19,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(45px) scale(1.1) rotateY(-6deg) rotateX(1deg)';
                  e.currentTarget.style.zIndex = 30;
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(45px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 19;
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🏝️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Playas
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Paraísos tropicales únicos
                  </p>
                </div>
              </div>

              {/* Card 3 - Retiros */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(90px)',
                  zIndex: 18,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(90px) scale(1.1) rotateY(-4deg) rotateX(1deg)';
                  e.currentTarget.style.zIndex = 30;
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(90px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 18;
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🧘
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Retiros
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Bienestar y crecimiento personal
                  </p>
                </div>
              </div>

              {/* Card 4 - Cultura */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(135px)',
                  zIndex: 17,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(135px) scale(1.1) rotateY(-2deg) rotateX(0.5deg)';
                  e.currentTarget.style.zIndex = 30;
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'right center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(135px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 17;
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🏛️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Cultura
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Historia viva y tradiciones
                  </p>
                </div>
              </div>

              {/* Card 5 - Gastronomía */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(180px)',
                  zIndex: 16,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(180px) scale(1.1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 30;
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(180px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 16;
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🍽️
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Gastronomía
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Sabores auténticos del mundo
                  </p>
                </div>
              </div>

              {/* Card 6 - Safari */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '18rem',
                  height: '22rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                  transition: 'all 0.4s ease',
                  transform: 'translateX(225px)',
                  zIndex: 15,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(225px) scale(1.1) rotateY(2deg) rotateX(-0.5deg)';
                  e.currentTarget.style.zIndex = 30;
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transformOrigin = 'left center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(225px) scale(1) rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.zIndex = 15;
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transformOrigin = 'center center';
                }}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div 
                    style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(245, 197, 66, 0.3)',
                      borderRadius: '50%',
                      margin: '0 auto 1rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    🦁
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Safari
                  </p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                    Vida salvaje africana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}