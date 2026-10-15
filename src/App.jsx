import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import BrandsSection from './components/BrandsSection';
import FaqAndDeliverySection from './components/FaqAndDeliverySection';
import BankDetailsSection from './components/BankDetailsSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import RfqModal from './components/RfqModal';
import Toast from './components/Toast';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'ta' | 'hi'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqPresetProducts, setRfqPresetProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

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
      />

      {/* Main Page Body */}
      <main style={{ flexGrow: 1 }}>
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
      </main>

      {/* Footer with H.O., B.O., GSTIN, and Products */}
      <Footer
        currentLang={currentLang}
        onOpenRfq={() => handleOpenRfq()}
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
