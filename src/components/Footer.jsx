import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Truck, 
  ShieldCheck, 
  ArrowUp,
  Landmark,
  MessageCircle,
  FileText
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Footer({ currentLang, onOpenRfq }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{
      background: 'var(--bg-dark-footer)',
      color: '#cbd5e1',
      padding: '60px 20px 24px',
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
                fontFamily: 'var(--font-tamil)',
                color: '#34d399',
                fontSize: '1.25rem',
                fontWeight: 800,
                marginBottom: '4px'
              }}>
                பிரீமியர் மெஷின் டூல்ஸ்
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                fontSize: '1.4rem',
                fontWeight: 900,
                letterSpacing: '0.03em'
              }}>
                PREMIER MACHINE TOOLS
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '16px' }}>
              Dealers in all kinds of Tools, Ropes, Chains, Lifting Equipment, Polyester Web Slings, and Woodworking Bandsaw Blades.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(16, 111, 60, 0.25)',
              border: '1px solid #106f3c',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.78rem',
              color: '#4ade80',
              fontWeight: 700,
              marginBottom: '14px'
            }}>
              <Truck size={15} /> All Over India Delivery Available
            </div>

            <div style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#ffffff',
              background: 'rgba(198, 40, 40, 0.35)',
              border: '1px solid var(--pmt-red)',
              padding: '4px 10px',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              GSTIN : 33AALFP8180B2Z9
            </div>
          </div>

          {/* Address & Office Locations (From Visiting Card) */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              borderBottom: '2px solid var(--pmt-red)',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              Office Locations (Coimbatore)
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--pmt-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Head Office (H.O.):</strong><br />
                  # 129/4 (Old No. 184) Dr. Nanjappa Road,<br />
                  Coimbatore - 641 018, Tamil Nadu
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Branch Office (B.O.):</strong><br />
                  Basement Floor, 180, N.S.P. Shopping Complex,<br />
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          {/* Phone Numbers & Direct Email */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: '#ffffff',
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
                <Phone size={16} color="#38bdf8" />
                <a href="tel:04222301274" style={{ color: '#ffffff', fontWeight: 700 }}>
                  0422 - 2301274 (Landline)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#4ade80" />
                <a href="tel:9443230127" style={{ color: '#ffffff', fontWeight: 700 }}>
                  94432 30127 (Mobile)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#f59e0b" />
                <a href="tel:9487510127" style={{ color: '#ffffff', fontWeight: 700 }}>
                  94875 10127 (Mobile / WhatsApp)
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#ef4444" />
                <a href="mailto:pmtpremiermachinetools@gmail.com" style={{ color: '#cbd5e1' }}>
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
              color: '#ffffff',
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
              <li>• Triple Super Gear Chain Pulleys</li>
              <li>• Good Lift Industrial Hoists</li>
              <li>• Polyester Web Slings & Lashings</li>
              <li>• Wood Working Bandsaw Blades (ESI/Anil)</li>
              <li>• Garware Garfil 3 Strand Ropes</li>
              <li>• Manila Ropes, 'U' Clamps & D-Shackles</li>
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
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} Premier Machine Tools. All rights reserved. Subject to Coimbatore Jurisdiction.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>GSTIN : 33AALFP8180B2Z9</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--pmt-red)',
                background: 'rgba(255,255,255,0.06)',
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
