import Image from 'next/image'
import Link from 'next/link'
import { Experience } from '@/lib/api'
import { StarIcon, FireIcon } from '@heroicons/react/24/solid'

interface SpecialOffersProps {
    offers: Experience[]
}

export default function SpecialOffers({ offers }: SpecialOffersProps) {
    if (!offers || offers.length === 0) return null

    return (
        <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                        <FireIcon className="h-8 w-8 text-orange-500" />
                        <h2 className="text-3xl font-bold text-gray-900">Ofertas Especiales</h2>
                    </div>
                    <Link href="/offers" className="text-blue-600 hover:text-blue-800 font-medium text-sm hidden sm:block">
                        Ver todas las ofertas &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer) => {
                        const precioNormal = offer.precio_normal || offer.precio * 1.2; // Fallback simulation
                        const precioRebajado = offer.precio_rebajado || offer.precio;
                        const discount = Math.round(((precioNormal - precioRebajado) / precioNormal) * 100);

                        return (
                            <div key={offer.plan_id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                <div className="relative h-48">
                                    <Image
                                        src={offer.plan_image || offer.imagen || '/placeholder-experience.jpg'}
                                        alt={offer.plan_title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        -{discount}% OFF
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{offer.plan_title}</h3>
                                    <div className="flex items-center mb-3">
                                        <StarIcon className="h-4 w-4 text-yellow-400" />
                                        <span className="text-sm text-gray-600 ml-1 font-medium">{offer.plan_rating || '4.8'}</span>
                                        <span className="text-xs text-gray-400 ml-1">(120)</span>
                                    </div>

                                    <div className="flex items-end gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-400 line-through">${precioNormal.toLocaleString()}</span>
                                            <span className="text-xl font-bold text-green-600">${precioRebajado.toLocaleString()}</span>
                                        </div>
                                        <span className="text-xs text-gray-500 mb-1">/ persona</span>
                                    </div>

                                    <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                                        Ver Oferta
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link href="/offers" className="text-blue-600 font-medium">
                        Ver todas las ofertas &rarr;
                    </Link>
                </div>
            </div>
        </section>
    )
}
