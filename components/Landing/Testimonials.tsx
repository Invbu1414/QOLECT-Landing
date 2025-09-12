import React from 'react'

const testimonials = [
  {
    id: 1,
    quote: "¡Qolect convirtió mis vacaciones aburridas en una aventura INCREÍBLE! Nadar con tiburones fue solo el comienzo. Esta gente está certificadamente loca de la mejor manera posible.",
    author: "Maya Rodríguez",
    location: "Los Ángeles, CA",
    avatar: "🤘"
  },
  {
    id: 2,
    quote: "Pensé que conocía los viajes hasta que conocí Qolect. Me mostraron escenas subterráneas ocultas y experiencias que nunca supe que existían. ¡Mi Instagram nunca se había visto mejor!",
    author: "Jake Thompson",
    location: "Londres, Reino Unido", 
    avatar: "😎"
  },
  {
    id: 3,
    quote: "Desde el boarding en volcán hasta raves de medianoche en almacenes abandonados - Qolect no solo planifica viajes, curan experiencias LEGENDARIAS. Mis amigos piensan que estoy viviendo en una película.",
    author: "Zara Kim",
    location: "Seúl, Corea del Sur",
    avatar: "🤩"
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">LEYENDAS EN CONSTRUCCIÓN</h2>
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