import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Eye, 
  ShoppingCart, 
  Check, 
  MessageCircle, 
  Anchor, 
  ShieldAlert, 
  Truck, 
  Cpu, 
  Disc, 
  Boxes,
  Activity,
  Wrench,
  RotateCcw
} from 'lucide-react';
import { PMT_PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

export default function ProductCatalog({ 
  currentLang, 
  initialSearch = '', 
  cartItems = [], 
  onToggleCart, 
  onSelectProduct 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const categories = [
    { id: 'all', label: t.catalog.all },
    { id: 'steel-wire-rope', label: t.nav.wireRope },
    { id: 'chain-pulley-block', label: t.nav.chainPulley },
    { id: 'electric-hoist', label: t.nav.electricHoist },
    { id: 'lifting-slings-shackles', label: t.nav.slings },
    { id: 'ratchet-lashing-belt', label: t.nav.lashingBelt },
    { id: 'material-handling', label: t.nav.materialHandling || 'Material Handling' },
    { id: 'industrial-chains', label: t.nav.industrialChains || 'Industrial Chains' },
    { id: 'pp-rope-danline', label: t.nav.ropes },
    { id: 'saw-blades', label: t.nav.blades }
  ];

  const filteredProducts = useMemo(() => {
    return PMT_PRODUCTS.filter((prod) => {
      if (activeCategory !== 'all' && prod.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q) ||
          (prod.nameTa && prod.nameTa.toLowerCase().includes(q)) ||
          (prod.nameHi && prod.nameHi.toLowerCase().includes(q));
        const matchesBrand = prod.brand.toLowerCase().includes(q);
        const matchesTagline = prod.tagline.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesTagline) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // Product Vector Icon Resolver in 5 Colors
  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'Anchor': return <Anchor size={36} color="var(--pmt-red)" />;
      case 'ShieldAlert': return <ShieldAlert size={36} color="var(--pmt-blue)" />;
      case 'Boxes': return <Boxes size={36} color="var(--pmt-teal)" />;
      case 'Truck': return <Truck size={36} color="var(--pmt-red)" />;
      case 'Disc': return <Disc size={36} color="var(--pmt-blue)" />;
      case 'Activity': return <Activity size={36} color="var(--pmt-teal)" />;
      case 'Zap': return <Cpu size={36} color="var(--pmt-red)" />;
      default: return <Wrench size={36} color="var(--pmt-blue)" />;
    }
  };

  return (
    <section id="products" style={{
      padding: '70px 16px',
      maxWidth: '1280px',
      margin: '0 auto',
      background: 'var(--pmt-white)'
    }}>
      {/* Header in Blue #034ea1 & Red #c61c1a */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="badge-red" style={{ marginBottom: '10px' }}>
          {t.catalog.badge}
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          color: 'var(--pmt-blue)',
          marginBottom: '12px'
        }}>
          {t.catalog.heading}
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '720px',
          margin: '0 auto',
          fontSize: '1rem',
          lineHeight: 1.6
        }}>
          {t.catalog.desc}
        </p>
      </div>

      {/* Filter and Search Container */}
      <div style={{
        background: 'var(--pmt-white)',
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '16px',
        marginBottom: '32px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Category Filter Buttons */}
        <div className="category-scroll-container">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--pmt-red)' : 'var(--bg-subtle)',
                  color: isActive ? 'var(--pmt-white)' : 'var(--pmt-blue)',
                  border: isActive ? '1px solid var(--pmt-red)' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 2px 8px rgba(198, 28, 26, 0.3)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Bar + Result Counter */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-subtle)',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '6px 12px',
            flexGrow: 1,
            maxWidth: '400px'
          }}>
            <Search size={16} color="var(--pmt-red)" style={{ marginRight: '8px' }} />
            <input
              type="text"
              placeholder={t.catalog.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '0.88rem',
                color: 'var(--pmt-black)'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>
                ✕
              </button>
            )}
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>
            Showing <strong style={{ color: 'var(--pmt-red)' }}>{filteredProducts.length}</strong> items • All India Delivery
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredProducts.map((prod) => {
            const isCarted = cartItems.some((item) => item.id === prod.id);

            // Clean Single-Language Display Name & Tagline
            const displayName = currentLang === 'ta' && prod.nameTa 
              ? prod.nameTa 
              : currentLang === 'hi' && prod.nameHi 
              ? prod.nameHi 
              : prod.name;

            const displayTagline = currentLang === 'ta' && prod.taglineTa
              ? prod.taglineTa
              : currentLang === 'hi' && prod.taglineHi
              ? prod.taglineHi
              : prod.tagline;

            const whatsappMessage = encodeURIComponent(
              `Hello Premier Machine Tools, I am interested in ordering/inquiring about: ${prod.name} (${prod.brand}). Please provide price quote.`
            );

            return (
              <div 
                key={prod.id} 
                className="card-border-box" 
                id={`card-${prod.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {/* Product Image Showcase Container */}
                <div 
                  style={{
                    position: 'relative',
                    height: '210px',
                    background: '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }} 
                  onClick={() => onSelectProduct(prod)}
                >
                  {prod.image ? (
                    <img 
                      src={prod.image} 
                      alt={displayName}
                      loading="lazy"
                      className="product-card-image"
                      style={{
                        maxWidth: '92%',
                        maxHeight: '92%',
                        objectFit: 'contain',
                        padding: '10px',
                        transition: 'transform 0.3s ease'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* Fallback Icon Box if image missing or error */}
                  <div style={{
                    display: prod.image ? 'none' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: 'var(--pmt-white)',
                      border: '1.5px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      {getProductIcon(prod.icon)}
                    </div>
                  </div>

                  {/* Top Badges Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    right: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pointerEvents: 'none'
                  }}>
                    <span style={{
                      background: 'rgba(3, 78, 161, 0.92)',
                      color: 'var(--pmt-white)',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}>
                      {prod.badge || 'Certified'}
                    </span>

                    <span style={{
                      background: 'rgba(198, 28, 26, 0.92)',
                      color: 'var(--pmt-white)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                    }}>
                      {prod.brand}
                    </span>
                  </div>

                  {/* Price Tag Badge on Bottom Right */}
                  {prod.price && (
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '10px',
                      background: 'rgba(19, 17, 12, 0.88)',
                      color: 'var(--pmt-white)',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      padding: '3px 9px',
                      borderRadius: '6px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {prod.price}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '18px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '1.18rem',
                    color: 'var(--pmt-blue)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}>
                    {displayName}
                  </h3>

                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '16px',
                    flexGrow: 1
                  }}>
                    {displayTagline}
                  </p>

                  {/* Key Specs Preview */}
                  <div style={{
                    background: 'var(--bg-subtle)',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    marginBottom: '16px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.8rem'
                  }}>
                    {Object.entries(prod.specs).slice(0, 3).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: 'var(--text-light)', textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1')}:
                        </span>
                        <strong style={{ color: 'var(--pmt-black)' }}>{val}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Actions Row in Strict Colors */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="btn-outline-blue"
                        style={{ padding: '8px 10px', fontSize: '0.82rem' }}
                      >
                        <Eye size={15} />
                        <span>{t.catalog.viewSpecs}</span>
                      </button>

                      <button
                        onClick={() => onToggleCart(prod)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '8px 10px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          transition: 'all 0.2s',
                          background: isCarted ? 'var(--pmt-teal-soft)' : 'var(--pmt-red-soft)',
                          color: isCarted ? 'var(--pmt-teal-dark)' : 'var(--pmt-red)',
                          border: isCarted ? '1px solid var(--pmt-teal)' : '1px solid rgba(198, 28, 26, 0.4)'
                        }}
                      >
                        {isCarted ? (
                          <>
                            <Check size={15} />
                            <span>{t.catalog.inList}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={15} />
                            <span>{t.catalog.enquire}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/919487510127?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pmt-teal"
                      style={{
                        padding: '8px 12px',
                        fontSize: '0.82rem'
                      }}
                    >
                      <MessageCircle size={15} />
                      <span>{t.catalog.whatsappInquire}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          background: 'var(--pmt-white)',
          borderRadius: '12px',
          border: '1px dashed #CBD5E1'
        }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '14px' }}>
            No products found matching your search.
          </p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="btn-outline-blue"
            style={{ fontSize: '0.85rem' }}
          >
            <RotateCcw size={15} /> Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
