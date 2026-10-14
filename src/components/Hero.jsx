import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Search, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
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
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      padding: '40px 20px 60px',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Visiting Card Motif Main Box */}
        <div className="visiting-card-frame" style={{ padding: '36px 32px 28px' }}>
          {/* Top Line: GSTIN and Phone Numbers */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
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
              GSTIN: 33AALFP8180B2Z9
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: 'var(--pmt-navy)'
            }}>
              <span>☎ 0422 - 2301274</span>
              <span>📱 94875 10127</span>
              <span>📱 94432 30127</span>
            </div>
          </div>

          {/* Brand Heading Section */}
          <div style={{ textAlign: 'center', margin: '14px 0 24px' }}>
            {/* Tamil Header from Card */}
            <h2 className="tamil-text" style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 2.8rem)',
              lineHeight: 1.2,
              marginBottom: '6px'
            }}>
              {t.companyTamil}
            </h2>

            {/* PMT PREMIER MACHINE TOOLS Red Bar */}
            <div style={{
              background: 'linear-gradient(90deg, #b71c1c 0%, #c62828 50%, #b71c1c 100%)',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 4px 14px rgba(198, 40, 40, 0.35)',
              margin: '8px auto 16px'
            }}>
              <span style={{
                background: '#ffffff',
                color: '#b71c1c',
                fontWeight: 900,
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                padding: '2px 8px',
                borderRadius: '4px',
                lineHeight: 1
              }}>
                PMT
              </span>
              <h1 style={{
                color: '#ffffff',
                fontSize: 'clamp(1.2rem, 3.2vw, 2.2rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                margin: 0,
                lineHeight: 1.1
              }}>
                PREMIER MACHINE TOOLS
              </h1>
            </div>

            {/* Dealer subtitle from visiting card */}
            <p style={{
              color: 'var(--pmt-navy)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.12rem)',
              fontWeight: 600,
              maxWidth: '850px',
              margin: '0 auto 18px',
              lineHeight: 1.6
            }}>
              {t.hero.subtitle}
            </p>

            {/* Pan-India Delivery Ribbon */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--pmt-green-soft)',
              color: 'var(--pmt-green-dark)',
              border: '1.5px solid var(--pmt-green)',
              borderRadius: '30px',
              padding: '6px 18px',
              fontSize: '0.88rem',
              fontWeight: 800,
              boxShadow: '0 2px 8px rgba(16, 111, 60, 0.15)'
            }}>
              <Truck size={17} style={{ color: 'var(--pmt-green)' }} />
              <span>{t.panIndiaBadge}</span>
            </div>
          </div>

          {/* Quick Search Input */}
          <form onSubmit={handleSearch} style={{
            maxWidth: '680px',
            margin: '0 auto 28px',
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            border: '2px solid var(--pmt-red)',
            borderRadius: '12px',
            padding: '4px 6px 4px 16px',
            boxShadow: '0 4px 16px rgba(198, 40, 40, 0.15)'
          }}>
            <Search size={20} color="var(--pmt-red)" style={{ flexShrink: 0, marginRight: '8px' }} />
            <input
              id="hero-product-search"
              type="text"
              placeholder={t.catalog.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '0.95rem',
                color: 'var(--pmt-navy)'
              }}
            />
            <button
              type="submit"
              id="hero-search-submit"
              className="btn-pmt-red"
              style={{ padding: '9px 18px', fontSize: '0.88rem', flexShrink: 0 }}
            >
              Search
            </button>
          </form>

          {/* Action Call & Quotation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '28px'
          }}>
            <a
              href="tel:9443230127"
              id="hero-call-primary"
              className="btn-pmt-red"
              style={{ fontSize: '0.98rem', padding: '12px 24px' }}
            >
              <PhoneCall size={18} />
              <span>{t.hero.callNow}</span>
            </a>

            <a
              href="https://wa.me/919487510127?text=Hello%20PMT,%20I%20need%20a%20quotation%20for%20Wire%20Ropes%20/%20Chain%20Pulleys%20/%20Slings."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-quote"
              className="btn-pmt-green"
              style={{ fontSize: '0.98rem', padding: '12px 24px' }}
            >
              <MessageCircle size={18} />
              <span>{t.hero.whatsappQuote}</span>
            </a>

            <button
              onClick={onOpenRfq}
              id="hero-rfq-drawer"
              className="btn-outline-navy"
              style={{ fontSize: '0.98rem', padding: '12px 22px' }}
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Bottom Card Footer: H.O. and B.O. Addresses */}
          <div style={{
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            margin: '0 -32px -28px',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="var(--pmt-red)" style={{ flexShrink: 0 }} />
              <span><strong>H.O. :</strong> # 129/4 (Old No. 184) Dr. Nanjappa Road, Coimbatore - 641 018</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="var(--pmt-green)" style={{ flexShrink: 0 }} />
              <span><strong>B.O. :</strong> Basement Floor, 180, N.S.P. Shopping Complex, Coimbatore</span>
            </div>

            <div style={{ color: 'var(--pmt-navy)', fontWeight: 600 }}>
              ✉ pmtpremiermachinetools@gmail.com
            </div>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginTop: '28px'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--pmt-red-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pmt-red)' }}>
              <Award size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--pmt-navy)' }}>Usha Martin Specialist</div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Certified Steel Wire Ropes</div>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--pmt-green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pmt-green)' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--pmt-navy)' }}>Triple Super Gear & Good Lift</div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>0.5T to 20T Chain Hoists</div>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
              <Layers size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--pmt-navy)' }}>Garware Garfil 3 Strand</div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Original Polypropylene Ropes</div>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b45309' }}>
              <Truck size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--pmt-navy)' }}>All India Transport</div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Fast Express Lorry Dispatch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
