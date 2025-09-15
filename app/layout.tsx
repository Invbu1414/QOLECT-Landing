import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qolect - Descubre Experiencias Inolvidables',
  description: 'Viaja con propósito y transforma tu manera de ver el mundo con Qolect.',
  keywords: 'viajes, experiencias, turismo, aventuras, Qolect',
  authors: [{ name: 'Qolect' }],
  openGraph: {
    title: 'Qolect - Descubre Experiencias Inolvidables',
    description: 'Viaja con propósito y transforma tu manera de ver el mundo',
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
      <body>
        {children}
      </body>
    </html>
  )
}