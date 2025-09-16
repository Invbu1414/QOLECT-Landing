'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min((scrolled / maxHeight) * 100, 100)
      
      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
        color: 'white',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(29, 183, 191, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fontSize: '1.5rem',
        fontWeight: '700',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(29, 183, 191, 0.4)'
        e.currentTarget.style.filter = 'brightness(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 183, 191, 0.3)'
        e.currentTarget.style.filter = 'brightness(1)'
      }}
      title="Volver arriba"
    >
      {/* Progress ring */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)'
        }}
        viewBox="0 0 60 60"
      >
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        />
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="#F5C542"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 25}`}
          strokeDashoffset={`${2 * Math.PI * 25 * (1 - scrollProgress / 100)}`}
          style={{
            transition: 'stroke-dashoffset 0.3s ease'
          }}
        />
      </svg>
      
      {/* Arrow icon */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ↑
      </div>

      {/* Ripple effect on click */}
      <style jsx>{`
        button:active::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }
        
        @keyframes ripple {
          to {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }
      `}</style>
    </button>
  )
}