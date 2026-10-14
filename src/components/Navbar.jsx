import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Globe, 
  FileText, 
  MapPin, 
  Menu, 
  X, 
  Truck, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({ currentLang, onLanguageChange, onOpenRfq, cartCount = 0 }) {
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
    <>
      {/* Topmost Official Bar - GSTIN, Pan-India Dispatch, Language Selector */}
      <div style={{
        background: 'var(--pmt-red)',
        color: 'var(--pmt-white)',
        fontSize: '0.82rem',
        padding: '6px 16px',
        borderBottom: '2px solid var(--pmt-teal)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {/* GSTIN & Pan-India Dispatch */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{
              background: 'var(--pmt-white)',
              color: 'var(--pmt-red)',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              letterSpacing: '0.04em'
            }}>
              {t.gstinLabel}
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
              <Truck size={15} style={{ color: 'var(--pmt-white)' }} />
              <span>{t.panIndiaBadge}</span>
            </span>
          </div>

          {/* Language Switcher & Direct Header Contact */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Language Controls */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(19, 17, 12, 0.25)',
              padding: '2px 8px',
              borderRadius: '6px'
            }}>
              <Globe size={13} style={{ color: 'var(--pmt-white)' }} />
              <button
                onClick={() => onLanguageChange('en')}
                style={{
                  color: currentLang === 'en' ? 'var(--pmt-white)' : 'rgba(255, 255, 255, 0.8)',
                  fontWeight: currentLang === 'en' ? 800 : 500,
                  fontSize: '0.78rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: currentLang === 'en' ? 'var(--pmt-teal)' : 'none'
                }}
              >
                English
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button
                onClick={() => onLanguageChange('ta')}
                style={{
                  color: currentLang === 'ta' ? 'var(--pmt-white)' : 'rgba(255, 255, 255, 0.8)',
                  fontWeight: currentLang === 'ta' ? 800 : 500,
                  fontSize: '0.78rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: currentLang === 'ta' ? 'var(--pmt-teal)' : 'none'
                }}
              >
                தமிழ்
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button
                onClick={() => onLanguageChange('hi')}
                style={{
                  color: currentLang === 'hi' ? 'var(--pmt-white)' : 'rgba(255, 255, 255, 0.8)',
                  fontWeight: currentLang === 'hi' ? 800 : 500,
                  fontSize: '0.78rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: currentLang === 'hi' ? 'var(--pmt-teal)' : 'none'
                }}
              >
                हिन्दी
              </button>
            </div>

            {/* Direct Landline Call */}
            <a 
              href="tel:+914222301274"
              id="cta-call-header"
              data-track="call"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--pmt-white)',
                fontWeight: 700
              }}
              title="Call 0422-2301274"
            >
              <PhoneCall size={13} /> {t.phones.landline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--pmt-white)',
        borderBottom: '2px solid #e2e8f0',
        boxShadow: isScrolled ? '0 6px 20px rgba(3, 78, 161, 0.08)' : '0 2px 6px rgba(19, 17, 12, 0.04)',
        transition: 'all 0.25s ease'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          {/* Logo matching the visiting card */}
          <a href="#" id="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="/pmt-logo.svg" 
              alt="PMT Premier Machine Tools Coimbatore" 
              style={{ height: '52px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '20px'
          }} className="hide-on-mobile">
            <a 
              href="#products" 
              id="nav-link-products"
              style={{ fontWeight: 700, color: 'var(--pmt-blue)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-blue)'}
            >
              {t.nav.wireRope}
            </a>

            <a 
              href="#products" 
              id="nav-link-chain-pulley"
              style={{ fontWeight: 700, color: 'var(--pmt-blue)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-blue)'}
            >
              {t.nav.chainPulley}
            </a>

            <a 
              href="#brands" 
              id="nav-link-brands"
              style={{ fontWeight: 700, color: 'var(--pmt-blue)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-blue)'}
            >
              {t.brands.badge}
            </a>

            <a 
              href="#bank-details" 
              id="nav-link-bank"
              style={{ fontWeight: 700, color: 'var(--pmt-blue)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-blue)'}
            >
              {t.nav.bank}
            </a>

            <a 
              href="#contact" 
              id="nav-link-contact"
              style={{ fontWeight: 700, color: 'var(--pmt-blue)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-blue)'}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                padding: '9px 14px',
                borderRadius: '8px'
              }}
              title="Chat on WhatsApp"
            >
              <MessageCircle size={17} />
              <span className="hide-on-mobile">WhatsApp</span>
            </a>

            {/* Instant RFQ / Quote CTA in Red #c61c1a */}
            <button
              onClick={onOpenRfq}
              id="cta-enquire-header"
              data-track="enquiry"
              className="btn-pmt-red"
              style={{ padding: '9px 16px', fontSize: '0.88rem' }}
            >
              <FileText size={16} />
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

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              aria-label="Toggle navigation"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                color: 'var(--pmt-blue)',
                borderRadius: '6px',
                border: '1px solid #cbd5e1'
              }}
              className="show-on-mobile"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
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
    </>
  );
}
