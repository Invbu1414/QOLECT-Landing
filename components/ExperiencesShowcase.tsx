'use client'

import { Experience } from '@/lib/api'
import Image from 'next/image'
import { useState } from 'react'

interface ExperiencesShowcaseProps {
    experiences: Experience[]
}

export default function ExperiencesShowcase({ experiences }: ExperiencesShowcaseProps) {
    if (!experiences || experiences.length === 0) {
        return null
    }

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Experiencias Destacadas
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre aventuras únicas diseñadas para crear recuerdos inolvidables
                    </p>
                </div>

                {/* Experiences Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {experiences.slice(0, 6).map((experience, index) => (
                        <ExperienceCard key={experience.plan_id} experience={experience} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <span>Ver todas las experiencias</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={experience.plan_image || '/placeholder-experience.jpg'}
                    alt={experience.plan_title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                        }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                        {experience.categoria || 'Aventura'}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-900">
                        {experience.plan_rating || '4.8'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {experience.plan_title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {experience.descripcioncorta || experience.descripcion || 'Una experiencia inolvidable te espera.'}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Desde</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ${experience.precio.toLocaleString()}
                        </p>
                    </div>

                    <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Ver más
                    </button>
                </div>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 border-2 border-blue-500 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
        </div>
    )
}

// Add keyframes for animation
const style = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style')
    styleSheet.textContent = style
    document.head.appendChild(styleSheet)
}
