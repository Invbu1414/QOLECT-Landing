'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import esMessages from '../messages/es.json'
import enMessages from '../messages/en.json'

type Locale = 'es' | 'en'
type Messages = typeof esMessages

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const messages: Record<Locale, Messages> = {
  es: esMessages,
  en: enMessages
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Inicializar con 'es' por defecto
  const [locale, setLocaleState] = useState<Locale>('es')
  const [isClient, setIsClient] = useState(false)

  // Solo ejecutar en el cliente
  useEffect(() => {
    setIsClient(true)

    // Cargar idioma guardado o usar español por defecto
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      console.log('📖 Loaded saved locale:', savedLocale)
      setLocaleState(savedLocale)
    } else {
      // Forzar español por defecto
      console.log('📖 Using default locale: es')
      setLocaleState('es')
      localStorage.setItem('locale', 'es')
    }
  }, [])

  // Guardar idioma en localStorage cuando cambie
  const setLocale = (newLocale: Locale) => {
    console.log('🌍 Changing language from', locale, 'to:', newLocale)
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  // Función helper para obtener traducciones
  const t = (key: string): any => {
    console.log('🔍 Translation requested:', key, 'for locale:', locale)
    const keys = key.split('.')
    let value: any = messages[locale]
    console.log('🔍 Starting with messages for locale:', locale, 'keys to traverse:', keys)

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
        console.log('🔍 After key', k, ':', value)
      } else {
        console.warn(`❌ Translation key not found: ${key}, stopped at key: ${k}`)
        return key // Retornar key si no encuentra traducción
      }
    }

    // Return the value as-is if it's string or array, otherwise return the key
    const result = (typeof value === 'string' || Array.isArray(value)) ? value : key
    console.log('✅ Translation result:', result)
    return result
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages: messages[locale], t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook personalizado para traducciones (compatible con sintaxis de next-intl)
export function useTranslations(namespace?: string) {
  const { t } = useLanguage()

  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key
    return t(fullKey)
  }
}
