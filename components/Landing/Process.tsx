import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Descubre',
    description: 'Explora experiencias curadas en tu destino, filtradas por intereses y preferencias.'
  },
  {
    id: 2,
    title: 'Conecta',
    description: 'Conéctate con guías locales verificados y proveedores de experiencias en tu ubicación elegida.'
  },
  {
    id: 3,
    title: 'Reserva',
    description: 'Asegura tu lugar con nuestro sistema de reserva simple y recibe confirmación instantánea.'
  },
  {
    id: 4,
    title: 'Experimenta',
    description: 'Disfruta tu experiencia local auténtica y crea recuerdos que duran toda la vida.'
  }
]

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cómo Funciona</h2>
          <p className="section-description">
            Nuestro proceso simplificado hace fácil encontrar y reservar experiencias de viaje auténticas 
            que coincidan con tus intereses y estilo de viaje.
          </p>
        </div>
        
        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-number">{step.id}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}