import React from 'react'

const stats = [
  { number: '50K+', label: 'Viajeros Felices' },
  { number: '1,200+', label: 'Experiencias Únicas' },
  { number: '85', label: 'Países' },
  { number: '4.9', label: 'Calificación Promedio' }
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}