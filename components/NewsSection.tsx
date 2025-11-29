'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { News } from '@/lib/api'
import { useTranslations, useLanguage } from '../contexts/LanguageContext'

interface NewsSectionProps {
    news: News[]
}

export default function NewsSection({ news }: NewsSectionProps) {
    const t = useTranslations('news')
    const { locale } = useLanguage()
    const [showSection, setShowSection] = useState(false)

    useEffect(() => {
        console.log('📰 NewsSection received news:', news);
        console.log('📰 NewsSection news count:', news?.length || 0);
        const timer = setTimeout(() => setShowSection(true), 300)
        return () => clearTimeout(timer)
    }, [news])

    const duplicatedNews = news.length > 0 ? [...news, ...news, ...news] : []

    if (news.length === 0) {
        return (
            <section
                id="noticias"
                style={{
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0F7FA3 0%, #1DB7BF 100%)',
                    padding: '4rem 2rem'
                }}
            >
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📰 {t('newsTitle')}</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                        {t('comingSoon')}
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section
            id="noticias"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0F7FA3 0%, #1DB7BF 100%)',
                position: 'relative',
                overflow: 'hidden',
                opacity: showSection ? 1 : 0,
                transition: 'opacity 1s ease',
                padding: '4rem 0'
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '1rem',
                        textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}>
                        {t('title')}
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        {t('subtitle')}
                    </p>
                </div>

                <div style={{
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <div
                        className="carousel-track"
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            animation: 'scroll 90s linear infinite',
                            width: 'fit-content'
                        }}
                    >
                        {duplicatedNews.map((item, index) => (
                            <Link
                                key={`${item.idnoticia}-${index}`}
                                href={`/noticias/${item.idnoticia}`}
                                style={{
                                    minWidth: '400px',
                                    maxWidth: '400px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    borderRadius: '1.5rem',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    overflow: 'hidden',
                                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    display: 'block'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.3)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                                }}
                            >
                                {item.imagen && (
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '250px',
                                        overflow: 'hidden'
                                    }}>
                                        <Image
                                            src={item.imagen}
                                            alt={item.titulo}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            sizes="400px"
                                        />
                                    </div>
                                )}

                                <div style={{ padding: '1.5rem' }}>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        marginBottom: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <span>📅</span>
                                        {new Date(item.created_at).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>

                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        marginBottom: '0.75rem',
                                        lineHeight: '1.3',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {item.titulo}
                                    </h3>

                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        lineHeight: '1.6',
                                        marginBottom: '1rem',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {item.descripcion}
                                    </p>

                                    <div style={{
                                        color: 'white',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        {t('readMore')} <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}
