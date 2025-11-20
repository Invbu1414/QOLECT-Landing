'use client'

import { News } from '@/lib/api'
import Image from 'next/image'

interface NewsSectionProps {
    news: News[]
}

export default function NewsSection({ news }: NewsSectionProps) {
    if (news.length === 0) {
        return null
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Últimas Noticias
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Mantente al día con nuestras actualizaciones
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <article
                            key={item.idnoticia}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                {item.imagen ? (
                                    <Image
                                        src={item.imagen}
                                        alt={item.titulo}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">
                                        📰
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-gray-500">
                                        {new Date(item.created_at).toLocaleDateString('es-ES', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">
                                        {item.autor || 'QOLECT'}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                    {item.titulo}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {item.resumen || 'Lee las últimas novedades sobre nuestros viajes y experiencias...'}
                                </p>

                                <a
                                    href="#"
                                    className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700"
                                >
                                    Leer más
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
