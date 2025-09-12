import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qolect Travel - Premium Travel Experiences',
  description: 'Discover authentic, curated travel experiences with Qolect Travel. Connect with local cultures and create unforgettable memories.',
  keywords: 'premium travel, authentic experiences, cultural immersion, luxury travel',
  openGraph: {
    title: 'Qolect Travel - Premium Travel Experiences',
    description: 'Discover authentic, curated travel experiences with Qolect Travel',
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