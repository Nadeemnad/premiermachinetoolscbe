import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AUTHORIZED_BRANDS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

export default function BrandsSection({ currentLang }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Strict 3 Accent rotation
  const brandColors = ['var(--pmt-red)', 'var(--pmt-blue)', 'var(--pmt-teal)', 'var(--pmt-red)', 'var(--pmt-blue)', 'var(--pmt-teal)'];

  return (
    <section id="brands" style={{
      padding: '70px 16px',
      background: 'var(--bg-subtle)',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge-teal" style={{ marginBottom: '10px' }}>
            <Award size={14} /> {t.brands.badge}
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: 'var(--pmt-blue)',
            marginBottom: '12px'
          }}>
            {t.brands.heading}
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            maxWidth: '680px',
            margin: '0 auto',
            fontSize: '0.98rem'
          }}>
            {t.brands.desc}
          </p>
        </div>

        {/* Brands Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {AUTHORIZED_BRANDS.map((brand, idx) => {
            const accentColor = brandColors[idx % brandColors.length];
            const specialtyText = currentLang === 'ta' && brand.specialtyTa 
              ? brand.specialtyTa 
              : currentLang === 'hi' && brand.specialtyHi 
              ? brand.specialtyHi 
              : brand.specialty;

            return (
              <div 
                key={idx} 
                style={{
                  background: 'var(--pmt-white)',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: `4px solid ${accentColor}`
                }}
              >
                <div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    color: accentColor,
                    letterSpacing: '0.04em',
                    marginBottom: '6px'
                  }}>
                    {brand.name}
                  </div>

                  <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--pmt-blue)',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}>
                    {specialtyText}
                  </div>

                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '16px'
                  }}>
                    {brand.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'var(--pmt-teal)',
                  fontWeight: 700,
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '12px'
                }}>
                  <CheckCircle2 size={14} /> Certified Genuine Supply
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
