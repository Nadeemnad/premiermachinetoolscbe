import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Search, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
  Anchor,
  Layers,
  Award
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Hero({ currentLang, onSearchSubmit, onOpenRfq }) {
  const [query, setQuery] = useState('');
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query);
      const prodEl = document.getElementById('products');
      if (prodEl) prodEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      background: 'var(--pmt-white)',
      padding: '36px 16px 54px',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Visiting Card Frame Structure with #c61c1a Border */}
        <div className="card-border-box" style={{ padding: '32px 28px 24px' }}>
          {/* Top Line: GSTIN in Red #c61c1a, Phone Numbers in Blue #034ea1 */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '16px',
            borderBottom: '1px solid #f1f5f9',
            paddingBottom: '12px'
          }}>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              color: 'var(--pmt-red)',
              letterSpacing: '0.04em'
            }}>
              {t.gstinLabel}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: 'var(--pmt-blue)'
            }}>
              <span>☎ {t.phones.landline}</span>
              <span>📱 {t.phones.mobile1}</span>
              <span>📱 {t.phones.mobile2}</span>
            </div>
          </div>

          {/* Clean Single-Language Header */}
          <div style={{ textAlign: 'center', margin: '10px 0 24px' }}>
            {/* Tagline in Teal #05aba5 */}
            <div style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--pmt-teal)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px'
            }}>
              {t.hero.tagline}
            </div>

            {/* PMT Banner Bar in Red #c61c1a */}
            <div style={{
              background: 'linear-gradient(90deg, #a81513 0%, #c61c1a 50%, #a81513 100%)',
              color: 'var(--pmt-white)',
              padding: '8px 18px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 4px 14px rgba(198, 28, 26, 0.35)',
              margin: '0 auto 16px'
            }}>
              <span style={{
                background: 'var(--pmt-white)',
                color: 'var(--pmt-red)',
                fontWeight: 900,
                fontSize: 'clamp(1rem, 2.2vw, 1.5rem)',
                padding: '2px 8px',
                borderRadius: '4px',
                lineHeight: 1
              }}>
                PMT
              </span>
              <span style={{
                color: 'var(--pmt-white)',
                fontSize: 'clamp(1.15rem, 3vw, 2.1rem)',
                fontWeight: 900,
                letterSpacing: '0.03em',
                lineHeight: 1.1
              }}>
                {t.companyName}
              </span>
            </div>

            {/* Exact H1 for SEO in Blue #034ea1 */}
            <h1 style={{
              color: 'var(--pmt-blue)',
              fontSize: 'clamp(1.25rem, 2.8vw, 2rem)',
              fontWeight: 800,
              maxWidth: '850px',
              margin: '0 auto 14px',
              lineHeight: 1.3
            }}>
              {t.hero.h1}
            </h1>

            {/* Subtitle from Card in Obsidian Charcoal #13110c */}
            <p style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(0.92rem, 1.6vw, 1.05rem)',
              lineHeight: 1.6,
              maxWidth: '820px',
              margin: '0 auto 18px'
            }}>
              {t.hero.sub}
            </p>

            {/* Pan-India Delivery Ribbon in Teal #05aba5 */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--pmt-teal-soft)',
              color: 'var(--pmt-teal-dark)',
              border: '1.5px solid var(--pmt-teal)',
              borderRadius: '30px',
              padding: '6px 18px',
              fontSize: '0.86rem',
              fontWeight: 800,
              boxShadow: '0 2px 8px rgba(5, 171, 165, 0.15)'
            }}>
              <Truck size={17} style={{ color: 'var(--pmt-teal)' }} />
              <span>{t.panIndiaBadge}</span>
            </div>
          </div>

          {/* Quick Product Search Input */}
          <form onSubmit={handleSearch} style={{
            maxWidth: '660px',
            margin: '0 auto 26px',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--pmt-white)',
            border: '2px solid var(--pmt-red)',
            borderRadius: '12px',
            padding: '4px 6px 4px 14px',
            boxShadow: '0 4px 16px rgba(198, 28, 26, 0.12)'
          }}>
            <Search size={19} color="var(--pmt-red)" style={{ flexShrink: 0, marginRight: '8px' }} />
            <input
              id="hero-search-input"
              type="text"
              placeholder={t.catalog.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '0.92rem',
                color: 'var(--pmt-black)'
              }}
            />
            <button
              type="submit"
              id="hero-search-btn"
              className="btn-pmt-red"
              style={{ padding: '9px 18px', fontSize: '0.88rem', flexShrink: 0 }}
            >
              Search
            </button>
          </form>

          {/* Action Buttons: Red #c61c1a, Teal #05aba5, Outline Blue #034ea1 */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '26px'
          }}>
            <a
              href="tel:+919487510127"
              id="cta-call-hero"
              data-track="call"
              className="btn-pmt-red"
              style={{ fontSize: '0.95rem', padding: '12px 22px' }}
            >
              <PhoneCall size={18} />
              <span>{t.hero.callBtn}</span>
            </a>

            <a
              href="https://wa.me/919487510127?text=Hello%20PMT,%20I%20need%20a%20quotation%20for%20Wire%20Ropes%20/%20Chain%20Pulleys%20/%20Slings."
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-hero"
              data-track="whatsapp"
              className="btn-pmt-teal"
              style={{ fontSize: '0.95rem', padding: '12px 22px' }}
            >
              <MessageCircle size={18} />
              <span>{t.hero.whatsappBtn}</span>
            </a>

            <button
              onClick={onOpenRfq}
              id="cta-enquire-hero"
              data-track="enquiry"
              className="btn-outline-blue"
              style={{ fontSize: '0.95rem', padding: '12px 22px' }}
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Bottom Card Footer with H.O. and B.O. Addresses */}
          <div style={{
            background: 'var(--bg-subtle)',
            borderTop: '1px solid #e2e8f0',
            margin: '0 -28px -24px',
            padding: '14px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} color="var(--pmt-red)" style={{ flexShrink: 0 }} />
              <span>{t.headOffice}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} color="var(--pmt-teal)" style={{ flexShrink: 0 }} />
              <span>{t.branchOffice}</span>
            </div>

            <div style={{ color: 'var(--pmt-blue)', fontWeight: 700 }}>
              ✉ pmtpremiermachinetools@gmail.com
            </div>
          </div>
        </div>

        {/* 4 Feature Badges in Red, Teal, Blue */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginTop: '24px'
        }}>
          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--pmt-red-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pmt-red)' }}>
              <Award size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--pmt-blue)' }}>{t.hero.stat1}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Certified 6x19 & 6x36 GI Wire Ropes</div>
            </div>
          </div>

          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--pmt-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pmt-teal)' }}>
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--pmt-blue)' }}>{t.hero.stat2}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>0.5 Ton to 20 Ton Manual Hoists</div>
            </div>
          </div>

          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--pmt-blue-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pmt-blue)' }}>
              <Layers size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--pmt-blue)' }}>{t.hero.stat3}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Original Polypropylene 3-Strand</div>
            </div>
          </div>

          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--pmt-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pmt-teal)' }}>
              <Truck size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--pmt-blue)' }}>{t.hero.stat4}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Daily Lorry Transport & Courier</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
