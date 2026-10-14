import React, { useState } from 'react';
import { Landmark, Copy, Check, AlertCircle } from 'lucide-react';
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
      padding: '70px 16px',
      maxWidth: '1000px',
      margin: '0 auto',
      background: 'var(--pmt-white)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="badge-red" style={{ marginBottom: '10px' }}>
          <Landmark size={14} /> {t.bank.badge}
        </div>
        <h2 style={{
          fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
          color: 'var(--pmt-blue)',
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

      {/* Official Bank Account Card in Blue #034ea1 */}
      <div style={{
        background: 'var(--pmt-white)',
        border: '2px solid var(--pmt-blue)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
      }}>
        {/* Top Header in Blue #034ea1 */}
        <div style={{
          background: 'var(--pmt-blue)',
          color: 'var(--pmt-white)',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Landmark size={22} color="var(--pmt-white)" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.04em' }}>
                {t.bank.bankName}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                {t.bank.branch}
              </div>
            </div>
          </div>

          <span style={{
            background: 'var(--pmt-teal)',
            color: 'var(--pmt-white)',
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
            background: 'var(--bg-subtle)',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Beneficiary / Account Name:
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--pmt-blue)' }}>
              PMT PREMIER MACHINE TOOLS
            </div>
          </div>

          {/* Account Number in Red #c61c1a */}
          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Account Number:
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--pmt-red)', letterSpacing: '0.05em' }}>
                {t.bank.accountNo}
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(t.bank.accountNo, 'Account Number')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'var(--pmt-white)',
                border: '1px solid #CBD5E1',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: copiedField === 'Account Number' ? 'var(--pmt-teal)' : 'var(--pmt-blue)',
                fontWeight: 700
              }}
            >
              {copiedField === 'Account Number' ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedField === 'Account Number' ? t.bank.copied : t.bank.copyBtn}</span>
            </button>
          </div>

          {/* IFSC Code in Blue #034ea1 */}
          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>
                IFSC Code:
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--pmt-blue)', letterSpacing: '0.05em' }}>
                {t.bank.ifsc}
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(t.bank.ifsc, 'IFSC Code')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'var(--pmt-white)',
                border: '1px solid #CBD5E1',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: copiedField === 'IFSC Code' ? 'var(--pmt-teal)' : 'var(--pmt-blue)',
                fontWeight: 700
              }}
            >
              {copiedField === 'IFSC Code' ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedField === 'IFSC Code' ? t.bank.copied : t.bank.copyBtn}</span>
            </button>
          </div>
        </div>

        {/* Invoice Terms in Neutral Subtlety */}
        <div style={{
          background: 'var(--bg-subtle)',
          borderTop: '1px solid #E2E8F0',
          padding: '16px 24px',
          fontSize: '0.82rem',
          color: 'var(--pmt-black)',
          lineHeight: 1.6
        }}>
          <div style={{ fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--pmt-blue)' }}>
            <AlertCircle size={15} color="var(--pmt-red)" /> Commercial &amp; Invoicing Terms:
          </div>
          <div>
            {t.bank.terms}
          </div>
        </div>
      </div>
    </section>
  );
}
