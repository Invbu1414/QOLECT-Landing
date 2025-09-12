import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qolect Travel - Experiencias Auténticas de Viaje',
  description: 'Descubre experiencias de viaje únicas y auténticas con Qolect Travel. Conecta con culturas locales y vive aventuras inolvidables.',
  keywords: 'viajes, experiencias, turismo, aventuras, culturas locales',
  openGraph: {
    title: 'Qolect Travel - Experiencias Auténticas de Viaje',
    description: 'Descubre experiencias de viaje únicas y auténticas con Qolect Travel',
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