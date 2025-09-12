import React from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Qolect turned my boring vacation into an INSANE adventure! Swimming with sharks was just the beginning. These people are certifiably crazy in the best way possible.",
    author: "Maya Rodriguez",
    location: "Los Angeles, CA",
    avatar: "🤘"
  },
  {
    id: 2,
    quote: "I thought I knew travel until I met Qolect. They showed me hidden underground scenes and experiences I never knew existed. My Instagram has never looked better!",
    author: "Jake Thompson",
    location: "London, UK", 
    avatar: "😎"
  },
  {
    id: 3,
    quote: "From volcano boarding to midnight raves in abandoned warehouses - Qolect doesn't just plan trips, they curate LEGENDARY experiences. My friends think I'm living in a movie.",
    author: "Zara Kim",
    location: "Seoul, South Korea",
    avatar: "🤩"
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">LEGENDS IN THE MAKING</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="testimonial-content">
                <blockquote className="testimonial-quote">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}