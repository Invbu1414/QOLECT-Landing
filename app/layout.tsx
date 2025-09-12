import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qolect Travel - Experiencias de Viaje Premium',
  description: 'Descubre experiencias de viaje auténticas y curadas con Qolect Travel. Conéctate con culturas locales y crea recuerdos inolvidables.',
  keywords: 'viajes premium, experiencias auténticas, inmersión cultural, viajes de lujo',
  openGraph: {
    title: 'Qolect Travel - Experiencias de Viaje Premium',
    description: 'Descubre experiencias de viaje auténticas y curadas con Qolect Travel',
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