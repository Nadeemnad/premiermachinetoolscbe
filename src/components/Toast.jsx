import React, { useEffect } from 'react';
import { CheckCircle2, X, Sparkles } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 'var(--z-toast)',
      background: 'var(--pmt-black)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid var(--pmt-teal)',
      boxShadow: '0 12px 32px rgba(19, 17, 12, 0.6)',
      borderRadius: '12px',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      maxWidth: '420px',
      animation: 'slideUp 0.3s ease-out'
    }}>
      <div style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: 'var(--pmt-teal-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--pmt-teal)',
        flexShrink: 0
      }}>
        <CheckCircle2 size={18} />
      </div>

      <div style={{ fontSize: '0.88rem', color: '#f8fafc', lineHeight: 1.4 }}>
        {message}
      </div>

      <button
        onClick={onClose}
        style={{
          color: '#94a3b8',
          padding: '4px',
          borderRadius: '4px',
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
      >
        <X size={16} />
      </button>
    </div>
  );
}
