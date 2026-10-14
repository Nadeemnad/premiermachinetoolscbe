import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock, 
  FileCheck2,
  PhoneCall
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { FAQS_BY_TOPIC } from '../data/products';

export default function FaqAndDeliverySection({ currentLang, onOpenRfq }) {
  const [openFaq, setOpenFaq] = useState(0);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const states = [
    { name: "Tamil Nadu", hubs: "Coimbatore, Chennai, Madurai, Salem, Tirupur, Erode, Trichy" },
    { name: "Kerala", hubs: "Kochi, Palakkad, Kozhikode, Thiruvananthapuram, Thrissur" },
    { name: "Karnataka", hubs: "Bangalore, Belagavi, Hubballi, Mangaluru, Mysuru" },
    { name: "Andhra & Telangana", hubs: "Hyderabad, Visakhapatnam, Vijayawada, Guntur" },
    { name: "Maharashtra & Gujarat", hubs: "Mumbai, Pune, Nagpur, Ahmedabad, Surat, Rajkot" },
    { name: "Pan-India Corridors", hubs: "Delhi NCR, Kolkata, Jaipur, Kanpur, Indore & All States" }
  ];

  return (
    <section id="delivery" style={{
      padding: '70px 16px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Pan-India Delivery Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #1E216B 0%, #2E3192 100%)',
          color: '#FFFFFF',
          borderRadius: '16px',
          padding: '36px 28px',
          marginBottom: '60px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--pmt-red)'
          }} />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '28px'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#FDE047',
                marginBottom: '10px'
              }}>
                <Truck size={15} /> {t.delivery.badge}
              </div>

              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: '#FFFFFF',
                marginBottom: '8px'
              }}>
                {t.delivery.heading}
              </h2>

              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                maxWidth: '680px',
                lineHeight: 1.6
              }}>
                {t.delivery.desc}
              </p>
            </div>

            <button
              onClick={onOpenRfq}
              className="btn-pmt-red"
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              Request Delivery Quote
            </button>
          </div>

          {/* Grid of States & Logistics Corridors */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px'
          }}>
            {states.map((st, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '14px 16px'
              }}>
                <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#FDE047', marginBottom: '4px' }}>
                  ✓ {st.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#E2E8F0', lineHeight: 1.4 }}>
                  {st.hubs}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '20px',
            fontSize: '0.82rem',
            color: '#94A3B8',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span>• Dispatch through VRL, ARC, TCI, ABT, KPN, Professional Couriers & Local Lorry Transport</span>
            <span>• 100% Tax Invoice with Valid GST E-Way Bill</span>
          </div>
        </div>

        {/* Real Buyer FAQs Section with Accordion */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-indigo" style={{ marginBottom: '10px' }}>
              <HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS
            </div>
            <h3 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              color: 'var(--pmt-indigo)',
              marginBottom: '10px'
            }}>
              Buyer Questions on Wire Ropes, Hoists & Delivery
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Practical answers regarding technical certificates, load capacities, and order placement.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS_BY_TOPIC.map((faq, index) => {
              const isOpen = openFaq === index;

              // Localized Q&A
              const qText = currentLang === 'ta' && faq.qTa
                ? faq.qTa
                : currentLang === 'hi' && faq.qHi
                ? faq.qHi
                : faq.q;

              const aText = currentLang === 'ta' && faq.aTa
                ? faq.aTa
                : currentLang === 'hi' && faq.aHi
                ? faq.aHi
                : faq.a;

              return (
                <div
                  key={index}
                  style={{
                    background: '#FFFFFF',
                    border: isOpen ? '2px solid var(--pmt-red)' : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: isOpen ? 'var(--pmt-red)' : 'var(--pmt-indigo)',
                      gap: '14px'
                    }}
                  >
                    <span>{qText}</span>
                    <span style={{ color: isOpen ? 'var(--pmt-red)' : '#64748B', flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 20px 18px',
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '12px'
                    }}>
                      {aText}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
