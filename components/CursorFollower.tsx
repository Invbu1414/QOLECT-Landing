'use client'

import { useState, useEffect, useRef } from 'react'

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Detectar elementos interactivos de forma más eficiente
    const handleElementHover = (isHovering: boolean) => {
      setIsHovering(isHovering)
    }

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-hover, input, textarea, select, [tabindex="0"]'
      )
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => handleElementHover(true), { passive: true })
        element.addEventListener('mouseleave', () => handleElementHover(false), { passive: true })
      })
    }

    // Agregar listeners con passive: true para mejor performance
    document.addEventListener('mousemove', updateMousePosition, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    document.addEventListener('mousedown', handleMouseDown, { passive: true })
    document.addEventListener('mouseup', handleMouseUp, { passive: true })
    
    // Observer para detectar nuevos elementos dinámicamente
    const observer = new MutationObserver(() => {
      addHoverListeners()
    })
    
    observer.observe(document.body, { childList: true, subtree: true })
    
    // Inicializar listeners
    setTimeout(addHoverListeners, 100)

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
    }
  }, [isVisible])

  // No mostrar en dispositivos táctiles
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      setIsVisible(false)
    }
  }, [])

  if (!isVisible) return null

  const cursorSize = isClicking ? 12 : isHovering ? 40 : 20
  const outerSize = isClicking ? 25 : isHovering ? 60 : 40

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'none'
        }}
      >
        {/* Cursor principal */}
        <div
          style={{
            position: 'absolute',
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            borderRadius: '50%',
            background: isClicking
              ? 'radial-gradient(circle, #F5C542 0%, #FF6B6B 100%)'
              : isHovering 
                ? 'linear-gradient(135deg, #1DB7BF 0%, #F5C542 100%)'
                : '#1DB7BF',
            transform: `translate(${mousePosition.x - cursorSize/2}px, ${mousePosition.y - cursorSize/2}px) ${isClicking ? 'scale(0.8)' : 'scale(1)'}`,
            transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            opacity: isClicking ? 1 : isHovering ? 0.9 : 0.7,
            boxShadow: isClicking
              ? '0 0 40px rgba(245, 197, 66, 0.8), 0 0 80px rgba(245, 197, 66, 0.4)'
              : isHovering 
                ? '0 0 30px rgba(29, 183, 191, 0.6), 0 0 60px rgba(29, 183, 191, 0.3)' 
                : '0 0 20px rgba(29, 183, 191, 0.4)',
            mixBlendMode: 'difference'
          }}
        />
        
        {/* Círculo exterior animado */}
        <div
          style={{
            position: 'absolute',
            width: `${outerSize}px`,
            height: `${outerSize}px`,
            borderRadius: '50%',
            border: `${isClicking ? 3 : isHovering ? 2 : 1}px solid ${isClicking ? '#FF6B6B' : isHovering ? '#F5C542' : '#1DB7BF'}`,
            transform: `translate(${mousePosition.x - outerSize/2}px, ${mousePosition.y - outerSize/2}px) ${isClicking ? 'scale(1.2)' : 'scale(1)'}`,
            transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            opacity: isClicking ? 0.8 : isHovering ? 0.6 : 0.3,
            mixBlendMode: 'difference'
          }}
        />

        {/* Partículas que siguen el cursor */}
        {(isHovering || isClicking) && (
          <>
            <div
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#F5C542',
                transform: `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`,
                transition: 'all 0.1s ease-out',
                opacity: 0.8,
                mixBlendMode: 'difference'
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: '#FF6B6B',
                transform: `translate(${mousePosition.x + 15 - 1.5}px, ${mousePosition.y - 10 - 1.5}px)`,
                transition: 'all 0.15s ease-out',
                opacity: 0.6,
                mixBlendMode: 'difference'
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: '#4ECDC4',
                transform: `translate(${mousePosition.x - 12 - 1}px, ${mousePosition.y + 8 - 1}px)`,
                transition: 'all 0.2s ease-out',
                opacity: 0.5,
                mixBlendMode: 'difference'
              }}
            />
          </>
        )}
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx global>{`
        @keyframes cursorPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-3px) rotate(120deg);
          }
          66% {
            transform: translateY(2px) rotate(240deg);
          }
        }
      `}</style>
    </>
  )
}