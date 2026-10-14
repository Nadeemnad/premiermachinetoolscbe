import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import BrandsSection from './components/BrandsSection';
import BankDetailsSection from './components/BankDetailsSection';
import Footer from './components/Footer';
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

  return (
    <div className="pmt-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar with Multi-Language Control, GSTIN, and Visiting Card Contacts */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenRfq={() => handleOpenRfq()}
        cartCount={cartItems.length}
      />

      {/* Main Body */}
      <main style={{ flexGrow: 1 }}>
        {/* Visiting Card Theme Hero Banner */}
        <Hero
          currentLang={currentLang}
          onSearchSubmit={handleHeroSearch}
          onOpenRfq={() => handleOpenRfq()}
        />

        {/* Real Product Catalog: Wire Ropes, Chain Pulleys, Slings, Bandsaw Blades, Rigging Hardware */}
        <ProductCatalog
          currentLang={currentLang}
          initialSearch={heroSearchQuery}
          cartItems={cartItems}
          onToggleCart={handleToggleCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Certified Brand Partners: Usha Martin, Garware, ASIL, Triple Super Gear, Good Lift, ESI */}
        <BrandsSection currentLang={currentLang} />

        {/* Official Bank Billing Details (From Invoice) */}
        <BankDetailsSection
          currentLang={currentLang}
          onShowToast={showToast}
        />
      </main>

      {/* Footer with H.O., B.O., GSTIN, Contact Numbers & Pan-India Dispatch */}
      <Footer
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

      {/* RFQ & WhatsApp Inquiry Drawer */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        currentLang={currentLang}
        selectedProducts={rfqPresetProducts}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
