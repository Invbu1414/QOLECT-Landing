'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface SimpleModalProps {
  isOpen: boolean
  onClose: () => void
  experience: any
}

export default function SimpleModal({ isOpen, onClose, experience }: SimpleModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const modalContent = (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9999,
          cursor: 'pointer'
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
          height: '400px',
          background: 'white',
          borderRadius: '1rem',
          zIndex: 10000,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer'
          }}
        >
          X
        </button>

        <h2 style={{ color: 'black', margin: 0 }}>
          {experience ? experience.title : 'No title'}
        </h2>
        
        <p style={{ color: 'black' }}>
          {experience ? experience.description : 'No description'}
        </p>

        <div style={{ color: 'black' }}>
          <strong>Price:</strong> {experience ? experience.price : 'No price'}
        </div>

        <div style={{ color: 'black' }}>
          <strong>Duration:</strong> {experience ? experience.duration : 'No duration'}
        </div>

        <div style={{ color: 'black' }}>
          <strong>Location:</strong> {experience ? experience.location : 'No location'}
        </div>
      </div>
    </>
  )

  // Render the modal at the end of the document body
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null
}