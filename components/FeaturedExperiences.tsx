'use client'

export default function FeaturedExperiences() {
  const experiences = [
    {
      id: 1,
      title: "Retiro de Bienestar en Costa Rica",
      date: "15-22 Marzo 2024",
      price: "€1,299",
      image: "🌴"
    },
    {
      id: 2,
      title: "Aventura en los Andes Peruanos",
      date: "10-18 Abril 2024",
      price: "€899",
      image: "🏔️"
    },
    {
      id: 3,
      title: "Inmersión Cultural en Japón",
      date: "5-15 Mayo 2024",
      price: "€2,199",
      image: "🏯"
    },
    {
      id: 4,
      title: "Safari Fotográfico en Kenia",
      date: "20-28 Junio 2024",
      price: "€1,899",
      image: "🦁"
    },
    {
      id: 5,
      title: "Relajación en las Maldivas",
      date: "1-8 Julio 2024",
      price: "€2,599",
      image: "🏝️"
    },
    {
      id: 6,
      title: "Exploración de la Patagonia",
      date: "15-25 Agosto 2024",
      price: "€1,499",
      image: "🗻"
    },
    {
      id: 7,
      title: "Tour Gastronómico por Italia",
      date: "10-17 Septiembre 2024",
      price: "€1,799",
      image: "🍝"
    }
  ]

  return (
    <section id="experiencias" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1rem'
            }}
          >
            Experiencias Destacadas
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '32rem', margin: '0 auto' }}>
            Descubre nuestras experiencias más populares diseñadas para transformar tu manera de viajar
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {experiences.map((experience) => (
            <div
              key={experience.id}
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Image placeholder */}
              <div 
                style={{
                  height: '12rem',
                  background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                {experience.image}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                  }}
                ></div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#0F172A',
                    marginBottom: '0.75rem'
                  }}
                >
                  {experience.title}
                </h3>
                
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span 
                    style={{
                      color: '#64748B',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    📅 {experience.date}
                  </span>
                  
                  <span 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#1DB7BF'
                    }}
                  >
                    {experience.price}
                  </span>
                </div>

                <button
                  style={{
                    width: '100%',
                    background: '#F5C542',
                    color: '#0F172A',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.filter = 'brightness(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.filter = 'brightness(1)'
                  }}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}