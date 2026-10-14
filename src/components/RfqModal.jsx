import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Trash2, 
  Send, 
  MessageCircle, 
  Copy, 
  Check 
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function RfqModal({ 
  isOpen, 
  onClose, 
  currentLang, 
  selectedProducts = [], 
  onRemoveItem, 
  onClearCart, 
  onShowToast 
}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    city: 'Coimbatore',
    remarks: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketId = `PMT-CBE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket({
      ticketId,
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      city: formData.city,
      products: selectedProducts.length > 0 ? selectedProducts : [{ name: 'General Industrial Supply Inquiry' }]
    });

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'generate_lead',
        product_count: selectedProducts.length,
        language: currentLang
      });
    }

    onShowToast?.(`Inquiry ${ticketId} recorded! We will contact you at ${formData.phone}.`);
  };

  const sendWhatsAppInquiry = () => {
    const productList = selectedProducts.map(p => `• ${p.name} (${p.brand})`).join('%0A') || 'General Tools & Wire Ropes';
    const text = encodeURIComponent(
      `*PMT PREMIER MACHINE TOOLS - INQUIRY*%0A` +
      `*Name:* ${formData.name || 'Customer'}%0A` +
      `*Company:* ${formData.company || 'N/A'}%0A` +
      `*Phone:* ${formData.phone || 'N/A'}%0A` +
      `*Delivery City:* ${formData.city || 'Coimbatore'}%0A` +
      `*Products:*%0A`
    ) + productList + encodeURIComponent(`%0A*Remarks:* ${formData.remarks || 'Please provide best wholesale rates.'}`);

    window.open(`https://wa.me/919487510127?text=${text}`, '_blank');
  };

  const copyTicket = () => {
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
        if (e.target.id === 'rfq-modal-backdrop') onClose();
      }}
    >
      <div 
        id="rfq-modal-dialog"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'var(--pmt-white)',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(19, 17, 12, 0.3)',
          border: '2px solid var(--pmt-red)'
        }}
      >
        {/* Top Header in Red #c61c1a */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={20} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>
                {t.rfq.title}
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>
                {t.gstinLabel} • All India Delivery Dispatch
              </div>
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

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {submittedTicket ? (
            /* Success Ticket View */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--pmt-teal-soft)',
                border: '2px solid var(--pmt-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: 'var(--pmt-teal)'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                {t.rfq.successTitle}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
                Thank you, <strong>{submittedTicket.name}</strong>. {t.rfq.successDesc}
              </p>

              <div style={{
                background: 'var(--bg-subtle)',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '16px',
                maxWidth: '460px',
                margin: '0 auto 24px',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{t.rfq.refLabel}</span>
                  <button
                    onClick={copyTicket}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.78rem',
                      color: copied ? 'var(--pmt-teal)' : 'var(--pmt-red)',
                      fontWeight: 700
                    }}
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--pmt-red)', letterSpacing: '0.04em' }}>
                  {submittedTicket.ticketId}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    onClearCart?.();
                    onClose();
                  }}
                  className="btn-pmt-red"
                >
                  Done &amp; Back to Products
                </button>

                <button
                  onClick={sendWhatsAppInquiry}
                  className="btn-pmt-teal"
                >
                  <MessageCircle size={16} /> Send via WhatsApp Also
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form with Netlify Attributes */
            <form 
              name="enquiry" 
              method="POST" 
              data-netlify="true" 
              action="/thank-you/"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="enquiry" />

              {/* Product List */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)' }}>
                    Inquiry Items ({selectedProducts.length}):
                  </span>
                  {selectedProducts.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearCart}
                      style={{ fontSize: '0.78rem', color: 'var(--pmt-red)', fontWeight: 600 }}
                    >
                      Clear Items
                    </button>
                  )}
                </div>

                {selectedProducts.length > 0 ? (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    maxHeight: '130px',
                    overflowY: 'auto'
                  }}>
                    {selectedProducts.map((p) => (
                      <div key={p.id} style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.85rem'
                      }}>
                        <div>
                          <strong>{p.name}</strong> <span style={{ color: 'var(--text-light)' }}>({p.brand})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(p.id)}
                          style={{ color: 'var(--pmt-red)', padding: '4px' }}
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    padding: '10px 14px',
                    background: 'var(--pmt-teal-soft)',
                    border: '1px dashed var(--pmt-teal)',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    color: 'var(--pmt-teal-dark)'
                  }}>
                    💡 No specific item selected yet. You can submit general requirements or select products from the catalog.
                  </div>
                )}
              </div>

              {/* Form Input Fields */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
                marginBottom: '16px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '4px' }}>
                    {t.rfq.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '4px' }}>
                    {t.rfq.company} *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="e.g. Sri Krishna Crane Works"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '4px' }}>
                    {t.rfq.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 94875 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '4px' }}>
                    {t.rfq.city}
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Coimbatore / Chennai / Mumbai / Pan-India"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: '100%',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Remarks */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '4px' }}>
                  {t.rfq.remarks}
                </label>
                <textarea
                  name="remarks"
                  rows="2"
                  placeholder="e.g. Required 500 metres of 12mm Usha Martin 6x36 wire rope + two 3-Ton Triple Super Gear pulley blocks with test certificate."
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Action Buttons in 5 Colors */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: '10px 16px',
                    background: 'var(--bg-subtle)',
                    color: 'var(--pmt-black)',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.88rem'
                  }}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={sendWhatsAppInquiry}
                  className="btn-pmt-teal"
                  style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                >
                  <MessageCircle size={16} /> WhatsApp Direct
                </button>

                <button
                  type="submit"
                  className="btn-pmt-red"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  <Send size={16} /> {t.rfq.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
