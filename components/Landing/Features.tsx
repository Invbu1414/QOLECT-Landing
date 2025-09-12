import React from 'react'

const features = [
  {
    id: 1,
    icon: '🌟',
    title: 'Experiencias Curadas',
    description: 'Cada experiencia es seleccionada y verificada por nuestros expertos locales para garantizar autenticidad y calidad.'
  },
  {
    id: 2,
    icon: '📍',
    title: 'Conexiones Locales',
    description: 'Conéctate directamente con locales apasionados que comparten su cultura, historias y joyas ocultas.'
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Reserva Sin Complicaciones',
    description: 'Proceso de reserva simple y seguro con confirmación instantánea y soporte al cliente 24/7.'
  },
  {
    id: 4,
    icon: '🌎',
    title: 'Alcance Global',
    description: 'Accede a experiencias únicas en más de 85 países, desde ciudades bulliciosas hasta destinos remotos.'
  },
  {
    id: 5,
    icon: '⭐',
    title: 'Calidad Garantizada',
    description: 'Todas las experiencias tienen calificación de 4.8+ estrellas con reseñas completas de viajeros verificados.'
  },
  {
    id: 6,
    icon: '💱',
    title: 'Precios Justos',
    description: 'Precios transparentes sin tarifas ocultas. El 100% de las propinas van directamente a los guías locales.'
  }
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Por Qué Elegir Qolect Travel</h2>
          <p className="section-description">
            Hemos construido una plataforma que prioriza la autenticidad, calidad y conexiones significativas 
            entre viajeros y comunidades locales.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}