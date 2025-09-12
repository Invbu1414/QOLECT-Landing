import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qolect Travel - Unleash Your Wanderlust 🌈',
  description: 'Bold, vibrant travel experiences that break the mold. Discover extraordinary adventures with Qolect Travel - where every journey is a masterpiece.',
  keywords: 'creative travel, unique experiences, adventure travel, bold destinations, artistic journeys',
  openGraph: {
    title: 'Qolect Travel - Unleash Your Wanderlust 🌈',
    description: 'Bold, vibrant travel experiences that break the mold',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}