import React from 'react'

const galleryItems = [
  { id: 1, icon: '🌋', title: 'BOARDING EN VOLCÁN', subtitle: 'Nicaragua' },
  { id: 2, icon: '🎨', title: 'TOURS DE ARTE CALLEJERO', subtitle: 'Berlín' },
  { id: 3, icon: '🦁', title: 'BUCEO CON TIBURONES', subtitle: 'Sudáfrica' },
  { id: 4, icon: '🌙', title: 'SENDERISMO SOL DE MEDIANOCHE', subtitle: 'Islandia' },
  { id: 5, icon: '🎭', title: 'RAVES SUBTERRÁNEOS', subtitle: 'Bucarest' },
  { id: 6, icon: '🎆', title: 'CAZANDO AURORAS', subtitle: 'Laponia' },
  { id: 7, icon: '🌴', title: 'SUPERVIVENCIA EN LA JUNGLA', subtitle: 'Amazonas' }
]

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">EXPERIENCIAS ÉPICAS TE ESPERAN</h2>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-content">
                <div className="gallery-icon">{item.icon}</div>
                <div className="gallery-text">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</div>
                  <div style={{ fontSize: '1rem', opacity: 0.9 }}>{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}