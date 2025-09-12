import React from 'react'

const galleryItems = [
  { id: 1, icon: '🌋', title: 'VOLCANO BOARDING', subtitle: 'Nicaragua' },
  { id: 2, icon: '🎨', title: 'STREET ART TOURS', subtitle: 'Berlin' },
  { id: 3, icon: '🦁', title: 'SHARK CAGE DIVING', subtitle: 'South Africa' },
  { id: 4, icon: '🌙', title: 'MIDNIGHT SUN HIKING', subtitle: 'Iceland' },
  { id: 5, icon: '🎭', title: 'UNDERGROUND RAVES', subtitle: 'Bucharest' },
  { id: 6, icon: '🎆', title: 'AURORA CHASING', subtitle: 'Lapland' },
  { id: 7, icon: '🌴', title: 'JUNGLE SURVIVAL', subtitle: 'Amazon' }
]

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">EPIC EXPERIENCES AWAIT</h2>
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