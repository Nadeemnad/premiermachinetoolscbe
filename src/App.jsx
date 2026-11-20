import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import CategoryPage from './components/CategoryPage';
import ProductModal from './components/ProductModal';
import BrandsSection from './components/BrandsSection';
import FaqAndDeliverySection from './components/FaqAndDeliverySection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import RfqModal from './components/RfqModal';
import Toast from './components/Toast';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'ta' | 'hi'

  // Route parser for clean URLs: /contact-us/, /rigging/, /lifting/, /lashing/, /bandsaw-blades/
  const parseCurrentRoute = () => {
    if (typeof window === 'undefined') return 'home';
    const cleanPath = (window.location.pathname || '').toLowerCase().replace(/\/+$/, '');
    const cleanHash = (window.location.hash || '').toLowerCase();
    const searchParams = new URLSearchParams(window.location.search);
    const catQuery = (searchParams.get('category') || searchParams.get('page') || '').toLowerCase();

    if (cleanPath === '/contact-us' || cleanPath === '/contact' || cleanHash === '#contact' || cleanHash === '#contact-us' || catQuery === 'contact') {
      return 'contact';
    }
    if (cleanPath === '/rigging' || cleanHash === '#rigging' || catQuery === 'rigging') {
      return 'rigging';
    }
    if (cleanPath === '/lifting' || cleanHash === '#lifting' || catQuery === 'lifting') {
      return 'lifting';
    }
    if (cleanPath === '/lashing' || cleanHash === '#lashing' || catQuery === 'lashing') {
      return 'lashing';
    }
    if (cleanPath === '/bandsaw-blades' || cleanPath === '/bandsaw' || cleanHash === '#bandsaw-blades' || cleanHash === '#bandsaw' || catQuery === 'bandsaw-blades' || catQuery === 'bandsaw') {
      return 'bandsaw-blades';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(parseCurrentRoute);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqPresetProducts, setRfqPresetProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Sync with browser back/forward and clean URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(parseCurrentRoute());
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Update Page Title, Meta Description, Canonical Link, and OpenGraph/Twitter for every Route
  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const metaDesc = document.querySelector("meta[name='description']");
    const ogUrl = document.querySelector("meta[property='og:url']");
    const ogTitle = document.querySelector("meta[property='og:title']");
    const ogDesc = document.querySelector("meta[property='og:description']");
    const twitterUrl = document.querySelector("meta[property='twitter:url']");
    const twitterTitle = document.querySelector("meta[property='twitter:title']");
    const twitterDesc = document.querySelector("meta[property='twitter:description']");

    const PAGE_METAS = {
      home: {
        title: "Wire Rope & Lifting Tools, Coimbatore | Premier Machine Tools",
        titleTa: "கம்பி கயிறு & பளு தூக்கும் உபகரணங்கள், கோயம்புத்தூர் | Premier Machine Tools",
        titleHi: "वायर रोप और लिफ्टिंग उपकरण, कोयंबटूर | Premier Machine Tools",
        url: "https://www.pmtpremiermachinetools.com/",
        description: "Premier Machine Tools Coimbatore: Authorised distributors of Usha Martin steel wire ropes, Triple Super Gear chain pulley blocks, INDEF hoists, web slings, and bandsaw blades. Ready stock & GST invoice."
      },
      contact: {
        title: "Contact Us | Premier Machine Tools, Coimbatore",
        titleTa: "தொடர்பு கொள்ள | Premier Machine Tools, Coimbatore",
        titleHi: "संपर्क करें | Premier Machine Tools, Coimbatore",
        url: "https://www.pmtpremiermachinetools.com/contact-us/",
        description: "Contact Premier Machine Tools Coimbatore for certified wire ropes, hoists, slings, and saw blades. Head Office: Dr. Nanjappa Road. Call 94875 10127 or 94432 30127."
      },
      rigging: {
        title: "Rigging Equipment & Slings Supplier, Coimbatore | Premier Machine Tools",
        titleTa: "ரிக்சிங் உபகரணங்கள் & ஸ்லிங்குகள் கோயம்புத்தூர் | Premier Machine Tools",
        titleHi: "रिगिंग उपकरण और स्लिंग्स आपूर्तिकर्ता कोयंबटूर | Premier Machine Tools",
        url: "https://www.pmtpremiermachinetools.com/rigging/",
        description: "Authorised supplier of certified steel wire rope slings, Ferreterro polyester webbing & endless round slings, Grade 80 & 100 chain slings, drop-forged bow shackles, and plate lifting clamps in Coimbatore."
      },
      lifting: {
        title: "Lifting Equipment, Hoists & Chain Pulley Blocks, Coimbatore | Premier Machine Tools",
        titleTa: "பளு தூக்கும் இயந்திரங்கள் & செயின் புல்லி பிளாக்குகள் கோயம்புத்தூர் | Premier Machine Tools",
        titleHi: "औद्योगिक लिफ्टिंग उपकरण और चेन पुली ब्लॉक कोयंबटूर | Premier Machine Tools",
        url: "https://www.pmtpremiermachinetools.com/lifting/",
        description: "Triple Super Gear & INDEF manual chain pulley blocks, motorized electric wire rope hoists, ratchet lever pullers, hydraulic pallet trucks, manual stackers, and floor cranes in Coimbatore."
      },
      lashing: {
        title: "Cargo Lashing Belts, Ratchet Straps & Load Binders, Coimbatore | Premier Machine Tools",
        titleTa: "கார்கோ லேஷிங் பெல்ட்டுகள் & ராட்செட் ஸ்ட்ராப்ஸ் கோயம்புத்தூர் | Premier Machine Tools",
        titleHi: "कार्गो लैशिंग बेल्ट्स, रैचेट और लोड बाइंडर्स कोयंबटूर | Premier Machine Tools",
        url: "https://www.pmtpremiermachinetools.com/lashing/",
        description: "Heavy-duty 100% polyester ratchet tie-down lashing belts (1T to 10T), drop-forged ratchet load binders, transport binder chains, composite export strapping, and dunnage air bags in Coimbatore."
      },
      'bandsaw-blades': {
        title: "Woodworking Bandsaw Blades & TCT Circular Saws, Coimbatore | Premier Machine Tools",
        titleTa: "மர அறுக்கும் பேண்ட்சா பிளேடுகள் & TCT ரம்பங்கள் கோயம்புத்தூர் | Premier Machine Tools",
        titleHi: "वुडवर्किंग बैंडसॉ ब्लेड और टीसीटी कटर कोयंबटूर | Premier Machine Tools",
        url: "https://www.pmtpremiermachinetools.com/bandsaw-blades/",
        description: "Premier Machine Tools is Coimbatore’s leading supplier of high-carbon alloy woodworking bandsaw blade coils (ANIL, GANESH SUPER, ESI), TCT circular saw blades, and Garware PP Danline ropes."
      }
    };

    const currentMeta = PAGE_METAS[currentPage] || PAGE_METAS.home;
    const pageTitle = currentLang === 'ta' && currentMeta.titleTa 
      ? currentMeta.titleTa 
      : currentLang === 'hi' && currentMeta.titleHi 
      ? currentMeta.titleHi 
      : currentMeta.title;

    document.title = pageTitle;
    if (canonicalLink) canonicalLink.setAttribute('href', currentMeta.url);
    if (metaDesc) metaDesc.setAttribute('content', currentMeta.description);
    if (ogUrl) ogUrl.setAttribute('content', currentMeta.url);
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    if (ogDesc) ogDesc.setAttribute('content', currentMeta.description);
    if (twitterUrl) twitterUrl.setAttribute('content', currentMeta.url);
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);
    if (twitterDesc) twitterDesc.setAttribute('content', currentMeta.description);

    // Update dynamic JSON-LD breadcrumb & collection page structured data
    let schemaScript = document.getElementById('pmt-dynamic-jsonld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'pmt-dynamic-jsonld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    if (['rigging', 'lifting', 'lashing', 'bandsaw-blades'].includes(currentPage)) {
      const categoryNames = {
        rigging: "Rigging Equipments & Slings",
        lifting: "Industrial Lifting Equipments & Hoists",
        lashing: "Cargo Lashing & Load Restraint Systems",
        'bandsaw-blades': "Woodworking Bandsaw Blades & Cutting Tools"
      };
      const catSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.pmtpremiermachinetools.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": categoryNames[currentPage],
                "item": currentMeta.url
              }
            ]
          },
          {
            "@type": "CollectionPage",
            "@id": currentMeta.url,
            "url": currentMeta.url,
            "name": pageTitle,
            "description": currentMeta.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Premier Machine Tools",
              "telephone": "+91-9487510127",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "129/4 Dr. Nanjappa Road",
                "addressLocality": "Coimbatore",
                "postalCode": "641018",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            }
          }
        ]
      };
      schemaScript.textContent = JSON.stringify(catSchema);
    } else if (currentPage === 'contact') {
      const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": pageTitle,
        "url": currentMeta.url,
        "description": currentMeta.description,
        "mainEntity": {
          "@type": "HardwareStore",
          "name": "PMT Premier Machine Tools",
          "telephone": "+91-9487510127",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "129/4 (Old No. 184) Dr. Nanjappa Road",
            "addressLocality": "Coimbatore",
            "postalCode": "641018",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 11.0027549,
            "longitude": 76.9667533
          },
          "hasMap": "https://www.google.com/maps/place/129%2F4,+Dr+Nanjappa+Rd,+Grey+Town,+ATT+Colony,+Gopalapuram,+Coimbatore,+Tamil+Nadu+641018/@11.0027602,76.9641784,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859a7d618d02d:0x18b3aa0b6b112823!8m2!3d11.0027549!4d76.9667533!16s%2Fg%2F11y44mtkgg"
        }
      };
      schemaScript.textContent = JSON.stringify(contactSchema);
    } else {
      schemaScript.textContent = '';
    }
  }, [currentPage, currentLang]);

  // Handle initial hash scrolling on mount or route change
  useEffect(() => {
    const targetId = window.location.hash
      ? window.location.hash.replace('#', '')
      : (['rigging', 'lifting', 'lashing', 'bandsaw-blades'].includes(currentPage) ? 'category-products' : null);

    if (targetId) {
      const doScroll = (retries = 0) => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (retries < 12) {
          setTimeout(() => doScroll(retries + 1), 60);
        }
      };
      setTimeout(() => doScroll(), 120);
    }
  }, [currentPage]);

  const navigateToPage = (page, targetId = null) => {
    // If we're already on the home page and user clicks a category subnav link,
    // just scroll smoothly to the products section without navigating away
    const isHomeNow = currentPage === 'home' || currentPage === null;
    const isCategoryLink = ['rigging', 'lifting', 'lashing', 'bandsaw-blades'].includes(page);
    if (isHomeNow && isCategoryLink) {
      const scrollTargetId = targetId || 'category-products';
      const el = document.getElementById(scrollTargetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Retry in case element isn't rendered yet
        setTimeout(() => {
          const el2 = document.getElementById(scrollTargetId);
          if (el2) el2.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
      return;
    }

    // When clicking any category page, default to scrolling directly to the products section
    const effectiveTargetId = targetId || (isCategoryLink ? 'category-products' : null);
    const isSamePage = currentPage === page;

    setCurrentPage(page);
    let targetUrl = '/';

    if (page === 'contact') {
      targetUrl = effectiveTargetId ? `/contact-us/#${effectiveTargetId}` : '/contact-us/';
    } else if (page === 'rigging') {
      targetUrl = effectiveTargetId ? `/rigging/#${effectiveTargetId}` : '/rigging/';
    } else if (page === 'lifting') {
      targetUrl = effectiveTargetId ? `/lifting/#${effectiveTargetId}` : '/lifting/';
    } else if (page === 'lashing') {
      targetUrl = effectiveTargetId ? `/lashing/#${effectiveTargetId}` : '/lashing/';
    } else if (page === 'bandsaw-blades') {
      targetUrl = effectiveTargetId ? `/bandsaw-blades/#${effectiveTargetId}` : '/bandsaw-blades/';
    } else {
      targetUrl = effectiveTargetId ? `/#${effectiveTargetId}` : '/';
    }

    if (window.location.pathname !== targetUrl.split('#')[0] || (effectiveTargetId && window.location.hash !== `#${effectiveTargetId}`)) {
      window.history.pushState(null, '', targetUrl);
    }

    if (effectiveTargetId) {
      const doScroll = (retries = 0) => {
        const el = document.getElementById(effectiveTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (retries < 10) {
          setTimeout(() => doScroll(retries + 1), 60);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      if (isSamePage) {
        doScroll();
      } else {
        setTimeout(() => doScroll(), 80);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
        onNavigateContact={(targetId) => navigateToPage('contact', targetId)}
        onNavigateBank={() => navigateToPage('contact', 'bank-details')}
        onNavigateCategory={(catKey, targetId) => navigateToPage(catKey, targetId)}
      />

      {/* Main Page Body */}
      <main style={{ flexGrow: 1 }}>
        {currentPage === 'contact' ? (
          <ContactPage
            currentLang={currentLang}
            onShowToast={showToast}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : ['rigging', 'lifting', 'lashing', 'bandsaw-blades'].includes(currentPage) ? (
          <CategoryPage
            categoryKey={currentPage}
            currentLang={currentLang}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onToggleCart={handleToggleCart}
            cartItems={cartItems}
            onOpenRfq={(p) => handleOpenRfq(p)}
            onNavigateHome={() => navigateToPage('home')}
            onNavigateContact={(targetId) => navigateToPage('contact', targetId)}
            onNavigateCategory={(catKey, targetId) => navigateToPage(catKey, targetId)}
          />
        ) : (
          <>
            {/* Hero Section matching Visiting Card & SEO H1 */}
            <Hero
              currentLang={currentLang}
              onSearchSubmit={handleHeroSearch}
              onOpenRfq={() => handleOpenRfq()}
            />

            {/* Product Catalog covering the 4 Core Pillar Categories */}
            <ProductCatalog
              currentLang={currentLang}
              initialSearch={heroSearchQuery}
              cartItems={cartItems}
              onToggleCart={handleToggleCart}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigateCategory={(catKey, targetId) => navigateToPage(catKey, targetId)}
            />

            {/* Brand Specialties: Usha Martin, Garware, ASIL, Good Lift */}
            <BrandsSection currentLang={currentLang} />

            {/* Pan-India Delivery & Buyer FAQ Section */}
            <FaqAndDeliverySection
              currentLang={currentLang}
              onOpenRfq={() => handleOpenRfq()}
            />
          </>
        )}
      </main>

      {/* Footer with H.O., B.O., GSTIN, and Products */}
      <Footer
        currentLang={currentLang}
        onOpenRfq={() => handleOpenRfq()}
        onNavigateContact={() => navigateToPage('contact')}
        onNavigateCategory={(catKey, targetId) => navigateToPage(catKey, targetId)}
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
