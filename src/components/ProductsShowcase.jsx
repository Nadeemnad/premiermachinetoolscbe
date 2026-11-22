import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { PMT_PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

export default function ProductsShowcase({ currentLang, onSelectProduct }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const scrollRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const autoScrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  // All products from the catalog — duplicated for seamless infinite loop
  const allProducts = PMT_PRODUCTS;
  const loopedProducts = [...allProducts, ...allProducts]; // duplicate for infinite scroll

  // Temporarily pause auto-scroll when user manually navigates, then resume
  const pauseTemporarily = useCallback((delay = 2500) => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, delay);
  }, []);

  // Handle manual left / right scroll
  const handleScroll = (direction) => {
    pauseTemporarily(3000);
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 340; // ~2 cards per click
    const halfWidth = container.scrollWidth / 2;

    if (direction === 'left') {
      if (container.scrollLeft - scrollAmount < 0 && halfWidth > 0) {
        container.scrollLeft += halfWidth;
      }
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      if (container.scrollLeft + scrollAmount >= halfWidth && halfWidth > 0) {
        container.scrollLeft -= halfWidth;
      }
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-scroll: continuous ~60fps smooth loop
  const startAutoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPausedRef.current && scrollRef.current) {
        const container = scrollRef.current;
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
        }
        container.scrollLeft += 1;
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [startAutoScroll]);

  return (
    <section
      id="our-products"
      style={{
        padding: '60px 0 50px',
        background: 'linear-gradient(180deg, #f0f6ff 0%, #e8f4f8 100%)',
        borderTop: '1px solid #dbeafe',
        borderBottom: '1px solid #dbeafe',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px', padding: '0 16px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(3, 78, 161, 0.08)',
            border: '1px solid rgba(3, 78, 161, 0.2)',
            borderRadius: '999px',
            padding: '5px 14px',
            fontSize: '0.78rem',
            fontWeight: 800,
            color: 'var(--pmt-blue)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '14px'
          }}
        >
          <Package size={13} />
          Our Products
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: 'var(--pmt-blue)',
            marginBottom: '10px',
            lineHeight: 1.2
          }}
        >
          Explore Our{' '}
          <span style={{ color: 'var(--pmt-red)' }}>Complete Range</span>
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: '640px',
            margin: '0 auto',
            fontSize: '0.97rem',
            lineHeight: 1.6
          }}
        >
          Click on any product image to view full specifications, applications, and request a quote.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div style={{ position: 'relative', maxWidth: '1300px', margin: '0 auto', padding: '0 8px' }}>
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll('left')}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          aria-label="Scroll left to previous products"
          className="showcase-nav-btn showcase-nav-prev"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 30,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1.5px solid #bfdbfe',
            color: 'var(--pmt-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(3, 78, 161, 0.16)',
            transition: 'all 0.22s ease'
          }}
        >
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          aria-label="Scroll right to next products"
          className="showcase-nav-btn showcase-nav-next"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 30,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1.5px solid #bfdbfe',
            color: 'var(--pmt-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(3, 78, 161, 0.16)',
            transition: 'all 0.22s ease'
          }}
        >
          <ChevronRight size={22} strokeWidth={2.4} />
        </button>

        {/* Scroll Track */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '12px 56px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab'
          }}
          className="products-showcase-scroll"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          onTouchStart={() => { isPausedRef.current = true; }}
          onTouchEnd={() => { pauseTemporarily(2500); }}
        >
          {loopedProducts.map((prod, idx) => {
            const isHovered = hoveredId === `${prod.id}-${idx}`;
            const displayName =
              currentLang === 'ta' && prod.nameTa
                ? prod.nameTa
                : currentLang === 'hi' && prod.nameHi
                ? prod.nameHi
                : prod.name;

            return (
              <div
                key={`${prod.id}-${idx}`}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${displayName}`}
                onClick={() => onSelectProduct(prod)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectProduct(prod); }}
                onMouseEnter={() => setHoveredId(`${prod.id}-${idx}`)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  flexShrink: 0,
                  width: '155px',
                  borderRadius: '16px',
                  background: 'var(--pmt-white)',
                  border: isHovered
                    ? '2px solid var(--pmt-blue)'
                    : '1.5px solid #e2e8f0',
                  boxShadow: isHovered
                    ? '0 8px 28px rgba(3,78,161,0.18)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.22s ease',
                  transform: isHovered ? 'translateY(-6px) scale(1.03)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '14px 10px 12px'
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    width: '110px',
                    height: '110px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    borderRadius: '12px',
                    background: isHovered ? '#f0f6ff' : '#f8fafc',
                    transition: 'background 0.2s',
                    overflow: 'hidden'
                  }}
                >
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={displayName}
                      loading="lazy"
                      style={{
                        width: '90px',
                        height: '90px',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback if no image */}
                  <div
                    style={{
                      display: prod.image ? 'none' : 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: 'rgba(3,78,161,0.07)',
                      color: 'var(--pmt-blue)'
                    }}
                  >
                    <Package size={28} />
                  </div>
                </div>

                {/* Product Name */}
                <p
                  style={{
                    fontSize: '0.73rem',
                    fontWeight: 700,
                    color: isHovered ? 'var(--pmt-blue)' : 'var(--pmt-black)',
                    textAlign: 'center',
                    lineHeight: 1.3,
                    transition: 'color 0.2s',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {displayName}
                </p>

                {/* Hover CTA Pill */}
                {isHovered && (
                  <div
                    style={{
                      marginTop: '8px',
                      background: 'var(--pmt-blue)',
                      color: 'var(--pmt-white)',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      letterSpacing: '0.03em',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    View Details →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fade edges */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '56px',
            background: 'linear-gradient(to right, #f0f6ff 10%, transparent)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '56px',
            background: 'linear-gradient(to left, #e8f4f8 10%, transparent)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        />
      </div>

      {/* Product count chip */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--pmt-white)',
            border: '1.5px solid #dbeafe',
            borderRadius: '999px',
            padding: '6px 20px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(3,78,161,0.06)'
          }}
        >
          <span>
            <strong style={{ color: 'var(--pmt-red)' }}>{allProducts.length}+</strong> Products
          </span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span>Auto-scrolling catalog</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ color: 'var(--pmt-blue)', fontWeight: 700 }}>Use arrows to browse</span>
        </span>
      </div>

      <style>{`
        .products-showcase-scroll::-webkit-scrollbar {
          display: none;
        }
        .showcase-nav-btn:hover {
          background-color: var(--pmt-blue) !important;
          color: #ffffff !important;
          border-color: var(--pmt-blue) !important;
          transform: translateY(-50%) scale(1.1) !important;
          box-shadow: 0 6px 18px rgba(3, 78, 161, 0.3) !important;
        }
        .showcase-nav-btn:active {
          transform: translateY(-50%) scale(0.94) !important;
        }
        @media (max-width: 640px) {
          .showcase-nav-btn {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
