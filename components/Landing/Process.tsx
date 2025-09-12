import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Browse curated experiences in your destination, filtered by interests and preferences.'
  },
  {
    id: 2,
    title: 'Connect',
    description: 'Get matched with verified local guides and experience providers in your chosen location.'
  },
  {
    id: 3,
    title: 'Book',
    description: 'Secure your spot with our simple booking system and receive instant confirmation.'
  },
  {
    id: 4,
    title: 'Experience',
    description: 'Enjoy your authentic local experience and create memories that last a lifetime.'
  }
]

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Our streamlined process makes it easy to find and book authentic travel experiences 
            that match your interests and travel style.
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