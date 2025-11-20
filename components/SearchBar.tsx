'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, CalendarIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function SearchBar() {
    const [destination, setDestination] = useState('')

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-lg p-2 flex items-center gap-2 border border-gray-100">
            <div className="flex-1 flex items-center px-4 border-r border-gray-200">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 mr-3" />
                <div className="flex flex-col w-full">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">Destino</label>
                    <input
                        type="text"
                        placeholder="¿A dónde quieres viajar?"
                        className="w-full outline-none text-gray-600 placeholder-gray-400 text-sm"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 flex items-center px-4 border-r border-gray-200 hidden md:flex">
                <CalendarIcon className="h-6 w-6 text-gray-400 mr-3" />
                <div className="flex flex-col w-full">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">Fechas</label>
                    <input
                        type="text"
                        placeholder="Agregar fechas"
                        className="w-full outline-none text-gray-600 placeholder-gray-400 text-sm bg-transparent"
                        readOnly
                    />
                </div>
            </div>

            <div className="px-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-md flex items-center gap-2">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    <span className="hidden md:inline font-medium pr-2">Buscar</span>
                </button>
            </div>
        </div>
    )
}
