'use client'

export default function GroupExperiences() {
  const groupTypes = [
    {
      id: 1,
      title: 'Viajes en Pareja',
      subtitle: 'Momentos íntimos para compartir',
      description: 'Experiencias románticas diseñadas para fortalecer vínculos y crear recuerdos inolvidables juntos',
      icon: '💕',
      participants: '2 personas',
      experiences: '150+ experiencias',
      color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      image: '🌅'
    },
    {
      id: 2,
      title: 'Aventuras Familiares',
      subtitle: 'Diversión para todas las edades',
      description: 'Actividades que unen generaciones, desde los más pequeños hasta los abuelos, con seguridad y entretenimiento garantizado',
      icon: '👨‍👩‍👧‍👦',
      participants: '3-8 personas',
      experiences: '200+ experiencias',
      color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      image: '🏕️'
    },
    {
      id: 3,
      title: 'Grupos de Amigos',
      subtitle: 'La diversión se multiplica',
      description: 'Aventuras épicas para grupos que buscan adrenalina, risas y experiencias que fortalezcan la amistad',
      icon: '👥',
      participants: '4-12 personas',
      experiences: '180+ experiencias',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: '🎉'
    },
    {
      id: 4,
      title: 'Retiros Corporativos',
      subtitle: 'Team building transformador',
      description: 'Experiencias diseñadas para fortalecer equipos de trabajo a través de desafíos colaborativos y crecimiento conjunto',
      icon: '🤝',
      participants: '8-50 personas',
      experiences: '75+ experiencias',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: '🎯'
    }
  ]

  const benefits = [
    {
      icon: '🎯',
      title: 'Personalización Total',
      description: 'Adaptamos cada experiencia al tamaño y dinámicas específicas de tu grupo'
    },
    {
      icon: '💰',
      title: 'Descuentos Progresivos',
      description: 'Mejores precios por persona según el tamaño del grupo, hasta 30% de descuento'
    },
    {
      icon: '📋',
      title: 'Coordinación Completa',
      description: 'Nos encargamos de toda la logística para que solo te preocupes por disfrutar'
    },
    {
      icon: '🔄',
      title: 'Flexibilidad Total',
      description: 'Cambios de fecha sin costo adicional hasta 48h antes de la experiencia'
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
            Experiencias para cada grupo
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto' }}>
            Desde escapadas románticas hasta aventuras corporativas, tenemos la experiencia perfecta para tu grupo
          </p>
        </div>

        {/* Group Types Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
            alignItems: 'stretch'
          }}
        >
          {groupTypes.map((group, index) => (
            <div
              key={group.id}
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)'
                e.currentTarget.style.borderColor = 'transparent'
                const gradient = e.currentTarget.querySelector('.group-gradient') as HTMLElement
                if (gradient) {
                  gradient.style.opacity = '0.1'
                }
                const image = e.currentTarget.querySelector('.group-image') as HTMLElement
                if (image) {
                  image.style.transform = 'scale(1.2) rotate(10deg)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)'
                const gradient = e.currentTarget.querySelector('.group-gradient') as HTMLElement
                if (gradient) {
                  gradient.style.opacity = '0'
                }
                const image = e.currentTarget.querySelector('.group-image') as HTMLElement
                if (image) {
                  image.style.transform = 'scale(1) rotate(0deg)'
                }
              }}
            >
              {/* Background gradient overlay */}
              <div 
                className="group-gradient"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: group.color,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  borderRadius: '1.5rem'
                }}
              />

              {/* Floating image */}
              <div 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '3rem',
                  opacity: 0.1,
                  transition: 'all 0.4s ease'
                }}
                className="group-image"
              >
                {group.image}
              </div>
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon */}
                <div 
                  style={{
                    width: '4rem',
                    height: '4rem',
                    background: group.color,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.75rem'
                  }}
                >
                  {group.icon}
                </div>

                {/* Title & Subtitle */}
                <h3 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '0.5rem'
                  }}
                >
                  {group.title}
                </h3>
                
                <p 
                  style={{
                    color: '#1DB7BF',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}
                >
                  {group.subtitle}
                </p>

                {/* Description */}
                <p 
                  style={{
                    color: '#64748B',
                    lineHeight: '1.6',
                    marginBottom: 'auto',
                    flexGrow: 1
                  }}
                >
                  {group.description}
                </p>

                {/* Stats */}
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #E2E8F0'
                  }}
                >
                  <div>
                    <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Tamaño ideal</p>
                    <p style={{ color: '#0F172A', fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>{group.participants}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#64748B', fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>Disponibles</p>
                    <p style={{ color: '#1DB7BF', fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>{group.experiences}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
            borderRadius: '2rem',
            padding: '3rem',
            marginBottom: '4rem'
          }}
        >
          <h3 
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0F172A',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            Ventajas de reservar en grupo
          </h3>
          
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem'
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
                    margin: '0 auto 1rem auto',
                    fontSize: '1.5rem'
                  }}
                >
                  {benefit.icon}
                </div>
                <h4 
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '0.75rem'
                  }}
                >
                  {benefit.title}
                </h4>
                <p 
                  style={{
                    color: '#64748B',
                    lineHeight: '1.6',
                    fontSize: '0.875rem'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
            borderRadius: '2rem',
            padding: '3rem',
            color: 'white'
          }}
        >
          <h3 
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}
          >
            ¿Listo para planificar tu experiencia grupal?
          </h3>
          <p 
            style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: 0.9
            }}
          >
            Nuestro equipo te ayudará a diseñar la experiencia perfecta para tu grupo
          </p>
          
          <div 
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button
              style={{
                background: 'white',
                color: '#1DB7BF',
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
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
              Consulta personalizada
            </button>
            
            <button
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                border: '2px solid white',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#1DB7BF'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Ver experiencias grupales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}