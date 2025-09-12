import React from 'react'

const steps = [
  { id: 1, icon: 'search', title: 'Explora', description: 'Busca experiencias auténticas en destinos increíbles creadas por expertos locales.' },
  { id: 2, icon: 'book', title: 'Reserva', description: 'Elige tu experiencia favorita y reserva de forma segura con confirmación instantánea.' },
  { id: 3, icon: 'experience', title: 'Vive', description: 'Disfruta de experiencias únicas y conecta con culturas locales de manera auténtica.' },
  { id: 4, icon: 'share', title: 'Comparte', description: 'Comparte tus recuerdos y ayuda a otros viajeros a descubrir experiencias increíbles.' }
]

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>Cómo Funciona Qolect</h2>
          <p>Tu aventura perfecta está a solo 4 pasos de distancia</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <div className="step-number">{step.id}</div>
              <div className={`step-icon icon-${step.icon}`}></div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="how-it-works-cta">
          <button className="btn-primary">Comenzar Mi Aventura</button>
        </div>
      </div>
    </section>
  )
}