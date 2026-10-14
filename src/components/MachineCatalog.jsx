import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Eye, 
  ShoppingCart, 
  Check, 
  Download, 
  SlidersHorizontal, 
  Gauge, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MACHINES_DATA } from '../data/machines';

export default function MachineCatalog({ 
  onSelectMachine, 
  cartItems, 
  onToggleCart, 
  onDownloadBrochure,
  initialSearch = ''
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', label: 'All Machinery' },
    { id: 'cnc-turning', label: 'CNC Turning Centers' },
    { id: 'vmc', label: 'Vertical Machining (VMC & 5-Axis)' },
    { id: 'precision-lathes', label: 'Heavy Precision Lathes' },
    { id: 'tooling', label: 'Tooling & Accessories' }
  ];

  const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'automotive', label: 'Automotive & EV' },
    { id: 'aerospace', label: 'Aerospace & Defense' },
    { id: 'pumps', label: 'Pumps & Motors' },
    { id: 'die-mold', label: 'Die & Mold' }
  ];

  const filteredMachines = useMemo(() => {
    return MACHINES_DATA.filter((machine) => {
      // Category filter
      if (activeCategory !== 'all' && machine.category !== activeCategory) {
        return false;
      }
      // Industry filter
      if (activeIndustry !== 'all' && !machine.industry.includes(activeIndustry)) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = machine.name.toLowerCase().includes(query);
        const matchesSeries = machine.series.toLowerCase().includes(query);
        const matchesTagline = machine.tagline.toLowerCase().includes(query);
        const matchesController = machine.specs.controller?.toLowerCase().includes(query);
        if (!matchesName && !matchesSeries && !matchesTagline && !matchesController) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured default
    });
  }, [activeCategory, activeIndustry, searchQuery, sortBy]);

  const resetFilters = () => {
    setActiveCategory('all');
    setActiveIndustry('all');
    setSearchQuery('');
  };

  return (
    <section id="catalog" style={{
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="tech-badge" style={{ marginBottom: '12px' }}>
          <Layers size={14} /> PRECISION MACHINERY LINEUP
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          marginBottom: '14px',
          color: '#ffffff'
        }}>
          Engineered for <span style={{ color: '#f59e0b' }}>Maximum Productivity</span> & Zero Backlash
        </h2>
        <p style={{
          color: '#94a3b8',
          maxWidth: '650px',
          margin: '0 auto',
          fontSize: '1rem',
          lineHeight: 1.6
        }}>
          Explore our range of heavy-duty slant-bed turning centers, high-speed 5-axis vertical machining centers, precision toolroom lathes, and carbide tooling accessories.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div style={{
        background: 'rgba(17, 24, 39, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '36px'
      }}>
        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#070a12' : '#cbd5e1',
                  border: isActive ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 4px 12px rgba(245, 158, 11, 0.35)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Row: Industry, Search, Sort */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Industry Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} /> Industry:
            </span>
            {industries.map((ind) => {
              const isActive = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  id={`ind-btn-${ind.id}`}
                  onClick={() => setActiveIndustry(ind.id)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    background: isActive ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    color: isActive ? '#38bdf8' : '#94a3b8',
                    border: isActive ? '1px solid rgba(6, 182, 212, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  {ind.label}
                </button>
              );
            })}
          </div>

          {/* Search Input & Machine Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '6px 12px'
            }}>
              <Search size={15} style={{ color: '#94a3b8', marginRight: '8px' }} />
              <input
                id="catalog-filter-search"
                type="text"
                placeholder="Search models or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  width: '180px'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ color: '#94a3b8', fontSize: '0.8rem', padding: '0 4px' }}
                >
                  ✕
                </button>
              )}
            </div>

            <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              Showing <strong style={{ color: '#f59e0b' }}>{filteredMachines.length}</strong> machines
            </span>
          </div>
        </div>
      </div>

      {/* Machines Grid */}
      {filteredMachines.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '28px'
        }}>
          {filteredMachines.map((machine) => {
            const isCarted = cartItems.some(item => item.id === machine.id);

            return (
              <div 
                key={machine.id} 
                className="glass-card" 
                id={`machine-card-${machine.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  background: 'rgba(15, 23, 42, 0.85)'
                }}
              >
                {/* Image Container with Badges */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  overflow: 'hidden',
                  background: '#090e1a'
                }}>
                  <img 
                    src={machine.image} 
                    alt={machine.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 50%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top Badge */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    <span className="tech-badge" style={{ background: 'rgba(15, 23, 42, 0.9)' }}>
                      {machine.badge}
                    </span>
                  </div>

                  {/* Controller Pill */}
                  {machine.specs.controller && (
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#38bdf8'
                    }}>
                      {machine.specs.controller.split('/')[0]}
                    </div>
                  )}

                  {/* Price Estimate / Request Quote tag */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {machine.series}
                    </span>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#f59e0b',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {machine.priceRange}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px'
                  }}>
                    {machine.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    marginBottom: '18px',
                    minHeight: '40px'
                  }}>
                    {machine.tagline}
                  </p>

                  {/* High Precision Technical Spec Matrix */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.35)',
                    borderRadius: '10px',
                    padding: '12px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>
                        {machine.specs.spindleSpeed ? 'Spindle Speed' : 'Hardness / Grade'}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>
                        {machine.specs.spindleSpeed || machine.specs.hardness}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>
                        {machine.specs.travelXYZ ? 'Travel (X/Y/Z)' : machine.specs.maxTurningDia ? 'Max Turning Dia' : 'Bed Width'}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>
                        {machine.specs.travelXYZ || machine.specs.maxTurningDia || machine.specs.bedWidth}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>
                        Repeatability
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981', marginTop: '2px' }}>
                        {machine.specs.positioningAccuracy || '< 0.003 mm'}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>
                        Power Rating
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', marginTop: '2px' }}>
                        {machine.specs.spindleMotor || machine.specs.mainMotor || 'Industrial'}
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button
                        onClick={() => onSelectMachine(machine)}
                        id={`view-specs-${machine.id}`}
                        className="btn-secondary"
                        style={{ padding: '8px 12px', fontSize: '0.82rem' }}
                      >
                        <Eye size={15} />
                        <span>Inspect Specs</span>
                      </button>

                      <button
                        onClick={() => onToggleCart(machine)}
                        id={`cart-toggle-${machine.id}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                          background: isCarted ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.15)',
                          color: isCarted ? '#34d399' : '#fbbf24',
                          border: isCarted ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid rgba(245, 158, 11, 0.4)'
                        }}
                      >
                        {isCarted ? (
                          <>
                            <Check size={15} />
                            <span>In RFQ Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={15} />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </button>
                    </div>

                    <button
                      onClick={() => onDownloadBrochure(machine.name)}
                      id={`download-pdf-${machine.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontSize: '0.78rem',
                        color: '#64748b',
                        padding: '6px',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#cbd5e1'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                    >
                      <Download size={13} /> Download Technical CAD/PDF Datasheet
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty Filter State */
        <div style={{
          textAlign: 'center',
          padding: '60px 24px',
          background: 'rgba(15, 23, 42, 0.6)',
          borderRadius: '16px',
          border: '1px dashed rgba(255, 255, 255, 0.15)'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: '#f59e0b'
          }}>
            <SlidersHorizontal size={24} />
          </div>
          <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '8px' }}>
            No machinery matches your criteria
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '20px' }}>
            Try clearing your search query or switching industry categories.
          </p>
          <button onClick={resetFilters} className="btn-secondary" id="reset-filters-btn">
            <RotateCcw size={16} /> Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
}
