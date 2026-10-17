import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Building2,
  CreditCard,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Truck,
  ExternalLink,
  ArrowLeft,
  Landmark
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import BankDetailsSection from './BankDetailsSection';

export default function ContactPage({ currentLang, onShowToast, onNavigateHome }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const cp = t.contactPage || TRANSLATIONS.en.contactPage;

  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: 'Coimbatore',
    location: 'H.O. : # 129/4 Dr. Nanjappa Road, Coimbatore - 641 018',
    subject: 'Product Price Quote',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`Copied ${fieldName}: ${text}`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const isMobileValid = (num) => {
    return /^[6-9]\d{9}$/.test(num || '');
  };

  const isEmailValid = (em) => {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(em || '');
  };

  const validateField = (fieldName, value) => {
    let err = '';
    if (fieldName === 'name') {
      if (!value || !value.trim()) err = 'Please enter your name or company name';
      else if (value.trim().length < 2) err = 'Name must be at least 2 characters';
    } else if (fieldName === 'mobile') {
      if (!value) err = 'Mobile number is required';
      else if (value.length < 10) err = `Please enter all 10 digits (${value.length}/10 entered)`;
      else if (!/^[6-9]/.test(value)) err = 'Mobile number must start with 6, 7, 8, or 9';
      else if (!isMobileValid(value)) err = 'Please enter a valid 10-digit mobile number';
    } else if (fieldName === 'email') {
      if (!value || !value.trim()) err = 'Email address is required';
      else if (!isEmailValid(value.trim())) err = 'Please enter a valid email address';
    } else if (fieldName === 'message') {
      if (!value || !value.trim()) err = 'Message / inquiry specifications required';
      else if (value.trim().length < 5) err = 'Please enter at least 5 characters for your message';
    }
    return err;
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    const err = validateField(fieldName, formData[fieldName] || '');
    setErrors(prev => ({ ...prev, [fieldName]: err }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let cleanVal = value;
    if (name === 'mobile') {
      // Restrict strictly to digits and limit to 10 characters maximum
      cleanVal = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData(prev => ({ ...prev, [name]: cleanVal }));

    // If already touched, validate on the fly
    if (touched[name]) {
      const err = validateField(name, cleanVal);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, mobile: true, email: true, message: true });

    const nameErr = validateField('name', formData.name);
    const mobileErr = validateField('mobile', formData.mobile);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    const newErrors = {
      name: nameErr,
      mobile: mobileErr,
      email: emailErr,
      message: msgErr
    };
    setErrors(newErrors);

    if (nameErr || mobileErr || emailErr || msgErr) {
      const firstError = mobileErr || nameErr || emailErr || msgErr;
      if (onShowToast) onShowToast(firstError);
      return;
    }

    setIsSubmitting(true);

    // Prepare Netlify Form submission or fallback
    const formBody = new URLSearchParams({
      'form-name': 'contact-us',
      ...formData
    }).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        if (onShowToast) onShowToast(cp.successMsg || 'Message sent successfully!');
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        if (onShowToast) onShowToast('Message saved! You can also chat directly on WhatsApp.');
      });
  };

  const whatsappInquiryUrl = `https://wa.me/919487510127?text=${encodeURIComponent(
    `Hello Premier Machine Tools,\nMy Name: ${formData.name || 'Customer'}\nMobile: ${formData.mobile || 'Not specified'}\nCity: ${formData.city}\nSubject: ${formData.subject}\nRequirement: ${formData.message || 'I would like to inquire about your products & pricing.'}`
  )}`;

  const googleMapsUrl = "https://www.google.com/maps/place/129%2F4,+Dr+Nanjappa+Rd,+Grey+Town,+ATT+Colony,+Gopalapuram,+Coimbatore,+Tamil+Nadu+641018/@11.0027602,76.9641784,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859a7d618d02d:0x18b3aa0b6b112823!8m2!3d11.0027549!4d76.9667533!16s%2Fg%2F11y44mtkgg?entry=ttu";

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Breadcrumb & Return Bar */}
      <div style={{
        background: 'var(--pmt-white)',
        borderBottom: '1px solid #E2E8F0',
        padding: '12px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--pmt-blue)',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} />
            <span>{t.nav.home}</span>
          </a>

          <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
              style={{ color: 'var(--text-light)', textDecoration: 'none' }}
            >
              {t.nav.home}
            </a>
            {' '}/ <span style={{ color: 'var(--pmt-red)' }}>{t.nav.contact}</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>

        {/* Page Title Header in PMT 5 Colors */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="badge-red" style={{ marginBottom: '10px' }}>
            {cp.badge || "CONTACT PREMIER MACHINE TOOLS"}
          </div>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'var(--pmt-blue)',
            marginBottom: '10px'
          }}>
            {cp.title || "Contact Us"}
          </h1>
          <p style={{
            color: 'var(--text-muted)',
            maxWidth: '680px',
            margin: '0 auto',
            fontSize: '0.96rem',
            lineHeight: 1.6
          }}>
            {cp.sub || "Dealers in Wire Ropes, Chains, Lifting Equipment, Polyester Slings, and Bandsaw Blades. Pan-India Delivery from Coimbatore."}
          </p>
        </div>

        {/* ========================================================== */}
        {/* SECTION 1: MATCHING IMAGE 1 REFERENCE (Address & Map Card) */}
        {/* ========================================================== */}
        <div style={{
          background: 'var(--pmt-white)',
          borderRadius: '20px',
          padding: 'clamp(20px, 3.5vw, 36px)',
          border: '1px solid #E2E8F0',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {/* Left Column: Hospital/Store Address & Bank Details */}
            <div>
              <div style={{
                color: 'var(--pmt-blue)',
                fontSize: '1.25rem',
                fontWeight: 800,
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <MapPin size={22} color="var(--pmt-red)" />
                <span>{cp.storeAddressHeading || "Store & Office Address:"}</span>
              </div>

              {/* Exact Store Details as Requested */}
              <div style={{
                background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
                border: '1.5px solid #E2E8F0',
                borderRadius: '12px',
                padding: '16px 18px',
                marginBottom: '18px'
              }}>
                <div style={{
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  color: 'var(--pmt-red)',
                  marginBottom: '6px'
                }}>
                  PREMIER MACHINE TOOLS
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: 'var(--pmt-black)',
                  fontWeight: 600,
                  lineHeight: 1.6
                }}>
                  # 129/4 (Old No. 184), Dr. Nanjappa Road,<br />
                  Coimbatore - 641 018, Tamil Nadu, India.
                </div>
                <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                  <div style={{
                    fontSize: '0.82rem',
                    color: 'var(--pmt-teal)',
                    fontWeight: 800
                  }}>
                    GSTIN: 33AALFP8180B2Z9 • Pan-India Lorry Transport Dispatch
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8rem',
                      color: 'var(--pmt-blue)',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <MapPin size={13} color="var(--pmt-red)" />
                    <span>View on Google Maps ↗</span>
                  </a>
                </div>
              </div>

              {/* Branch Office Details */}
              <div style={{
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: '12px',
                padding: '14px 18px',
                marginBottom: '16px'
              }}>
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--pmt-blue)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Building2 size={16} color="var(--pmt-teal)" />
                  <span>Branch Office (B.O.):</span>
                </div>
                <div style={{
                  fontSize: '0.92rem',
                  color: 'var(--pmt-black)',
                  fontWeight: 600,
                  lineHeight: 1.5
                }}>
                  Basement Floor, 180, N.S.P. Shopping Complex,<br />
                  Coimbatore, Tamil Nadu
                </div>
              </div>

              {/* Quick Jump to Bank Transfer Details */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'linear-gradient(135deg, rgba(3, 78, 161, 0.06) 0%, rgba(5, 171, 165, 0.08) 100%)',
                border: '1.5px solid rgba(3, 78, 161, 0.18)',
                borderRadius: '12px',
                padding: '14px 18px'
              }}>
                <div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase' }}>
                    Need Bank Account For NEFT / RTGS?
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 900, color: 'var(--pmt-blue)' }}>
                    DBS Bank Current A/C Details
                  </div>
                </div>
                <a
                  href="#bank-details"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('bank-details');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--pmt-blue)',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(3, 78, 161, 0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--pmt-red)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--pmt-blue)'}
                >
                  <Landmark size={15} />
                  <span>View Bank Details ↓</span>
                </a>
              </div>
            </div>

            {/* Right Column: Stylized Map Card Matching Image 1 */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                border: '2px solid #034ea1',
                overflow: 'hidden',
                height: '260px',
                background: '#EDF2F7',
                boxShadow: '0 8px 24px rgba(3, 78, 161, 0.12)'
              }}>
                {/* Real Google Maps Embed with Exact 129/4 Dr Nanjappa Road Pin */}
                <iframe
                  title="PMT Premier Machine Tools Location"
                  src="https://maps.google.com/maps?q=129%2F4%2C+Dr+Nanjappa+Rd%2C+Grey+Town%2C+ATT+Colony%2C+Gopalapuram%2C+Coimbatore%2C+Tamil+Nadu+641018&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Corner Brand Watermark Badge (like manipalhospitals in Image 1) */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  color: 'var(--pmt-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  pointerEvents: 'none'
                }}>
                  <span style={{ color: 'var(--pmt-red)' }}>PMT</span> Premier Machine Tools
                </div>
              </div>

              {/* Exact Button From Image 1: "Open in Maps" Gradient Pill */}
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="open-in-maps-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '12px 36px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #034ea1 0%, #05aba5 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.96rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(3, 78, 161, 0.3)',
                    transition: 'all 0.2s ease',
                    minWidth: '240px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <MapPin size={18} />
                  <span>{cp.openInMaps || "Open in Maps"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* SECTION 2: MATCHING IMAGE 2 REFERENCE (Contact Us) */}
        {/* ========================================================== */}
        <div style={{
          background: 'var(--pmt-white)',
          borderRadius: '20px',
          padding: 'clamp(24px, 4vw, 44px)',
          border: '1px solid #E2E8F0',
          boxShadow: 'var(--shadow-md)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: 'var(--pmt-teal)',
              marginBottom: '16px',
              fontWeight: 800
            }}>
              {cp.title || "Contact Us"}
            </h2>

            {/* Exactly Matching Two Buttons from Image 2: "Call Now" or "Chat on Whatsapp" */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '18px'
            }}>
              <a
                href="tel:+919487510127"
                id="btn-call-now-contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  background: 'var(--pmt-blue)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(3, 78, 161, 0.25)',
                  minWidth: '150px',
                  justifyContent: 'center'
                }}
              >
                <Phone size={17} />
                <span>{cp.callNow || "Call Now"}</span>
              </a>

              <span style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 600 }}>or</span>

              <a
                href="https://wa.me/919487510127?text=Hello%20Premier%20Machine%20Tools,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                id="btn-chat-whatsapp-contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  background: '#16a34a',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
                  minWidth: '170px',
                  justifyContent: 'center'
                }}
              >
                <MessageCircle size={17} />
                <span>{cp.chatWhatsapp || "Chat on Whatsapp"}</span>
              </a>
            </div>

            {/* Direct Contact Bar below buttons from Image 2 */}
            <div style={{
              fontSize: '0.92rem',
              color: 'var(--pmt-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap',
              fontWeight: 600
            }}>
              <span>
                <strong>Contact:</strong>{' '}
                <a href="tel:+919487510127" style={{ color: 'var(--pmt-blue)', textDecoration: 'underline' }}>
                  +91 94875 10127
                </a>
                {' / '}
                <a href="tel:+919443230127" style={{ color: 'var(--pmt-blue)', textDecoration: 'underline' }}>
                  94432 30127
                </a>
              </span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:pmtpremiermachinetools@gmail.com" style={{ color: 'var(--pmt-blue)', textDecoration: 'underline' }}>
                  pmtpremiermachinetools@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Form Matching Layout in Image 2 */}
          <form
            name="contact-us"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            style={{ maxWidth: '980px', margin: '0 auto' }}
          >
            {/* Netlify hidden bot field */}
            <input type="hidden" name="form-name" value="contact-us" />
            <p style={{ display: 'none' }}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            {/* Row 1: Name * | Mobile Number * */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '20px',
              marginBottom: '18px'
            }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                  {cp.name || "Name"} <span style={{ color: 'var(--pmt-red)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John / Machine Shop / Factory Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('name')}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: touched.name && errors.name ? '1.5px solid var(--pmt-red)' : '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    color: 'var(--pmt-black)',
                    background: '#FFFFFF',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => {
                    if (!errors.name) e.target.style.borderColor = 'var(--pmt-blue)';
                  }}
                />
                {touched.name && errors.name && (
                  <span style={{ fontSize: '0.76rem', color: 'var(--pmt-red)', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                  {cp.mobile || "Mobile Number"} <span style={{ color: 'var(--pmt-red)' }}>*</span>
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  border: touched.mobile && errors.mobile ? '1.5px solid var(--pmt-red)' : '1.5px solid #CBD5E1',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s'
                }}>
                  <span style={{
                    padding: '0 12px',
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    fontWeight: 700,
                    borderRight: '1px solid #CBD5E1',
                    background: '#F8FAFC',
                    lineHeight: '44px'
                  }}>
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    maxLength={10}
                    inputMode="numeric"
                    placeholder="98765 43210"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('mobile')}
                    style={{
                      flexGrow: 1,
                      padding: '11px 12px',
                      border: 'none',
                      fontSize: '0.9rem',
                      color: 'var(--pmt-black)',
                      outline: 'none'
                    }}
                  />
                  {formData.mobile.length > 0 && formData.mobile.length < 10 && (
                    <span style={{
                      marginRight: '8px',
                      background: '#F1F5F9',
                      color: '#64748B',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}>
                      {formData.mobile.length}/10 digits
                    </span>
                  )}
                  {formData.mobile.length === 10 && isMobileValid(formData.mobile) && (
                    <span style={{
                      marginRight: '8px',
                      background: 'rgba(5, 171, 165, 0.15)',
                      color: 'var(--pmt-teal-dark)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}>
                      ✓ {cp.verify || "Valid"}
                    </span>
                  )}
                  {formData.mobile.length === 10 && !isMobileValid(formData.mobile) && (
                    <span style={{
                      marginRight: '8px',
                      background: 'rgba(198, 28, 26, 0.12)',
                      color: 'var(--pmt-red)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}>
                      Must start with 6-9
                    </span>
                  )}
                </div>
                {touched.mobile && errors.mobile && (
                  <span style={{ fontSize: '0.76rem', color: 'var(--pmt-red)', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                    {errors.mobile}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Email Address * | Choose City * */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '20px',
              marginBottom: '18px'
            }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                  {cp.email || "Email Address"} <span style={{ color: 'var(--pmt-red)' }}>*</span>
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  border: touched.email && errors.email ? '1.5px solid var(--pmt-red)' : '1.5px solid #CBD5E1',
                  overflow: 'hidden'
                }}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('email')}
                    style={{
                      flexGrow: 1,
                      padding: '11px 14px',
                      border: 'none',
                      fontSize: '0.9rem',
                      color: 'var(--pmt-black)',
                      outline: 'none'
                    }}
                  />
                  {formData.email && isEmailValid(formData.email) && (
                    <span style={{
                      marginRight: '8px',
                      background: 'rgba(5, 171, 165, 0.15)',
                      color: 'var(--pmt-teal-dark)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}>
                      ✓ {cp.verify || "Valid"}
                    </span>
                  )}
                </div>
                {touched.email && errors.email && (
                  <span style={{ fontSize: '0.76rem', color: 'var(--pmt-red)', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                  {cp.city || "Choose City"} <span style={{ color: 'var(--pmt-red)' }}>*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    color: 'var(--pmt-black)',
                    background: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  <option value="Coimbatore">Coimbatore (Local Delivery)</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Erode">Erode</option>
                  <option value="Salem">Salem</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Bengaluru">Bengaluru / Karnataka</option>
                  <option value="Kochi">Kochi / Kerala</option>
                  <option value="Hyderabad">Hyderabad / Telangana</option>
                  <option value="Pan-India">Other All India Destination</option>
                </select>
              </div>
            </div>

            {/* Row 3: Choose Hospital/Office Location * | Subject (Optional) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '20px',
              marginBottom: '18px'
            }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                  {cp.location || "Choose Office Location"} <span style={{ color: 'var(--pmt-red)' }}>*</span>
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    color: 'var(--pmt-black)',
                    background: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  <option value="H.O. : # 129/4 Dr. Nanjappa Road, Coimbatore - 641 018">
                    Head Office: #129/4 Dr. Nanjappa Road, Coimbatore - 641018
                  </option>
                  <option value="B.O. : 180, N.S.P. Shopping Complex, Coimbatore">
                    Branch Office: 180, N.S.P. Shopping Complex, Coimbatore
                  </option>
                  <option value="Central Warehouse & All-India Transport Godown">
                    Central Warehouse &amp; All-India Transport Godown
                  </option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                  {cp.subject || "Subject (Optional)"}
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    color: 'var(--pmt-black)',
                    background: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  <option value="Product Price Quote">Product Price Quote &amp; Delivery</option>
                  <option value="Usha Martin Wire Ropes">Usha Martin Steel Wire Ropes</option>
                  <option value="Chain Pulley Blocks / Hoists">Chain Pulley Blocks / Hoists</option>
                  <option value="Woodworking Bandsaw Blades">Woodworking Bandsaw Blades Custom Loops</option>
                  <option value="Lifting Slings & Hardware">Lifting Slings, Shackles &amp; Clamps</option>
                  <option value="Bulk Industrial Order">Bulk Industrial / Government Tender Order</option>
                </select>
              </div>
            </div>

            {/* Row 4: Type Your Message * */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--pmt-blue)', marginBottom: '6px' }}>
                {cp.message || "Type Your Message"} <span style={{ color: 'var(--pmt-red)' }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Please enter your required product specifications, diameter, tonnage capacity, quantity, and delivery destination..."
                value={formData.message}
                onChange={handleInputChange}
                onBlur={() => handleBlur('message')}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: touched.message && errors.message ? '1.5px solid var(--pmt-red)' : '1.5px solid #CBD5E1',
                  fontSize: '0.9rem',
                  color: 'var(--pmt-black)',
                  background: '#FFFFFF',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
              {touched.message && errors.message && (
                <span style={{ fontSize: '0.76rem', color: 'var(--pmt-red)', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                  {errors.message}
                </span>
              )}
            </div>

            {/* Row 5: Exactly Matching "Send Message" Full-Width Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              id="btn-send-message-contact"
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #05aba5 0%, #034ea1 100%)',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(5, 171, 165, 0.3)',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.95'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              {isSubmitting ? 'Sending Message...' : (cp.sendBtn || "Send Message")}
            </button>

            {/* Success Confirmation Notification */}
            {submitted && (
              <div style={{
                marginTop: '18px',
                padding: '14px 18px',
                borderRadius: '8px',
                background: 'var(--pmt-teal-soft)',
                border: '1.5px solid var(--pmt-teal)',
                color: 'var(--pmt-teal-dark)',
                fontSize: '0.9rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} />
                  <span>{cp.successMsg || "Thank you! Your message has been sent to our team. We will call you back shortly."}</span>
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pmt-teal"
                  style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                >
                  <MessageCircle size={15} />
                  <span>Also Send to WhatsApp</span>
                </a>
              </div>
            )}
          </form>
        </div>

        {/* ========================================================== */}
        {/* SECTION 3: DIRECT BANK TRANSFER (NEFT / RTGS) DETAILS       */}
        {/* ========================================================== */}
        <div style={{
          marginTop: '40px',
          background: 'var(--pmt-white)',
          borderRadius: '20px',
          padding: 'clamp(20px, 3.5vw, 40px)',
          border: '1px solid #E2E8F0',
          boxShadow: 'var(--shadow-md)'
        }}>
          <BankDetailsSection currentLang={currentLang} onShowToast={onShowToast} />
        </div>

        {/* ========================================================== */}
        {/* Additional Assurance Strip: GST & Working Hours */}
        {/* ========================================================== */}
        <div style={{
          marginTop: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: '16px'
        }}>
          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--pmt-blue-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--pmt-blue)'
            }}>
              <Clock size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--pmt-blue)' }}>Business Hours</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Monday - Saturday: 9:00 AM to 8:00 PM</div>
            </div>
          </div>

          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--pmt-teal-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--pmt-teal)'
            }}>
              <Truck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--pmt-blue)' }}>Pan-India Dispatch</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Same-day or next-day road transport</div>
            </div>
          </div>

          <div style={{
            background: 'var(--pmt-white)',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'var(--pmt-red-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--pmt-red)'
            }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--pmt-blue)' }}>GST Tax Invoicing</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GSTIN: 33AALFP8180B2Z9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
