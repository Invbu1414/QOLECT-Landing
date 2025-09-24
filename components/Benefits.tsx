'use client'

export default function Benefits() {
  return (
    <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}
        >
          {/* Viajes con propósito */}
          <div 
            style={{
              background: 'white',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div 
              style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '1.5rem'
              }}
            >
              🎯
            </div>
            <h3 
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '1rem'
              }}
            >
              Viajes con propósito
            </h3>
            <p style={{ color: '#64748B', lineHeight: '1.6' }}>
              Experiencias que transforman tu perspectiva y crean impacto positivo en las comunidades locales.
            </p>
          </div>

          {/* Compra fácil y segura */}
          <div 
            style={{
              background: 'white',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div 
              style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '1.5rem'
              }}
            >
              🔒
            </div>
            <h3 
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '1rem'
              }}
            >
              Compra fácil y segura
            </h3>
            <p style={{ color: '#64748B', lineHeight: '1.6' }}>
              Reserva tus experiencias con total confianza gracias a nuestro sistema de pago seguro y atención 24/7.
            </p>
          </div>

          {/* Descarga nuestra app */}
          <div 
            style={{
              background: 'white',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div 
              style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '1.5rem'
              }}
            >
              📱
            </div>
            <h3 
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '1rem'
              }}
            >
              Descarga nuestra app
            </h3>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Lleva tus experiencias siempre contigo y descubre nuevas aventuras desde tu móvil.
            </p>
            
            {/* App Store badges */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div 
                style={{
                  background: '#000',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                📱 App Store
              </div>
              <div 
                style={{
                  background: '#000',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                🤖 Google Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}