import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle, 
  Calendar, 
  Navigation, 
  Sparkles,
  Wrench,
  Cpu
} from 'lucide-react';

export default function FacilitySection({ onBookVisit }) {
  return (
    <section id="facility" style={{
      padding: '80px 24px',
      background: 'rgba(9, 13, 22, 0.7)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Facility Information & Capabilities */}
          <div>
            <div className="tech-badge cyan" style={{ marginBottom: '12px' }}>
              <MapPin size={14} /> COIMBATORE EXPERIENCE & SERVICE HUB
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              Visit Our <span style={{ color: '#06b6d4' }}>Live Machine Demo Center</span> in SIDCO Kurichi
            </h2>

            <p style={{
              color: '#94a3b8',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '28px'
            }}>
              Bring your technical drawings and sample raw materials. Our application engineers will program and perform live test-cuts on our CNC turning and VMC centers to verify cycle times and surface tolerances before you invest.
            </p>

            {/* Capability Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginBottom: '32px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px' }}>
                  <Wrench size={18} /> Spindle Rebuild Lab
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  In-house Class 10,000 clean room for P4 bearing replacement & dynamic balancing.
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#06b6d4', fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px' }}>
                  <Cpu size={18} /> CNC Spare Parts Depot
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  Over 2,500 critical Fanuc, Siemens, and hydraulic spares available off-the-shelf.
                </div>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span>Plot No. 42-B, SIDCO Industrial Estate, Kurichi, Coimbatore, Tamil Nadu – 641021</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                <Clock size={18} color="#06b6d4" style={{ flexShrink: 0 }} />
                <span>Monday – Saturday: 9:00 AM – 7:30 PM (Demo Trials by Appointment)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                <Phone size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span>+91 98422 15890 / +91 422 249 8812</span>
              </div>
            </div>

            <button
              onClick={onBookVisit}
              id="facility-book-visit-btn"
              className="btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <Calendar size={18} />
              <span>Schedule Live Test-Cutting Trial</span>
            </button>
          </div>

          {/* Right Column: Experience Center Visual / Schedule Card */}
          <div className="glass-card" style={{
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '0.78rem',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              ● LIVE BENCHMARKING APPOINTMENTS OPEN
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '12px' }}>
              Book an Engineering Trial
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
              Select your preferred machine and workpiece dimensions to see real-time cutting feeds, spindle load, and surface Ra values in Coimbatore.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              onBookVisit();
            }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                  Your Company / Machine Shop Name:
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Sri Lakshmi Precision Engineering" 
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
                  Machine Category of Interest:
                </label>
                <select style={{
                  width: '100%',
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}>
                  <option>PMT V-Mill 850 Performance VMC</option>
                  <option>PMT SprintTurn 200 Pro Slant Bed CNC</option>
                  <option>PMT Aero-5X 5-Axis Machining Center</option>
                  <option>PMT MasterLathe 400 All-Geared</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                  Mobile / WhatsApp Number:
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98XXX XXXXX" 
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

              <button
                type="submit"
                id="submit-facility-demo-btn"
                className="btn-cyan"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem', marginTop: '6px' }}
              >
                Confirm Live Demo Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
