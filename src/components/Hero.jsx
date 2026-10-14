import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Gauge, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Cpu,
  CalendarCheck
} from 'lucide-react';
import { STATS } from '../data/machines';

export default function Hero({ onSearchSubmit, onOpenRfq, onScheduleVisit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchInput);
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="blueprint-grid" style={{
      position: 'relative',
      padding: '60px 24px 80px',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      {/* Ambient background glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div>
            {/* Top Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div className="tech-badge">
                <ShieldCheck size={14} /> ISO 9001:2015 REGISTERED
              </div>
              <div className="tech-badge cyan">
                <Sparkles size={14} /> COIMBATORE MACHINERY HUB
              </div>
            </div>

            {/* Single H1 for SEO */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              High-Precision <span style={{
                background: 'linear-gradient(135deg, #f59e0b 20%, #fbbf24 60%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>CNC & Industrial</span> Machinery
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '560px'
            }}>
              Premier Machine Tools powers automotive, aerospace, pump, and heavy engineering industries across Coimbatore and Pan-India with world-class CNC turning centers, 5-axis vertical machining centers, and precision tooling.
            </p>

            {/* Direct Quick Search Form */}
            <form onSubmit={handleSearch} style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '12px',
              padding: '6px 8px 6px 16px',
              maxWidth: '520px',
              marginBottom: '28px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(12px)'
            }}>
              <Search size={20} style={{ color: '#f59e0b', flexShrink: 0, marginRight: '10px' }} />
              <input
                id="hero-quick-search"
                type="text"
                placeholder="Search by model, CNC turning, VMC, BT40, lathe..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#f8fafc',
                  fontSize: '0.95rem'
                }}
              />
              <button 
                type="submit" 
                id="hero-search-btn"
                className="btn-primary" 
                style={{ padding: '8px 18px', fontSize: '0.88rem', flexShrink: 0 }}
              >
                Find Machine
              </button>
            </form>

            {/* Dual CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a 
                href="#catalog" 
                id="hero-browse-catalog-btn"
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '14px 28px' }}
              >
                <span>Browse All Machinery</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onScheduleVisit}
                id="hero-demo-visit-btn"
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '13px 24px' }}
              >
                <CalendarCheck size={18} style={{ color: '#06b6d4' }} />
                <span>Book Live Demo in CBE</span>
              </button>
            </div>

            {/* Key feature pills */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginTop: '28px',
              fontSize: '0.85rem',
              color: '#cbd5e1',
              flexWrap: 'wrap'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#10b981" /> 24-Bar Through Spindle Coolant
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#10b981" /> Fanuc / Siemens / Mitsubishi Controls
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#10b981" /> Same-Week Factory Commissioning
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Machine Image & Industrial HUD Telemetry */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.15)',
              background: '#0f172a'
            }}>
              <img 
                src="/images/hero_cnc.jpg" 
                alt="Premier Machine Tools CNC Machining Center in Coimbatore"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  maxHeight: '480px',
                  transform: 'scale(1.01)',
                  transition: 'transform 0.5s ease'
                }}
              />
              {/* Subtle gradient vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 10, 18, 0.95) 0%, rgba(7, 10, 18, 0.2) 50%, rgba(7, 10, 18, 0.4) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Floating Industrial HUD Overlay Top-Right */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }} />
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    SPINDLE TELEMETRY
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>
                    12,000 RPM Direct • ±0.002 mm
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card Over Hero */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(11, 15, 25, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '14px',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <span className="tech-badge" style={{ marginBottom: '4px' }}>
                    Flagship Machining Center
                  </span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    PMT V-Mill 850 Performance
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Table: 1000×500 mm • Travel: 850/520/560 mm • 24-Tool Twin Arm
                  </div>
                </div>

                <button
                  onClick={onOpenRfq}
                  id="hero-quick-quote-btn"
                  className="btn-cyan"
                  style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                >
                  Request Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Stats Strip */}
        <div style={{
          marginTop: '60px',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '24px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {STATS.map((stat, idx) => (
            <div key={idx} style={{
              borderRight: idx < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              paddingRight: '16px'
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#f59e0b',
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#f8fafc',
                marginTop: '6px'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: '#64748b',
                marginTop: '2px'
              }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
