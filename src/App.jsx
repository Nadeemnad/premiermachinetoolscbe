import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import BrandsSection from './components/BrandsSection';
import FaqAndDeliverySection from './components/FaqAndDeliverySection';
import BankDetailsSection from './components/BankDetailsSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import RfqModal from './components/RfqModal';
import Toast from './components/Toast';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'ta' | 'hi'

  // Route state: 'home' | 'contact'
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#contact' || path === '/contact' || hash.startsWith('#contact')) {
        return 'contact';
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqPresetProducts, setRfqPresetProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#contact' || path === '/contact' || hash.startsWith('#contact')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateToPage = (page, targetId = null) => {
    setCurrentPage(page);
    if (page === 'contact') {
      if (window.location.hash !== '#contact') {
        window.history.pushState(null, '', '#contact');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (targetId) {
        window.history.pushState(null, '', `#${targetId}`);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 60);
      } else {
        if (window.location.hash && window.location.hash !== '#') {
          window.history.pushState(null, '', '#');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Cart item toggle
  const handleToggleCart = (product) => {
    const exists = cartItems.some((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      showToast(`Removed "${product.name}" from your inquiry list.`);
    } else {
      setCartItems([...cartItems, product]);
      showToast(`Added "${product.name}" to your inquiry list!`);
    }
  };

  const handleOpenRfq = (specificProduct = null) => {
    if (specificProduct) {
      setRfqPresetProducts([specificProduct]);
    } else if (cartItems.length > 0) {
      setRfqPresetProducts(cartItems);
    } else {
      setRfqPresetProducts([]);
    }
    setIsRfqOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    setRfqPresetProducts(rfqPresetProducts.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
    setRfqPresetProducts([]);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleHeroSearch = (query) => {
    setHeroSearchQuery(query);
  };

  // Language Change with GTM dataLayer event
  const handleLanguageChange = (newLang) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'language_change',
        from: currentLang,
        to: newLang
      });
    }
    setCurrentLang(newLang);
  };

  return (
    <div className={`pmt-app ${currentLang === 'ta' ? 'tamil-font' : ''}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar with Multi-Language Switcher and Sub-Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenRfq={() => handleOpenRfq()}
        cartCount={cartItems.length}
        currentPage={currentPage}
        onNavigateHome={() => navigateToPage('home')}
        onNavigateContact={() => navigateToPage('contact')}
      />

      {/* Main Page Body */}
      <main style={{ flexGrow: 1 }}>
        {currentPage === 'contact' ? (
          <ContactPage
            currentLang={currentLang}
            onShowToast={showToast}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : (
          <>
            {/* Hero Section matching Visiting Card & SEO H1 */}
            <Hero
              currentLang={currentLang}
              onSearchSubmit={handleHeroSearch}
              onOpenRfq={() => handleOpenRfq()}
            />

            {/* Product Catalog covering the 8 Keyword Clusters */}
            <ProductCatalog
              currentLang={currentLang}
              initialSearch={heroSearchQuery}
              cartItems={cartItems}
              onToggleCart={handleToggleCart}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />

            {/* Brand Specialties: Usha Martin, Garware, ASIL, Good Lift */}
            <BrandsSection currentLang={currentLang} />

            {/* Pan-India Delivery & Buyer FAQ Section */}
            <FaqAndDeliverySection
              currentLang={currentLang}
              onOpenRfq={() => handleOpenRfq()}
            />

            {/* Official Bank Account Details from Invoice */}
            <BankDetailsSection
              currentLang={currentLang}
              onShowToast={showToast}
            />
          </>
        )}
      </main>

      {/* Footer with H.O., B.O., GSTIN, and Products */}
      <Footer
        currentLang={currentLang}
        onOpenRfq={() => handleOpenRfq()}
        onNavigateContact={() => navigateToPage('contact')}
      />

      {/* Sticky Mobile Bottom Bar (Call, WhatsApp, Get Quote) */}
      <StickyMobileBar
        currentLang={currentLang}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Product Technical Specifications Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          currentLang={currentLang}
          onClose={() => setSelectedProduct(null)}
          onOpenRfqWithProduct={(p) => handleOpenRfq(p)}
          onToggleCart={handleToggleCart}
          isCarted={cartItems.some((item) => item.id === selectedProduct.id)}
        />
      )}

      {/* RFQ & Quote Inquiry Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        currentLang={currentLang}
        selectedProducts={rfqPresetProducts}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Micro-Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
