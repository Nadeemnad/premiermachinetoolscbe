import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Wrench, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/machines';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" style={{
      padding: '80px 24px',
      maxWidth: '960px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div className="tech-badge" style={{ marginBottom: '12px' }}>
          <HelpCircle size={14} /> KNOWLEDGE & SUPPORT
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
          color: '#ffffff',
          marginBottom: '14px'
        }}>
          Frequently Asked <span style={{ color: '#f59e0b' }}>Technical Questions</span>
        </h2>
        <p style={{
          color: '#94a3b8',
          fontSize: '0.98rem',
          lineHeight: 1.6
        }}>
          Everything you need to know regarding machine commissioning, warranty terms, and service coverage across Tamil Nadu.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-card"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                background: isOpen ? 'rgba(17, 24, 39, 0.95)' : 'rgba(15, 23, 42, 0.6)',
                border: isOpen ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.25s ease'
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                id={`faq-toggle-${index}`}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  color: isOpen ? '#fbbf24' : '#f8fafc',
                  fontWeight: 600,
                  fontSize: '1rem',
                  gap: '16px'
                }}
              >
                <span>{faq.q}</span>
                <span style={{
                  color: isOpen ? '#f59e0b' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0
                }}>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {isOpen && (
                <div style={{
                  padding: '0 24px 20px',
                  color: '#94a3b8',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                  paddingTop: '16px'
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
