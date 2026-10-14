import React from 'react';
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ArrowUp,
  FileText
} from 'lucide-react';

export default function Footer({ onOpenRfq }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#060911',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '70px 24px 30px',
      color: '#94a3b8'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#111827',
                border: '1.5px solid #f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b'
              }}>
                <Wrench size={20} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                  PREMIER MACHINE TOOLS
                </div>
                <div style={{ fontSize: '0.7rem', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Coimbatore • Est. 1994
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px', color: '#94a3b8' }}>
              Leading manufacturer, importer, and distributor of high-rigidity CNC turning centers, multi-axis VMCs, precision lathes, and premium carbide cutting tools.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <ShieldCheck size={14} /> ISO 9001:2015 Quality Management
            </div>
          </div>

          {/* Quick Machinery Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Machinery Products
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#catalog" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#f59e0b'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>CNC Slant Bed Turning Centers</a></li>
              <li><a href="#catalog" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#f59e0b'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Vertical Machining Centers (VMC 850)</a></li>
              <li><a href="#catalog" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#f59e0b'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Simultaneous 5-Axis Centers (Aero-5X)</a></li>
              <li><a href="#catalog" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#f59e0b'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Heavy-Duty All Geared Lathes</a></li>
              <li><a href="#catalog" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#f59e0b'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Precision Solid Carbide Tooling & Chucks</a></li>
            </ul>
          </div>

          {/* Industries & Solutions */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Industrial Verticals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#industries">Automotive & EV Transmission</a></li>
              <li><a href="#industries">Aerospace & Defense Subcontracting</a></li>
              <li><a href="#industries">Pump, Motor & Valve Castings (Coimbatore)</a></li>
              <li><a href="#industries">High Hardness Die & Mold Cavity</a></li>
              <li><a href="#roi-calc">CNC Investment & Payback Calculator</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Coimbatore Sales & Service
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Plot 42-B, SIDCO Industrial Estate, Kurichi, Coimbatore – 641021, Tamil Nadu</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                <span>+91 98422 15890 / +91 422 249 8812</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <span>sales@premiermachinetools.in</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={16} color="#a855f7" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
              </div>
            </div>

            <button
              onClick={onOpenRfq}
              className="btn-primary"
              style={{ width: '100%', marginTop: '16px', padding: '10px', fontSize: '0.85rem' }}
            >
              <FileText size={16} /> Request Machine RFQ
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem'
        }}>
          <div>
            © {new Date().getFullYear()} Premier Machine Tools (Coimbatore). All Rights Reserved. Engineered for Precision.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>GSTIN: 33AAACP8921K1ZM</span>
            <button
              onClick={scrollToTop}
              id="scroll-to-top-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#f59e0b',
                background: 'rgba(245, 158, 11, 0.1)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                border: '1px solid rgba(245, 158, 11, 0.25)'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
