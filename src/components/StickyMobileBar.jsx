import React from 'react';
import { PhoneCall, MessageCircle, FileText } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function StickyMobileBar({ currentLang, onOpenRfq }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const whatsappMessage = encodeURIComponent(
    "Hello PMT Premier Machine Tools, I am looking for Steel Wire Ropes / Chain Pulleys / Slings / Blades. Please share price quote."
  );

  return (
    <div className="sticky-mobile-bar" role="navigation" aria-label="Quick Actions">
      {/* Call Button */}
      <a 
        href="tel:+919487510127" 
        id="cta-call-sticky" 
        data-track="call"
        className="sticky-mobile-btn"
        style={{
          background: 'var(--pmt-red-soft)',
          color: 'var(--pmt-red)',
          border: '1px solid var(--pmt-red)'
        }}
        title="Call 94875 10127"
      >
        <PhoneCall size={18} />
        <span>{t.nav.callNow}</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/919487510127?text=${whatsappMessage}`}
        target="_blank" 
        rel="noopener noreferrer"
        id="cta-whatsapp-sticky" 
        data-track="whatsapp"
        className="sticky-mobile-btn"
        style={{
          background: 'var(--pmt-teal)',
          color: 'var(--pmt-white)'
        }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      {/* RFQ Enquiry Button */}
      <button 
        onClick={onOpenRfq} 
        id="cta-enquire-sticky" 
        data-track="enquiry"
        className="sticky-mobile-btn"
        style={{
          background: 'var(--pmt-red)',
          color: 'var(--pmt-white)'
        }}
        title="Get Quote"
      >
        <FileText size={18} />
        <span>{t.nav.getQuote}</span>
      </button>
    </div>
  );
}
