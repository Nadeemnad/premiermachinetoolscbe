import React, { useEffect } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Cpu, 
  ShoppingCart, 
  FileText, 
  Wrench, 
  Download,
  Info,
  CalendarCheck
} from 'lucide-react';

export default function MachineModal({ 
  machine, 
  onClose, 
  onOpenRfqWithMachine, 
  onToggleCart, 
  isCarted,
  onDownloadBrochure 
}) {
  if (!machine) return null;

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      id="machine-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(7, 10, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target.id === 'machine-modal-backdrop') onClose();
      }}
    >
      <div 
        id="machine-modal-content"
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0d1322',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.2)',
          position: 'relative',
          padding: '0'
        }}
      >
        {/* Modal Top Header with Close Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(15, 23, 42, 0.95)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="tech-badge">{machine.badge}</span>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {machine.series}
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-modal-btn"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {/* Main Visual & Overview */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '28px'
          }}>
            <div style={{
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#090e1a',
              maxHeight: '260px'
            }}>
              <img 
                src={machine.image} 
                alt={machine.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
                {machine.name}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {machine.tagline}
              </p>

              <div style={{
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                  Indicative Price / Investment Range:
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b' }}>
                  {machine.priceRange} <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 400 }}>(Ex-factory Coimbatore + GST)</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    onClose();
                    onOpenRfqWithMachine(machine);
                  }}
                  id="modal-request-quote-btn"
                  className="btn-primary"
                  style={{ flexGrow: 1, padding: '10px 18px', fontSize: '0.9rem' }}
                >
                  <FileText size={16} /> Request Quotation for this Unit
                </button>

                <button
                  onClick={() => onToggleCart(machine)}
                  id="modal-cart-toggle-btn"
                  className="btn-secondary"
                  style={{ padding: '10px 16px', fontSize: '0.9rem' }}
                >
                  {isCarted ? (
                    <>
                      <Check size={16} color="#10b981" /> In Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={16} /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Complete Technical Specifications Grid */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{
              fontSize: '1rem',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <Cpu size={16} /> Factory Technical Specifications
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '10px',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {Object.entries(machine.specs).map(([key, value]) => {
                // Format camelCase key into readable label
                const label = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase());

                return (
                  <div key={key} style={{
                    padding: '8px 10px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>
                      {value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Standard Engineering Features */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{
              fontSize: '1rem',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <ShieldCheck size={16} /> Standard Machine Build Highlights
            </h4>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {machine.features.map((feat, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: '#cbd5e1'
                }}>
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Check size={12} color="#34d399" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <button
              onClick={() => onDownloadBrochure(machine.name)}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '8px 14px' }}
            >
              <Download size={14} /> Download Engineering CAD & PDF
            </button>

            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
              📍 Tested & Commissioned at SIDCO Kurichi, Coimbatore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
