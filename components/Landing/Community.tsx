import React from 'react'

const testimonials = [
  { id: 1, name: 'María González', location: 'Madrid, España', text: 'La experiencia de cocina en Toscana fue increíble. Aprendí recetas familiares que han pasado de generación en generación.', experience: 'Cocina Italiana Tradicional' },
  { id: 2, name: 'David Chen', location: 'Vancouver, Canadá', text: 'El safari en Tanzania cambió mi perspectiva sobre la naturaleza. Ver a los animales en su hábitat natural fue mágico.', experience: 'Safari Africano' },
  { id: 3, name: 'Sophie Laurent', location: 'París, Francia', text: 'La ceremonia del té en Kyoto fue una experiencia espiritual única. El guía local compartió historias fascinantes.', experience: 'Ceremonia del Té' }
]

const stats = [
  { value: '50,000+', label: 'Viajeros Felices' },
  { value: '1,200+', label: 'Experiencias Únicas' },
  { value: '85', label: 'Países' },
  { value: '4.9', label: 'Rating Promedio' }
]

export default function Community() {
  return (
    <section className="community">
      <div className="container">
        <div className="section-header">
          <h2>Únete a Nuestra Comunidad</h2>
          <p>Miles de viajeros han transformado sus aventuras con Qolect</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="testimonials">
          <h3>Lo que dicen nuestros viajeros</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <div className="testimonial-content">
                  <blockquote>&ldquo;{testimonial.text}&rdquo;</blockquote>
                  <div className="testimonial-experience">{testimonial.experience}</div>
                </div>
                <div className="testimonial-author">
                  <div className="avatar"></div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="community-cta">
          <h3>¿Listo para tu próxima aventura?</h3>
          <p>Únete a miles de viajeros que han descubierto experiencias auténticas</p>
          <button className="btn-primary">Explorar Experiencias</button>
        </div>
      </div>
    </section>
  )
}