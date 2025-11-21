'use client'

import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getNewsById, News } from '@/lib/api'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NewsPage() {
    const params = useParams()
    const id = params?.id as string

    const [newsItem, setNewsItem] = useState<News | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsId = parseInt(id)

                if (isNaN(newsId)) {
                    setError(true)
                    setLoading(false)
                    return
                }

                const data = await getNewsById(newsId)

                if (!data) {
                    setError(true)
                    setLoading(false)
                    return
                }

                setNewsItem(data)
                setLoading(false)
            } catch (err) {
                console.error('Error loading news:', err)
                setError(true)
                setLoading(false)
            }
        }

        if (id) {
            fetchNews()
        }
    }, [id])

    if (loading) {
        return (
            <>
                <Navbar />
                <main style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #0F7FA3 0%, #1DB7BF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem'
                }}>
                    Cargando noticia...
                </main>
                <Footer />
            </>
        )
    }

    if (error || !newsItem) {
        return (
            <>
                <Navbar />
                <main style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #0F7FA3 0%, #1DB7BF 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>
                        😕 Noticia no encontrada
                    </h1>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Lo sentimos, esta noticia no está disponible en este momento.
                    </p>
                    <Link
                        href="/#noticias"
                        style={{
                            background: 'white',
                            color: '#1DB7BF',
                            padding: '1rem 2rem',
                            borderRadius: '0.75rem',
                            fontWeight: '700',
                            textDecoration: 'none'
                        }}
                    >
                        ← Volver a Noticias
                    </Link>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />

            <main style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0F7FA3 0%, #1DB7BF 100%)',
                paddingTop: '6rem',
                paddingBottom: '4rem'
            }}>
                <article style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 2rem'
                }}>
                    <nav style={{
                        marginBottom: '2rem',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                        fontSize: '0.9rem'
                    }}>
                        <Link
                            href="/"
                            style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none'
                            }}
                        >
                            Inicio
                        </Link>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>→</span>
                        <Link
                            href="/#noticias"
                            style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none'
                            }}
                        >
                            Noticias
                        </Link>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>→</span>
                        <span style={{ color: 'white', fontSize: '0.85rem' }}>
                            {newsItem.titulo.length > 50 ? newsItem.titulo.substring(0, 50) + '...' : newsItem.titulo}
                        </span>
                    </nav>

                    <div style={{
                        background: 'white',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}>
                        {newsItem.imagen && (
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '500px',
                                overflow: 'hidden'
                            }}>
                                <Image
                                    src={newsItem.imagen}
                                    alt={newsItem.titulo}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                    sizes="900px"
                                />
                            </div>
                        )}

                        <div style={{
                            padding: '3rem',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            <div style={{
                                display: 'flex',
                                gap: '1.5rem',
                                marginBottom: '2rem',
                                paddingBottom: '1.5rem',
                                borderBottom: '1px solid #e5e5e5',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: '#666',
                                    fontSize: '0.95rem'
                                }}>
                                    <span>📅</span>
                                    <time dateTime={newsItem.created_at}>
                                        {new Date(newsItem.created_at).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </div>
                                {newsItem.autor && (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#666',
                                        fontSize: '0.95rem'
                                    }}>
                                        <span>✍️</span>
                                        <span>{newsItem.autor}</span>
                                    </div>
                                )}
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                fontWeight: '800',
                                color: '#1a1a1a',
                                marginBottom: '1.5rem',
                                lineHeight: '1.2'
                            }}>
                                {newsItem.titulo}
                            </h1>

                            <p style={{
                                fontSize: '1.25rem',
                                color: '#666',
                                lineHeight: '1.8',
                                marginBottom: '2rem',
                                fontWeight: '500',
                                fontStyle: 'italic',
                                paddingLeft: '1.5rem',
                                borderLeft: '4px solid #1DB7BF'
                            }}>
                                {newsItem.resumen}
                            </p>

                            <div style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#333'
                            }}
                                dangerouslySetInnerHTML={{ __html: newsItem.contenido }}
                            />

                            <div style={{
                                marginTop: '3rem',
                                paddingTop: '2rem',
                                borderTop: '1px solid #e5e5e5'
                            }}>
                                <Link
                                    href="/#noticias"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                                        color: 'white',
                                        padding: '1rem 2rem',
                                        borderRadius: '0.75rem',
                                        fontWeight: '700',
                                        fontSize: '1rem',
                                        textDecoration: 'none'
                                    }}
                                >
                                    ← Volver a Noticias
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    )
}
