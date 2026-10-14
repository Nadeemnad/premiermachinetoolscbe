import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  PhoneCall, 
  FileText, 
  ShoppingCart, 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ cartCount, onOpenRfq, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Engineering Micro-Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #090e1a 0%, #111a2e 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        fontSize: '0.8rem',
        color: '#94a3b8',
        padding: '6px 24px'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontWeight: 600 }}>
              <ShieldCheck size={14} /> ISO 9001:2015 Certified
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} style={{ color: '#06b6d4' }} /> SIDCO Industrial Estate, Kurichi, Coimbatore
            </span>
            <span style={{ display: 'none', md: 'inline-block', color: '#10b981', fontWeight: 500 }}>
              ● Live Demo Center Open: Mon - Sat 9:00 AM - 7:30 PM
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a 
              href="tel:+919842215890" 
              id="header-phone-link"
              style={{
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                color: '#f8fafc',
                fontWeight: 600,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#f8fafc'}
            >
              <PhoneCall size={13} style={{ color: '#f59e0b' }} /> +91 98422 15890 / +91 422 249 8812
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ color: '#06b6d4', fontWeight: 500 }}>Tamil Nadu Service Desk</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: isScrolled ? 'rgba(7, 10, 18, 0.92)' : 'rgba(11, 15, 25, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(245, 158, 11, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          {/* Brand Logo */}
          <a href="#" id="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              border: '2px solid #f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)',
              position: 'relative'
            }}>
              <Wrench size={22} style={{ color: '#f59e0b' }} />
              <span style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                background: '#06b6d4',
                color: '#070a12',
                fontSize: '0.55rem',
                fontWeight: 800,
                padding: '1px 4px',
                borderRadius: '4px',
                lineHeight: 1
              }}>CBE</span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.28rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#ffffff' }}>PREMIER</span>
                <span style={{ color: '#f59e0b' }}>MACHINE TOOLS</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: '#94a3b8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}>
                Industrial Machinery & CNC Solutions • Coimbatore
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '26px'
          }} className="desktop-nav">
            <a href="#catalog" className="nav-link" id="nav-catalog">Machinery Catalog</a>
            <a href="#industries" className="nav-link" id="nav-industries">Industries</a>
            <a href="#roi-calc" className="nav-link" id="nav-roi">ROI Calculator</a>
            <a href="#facility" className="nav-link" id="nav-facility">Coimbatore Hub</a>
            <a href="#faq" className="nav-link" id="nav-faq">Engineering FAQs</a>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Quote Cart / Selection Drawer Trigger */}
            <button
              onClick={onOpenCart}
              id="quote-cart-button"
              title="View Selected Machines for RFQ"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#f59e0b';
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <ShoppingCart size={19} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  background: '#f59e0b',
                  color: '#070a12',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 8px rgba(245, 158, 11, 0.8)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Request Quotation Primary CTA */}
            <button
              onClick={onOpenRfq}
              id="nav-rfq-btn"
              className="btn-primary"
              style={{ padding: '9px 18px', fontSize: '0.88rem' }}
            >
              <FileText size={16} />
              <span>Get Instant RFQ</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                md: 'none'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#090e1a',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Machinery Catalog</span>
              <ChevronRight size={16} color="#f59e0b" />
            </a>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Industries & Solutions</span>
              <ChevronRight size={16} color="#f59e0b" />
            </a>
            <a 
              href="#roi-calc" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>CNC ROI Calculator</span>
              <ChevronRight size={16} color="#f59e0b" />
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Coimbatore Experience Center</span>
              <ChevronRight size={16} color="#f59e0b" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Technical FAQs & Warranty</span>
              <ChevronRight size={16} color="#f59e0b" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <FileText size={18} /> Request Customized RFQ Quote
            </button>
          </div>
        )}
      </header>
    </>
  );
}
