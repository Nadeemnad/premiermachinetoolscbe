import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Eye, 
  ShoppingCart, 
  Check, 
  MessageCircle, 
  Layers, 
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
    { id: 'all', label: t.catalog.allCategories },
    { id: 'wire-ropes', label: t.catalog.wireRopes },
    { id: 'chain-pulleys', label: t.catalog.chainPulleys },
    { id: 'slings', label: t.catalog.slings },
    { id: 'blades', label: t.catalog.blades },
    { id: 'hardware', label: t.catalog.hardware }
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

  // Product Vector Icon Resolver
  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'Anchor': return <Anchor size={36} color="var(--pmt-red)" />;
      case 'ShieldAlert': return <ShieldAlert size={36} color="var(--pmt-navy)" />;
      case 'Boxes': return <Boxes size={36} color="var(--pmt-green)" />;
      case 'Truck': return <Truck size={36} color="var(--pmt-red)" />;
      case 'Disc': return <Disc size={36} color="var(--pmt-navy)" />;
      case 'Activity': return <Activity size={36} color="var(--pmt-green)" />;
      case 'Zap': return <Cpu size={36} color="var(--pmt-red)" />;
      default: return <Wrench size={36} color="var(--pmt-navy)" />;
    }
  };

  return (
    <section id="products" style={{
      padding: '70px 20px',
      maxWidth: '1280px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="badge-red" style={{ marginBottom: '10px' }}>
          {t.catalog.badge}
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          color: 'var(--pmt-navy)',
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
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '16px',
        marginBottom: '32px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Category Filter Buttons */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '10px',
          marginBottom: '14px',
          borderBottom: '1px solid #f1f5f9'
        }}>
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
                  background: isActive ? 'var(--pmt-red)' : '#f8fafc',
                  color: isActive ? '#ffffff' : 'var(--pmt-navy)',
                  border: isActive ? '1px solid var(--pmt-red)' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 2px 8px rgba(198, 40, 40, 0.3)' : 'none'
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
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '6px 12px',
            flexGrow: 1,
            maxWidth: '380px'
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
                color: 'var(--pmt-navy)'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                ✕
              </button>
            )}
          </div>

          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
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

            // Localized Name
            const displayName = currentLang === 'ta' && prod.nameTa 
              ? prod.nameTa 
              : currentLang === 'hi' && prod.nameHi 
              ? prod.nameHi 
              : prod.name;

            const displayTagline = currentLang === 'ta' && prod.taglineTa
              ? prod.taglineTa
              : prod.tagline;

            const whatsappMessage = encodeURIComponent(
              `Hello Premier Machine Tools, I am interested in ordering/inquiring about: ${prod.name} (${prod.brand}). Please provide price and stock availability.`
            );

            return (
              <div 
                key={prod.id} 
                className="pmt-product-card" 
                id={`card-${prod.id}`}
              >
                {/* Header Icon + Brand Strip */}
                <div style={{
                  padding: '20px 20px 14px',
                  background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
                  borderBottom: '1px solid #f1f5f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {getProductIcon(prod.icon)}
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span className="badge-red" style={{ marginBottom: '4px' }}>
                      {prod.brand}
                    </span>
                    <div style={{ fontSize: '0.72rem', color: '#106f3c', fontWeight: 800 }}>
                      ✓ Genuine Stock
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '18px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '1.18rem',
                    color: 'var(--pmt-navy)',
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
                    background: '#f8fafc',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    marginBottom: '16px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.8rem'
                  }}>
                    {Object.entries(prod.specs).slice(0, 3).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748b', textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1')}:
                        </span>
                        <strong style={{ color: 'var(--pmt-navy)' }}>{val}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="btn-outline-navy"
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
                          background: isCarted ? 'var(--pmt-green-soft)' : 'var(--pmt-red-soft)',
                          color: isCarted ? 'var(--pmt-green-dark)' : 'var(--pmt-red)',
                          border: isCarted ? '1px solid var(--pmt-green)' : '1px solid rgba(198, 40, 40, 0.4)'
                        }}
                      >
                        {isCarted ? (
                          <>
                            <Check size={15} />
                            <span>{t.catalog.addedToQuote}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={15} />
                            <span>{t.catalog.requestQuote}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/919487510127?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        background: '#25d366',
                        color: '#ffffff',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        transition: 'opacity 0.2s'
                      }}
                    >
                      <MessageCircle size={15} />
                      <span>{t.catalog.inquireWhatsApp}</span>
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
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px dashed #cbd5e1'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '14px' }}>
            No products found matching your search.
          </p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="btn-outline-navy"
            style={{ fontSize: '0.85rem' }}
          >
            <RotateCcw size={15} /> Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
