import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, FileText, ChevronRight } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function StickyMobileBar({ currentLang, onOpenRfq }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const whatsappMessage = encodeURIComponent(
    "Hello PMT Premier Machine Tools, I am looking for Steel Wire Ropes / Chain Pulleys / Slings / Blades. Please share price quote."
  );

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const menuLabel = currentLang === 'ta' ? 'மெனு' : currentLang === 'hi' ? 'मेनू' : 'Menu';
  const closeLabel = currentLang === 'ta' ? 'மூடு' : currentLang === 'hi' ? 'बंद करें' : 'Close';

  return (
    <div className="mobile-floating-menu-root" role="region" aria-label="Quick Action Menu">
      {/* Dimmed backdrop when menu is open */}
      {isOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Action Menu Card containing the 3 options */}
      {isOpen && (
        <div 
          className="mobile-action-popup" 
          role="dialog" 
          aria-modal="true" 
          aria-label="Contact and Quote Options"
        >
          <div className="mobile-action-popup-header">
            <span className="mobile-action-popup-title">
              {currentLang === 'ta' ? 'விரைவு தொடர்பு' : currentLang === 'hi' ? 'त्वरित संपर्क' : 'Quick Actions'}
            </span>
          </div>

          <div className="mobile-action-list">
            {/* 1. Get Quote / RFQ Button */}
            <button 
              onClick={() => {
                setIsOpen(false);
                if (onOpenRfq) onOpenRfq();
              }} 
              id="cta-enquire-mobile" 
              data-track="enquiry"
              className="mobile-menu-action-item action-get-quote"
              title="Get Price Quote"
            >
              <div className="action-item-icon bg-quote">
                <FileText size={18} />
              </div>
              <div className="action-item-text">
                <span className="action-item-title">{t.nav.getQuote}</span>
                <span className="action-item-sub">Instant Price Estimate</span>
              </div>
              <ChevronRight size={16} className="action-item-arrow" />
            </button>

            {/* 2. WhatsApp Button */}
            <a 
              href={`https://wa.me/919487510127?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              id="cta-whatsapp-mobile" 
              data-track="whatsapp"
              className="mobile-menu-action-item action-whatsapp"
              title="Chat on WhatsApp"
              onClick={() => setIsOpen(false)}
            >
              <div className="action-item-icon bg-whatsapp">
                <MessageCircle size={18} />
              </div>
              <div className="action-item-text">
                <span className="action-item-title">WhatsApp</span>
                <span className="action-item-sub">Direct Technical Chat</span>
              </div>
              <ChevronRight size={16} className="action-item-arrow" />
            </a>

            {/* 3. Call Us Button */}
            <a 
              href="tel:+919487510127" 
              id="cta-call-mobile" 
              data-track="call"
              className="mobile-menu-action-item action-call"
              title="Call 94875 10127"
              onClick={() => setIsOpen(false)}
            >
              <div className="action-item-icon bg-call">
                <PhoneCall size={18} />
              </div>
              <div className="action-item-text">
                <span className="action-item-title">{t.nav.callNow}</span>
                <span className="action-item-sub">+91 94875 10127</span>
              </div>
              <ChevronRight size={16} className="action-item-arrow" />
            </a>
          </div>
        </div>
      )}

      {/* Circular Floating Trigger Button Matching Image 2 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mobile-fab-btn ${isOpen ? 'is-open' : ''}`}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        title={isOpen ? 'Close' : 'Menu'}
      >
        <div className="mobile-fab-icon-area">
          <span className="mobile-fab-line line-1" />
          <span className="mobile-fab-line line-2" />
          <span className="mobile-fab-line line-3" />
        </div>
        <span className="mobile-fab-text">
          {isOpen ? closeLabel : menuLabel}
        </span>
      </button>
    </div>
  );
}
