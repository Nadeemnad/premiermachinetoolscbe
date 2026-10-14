import React, { useEffect } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  ShoppingCart, 
  MessageCircle, 
  FileText, 
  Truck
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function ProductModal({ 
  product, 
  currentLang, 
  onClose, 
  onOpenRfqWithProduct, 
  onToggleCart, 
  isCarted 
}) {
  if (!product) return null;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const displayName = currentLang === 'ta' && product.nameTa 
    ? product.nameTa 
    : currentLang === 'hi' && product.nameHi 
    ? product.nameHi 
    : product.name;

  const displayTagline = currentLang === 'ta' && product.taglineTa
    ? product.taglineTa
    : currentLang === 'hi' && product.taglineHi
    ? product.taglineHi
    : product.tagline;

  const whatsappMessage = encodeURIComponent(
    `Hello Premier Machine Tools, I need technical specifications and pricing for: ${product.name} (${product.brand}). Please share quote and delivery schedule.`
  );

  return (
    <div 
      id="product-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 220,
        background: 'rgba(19, 17, 12, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target.id === 'product-modal-backdrop') onClose();
      }}
    >
      <div 
        id="product-modal-card"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--pmt-white)',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(19, 17, 12, 0.3)',
          border: '2px solid var(--pmt-red)',
          position: 'relative'
        }}
      >
        {/* Modal Top Header in Red #c61c1a */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          background: 'var(--pmt-red)',
          color: 'var(--pmt-white)',
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px'
        }}>
          <div>
            <span style={{
              background: 'var(--pmt-white)',
              color: 'var(--pmt-red)',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px',
              textTransform: 'uppercase'
            }}>
              {product.brand}
            </span>
            <div style={{ fontSize: '0.8rem', opacity: 0.9, marginTop: '2px' }}>
              Genuine Stock Supply • PMT Premier Machine Tools
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--pmt-white)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '24px' }}>
          <h2 style={{
            fontSize: '1.45rem',
            color: 'var(--pmt-blue)',
            marginBottom: '8px'
          }}>
            {displayName}
          </h2>

          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '20px'
          }}>
            {displayTagline}
          </p>

          {/* Delivery & Assurance Strip in Teal #05aba5 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--pmt-teal-soft)',
            border: '1px solid var(--pmt-teal)',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: 'var(--pmt-teal-dark)',
            fontWeight: 700,
            marginBottom: '22px'
          }}>
            <Truck size={18} />
            <span>All Over India Delivery Available • Lorry Transport &amp; Express Courier</span>
          </div>

          {/* Detailed Specifications Table */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{
              fontSize: '0.95rem',
              color: 'var(--pmt-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <ShieldCheck size={16} color="var(--pmt-red)" /> {t.catalog.specifications}
            </h4>

            <div style={{
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div 
                  key={key} 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '9px 14px',
                    fontSize: '0.88rem',
                    background: idx % 2 === 0 ? 'var(--bg-subtle)' : 'var(--pmt-white)',
                    borderBottom: idx < Object.entries(product.specs).length - 1 ? '1px solid #F1F5F9' : 'none'
                  }}
                >
                  <span style={{ color: 'var(--text-light)', fontWeight: 500, textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1')}:
                  </span>
                  <strong style={{ color: 'var(--pmt-black)', textAlign: 'right' }}>
                    {val}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          {/* Applications List in Blue Tokens */}
          {product.applications && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '8px' }}>
                {t.catalog.applications}:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {product.applications.map((app, i) => (
                  <span key={i} className="badge-blue" style={{ fontSize: '0.78rem' }}>
                    • {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs in 5 Colors */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '16px',
            borderTop: '1px solid #E2E8F0'
          }}>
            <button
              onClick={() => {
                onClose();
                onOpenRfqWithProduct(product);
              }}
              className="btn-pmt-red"
              style={{ flexGrow: 1, padding: '11px 18px', fontSize: '0.9rem' }}
            >
              <FileText size={16} /> {t.catalog.enquire}
            </button>

            <a
              href={`https://wa.me/919487510127?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pmt-teal"
              style={{ padding: '11px 18px', fontSize: '0.9rem' }}
            >
              <MessageCircle size={16} /> WhatsApp Inquiry
            </a>

            <button
              onClick={() => onToggleCart(product)}
              className="btn-outline-blue"
              style={{ padding: '11px 16px', fontSize: '0.9rem' }}
            >
              {isCarted ? (
                <>
                  <Check size={16} color="var(--pmt-teal)" /> {t.catalog.inList}
                </>
              ) : (
                <>
                  <ShoppingCart size={16} /> {t.catalog.enquire}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
