import React from 'react'

const experiences = [
  { id: 1, title: 'Cocina con Familias Locales', location: 'Toscana, Italia', price: 'Desde €89', tags: ['Gastronomía', 'Cultural'] },
  { id: 2, title: 'Safari de Vida Silvestre', location: 'Serengeti, Tanzania', price: 'Desde $450', tags: ['Aventura', 'Naturaleza'] },
  { id: 3, title: 'Ceremonia del Té Tradicional', location: 'Kyoto, Japón', price: 'Desde ¥8,500', tags: ['Cultural', 'Espiritual'] },
  { id: 4, title: 'Trekking en los Andes', location: 'Cusco, Perú', price: 'Desde $120', tags: ['Aventura', 'Cultural'] },
  { id: 5, title: 'Buceo en Arrecife de Coral', location: 'Gran Barrera, Australia', price: 'Desde AU$180', tags: ['Aventura', 'Naturaleza'] },
  { id: 6, title: 'Mercado de Especias', location: 'Marrakech, Marruecos', price: 'Desde MAD 300', tags: ['Cultural', 'Gastronomía'] }
]

export default function ExperiencesGrid() {
  return (
    <section className="experiences-section">
      <div className="container">
        <div className="section-header">
          <h2>Experiencias Únicas Te Esperan</h2>
          <p>Descubre actividades auténticas creadas por expertos locales en destinos increíbles</p>
        </div>
        
        <div className="experiences-grid">
          {experiences.map((experience) => (
            <article key={experience.id} className="experience-card">
              <div className="experience-image">
                <div className="placeholder-image"></div>
                <div className="experience-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="experience-content">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-location">{experience.location}</p>
                <div className="experience-footer">
                  <span className="experience-price">{experience.price}</span>
                  <button className="btn-experience">Ver Más</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="experiences-cta">
          <button className="btn-primary">Ver Todas las Experiencias</button>
        </div>
      </div>
    </section>
  )
}