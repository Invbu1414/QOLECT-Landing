'use client'

import { useEffect, useRef } from 'react'

export default function LogoCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const logos = [
        { name: 'Partner 1', url: '/logos/partner1.svg' },
        { name: 'Partner 2', url: '/logos/partner2.svg' },
        { name: 'Partner 3', url: '/logos/partner3.svg' },
        { name: 'Partner 4', url: '/logos/partner4.svg' },
        { name: 'Partner 5', url: '/logos/partner5.svg' },
        { name: 'Partner 6', url: '/logos/partner6.svg' },
    ]

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let scrollPosition = 0
        const scrollSpeed = 0.5

        const scroll = () => {
            scrollPosition += scrollSpeed
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0
            }
            scrollContainer.scrollLeft = scrollPosition
        }

        const intervalId = setInterval(scroll, 20)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <section className="py-12 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                    Nuestros Partners
                </h3>

                <div
                    ref={scrollRef}
                    className="flex gap-12 overflow-hidden"
                    style={{ scrollBehavior: 'auto' }}
                >
                    {/* Duplicate logos for seamless loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                            style={{ minWidth: '150px', height: '60px' }}
                        >
                            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-medium">
                                {logo.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
