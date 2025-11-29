'use client'

import { useTranslations } from '../contexts/LanguageContext'

export default function HowItWorks() {
  const t = useTranslations('howItWorks')

  const steps = [
    {
      number: '01',
      icon: '🔍',
      titleKey: 'step1.title',
      descriptionKey: 'step1.description'
    },
    {
      number: '02',
      icon: '⚙️',
      titleKey: 'step2.title',
      descriptionKey: 'step2.description'
    },
    {
      number: '03',
      icon: '💳',
      titleKey: 'step3.title',
      descriptionKey: 'step3.description'
    },
    {
      number: '04',
      icon: '✨',
      titleKey: 'step4.title',
      descriptionKey: 'step4.description'
    }
  ]

  return (
    <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1rem'
            }}
          >
            {t('title')}
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', maxWidth: '32rem', margin: '0 auto' }}>
            {t('subtitle')}
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '3rem',
                    right: '-1rem',
                    width: '2rem',
                    height: '2px',
                    background: 'linear-gradient(to right, #1DB7BF, #F5C542)',
                    zIndex: 1,
                    display: 'none'
                  }}
                  className="lg:block"
                />
              )}

              {/* Step circle */}
              <div 
                style={{
                  width: '6rem',
                  height: '6rem',
                  background: 'linear-gradient(135deg, #1DB7BF 0%, #0F7FA3 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 8px 32px rgba(29, 183, 191, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 183, 191, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 183, 191, 0.3)'
                }}
              >
                <span style={{ fontSize: '2rem' }}>{step.icon}</span>
              </div>

              {/* Step number */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: 'calc(50% - 3.5rem)',
                  width: '1.5rem',
                  height: '1.5rem',
                  background: '#F5C542',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  zIndex: 3
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '0.75rem'
                }}
              >
                {t(step.titleKey)}
              </h3>

              <p
                style={{
                  color: '#64748B',
                  lineHeight: '1.6',
                  maxWidth: '200px',
                  margin: '0 auto'
                }}
              >
                {t(step.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            style={{
              background: '#F5C542',
              color: '#0F172A',
              padding: '1rem 2.5rem',
              border: 'none',
              borderRadius: '1rem',
              fontSize: '1.125rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)'
              e.currentTarget.style.filter = 'brightness(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
              e.currentTarget.style.filter = 'brightness(1)'
            }}
          >
            Comenzar mi aventura
          </button>
        </div>
      </div>
    </section>
  )
}