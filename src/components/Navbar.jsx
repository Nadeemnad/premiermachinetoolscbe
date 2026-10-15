import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Globe, 
  FileText, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({ 
  currentLang, 
  onLanguageChange, 
  onOpenRfq, 
  cartCount = 0 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`pmt-sticky-header ${isScrolled ? 'is-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-header)',
        backgroundColor: '#ffffff',
        background: '#ffffff',
        borderBottom: '2px solid #e2e8f0',
        transition: 'all 0.25s ease'
      }}
    >
      {/* Tier 1: Main Header Row (Logo, Search, Language Switcher, WhatsApp, Quote) */}
      <div className="pmt-main-header-row">
        {/* Brand Logo */}
        <a href="#" id="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <img 
            src="/pmt-logo.svg" 
            alt="PMT Premier Machine Tools Coimbatore" 
            style={{ height: '52px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* Right Controls: Language Changer, WhatsApp, Quote */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Language Switcher - Placed Directly Before WhatsApp */}
          <div 
            id="header-language-changer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              background: 'rgba(3, 78, 161, 0.06)',
              border: '1px solid rgba(3, 78, 161, 0.18)',
              padding: '3px 6px',
              borderRadius: '8px'
            }}
          >
            <Globe size={13} style={{ color: 'var(--pmt-blue)', marginLeft: '2px' }} />
            <button
              onClick={() => onLanguageChange('en')}
              style={{
                color: currentLang === 'en' ? 'var(--pmt-white)' : 'var(--pmt-blue)',
                fontWeight: currentLang === 'en' ? 800 : 600,
                fontSize: '0.78rem',
                padding: '3px 7px',
                borderRadius: '5px',
                background: currentLang === 'en' ? 'var(--pmt-blue)' : 'transparent',
                transition: 'all 0.15s ease'
              }}
            >
              English
            </button>
            <span style={{ opacity: 0.3, color: 'var(--pmt-blue)' }}>|</span>
            <button
              onClick={() => onLanguageChange('ta')}
              style={{
                color: currentLang === 'ta' ? 'var(--pmt-white)' : 'var(--pmt-blue)',
                fontWeight: currentLang === 'ta' ? 800 : 600,
                fontSize: '0.78rem',
                padding: '3px 7px',
                borderRadius: '5px',
                background: currentLang === 'ta' ? 'var(--pmt-blue)' : 'transparent',
                transition: 'all 0.15s ease'
              }}
            >
              தமிழ்
            </button>
            <span style={{ opacity: 0.3, color: 'var(--pmt-blue)' }}>|</span>
            <button
              onClick={() => onLanguageChange('hi')}
              style={{
                color: currentLang === 'hi' ? 'var(--pmt-white)' : 'var(--pmt-blue)',
                fontWeight: currentLang === 'hi' ? 800 : 600,
                fontSize: '0.78rem',
                padding: '3px 7px',
                borderRadius: '5px',
                background: currentLang === 'hi' ? 'var(--pmt-blue)' : 'transparent',
                transition: 'all 0.15s ease'
              }}
            >
              हिन्दी
            </button>
          </div>

          {/* WhatsApp CTA in Teal #05aba5 */}
          <a
            href="https://wa.me/919487510127?text=Hello%20PMT%20Premier%20Machine%20Tools,%20I%20would%20like%20to%20inquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-header"
            data-track="whatsapp"
            className="btn-pmt-teal"
            style={{
              fontSize: '0.85rem',
              padding: '8px 14px',
              borderRadius: '8px'
            }}
            title="Chat on WhatsApp"
          >
            <MessageCircle size={16} />
            <span className="hide-on-mobile">WhatsApp</span>
          </a>

          {/* Instant RFQ / Quote CTA in Red #c61c1a */}
          <button
            onClick={onOpenRfq}
            id="cta-enquire-header"
            data-track="enquiry"
            className="btn-pmt-red"
            style={{ padding: '8px 15px', fontSize: '0.85rem', borderRadius: '8px' }}
          >
            <FileText size={15} />
            <span>{t.nav.getQuote}</span>
            {cartCount > 0 && (
              <span style={{
                background: 'var(--pmt-white)',
                color: 'var(--pmt-red)',
                fontWeight: 900,
                fontSize: '0.72rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Tier 2: Sub-Header Navigation (Manipal Hospitals Reference Architecture) */}
      <div className="pmt-sub-header-row">
        <div className="pmt-sub-header-inner">
          {/* Sub-Header Horizontal Links */}
          <nav className="desktop-subnav-links" aria-label="Product and Sections Navigation">
            <a 
              href="#products" 
              id="subnav-wire-rope"
              className="subnav-link"
            >
              {t.nav.wireRope}
            </a>

            <a 
              href="#products" 
              id="subnav-chain-pulley"
              className="subnav-link"
            >
              {t.nav.chainPulley}
            </a>

            <a 
              href="#brands" 
              id="subnav-brands"
              className="subnav-link"
            >
              {t.brands.badge}
            </a>

            <a 
              href="#bank-details" 
              id="subnav-bank"
              className="subnav-link"
            >
              {t.nav.bank}
            </a>

            <a 
              href="#contact" 
              id="subnav-contact"
              className="subnav-link"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Hamburger Menu on Far Right of Sub-Header (Manipal Hospitals Reference Style) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="subnav-menu-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              color: 'var(--pmt-blue)',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontWeight: 700,
              fontSize: '0.82rem',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--pmt-blue)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span style={{ fontSize: '0.8rem', fontWeight: 700 }} className="hide-on-mobile">
              {currentLang === 'ta' ? 'பட்டியல்' : currentLang === 'hi' ? 'मेनू' : 'Menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / Side Dropdown Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'relative',
          zIndex: 'var(--z-mobile-drawer)',
          background: 'var(--pmt-white)',
          borderTop: '1px solid #e2e8f0',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 25px rgba(19, 17, 12, 0.1)'
        }}>
          {/* Language Selection in Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-light)' }}>Language:</span>
            <button 
              onClick={() => { onLanguageChange('en'); setMobileMenuOpen(false); }} 
              style={{ fontWeight: currentLang === 'en' ? 800 : 500, color: currentLang === 'en' ? 'var(--pmt-red)' : 'var(--pmt-black)', fontSize: '0.85rem' }}
            >
              English
            </button>
            <span>•</span>
            <button 
              onClick={() => { onLanguageChange('ta'); setMobileMenuOpen(false); }} 
              style={{ fontWeight: currentLang === 'ta' ? 800 : 500, color: currentLang === 'ta' ? 'var(--pmt-teal)' : 'var(--pmt-black)', fontSize: '0.85rem' }}
            >
              தமிழ்
            </button>
            <span>•</span>
            <button 
              onClick={() => { onLanguageChange('hi'); setMobileMenuOpen(false); }} 
              style={{ fontWeight: currentLang === 'hi' ? 800 : 500, color: currentLang === 'hi' ? 'var(--pmt-red)' : 'var(--pmt-black)', fontSize: '0.85rem' }}
            >
              हिन्दी
            </button>
          </div>

          <a 
            href="#products" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '8px 0', fontWeight: 700, color: 'var(--pmt-blue)', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{t.nav.wireRope}</span>
            <ChevronRight size={16} color="var(--pmt-red)" />
          </a>

          <a 
            href="#products" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '8px 0', fontWeight: 700, color: 'var(--pmt-blue)', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{t.nav.chainPulley}</span>
            <ChevronRight size={16} color="var(--pmt-red)" />
          </a>

          <a 
            href="#brands" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '8px 0', fontWeight: 700, color: 'var(--pmt-blue)', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{t.brands.badge}</span>
            <ChevronRight size={16} color="var(--pmt-red)" />
          </a>

          <a 
            href="#bank-details" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '8px 0', fontWeight: 700, color: 'var(--pmt-blue)', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{t.nav.bank}</span>
            <ChevronRight size={16} color="var(--pmt-red)" />
          </a>

          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '8px 0', fontWeight: 700, color: 'var(--pmt-blue)', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{t.nav.contact}</span>
            <ChevronRight size={16} color="var(--pmt-red)" />
          </a>

          {/* Mobile Direct Call CTAs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '6px' }}>
            <a 
              href="tel:+919487510127" 
              id="cta-call-mobile-1"
              data-track="call"
              style={{
                background: 'var(--pmt-red-soft)',
                color: 'var(--pmt-red)',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <PhoneCall size={14} /> 94875 10127
            </a>
            <a 
              href="tel:+919443230127" 
              id="cta-call-mobile-2"
              data-track="call"
              style={{
                background: 'var(--pmt-teal-soft)',
                color: 'var(--pmt-teal-dark)',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <PhoneCall size={14} /> 94432 30127
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
