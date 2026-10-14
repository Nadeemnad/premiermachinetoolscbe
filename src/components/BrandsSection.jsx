import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AUTHORIZED_BRANDS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

export default function BrandsSection({ currentLang }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="brands" style={{
      padding: '70px 20px',
      background: '#f1f5f9',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge-green" style={{ marginBottom: '10px' }}>
            <Award size={14} /> {t.brands.badge}
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: 'var(--pmt-navy)',
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
          {AUTHORIZED_BRANDS.map((brand, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                borderTop: `4px solid ${brand.logoColor || 'var(--pmt-red)'}`
              }}
            >
              <div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: brand.logoColor || 'var(--pmt-navy)',
                  letterSpacing: '0.04em',
                  marginBottom: '6px'
                }}>
                  {brand.name}
                </div>

                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--pmt-green)',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  {brand.specialty}
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
                color: '#106f3c',
                fontWeight: 700,
                borderTop: '1px solid #f1f5f9',
                paddingTop: '12px'
              }}>
                <CheckCircle2 size={14} /> Factory Tested & Genuine Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
