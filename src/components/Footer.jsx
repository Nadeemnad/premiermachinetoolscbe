import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Truck, 
  ArrowUp,
  FileText
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Footer({ currentLang, onOpenRfq, onNavigateContact }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" style={{
      background: 'var(--pmt-black)',
      color: 'rgba(255, 255, 255, 0.85)',
      padding: '60px 16px 24px',
      borderTop: '4px solid var(--pmt-red)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px',
          marginBottom: '44px'
        }}>
          {/* Brand & All-India Delivery Scope */}
          <div>
            <div style={{ marginBottom: '14px' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--pmt-white)',
                fontSize: '1.45rem',
                fontWeight: 900,
                letterSpacing: '0.02em',
                marginBottom: '4px'
              }}>
                {t.companyName}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--pmt-teal)',
                fontWeight: 700
              }}>
                {t.companySub}
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
              {t.footer.about}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(5, 171, 165, 0.15)',
              border: '1px solid var(--pmt-teal)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.78rem',
              color: 'var(--pmt-teal)',
              fontWeight: 700,
              marginBottom: '14px'
            }}>
              <Truck size={15} /> All Over India Delivery Available
            </div>

            <div>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--pmt-white)',
                background: 'rgba(198, 28, 26, 0.35)',
                border: '1px solid var(--pmt-red)',
                padding: '4px 10px',
                borderRadius: '6px',
                display: 'inline-block'
              }}>
                {t.gstinLabel}
              </span>
            </div>
          </div>

          {/* Address & Office Locations (From Visiting Card) */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: 'var(--pmt-white)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              borderBottom: '2px solid var(--pmt-red)',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              {t.footer.contactTitle}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--pmt-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--pmt-white)' }}>Head Office (H.O.):</strong><br />
                  129/4 (Old No. 184) Dr. Nanjappa Road,<br />
                  Coimbatore - 641 018, Tamil Nadu
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--pmt-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--pmt-white)' }}>Branch Office (B.O.):</strong><br />
                  Basement Floor, 180, N.S.P. Shopping Complex,<br />
                  Coimbatore, Tamil Nadu
                </div>
              </div>

              {onNavigateContact && (
                <button
                  onClick={onNavigateContact}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--pmt-white)',
                    background: 'rgba(3, 78, 161, 0.45)',
                    border: '1px solid var(--pmt-blue)',
                    borderRadius: '6px',
                    padding: '8px 14px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '4px',
                    width: 'fit-content',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--pmt-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(3, 78, 161, 0.45)'}
                >
                  <MapPin size={14} color="var(--pmt-red)" />
                  <span>{t.nav.contact} &amp; Bank Details Page →</span>
                </button>
              )}
            </div>
          </div>

          {/* Phone Numbers & Direct Email */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: 'var(--pmt-white)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              borderBottom: '2px solid var(--pmt-red)',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              Direct Contact Lines
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--pmt-teal)" />
                <a href="tel:+914222301274" style={{ color: 'var(--pmt-white)', fontWeight: 700 }}>
                  0422 - 2301274 (Landline)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--pmt-red)" />
                <a href="tel:+919487510127" style={{ color: 'var(--pmt-white)', fontWeight: 700 }}>
                  94875 10127 (Mobile / WhatsApp)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--pmt-teal)" />
                <a href="tel:+919443230127" style={{ color: 'var(--pmt-white)', fontWeight: 700 }}>
                  94432 30127 (Mobile)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--pmt-red)" />
                <a href="mailto:pmtpremiermachinetools@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  pmtpremiermachinetools@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={onOpenRfq}
              className="btn-pmt-red"
              style={{ width: '100%', marginTop: '16px', padding: '10px', fontSize: '0.85rem' }}
            >
              <FileText size={16} /> Request Pricing / Quotation
            </button>
          </div>

          {/* Core Product Ranges */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: 'var(--pmt-white)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              borderBottom: '2px solid var(--pmt-red)',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              Product Specialists
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
              <li>• Usha Martin Steel Wire Ropes</li>
              <li>• Triple Super Gear Chain Pulley Blocks</li>
              <li>• Good Lift Industrial Hoists</li>
              <li>• Polyester Web Slings &amp; Lashings</li>
              <li>• Wood Working Bandsaw Blades (ESI/Anil)</li>
              <li>• Garware Garfil 3 Strand Ropes</li>
              <li>• Manila Ropes, 'U' Clamps &amp; D-Shackles</li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>{t.gstinLabel}</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--pmt-red)',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '5px 10px',
                borderRadius: '6px',
                fontWeight: 700
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
