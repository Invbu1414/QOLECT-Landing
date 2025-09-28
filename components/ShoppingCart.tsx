'use client'

import { useState, useEffect } from 'react'

// Tipos para el carrito
interface CartItem {
  experienceKey: string
  experience: any
  basePrice: number
  selectedDate: string
  numberOfPeople: number
  customizations: string[]
  totalPrice: number
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
  experience: any
  experienceKey: string
}

// Precios de personalizaciones
const customizationPrices: { [key: string]: number } = {
  // Cartagena
  'Noches adicionales': 450000,
  'Upgrade a suite': 800000,
  'Tour gastronómico': 350000,
  'Experiencias de spa': 600000,
  'Actividades acuáticas (Cartagena)': 400000,

  // Cocora
  'Noches extra en finca': 320000,
  'Tour de aventura (canopy)': 280000,
  'Taller de barismo': 150000,
  'Visita pueblos adicionales': 200000,
  'Experiencia gastronómica': 350000,

  // Amazonas
  'Días adicionales (Amazonas)': 650000,
  'Expedición avanzada': 950000,
  'Ceremonia ancestral': 400000,
  'Pesca deportiva': 300000,
  'Investigación científica': 1200000,

  // Tayrona
  'Upgrade alojamiento': 500000,
  'Días adicionales (Tayrona)': 380000,
  'Tour arqueológico': 250000,
  'Actividades acuáticas (Tayrona)': 300000,
  'Retiro wellness': 700000
}

export default function ShoppingCart({ isOpen, onClose, experience, experienceKey }: ShoppingCartProps) {
  const [selectedDate, setSelectedDate] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const basePrice = parseInt(experience?.basePrice?.replace(/[$,]/g, '') || '0')

  // Calcular precio total
  const customizationsTotal = selectedCustomizations.reduce((total, customization) => {
    return total + (customizationPrices[customization] || 0)
  }, 0)

  const subtotal = (basePrice + customizationsTotal) * numberOfPeople
  const discount = numberOfPeople >= 4 ? subtotal * 0.1 : 0 // 10% descuento grupos 4+
  const totalPrice = subtotal - discount

  // Manejar cambios en personalizaciones
  const handleCustomizationChange = (customization: string) => {
    setSelectedCustomizations(prev =>
      prev.includes(customization)
        ? prev.filter(c => c !== customization)
        : [...prev, customization]
    )
  }

  // Procesar compra con MercadoPago
  const handlePurchase = async () => {
    setIsProcessing(true)

    // Simulación de integración con MercadoPago
    const cartItem: CartItem = {
      experienceKey,
      experience,
      basePrice,
      selectedDate,
      numberOfPeople,
      customizations: selectedCustomizations,
      totalPrice
    }

    try {
      // Aquí iría la integración real con MercadoPago
      console.log('Procesando compra:', cartItem)

      // Simular redirect a MercadoPago
      setTimeout(() => {
        window.open(`https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=demo-${Date.now()}`, '_blank')
        setIsProcessing(false)
        onClose()
      }, 2000)

    } catch (error) {
      console.error('Error al procesar compra:', error)
      setIsProcessing(false)
    }
  }

  if (!isOpen || !experience) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
          borderRadius: '1.5rem',
          padding: '2rem',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', margin: 0 }}>
              🛒 Personalizar Viaje
            </h2>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>

          <h3 style={{ fontSize: '1.5rem', color: '#F5C542', margin: 0 }}>
            {experience.title}
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0.5rem 0 0 0' }}>
            {experience.subtitle}
          </p>
        </div>

        {/* Configuración */}
        <div style={{ marginBottom: '2rem' }}>
          {/* Fecha */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
              📅 Selecciona tu fecha:
            </label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem'
              }}
            >
              <option value="">Elige una fecha</option>
              {experience.availableDates.map((date: string, index: number) => (
                <option key={index} value={date}>{date}</option>
              ))}
            </select>
          </div>

          {/* Número de personas */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
              👥 Número de personas:
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '3rem',
                  height: '3rem',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                -
              </button>
              <span style={{ fontSize: '1.5rem', color: 'white', fontWeight: '700', minWidth: '3rem', textAlign: 'center' }}>
                {numberOfPeople}
              </span>
              <button
                onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '3rem',
                  height: '3rem',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
              {numberOfPeople >= 4 && (
                <span style={{ color: '#F5C542', fontWeight: '600', fontSize: '0.9rem' }}>
                  ✨ 10% descuento grupal!
                </span>
              )}
            </div>
          </div>

          {/* Personalizaciones */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '1rem' }}>
              ⚡ Personaliza tu experiencia:
            </label>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {experience.customizable?.map((customization: string, index: number) => (
                <label
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.8rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    border: selectedCustomizations.includes(customization)
                      ? '2px solid #F5C542'
                      : '2px solid transparent'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCustomizations.includes(customization)}
                    onChange={() => handleCustomizationChange(customization)}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <span style={{ color: 'white', flex: 1 }}>{customization}</span>
                  <span style={{ color: '#F5C542', fontWeight: '600' }}>
                    +${(customizationPrices[customization] || 0).toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Resumen de precio */}
        <div style={{ marginBottom: '2rem', background: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '1rem' }}>
          <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem' }}>💰 Resumen de precios:</h4>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Precio base x {numberOfPeople}</span>
            <span style={{ color: 'white' }}>${(basePrice * numberOfPeople).toLocaleString()}</span>
          </div>

          {selectedCustomizations.map((customization, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>+ {customization}</span>
              <span style={{ color: '#F5C542' }}>+${(customizationPrices[customization] || 0).toLocaleString()}</span>
            </div>
          ))}

          {discount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Descuento grupal (10%)</span>
              <span style={{ color: '#4ADE80' }}>-${discount.toLocaleString()}</span>
            </div>
          )}

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.3)', margin: '1rem 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '700' }}>
            <span style={{ color: 'white' }}>Total:</span>
            <span style={{ color: '#F5C542' }}>${totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Botón de compra */}
        <button
          onClick={handlePurchase}
          disabled={!selectedDate || isProcessing}
          style={{
            width: '100%',
            padding: '1.2rem',
            background: selectedDate && !isProcessing
              ? 'linear-gradient(135deg, #F5C542 0%, #E6A635 100%)'
              : 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            borderRadius: '0.8rem',
            color: selectedDate && !isProcessing ? '#0F172A' : 'rgba(255, 255, 255, 0.6)',
            fontSize: '1.2rem',
            fontWeight: '700',
            cursor: selectedDate && !isProcessing ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease'
          }}
        >
          {isProcessing ? (
            '⏳ Procesando...'
          ) : !selectedDate ? (
            '📅 Selecciona una fecha para continuar'
          ) : (
            '💳 Pagar con MercadoPago'
          )}
        </button>

        {/* Info adicional */}
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', margin: 0 }}>
            🔒 Pago seguro • 📞 Soporte 24/7 • ↩️ Cancelación flexible
          </p>
        </div>
      </div>
    </div>
  )
}