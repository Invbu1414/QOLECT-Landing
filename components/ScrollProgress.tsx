'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Call once to set initial value

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        zIndex: 9998,
        pointerEvents: 'none'
      }}
    >
      {/* Background */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      />
      
      {/* Progress bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #1DB7BF 0%, #F5C542 50%, #FF6B6B 100%)',
          transition: 'width 0.1s ease-out',
          boxShadow: scrollProgress > 0 ? '0 0 10px rgba(29, 183, 191, 0.5)' : 'none'
        }}
      />
      
      {/* Shimmer effect */}
      {scrollProgress > 0 && scrollProgress < 100 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `${Math.max(0, scrollProgress - 20)}%`,
            width: '20%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
            animation: 'shimmer 2s infinite'
          }}
        />
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}