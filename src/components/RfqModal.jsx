import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Trash2, 
  Send, 
  Building, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Cpu, 
  Copy, 
  Check,
  Sparkles
} from 'lucide-react';

export default function RfqModal({ 
  isOpen, 
  onClose, 
  selectedMachines = [], 
  onRemoveItem,
  onClearCart,
  onShowToast 
}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: 'Coimbatore',
    controllerPreference: 'Fanuc',
    ctsCoolant: true,
    chipConveyor: true,
    probingSystem: false,
    timeline: 'Within 30 Days',
    notes: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTicket = `PMT-CBE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket({
      ticketId: randomTicket,
      timestamp: new Date().toLocaleString(),
      name: formData.name,
      company: formData.company,
      machines: selectedMachines.length > 0 ? selectedMachines : [{ name: 'Custom Machinery Consultation', series: 'CNC Solution' }]
    });

    onShowToast?.(`RFQ ${randomTicket} submitted successfully! Our Coimbatore engineering sales desk will contact you within 2 hours.`);
  };

  const copyTicketId = () => {
    if (submittedTicket?.ticketId) {
      navigator.clipboard?.writeText(submittedTicket.ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      id="rfq-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        background: 'rgba(7, 10, 18, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target.id === 'rfq-modal-backdrop') onClose();
      }}
    >
      <div 
        id="rfq-modal-dialog"
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#0d1322',
          border: '1px solid rgba(6, 182, 212, 0.4)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(6, 182, 212, 0.15)',
          padding: '0'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(15, 23, 42, 0.95)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b'
            }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                Request Official Technical Quotation (RFQ)
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                Premier Machine Tools Coimbatore • Direct Factory Pricing & Subsidies
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            id="close-rfq-modal-btn"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {submittedTicket ? (
            /* Submission Success View */
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#34d399',
                boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
                Quotation Request Received!
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 24px' }}>
                Thank you, <strong>{submittedTicket.name}</strong> from <strong>{submittedTicket.company}</strong>. Our senior technical application engineer in Coimbatore has been assigned to your RFQ.
              </p>

              {/* Reference Box */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '12px',
                padding: '20px',
                maxWidth: '480px',
                margin: '0 auto 28px',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                    RFQ Reference Code:
                  </span>
                  <button
                    onClick={copyTicketId}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.78rem',
                      color: copied ? '#10b981' : '#f59e0b',
                      background: 'none'
                    }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: '#fbbf24',
                  marginBottom: '12px'
                }}>
                  {submittedTicket.ticketId}
                </div>

                <div style={{ fontSize: '0.82rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                  <div style={{ marginBottom: '4px' }}><strong>Requested Units:</strong></div>
                  {submittedTicket.machines.map((m, i) => (
                    <div key={i} style={{ color: '#ffffff' }}>• {m.name} ({m.series})</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    onClearCart?.();
                    onClose();
                  }}
                  className="btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  Done & Return to Catalog
                </button>
              </div>
            </div>
          ) : (
            /* RFQ Form View */
            <form onSubmit={handleSubmit}>
              {/* Selected Machines Section */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>
                    Selected Machinery for Quote ({selectedMachines.length}):
                  </span>
                  {selectedMachines.length > 0 && onClearCart && (
                    <button
                      type="button"
                      onClick={onClearCart}
                      style={{ fontSize: '0.78rem', color: '#ef4444', background: 'none' }}
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {selectedMachines.length > 0 ? (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    maxHeight: '160px',
                    overflowY: 'auto'
                  }}>
                    {selectedMachines.map((m) => (
                      <div key={m.id} style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                            {m.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            {m.series} • {m.priceRange}
                          </div>
                        </div>

                        {onRemoveItem && (
                          <button
                            type="button"
                            onClick={() => onRemoveItem(m.id)}
                            style={{ color: '#ef4444', padding: '6px', borderRadius: '6px' }}
                            title="Remove machine from RFQ"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    padding: '14px',
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px dashed rgba(245, 158, 11, 0.3)',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    color: '#fbbf24'
                  }}>
                    💡 No specific machine selected yet. You can submit general technical requirements or add machines from the catalog.
                  </div>
                )}
              </div>

              {/* Form Input Fields Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Full Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Company / Factory Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Texmo Precision Parts"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98422 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Delivery City / Region
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Coimbatore / Chennai / Bangalore / Pune"
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Preferred CNC Controller
                  </label>
                  <select
                    value={formData.controllerPreference}
                    onChange={(e) => setFormData({ ...formData, controllerPreference: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#0f172a',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Fanuc">Fanuc 0i-TF / 0i-MF Plus</option>
                    <option value="Siemens">Siemens Sinumerik 828D / ONE</option>
                    <option value="Mitsubishi">Mitsubishi M80 High-Speed</option>
                    <option value="Heidenhain">Heidenhain TNC 640</option>
                  </select>
                </div>
              </div>

              {/* Optional Upgrades Checkboxes */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '14px',
                borderRadius: '10px',
                marginBottom: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Requested Options & Accessories:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.ctsCoolant}
                      onChange={(e) => setFormData({ ...formData, ctsCoolant: e.target.checked })}
                      style={{ accentColor: '#f59e0b' }}
                    />
                    <span>Through Spindle Coolant (CTS 20 Bar)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.chipConveyor}
                      onChange={(e) => setFormData({ ...formData, chipConveyor: e.target.checked })}
                      style={{ accentColor: '#f59e0b' }}
                    />
                    <span>Automated Chip Conveyor & Bin</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.probingSystem}
                      onChange={(e) => setFormData({ ...formData, probingSystem: e.target.checked })}
                      style={{ accentColor: '#f59e0b' }}
                    />
                    <span>Renishaw Workpiece Optical Probe</span>
                  </label>
                </div>
              </div>

              {/* Special Technical Requirements / Notes */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                  Component Drawings / Material Details / Remarks:
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Machining SG Iron 400 pump impellers; required delivery by end of quarter; requesting MSME subsidy loan document."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary"
                  style={{ padding: '10px 18px' }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  id="submit-rfq-quote-btn"
                  className="btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  <Send size={16} /> Submit RFQ to Coimbatore Sales Desk
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
