'use client'

import { useState } from 'react'
import { useTranslations } from '../contexts/LanguageContext'

export default function CommunityForm() {
  const t = useTranslations('community')
  const [formData, setFormData] = useState({
    email: '',
    interests: [] as string[],
    newsletter: true
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const interestOptions = [
    { id: 'adventure', label: 'Aventuras & Deportes', icon: '🏔️' },
    { id: 'wellness', label: 'Bienestar & Retiros', icon: '🧘' },
    { id: 'culture', label: 'Cultura & Historia', icon: '🏛️' },
    { id: 'gastronomy', label: 'Gastronomía', icon: '🍽️' },
    { id: 'photography', label: 'Fotografía', icon: '📸' },
    { id: 'nature', label: 'Naturaleza', icon: '🌿' }
  ]

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ email: '', interests: [], newsletter: true })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
        <div className="container">
          <div 
            style={{
              textAlign: 'center',
              color: 'white',
              padding: '4rem 2rem',
              borderRadius: '2rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <div 
              style={{
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, #1DB7BF 0%, #F5C542 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem auto',
                fontSize: '2rem'
              }}
            >
              ✨
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
              {t('successTitle')}
            </h3>
            <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
              {t('successMessage')}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem'
            }}
          >
            {t('title')}
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto' }}>
            {t('subtitle')}
          </p>
        </div>

        <div 
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label 
                style={{
                  display: 'block',
                  color: 'white',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}
              >
                {t('emailLabel')}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder={t('emailPlaceholder')}
                required
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1rem',
                  color: 'white',
                  fontSize: '1.125rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1DB7BF'
                  e.target.style.background = 'rgba(29, 183, 191, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>

            {/* Interests Selection */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label 
                style={{
                  display: 'block',
                  color: 'white',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}
              >
                Tus intereses (opcional)
              </label>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}
              >
                {interestOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => handleInterestToggle(option.id)}
                    style={{
                      padding: '1rem 1.5rem',
                      background: formData.interests.includes(option.id) 
                        ? 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)'
                        : 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid',
                      borderColor: formData.interests.includes(option.id) 
                        ? '#1DB7BF' 
                        : 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      if (!formData.interests.includes(option.id)) {
                        e.currentTarget.style.background = 'rgba(29, 183, 191, 0.2)'
                        e.currentTarget.style.borderColor = '#1DB7BF'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!formData.interests.includes(option.id)) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      }
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>{option.icon}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{option.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Checkbox */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    accentColor: '#1DB7BF'
                  }}
                />
                <span>Quiero recibir el newsletter semanal con experiencias destacadas</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.email}
              style={{
                width: '100%',
                background: formData.email 
                  ? 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: formData.email ? 'white' : 'rgba(255, 255, 255, 0.5)',
                padding: '1.25rem 2rem',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: formData.email ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                opacity: formData.email ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (formData.email) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 183, 191, 0.4)'
                  e.currentTarget.style.filter = 'brightness(1.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (formData.email) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.filter = 'brightness(1)'
                }
              }}
            >
              {t('submit')}
            </button>
          </form>

          {/* Trust indicators */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#1DB7BF' }}>🔒</span>
              <span style={{ fontSize: '0.875rem' }}>100% Seguro</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#F5C542' }}>✉️</span>
              <span style={{ fontSize: '0.875rem' }}>Sin spam</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <span style={{ color: '#FF6B6B' }}>❌</span>
              <span style={{ fontSize: '0.875rem' }}>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}