import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Globe, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  Truck, 
  ChevronRight,
  ShoppingCart
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
      {/* Topmost Official Strip - Visiting Card Details & Pan-India Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #b71c1c 0%, #c62828 50%, #9a0007 100%)',
        color: '#ffffff',
        fontSize: '0.82rem',
        padding: '6px 20px',
        borderBottom: '2px solid #106f3c'
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
          {/* GSTIN & Delivery info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{
              background: '#ffffff',
              color: '#b71c1c',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              letterSpacing: '0.05em'
            }}>
              GSTIN : 33AALFP8180B2Z9
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
              <Truck size={15} style={{ color: '#ffeb3b' }} />
              <span>{t.panIndiaBadge}</span>
            </span>
          </div>

          {/* Language Selector + Direct Call */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(0,0,0,0.25)',
              padding: '2px 6px',
              borderRadius: '6px'
            }}>
              <Globe size={13} style={{ color: '#ffeb3b' }} />
              <button
                onClick={() => onLanguageChange('en')}
                style={{
                  color: currentLang === 'en' ? '#ffeb3b' : '#ffffff',
                  fontWeight: currentLang === 'en' ? 800 : 500,
                  fontSize: '0.75rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: currentLang === 'en' ? 'rgba(255,255,255,0.15)' : 'none'
                }}
              >
                English
              </button>
              <span style={{ opacity: 0.5 }}>|</span>
              <button
                onClick={() => onLanguageChange('ta')}
                style={{
                  color: currentLang === 'ta' ? '#ffeb3b' : '#ffffff',
                  fontWeight: currentLang === 'ta' ? 800 : 500,
                  fontSize: '0.75rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: currentLang === 'ta' ? 'rgba(255,255,255,0.15)' : 'none'
                }}
              >
                தமிழ்
              </button>
              <span style={{ opacity: 0.5 }}>|</span>
              <button
                onClick={() => onLanguageChange('hi')}
                style={{
                  color: currentLang === 'hi' ? '#ffeb3b' : '#ffffff',
                  fontWeight: currentLang === 'hi' ? 800 : 500,
                  fontSize: '0.75rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: currentLang === 'hi' ? 'rgba(255,255,255,0.15)' : 'none'
                }}
              >
                हिन्दी
              </button>
            </div>

            {/* Direct Phone */}
            <a 
              href="tel:04222301274"
              id="topbar-landline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#ffffff',
                fontWeight: 700
              }}
            >
              <PhoneCall size={13} /> 0422-2301274
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#ffffff',
        borderBottom: '2px solid #e2e8f0',
        boxShadow: isScrolled ? '0 6px 20px rgba(15, 23, 42, 0.1)' : '0 2px 6px rgba(0,0,0,0.04)',
        transition: 'all 0.25s ease'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          {/* Logo Brand matching visiting card */}
          <a href="#" id="brand-home-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/pmt-logo.svg" 
              alt="Premier Machine Tools Coimbatore" 
              style={{ height: '54px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px'
          }} className="hide-on-mobile">
            <a 
              href="#products" 
              id="nav-products"
              style={{ fontWeight: 600, color: 'var(--pmt-navy)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-navy)'}
            >
              {t.nav.products}
            </a>

            <a 
              href="#brands" 
              id="nav-brands"
              style={{ fontWeight: 600, color: 'var(--pmt-navy)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-navy)'}
            >
              {t.nav.specialties}
            </a>

            <a 
              href="#bank-details" 
              id="nav-bank"
              style={{ fontWeight: 600, color: 'var(--pmt-navy)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-navy)'}
            >
              {t.nav.bankDetails}
            </a>

            <a 
              href="#contact" 
              id="nav-contact"
              style={{ fontWeight: 600, color: 'var(--pmt-navy)', fontSize: '0.92rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--pmt-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--pmt-navy)'}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Action Call & Quote Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/919487510127?text=Hello%20Premier%20Machine%20Tools,%20I%20would%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-direct-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#25d366',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '9px 14px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
              }}
              title="Chat with sales on WhatsApp (94875 10127)"
            >
              <MessageCircle size={17} />
              <span className="hide-on-mobile">WhatsApp</span>
            </a>

            {/* Inquiries / Quote Drawer button */}
            <button
              onClick={onOpenRfq}
              id="navbar-rfq-btn"
              className="btn-pmt-red"
              style={{ padding: '9px 16px', fontSize: '0.88rem' }}
            >
              <FileText size={16} />
              <span>{t.nav.getQuote}</span>
              {cartCount > 0 && (
                <span style={{
                  background: '#ffffff',
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

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              aria-label="Toggle navigation"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                color: 'var(--pmt-navy)',
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
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', gap: '8px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>Language:</span>
              <button 
                onClick={() => { onLanguageChange('en'); setMobileMenuOpen(false); }} 
                style={{ fontWeight: currentLang === 'en' ? 800 : 500, color: currentLang === 'en' ? 'var(--pmt-red)' : '#334155' }}
              >
                English
              </button>
              <span>•</span>
              <button 
                onClick={() => { onLanguageChange('ta'); setMobileMenuOpen(false); }} 
                style={{ fontWeight: currentLang === 'ta' ? 800 : 500, color: currentLang === 'ta' ? 'var(--pmt-green)' : '#334155' }}
              >
                தமிழ்
              </button>
              <span>•</span>
              <button 
                onClick={() => { onLanguageChange('hi'); setMobileMenuOpen(false); }} 
                style={{ fontWeight: currentLang === 'hi' ? 800 : 500, color: currentLang === 'hi' ? 'var(--pmt-red)' : '#334155' }}
              >
                हिन्दी
              </button>
            </div>

            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', fontWeight: 600, color: 'var(--pmt-navy)', display: 'flex', justifyContent: 'space-between' }}
            >
              <span>{t.nav.products}</span>
              <ChevronRight size={16} color="var(--pmt-red)" />
            </a>

            <a 
              href="#brands" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', fontWeight: 600, color: 'var(--pmt-navy)', display: 'flex', justifyContent: 'space-between' }}
            >
              <span>{t.nav.specialties}</span>
              <ChevronRight size={16} color="var(--pmt-red)" />
            </a>

            <a 
              href="#bank-details" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', fontWeight: 600, color: 'var(--pmt-navy)', display: 'flex', justifyContent: 'space-between' }}
            >
              <span>{t.nav.bankDetails}</span>
              <ChevronRight size={16} color="var(--pmt-red)" />
            </a>

            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', fontWeight: 600, color: 'var(--pmt-navy)', display: 'flex', justifyContent: 'space-between' }}
            >
              <span>{t.nav.contact}</span>
              <ChevronRight size={16} color="var(--pmt-red)" />
            </a>

            {/* Phone buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
              <a 
                href="tel:9443230127" 
                style={{
                  background: 'var(--pmt-green-soft)',
                  color: 'var(--pmt-green-dark)',
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
              <a 
                href="tel:9487510127" 
                style={{
                  background: 'var(--pmt-red-soft)',
                  color: 'var(--pmt-red-dark)',
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
            </div>
          </div>
        )}
      </header>
    </>
  );
}
