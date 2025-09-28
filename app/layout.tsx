import type { Metadata } from 'next'
import './globals.css'
import CursorFollower from '@/components/CursorFollower'

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force scroll to top immediately on page load
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            `,
          }}
        />
        {children}
        <CursorFollower />
      </body>
    </html>
  )
}