'use client'

export default function Benefits() {
  return (
    <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#0F172A',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ¿Por qué elegir Qolect?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Transformamos la forma en que viajas con experiencias auténticas diseñadas para profesionales que buscan más que un destino
          </p>
        </div>

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
              Experiencias que inspiran y generan conexión real con la naturaleza, retiros espirituales y aventuras transformadoras.
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
              Reserva confiable y sin complicaciones. Pago seguro, atención personalizada y soporte completo en cada etapa.
            </p>
          </div>

          {/* Opciones para grupos */}
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
              👥
            </div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '1rem'
              }}
            >
              Opciones para grupos
            </h3>
            <p style={{ color: '#64748B', lineHeight: '1.6' }}>
              Viajes diseñados para grupos pequeños: amigos, familias, empresas y colegios que buscan conexiones significativas.
            </p>
          </div>

          {/* Acceso móvil */}
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
              Acceso móvil
            </h3>
            <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              App disponible para planear y reservar experiencias desde cualquier lugar, con acceso offline a tus itinerarios.
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