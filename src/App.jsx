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

  // Clean URL helper for /contact-us/
  const isContactUrl = (pathname, hash) => {
    const cleanPath = (pathname || '').toLowerCase().replace(/\/+$/, '');
    const cleanHash = (hash || '').toLowerCase();
    return cleanPath === '/contact-us' || 
           cleanPath === '/contact' || 
           cleanHash === '#contact' || 
           cleanHash === '#contact-us';
  };

  // Route state: 'home' | 'contact'
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      if (isContactUrl(window.location.pathname, window.location.hash)) {
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

  // Sync with browser back/forward and clean URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      if (isContactUrl(window.location.pathname, window.location.hash)) {
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

  // Update Page Title and Canonical Meta Tags for /contact-us/ vs /
  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const ogUrl = document.querySelector("meta[property='og:url']");
    const twitterUrl = document.querySelector("meta[property='twitter:url']");

    if (currentPage === 'contact') {
      document.title = currentLang === 'ta' 
        ? "தொடர்பு கொள்ள | Premier Machine Tools, Coimbatore" 
        : currentLang === 'hi' 
        ? "संपर्क करें | Premier Machine Tools, Coimbatore"
        : "Contact Us | Premier Machine Tools, Coimbatore";
      const contactUrl = 'https://www.pmtpremiermachinetools.com/contact-us/';
      if (canonicalLink) canonicalLink.setAttribute('href', contactUrl);
      if (ogUrl) ogUrl.setAttribute('content', contactUrl);
      if (twitterUrl) twitterUrl.setAttribute('content', contactUrl);
    } else {
      document.title = "Wire Rope & Lifting Tools, Coimbatore | Premier Machine Tools";
      const homeUrl = 'https://www.pmtpremiermachinetools.com/';
      if (canonicalLink) canonicalLink.setAttribute('href', homeUrl);
      if (ogUrl) ogUrl.setAttribute('content', homeUrl);
      if (twitterUrl) twitterUrl.setAttribute('content', homeUrl);
    }
  }, [currentPage, currentLang]);

  const navigateToPage = (page, targetId = null) => {
    setCurrentPage(page);
    if (page === 'contact') {
      if (window.location.pathname !== '/contact-us/') {
        window.history.pushState(null, '', '/contact-us/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (targetId) {
        window.history.pushState(null, '', `/#${targetId}`);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 80);
      } else {
        if (window.location.pathname !== '/' || window.location.hash) {
          window.history.pushState(null, '', '/');
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
