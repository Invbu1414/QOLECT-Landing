'use client'

import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

// Pre-defined particle configurations to avoid hydration issues
const particleConfigs = [
  { size: 2, left: 10, top: 20, duration: 3, delay: 0.2 },
  { size: 3, left: 80, top: 10, duration: 4, delay: 1.5 },
  { size: 2.5, left: 30, top: 70, duration: 2.5, delay: 0.8 },
  { size: 4, left: 60, top: 40, duration: 3.5, delay: 0.5 },
  { size: 3.5, left: 90, top: 80, duration: 2.8, delay: 1.2 },
  { size: 2.2, left: 15, top: 60, duration: 4.2, delay: 0.3 },
  { size: 3.8, left: 75, top: 25, duration: 3.2, delay: 1.8 },
  { size: 2.8, left: 45, top: 85, duration: 2.3, delay: 0.7 },
  { size: 3.2, left: 85, top: 50, duration: 3.8, delay: 1.0 },
  { size: 2.6, left: 25, top: 15, duration: 2.9, delay: 1.6 },
  { size: 3.6, left: 70, top: 75, duration: 3.3, delay: 0.4 },
  { size: 2.4, left: 55, top: 30, duration: 4.1, delay: 1.3 },
  { size: 4.2, left: 95, top: 65, duration: 2.7, delay: 0.9 },
  { size: 2.9, left: 35, top: 90, duration: 3.6, delay: 0.6 },
  { size: 3.3, left: 65, top: 5, duration: 3.9, delay: 1.4 },
  { size: 2.7, left: 5, top: 45, duration: 2.6, delay: 0.1 },
  { size: 3.9, left: 85, top: 35, duration: 3.4, delay: 1.7 },
  { size: 2.3, left: 50, top: 80, duration: 4.3, delay: 0.8 },
  { size: 3.4, left: 20, top: 55, duration: 2.4, delay: 1.1 },
  { size: 2.1, left: 75, top: 20, duration: 3.7, delay: 1.9 }
]

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(onLoadingComplete, 800) // Extra delay for exit animation
          return 100
        }
        return prev + 12 + Math.sin(prev / 10) * 3 // Smooth increment with slight variation
      })
    }, 150)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isComplete ? 0 : 1,
        transform: isComplete ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: isComplete ? 'none' : 'all'
      }}
    >
      {/* Animated background particles */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        {particleConfigs.map((particle, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Logo and Brand */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '4rem',
          transform: `translateY(${isComplete ? '-20px' : '0'})`,
          transition: 'transform 0.8s ease'
        }}
      >
        <div
          style={{
            fontSize: '4rem',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.1em'
          }}
        >
          QOLECT
        </div>
        <div
          style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '300',
            letterSpacing: '0.2em'
          }}
        >
          Descubre • Vive • Transforma
        </div>
      </div>

      {/* Progress Bar Container */}
      <div
        style={{
          width: '300px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '2rem'
        }}
      >
        {/* Progress Bar Fill */}
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #F5C542 0%, #FF8E53 100%)',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 20px rgba(245, 197, 66, 0.5)'
          }}
        />
        
        {/* Shimmer effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            animation: 'shimmer 2s infinite'
          }}
        />
      </div>

      {/* Progress Text */}
      <div
        style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '0.875rem',
          fontWeight: '500',
          letterSpacing: '0.1em'
        }}
      >
        {Math.round(progress)}%
      </div>

      {/* Pulsating dots */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '2rem'
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              animation: `pulse 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}