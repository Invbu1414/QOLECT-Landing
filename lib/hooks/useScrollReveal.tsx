'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true)
              if (triggerOnce) setHasTriggered(true)
            }, delay)
          } else {
            setIsVisible(true)
            if (triggerOnce) setHasTriggered(true)
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered])

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translateY(0px) scale(1)' 
      : 'translateY(50px) scale(0.95)',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }

  return { ref: elementRef, isVisible, animationStyle }
}

export function useParallax(speed: number = 0.5) {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * speed
        setOffsetY(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref: elementRef, offsetY }
}

export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true)
          
          const startTime = Date.now()
          const startValue = 0
          
          const updateCount = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)
            const currentCount = Math.floor(startValue + (target - startValue) * easeOutCubic)
            
            setCount(currentCount)
            
            if (progress < 1) {
              requestAnimationFrame(updateCount)
            }
          }
          
          requestAnimationFrame(updateCount)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [target, duration, isActive])

  return { ref: elementRef, count }
}