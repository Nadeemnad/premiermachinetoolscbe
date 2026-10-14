import React from 'react';
import { 
  Building2, 
  Car, 
  Plane, 
  Zap, 
  Boxes, 
  CheckCircle2, 
  Quote, 
  Star,
  Award
} from 'lucide-react';
import { INDUSTRIES, TESTIMONIALS } from '../data/machines';

export default function IndustriesSection({ onFilterByIndustry }) {
  const iconMap = {
    Car: <Car size={26} color="#f59e0b" />,
    Plane: <Plane size={26} color="#06b6d4" />,
    Zap: <Zap size={26} color="#34d399" />,
    Boxes: <Boxes size={26} color="#a855f7" />
  };

  return (
    <section id="industries" style={{
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="tech-badge" style={{ marginBottom: '12px' }}>
          <Building2 size={14} /> SECTOR APPLICATIONS & TESTED PERFORMANCE
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          color: '#ffffff',
          marginBottom: '14px'
        }}>
          Engineered for <span style={{ color: '#f59e0b' }}>High-Precision Sectors</span>
        </h2>
        <p style={{
          color: '#94a3b8',
          maxWidth: '650px',
          margin: '0 auto',
          fontSize: '1rem',
          lineHeight: 1.6
        }}>
          From Coimbatore’s world-renowned pump & motor foundries to Tier-1 automotive and aerospace subcontractors across Tamil Nadu and India.
        </p>
      </div>

      {/* Industries Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '60px'
      }}>
        {INDUSTRIES.map((ind) => (
          <div 
            key={ind.id} 
            className="glass-card" 
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(15, 23, 42, 0.75)'
            }}
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {iconMap[ind.icon]}
            </div>

            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
              {ind.title}
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              {ind.desc}
            </p>

            <div style={{
              marginTop: 'auto',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '16px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                Key Technical Highlights:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {ind.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Trust & Testimonials */}
      <div style={{
        background: 'rgba(17, 24, 39, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '36px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '20px'
        }}>
          <div>
            <span className="tech-badge" style={{ marginBottom: '6px' }}>
              <Award size={14} /> VERIFIED FACTORY FEEDBACK
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>
              Trusted by Coimbatore’s Leading Manufacturers
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} fill="#f59e0b" color="#f59e0b" />
            ))}
            <span style={{ color: '#ffffff', fontWeight: 700, marginLeft: '8px' }}>4.9 / 5.0 Rating</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} style={{
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '14px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <Quote size={28} color="#f59e0b" style={{ opacity: 0.4, marginBottom: '12px' }} />
                <p style={{
                  fontSize: '0.92rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '14px' }}>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                  {t.author}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#06b6d4', marginTop: '2px' }}>
                  {t.title} — {t.company}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
                  Deployed: <span style={{ color: '#94a3b8' }}>{t.machine}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
