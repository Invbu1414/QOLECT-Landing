import React from 'react'

const features = [
  {
    id: 1,
    icon: '🌟',
    title: 'Curated Experiences',
    description: 'Every experience is hand-selected and verified by our local experts to ensure authenticity and quality.'
  },
  {
    id: 2,
    icon: '📍',
    title: 'Local Connections',
    description: 'Connect directly with passionate locals who share their culture, stories, and hidden gems.'
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Seamless Booking',
    description: 'Simple, secure booking process with instant confirmation and 24/7 customer support.'
  },
  {
    id: 4,
    icon: '🌎',
    title: 'Global Reach',
    description: 'Access unique experiences in over 85 countries, from bustling cities to remote destinations.'
  },
  {
    id: 5,
    icon: '⭐',
    title: 'Quality Assured',
    description: 'All experiences are rated 4.8+ stars with comprehensive reviews from verified travelers.'
  },
  {
    id: 6,
    icon: '💱',
    title: 'Fair Pricing',
    description: 'Transparent pricing with no hidden fees. 100% of tips go directly to local guides.'
  }
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Qolect Travel</h2>
          <p className="section-description">
            We’ve built a platform that prioritizes authenticity, quality, and meaningful connections 
            between travelers and local communities.
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