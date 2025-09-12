import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qolect Travel - Desata tu Sed de Aventura 🌈',
  description: 'Experiencias de viaje audaces y vibrantes que rompen el molde. Descubre aventuras extraordinarias con Qolect Travel - donde cada viaje es una obra maestra.',
  keywords: 'viajes creativos, experiencias únicas, viajes de aventura, destinos audaces, viajes artísticos',
  openGraph: {
    title: 'Qolect Travel - Desata tu Sed de Aventura 🌈',
    description: 'Experiencias de viaje audaces y vibrantes que rompen el molde',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}