import React, { useState } from 'react';
import { Landmark, Copy, Check, ShieldCheck, FileCheck2, AlertCircle } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function BankDetailsSection({ currentLang, onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(fieldName);
    onShowToast?.(`Copied ${fieldName}: ${text}`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="bank-details" style={{
      padding: '70px 20px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="badge-red" style={{ marginBottom: '10px' }}>
          <Landmark size={14} /> {t.bank.badge}
        </div>
        <h2 style={{
          fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
          color: 'var(--pmt-navy)',
          marginBottom: '10px'
        }}>
          {t.bank.heading}
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '620px',
          margin: '0 auto',
          fontSize: '0.95rem'
        }}>
          {t.bank.desc}
        </p>
      </div>

      {/* Official Bank Account Card */}
      <div style={{
        background: '#ffffff',
        border: '2px solid var(--pmt-navy)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
      }}>
        {/* Top Header */}
        <div style={{
          background: 'var(--pmt-navy)',
          color: '#ffffff',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Landmark size={22} color="#f59e0b" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.04em' }}>
                DBS BANK INDIA LTD
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Uppilipalayam Branch, Coimbatore
              </div>
            </div>
          </div>

          <span style={{
            background: 'var(--pmt-green)',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: 800,
            padding: '3px 10px',
            borderRadius: '4px',
            textTransform: 'uppercase'
          }}>
            Verified Current A/C
          </span>
        </div>

        {/* Account Fields Grid */}
        <div style={{
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {/* Account Name */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
              Beneficiary / Account Name:
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--pmt-navy)' }}>
              PREMIER MACHINE TOOLS
            </div>
          </div>

          {/* Account Number */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                Account Number:
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--pmt-red)', letterSpacing: '0.05em' }}>
                0191351000005295
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('0191351000005295', 'Account Number')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: copiedField === 'Account Number' ? 'var(--pmt-green)' : 'var(--pmt-navy)',
                fontWeight: 700
              }}
            >
              {copiedField === 'Account Number' ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedField === 'Account Number' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* IFSC Code */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                IFSC Code:
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--pmt-navy)', letterSpacing: '0.05em' }}>
                DBSS0IN0191
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('DBSS0IN0191', 'IFSC Code')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: copiedField === 'IFSC Code' ? 'var(--pmt-green)' : 'var(--pmt-navy)',
                fontWeight: 700
              }}
            >
              {copiedField === 'IFSC Code' ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedField === 'IFSC Code' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Invoice Terms & Commercial Notice from Invoice */}
        <div style={{
          background: '#fffdf5',
          borderTop: '1px solid #fef3c7',
          padding: '16px 24px',
          fontSize: '0.8rem',
          color: '#78350f',
          lineHeight: 1.6
        }}>
          <div style={{ fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertCircle size={15} color="#b45309" /> Commercial & Invoice Billing Terms:
          </div>
          <div>
            1) Subject to Coimbatore Jurisdiction only. • 2) Goods once sold can't be taken back. • 3) Responsibility ceases after goods leave our godown. • 4) Tax invoice with 100% GST compliance.
          </div>
        </div>
      </div>
    </section>
  );
}
