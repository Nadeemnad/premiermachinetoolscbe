import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  FileText, 
  Search, 
  SlidersHorizontal, 
  ChevronRight, 
  Layers, 
  Box, 
  Wrench, 
  Truck, 
  Award, 
  ExternalLink,
  Info,
  Check
} from 'lucide-react';
import { PMT_PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

export const CATEGORY_CONFIGS = {
  rigging: {
    key: 'rigging',
    slug: 'rigging',
    name: 'Rigging Equipments & Slings',
    nameTa: 'சான்றளிக்கப்பட்ட ரிக்சிங் உபகரணங்கள் & ஸ்லிங்குகள்',
    nameHi: 'प्रमाणित रिगिंग उपकरण और स्लिंग्स',
    badge: 'HEAVY RIGGING & SLINGS SPECIALIST',
    h1: 'Rigging Equipments, Slings & Hardware in Coimbatore',
    h1Ta: 'கோயம்புத்தூரில் உயர்தர ரிக்சிங் உபகரணங்கள் & ஸ்லிங்குகள்',
    h1Hi: 'कोयंबटूर में रिगिंग उपकरण, स्लिंग्स और हार्डवेयर आपूर्तिकर्ता',
    subtitle: 'Authorised suppliers of certified steel wire rope slings, Ferreterro polyester webbing & endless round slings, Grade 80 & 100 chain slings, drop-forged bow shackles, and plate lifting clamps with official GST invoice and test certificates.',
    subtitleTa: 'அங்கீகரிக்கப்பட்ட எஃகு கம்பி ஸ்லிங்குகள், பாலியேஸ்டர் வெப் ஸ்லிங்குகள், G80 அலாய் செயின் ஸ்லிங்குகள் மற்றும் போ ஷாக்கிள்கள்.',
    subtitleHi: 'प्रमाणित वायर रोप स्लिंग्स, पॉलिएस्टर वेबिंग स्लिंग्स, ग्रेड 80 चेन स्लिंग्स और बो शेकल्स के अधिकृत आपूर्तिकर्ता।',
    subCategories: [
      { id: 'all', label: 'All Rigging Products', labelTa: 'அனைத்து ரிக்சிங் பொருட்கள்', labelHi: 'सभी रिगिंग उत्पाद' },
      { id: 'wire-rope-slings', label: 'Wire Rope Slings', labelTa: 'ஸ்டீல் கம்பி ஸ்லிங்குகள்', labelHi: 'वायर रोप स्लिंग्स' },
      { id: 'polyester-slings', label: 'Polyester Web & Round Slings', labelTa: 'பாலியேஸ்டர் ஸ்லிங்குகள்', labelHi: 'पॉलिएस्टर स्लिंग्स' },
      { id: 'chain-slings', label: 'G80 / G100 Chain Slings', labelTa: 'அலாய் செயின் ஸ்லிங்குகள்', labelHi: 'अलॉय चेन स्लिंग्स' },
      { id: 'shackles-hardware', label: 'Shackles & Rigging Hardware', labelTa: 'ஷாக்கிள் & பாகங்கள்', labelHi: 'शेकल्स और हार्डवेयर' },
      { id: 'lifting-clamps', label: 'Plate Clamps & Beams', labelTa: 'தகடு தூக்கும் கிளாம்கள்', labelHi: 'प्लेट क्लैंप और बीम' }
    ],
    faqs: [
      {
        q: "What certifications are provided with PMT wire rope and chain slings?",
        a: "All wire rope slings, polyester webbing slings, and G80 chain slings supplied by PMT are proof-load tested and supplied with manufacturer test certificates conforming to IS 2762, EN 1492-1, and IS 2760 standards along with an official GST tax invoice."
      },
      {
        q: "How do I calculate working load limits when using multi-leg slings at angles?",
        a: "Sling capacity decreases as the included angle between sling legs increases. At a 60° included angle, the load multiplier is 1.73x single-leg capacity; at 90°, it is 1.41x; and at 120°, capacity drops to 1.0x single-leg. Always ensure lifting angles do not exceed 120°."
      },
      {
        q: "Do you supply customized wire rope sling lengths and end fittings?",
        a: "Yes. In our Coimbatore workshops, we fabricate mechanically spliced Flemish eye slings, aluminium ferrule swaged slings, open and closed spelter socketed pendants, and custom master link configurations to your exact engineering drawings."
      },
      {
        q: "What is your delivery timeframe across Tamil Nadu and Pan-India?",
        a: "We maintain ready stocks of standard slings and shackles at our Dr. Nanjappa Road godown in Coimbatore for same-day local collection. For destinations across Tamil Nadu, Kerala, Karnataka, and Pan-India, orders dispatch via leading transport lines within 24 hours."
      }
    ]
  },

  lifting: {
    key: 'lifting',
    slug: 'lifting',
    name: 'Industrial Lifting Equipments & Hoists',
    nameTa: 'தொழிற்சாலை பளு தூக்கும் உபகரணங்கள் & ஹோயிஸ்டுகள்',
    nameHi: 'औद्योगिक लिफ्टिंग उपकरण और होइस्ट्स',
    badge: 'HOISTS, CRANES & MATERIAL HANDLING',
    h1: 'Industrial Lifting Equipment, Hoists & Chain Blocks in Coimbatore',
    h1Ta: 'கோயம்புத்தூரில் நம்பகமான பளு தூக்கும் இயந்திரங்கள் & புல்லி பிளாக்குகள்',
    h1Hi: 'कोयंबटूर में इंडस्ट्रियल लिफ्टिंग उपकरण और चेन पुली ब्लॉक',
    subtitle: 'Suppliers of Triple Super Gear & INDEF manual chain pulley blocks, ratchet lever pullers, motorized electric wire rope & chain hoists, hydraulic pallet trucks, manual stackers, bottle jacks, and floor cranes.',
    subtitleTa: 'செயின் புல்லி பிளாக்குகள், எலக்ட்ரிக் ஹோயிஸ்டுகள், ஹைட்ராலிக் பேலட் டிரக்குகள் மற்றும் ஸ்டேக்கர்கள்.',
    subtitleHi: 'चेन पुली ब्लॉक, इलेक्ट्रिक होइस्ट, हाइड्रोलिक पैलेट ट्रक और स्टैकर्स के विश्वसनीय वितरक।',
    subCategories: [
      { id: 'all', label: 'All Lifting Products', labelTa: 'அனைத்து லிஃப்டிங் பொருட்கள்', labelHi: 'सभी लिफ्टिंग उत्पाद' },
      { id: 'hoisting-appliances', label: 'Manual Chain Blocks & Winches', labelTa: 'செயின் புல்லி & வின்ச்கள்', labelHi: 'चेन ब्लॉक और विंच' },
      { id: 'electrical-hoists', label: 'Electric Hoists & Motorized Winches', labelTa: 'எலக்ட்ரிக் ஹோயிஸ்டுகள்', labelHi: 'इलेक्ट्रिक होइस्ट्स' },
      { id: 'hydraulic-lifting', label: 'Pallet Trucks, Stackers & Jacks', labelTa: 'பேலட் டிரக் & ஸ்டேக்கர்', labelHi: 'पैलेट ट्रक और स्टैकर' },
      { id: 'lifting-chains', label: 'Calibrated G80/G100 Chains', labelTa: 'லிஃப்டிங் செயின்கள்', labelHi: 'लिफ्टिंग चेन्स' }
    ],
    faqs: [
      {
        q: "What capacities are available for manual chain pulley blocks?",
        a: "We supply Triple Super Gear (Make Raja) and INDEF manual chain pulley blocks ranging from 0.5 Ton up to 20 Ton capacity. Standard lift height is 3 meters, with extended calibrated load chain lifts up to 30 meters available upon request."
      },
      {
        q: "Can single-phase (230V) mini electric hoists be used for workshops?",
        a: "Yes. Our mini electric wire rope hoists operate directly on standard domestic 220V/230V single-phase power supply, making them ideal for small fabrication shops, godowns, building contractors, and mezzanine storage without requiring 3-phase industrial power."
      },
      {
        q: "What wheel materials do you recommend for hydraulic hand pallet trucks?",
        a: "For smooth epoxy or tiled factory floors, tandem Polyurethane (PU) wheels offer silent rolling and floor protection. For rough concrete or foundry floors with metal swarf and chips, heavy-duty Nylon or cast iron wheels provide maximum puncture resistance."
      },
      {
        q: "Are INDEF and Triple Super Gear chain hoists tested for overload safety?",
        a: "Yes. Every chain pulley block is 100% factory proof-tested to 150% of its rated working load limit (1.5x WLL) in accordance with Indian Standard IS 3832:2005 before dispatch."
      }
    ]
  },

  lashing: {
    key: 'lashing',
    slug: 'lashing',
    name: 'Cargo Lashing & Load Restraint Systems',
    nameTa: 'சரக்கு லேஷிங் & கட்டும் அமைப்புகள்',
    nameHi: 'कार्गो लैशिंग और लोड संयम प्रणाली',
    badge: 'TRANSPORT SAFETY & CARGO RESTRAINT',
    h1: 'Cargo Lashing Belts, Ratchets & Load Binders in Coimbatore',
    h1Ta: 'கோயம்புத்தூரில் உயர்தர கார்கோ லேஷிங் பெல்ட்டுகள் & லோடு பைண்டர்கள்',
    h1Hi: 'कोयंबटूर में कार्गो लैशिंग बेल्ट्स, रैचेट और लोड बाइंडर्स',
    subtitle: 'Heavy-duty 100% polyester ratchet tie-down lashing belts, drop-forged ratchet load binders, transport binder chains, composite export strapping, dunnage air bags, and cargo containment nets for secure transport.',
    subtitleTa: 'சரக்கு லாரிகள் மற்றும் கன்டெய்னர்களுக்கான ராட்செட் பெல்ட்டுகள், செயின் பைண்டர்கள் மற்றும் டன்னேஜ் பேக்குகள்.',
    subtitleHi: 'ट्रक और एक्सपोर्ट कंटेनर के लिए हैवी-ड्यूटी रैचेट लैशिंग बेल्ट्स और लोड बाइंडर्स।',
    subCategories: [
      { id: 'all', label: 'All Lashing Products', labelTa: 'அனைத்து லேஷிங் பொருட்கள்', labelHi: 'सभी लैशिंग उत्पाद' },
      { id: 'cargo-lashing-belts', label: 'Ratchet Straps & Webbing', labelTa: 'ராட்செட் லேஷிங் பெல்ட்டுகள்', labelHi: 'रैचेट स्ट्रैप्स' },
      { id: 'load-binders', label: 'Chain Load Binders & Chains', labelTa: 'செயின் லோடு பைண்டர்கள்', labelHi: 'चेन लोड बाइंडर्स' },
      { id: 'container-lashing', label: 'Container Dunnage & Nets', labelTa: 'டன்னேஜ் பேக் & வலைகள்', labelHi: 'डनेज बैग्स और नेट्स' }
    ],
    faqs: [
      {
        q: "What width and tonnage ratchet lashing belts are available?",
        a: "We supply heavy-duty ratchet tie-down assemblies in widths of 25mm (1 Ton), 35mm (2 Ton & 3 Ton), 50mm (5 Ton), 75mm (10 Ton), and 100mm with standard lengths of 6m, 9m, and 12m. Custom lengths with double J-hooks or flat hooks are fabricated on demand."
      },
      {
        q: "What is the difference between ratchet load binders and lever load binders?",
        a: "Ratchet load binders use a continuous threaded screw mechanism that tightens chains smoothly without dangerous handle kickback, making them the safest option for lowbed transport of earthmovers and steel coils. Lever binders provide quick single-stroke toggle clamping."
      },
      {
        q: "How do dunnage air bags protect sea export containers from damage?",
        a: "Inflatable polywoven dunnage air bags are inserted into voids between pallets and inflated to 0.2-0.4 bar. They exert continuous lateral pressure that locks cargo securely in place, absorbing train and sea sway vibrations to prevent cargo toppling."
      },
      {
        q: "Can one-way composite strapping replace steel strapping for packaging?",
        a: "Yes. High-tenacity composite strapping provides equivalent system tensile strength to steel strapping without sharp edges that injure operators or damage cargo surfaces. It does not rust, absorbs shocks without snapping, and is re-tensionable."
      }
    ]
  },

  'bandsaw-blades': {
    key: 'bandsaw-blades',
    slug: 'bandsaw-blades',
    name: 'Woodworking Bandsaw Blades & Cutting Tools',
    nameTa: 'மர அறுக்கும் பேண்ட்சா பிளேடுகள் & ரம்பங்கள்',
    nameHi: 'वुडवर्किंग बैंडसॉ ब्लेड और कटर',
    badge: 'VISITING CARD SPECIALTY & TIMBER TOOLS',
    h1: 'Woodworking Bandsaw Blades & TCT Saws in Coimbatore',
    h1Ta: 'கோயம்புத்தூரில் பிரீமியர் மர அறுக்கும் பேண்ட்சா பிளேடுகள்',
    h1Hi: 'कोयंबटूर में वुडवर्किंग बैंडसॉ ब्लेड्स और टीसीटी कटर',
    subtitle: 'Premier Machine Tools is Coimbatore’s renowned supplier of high-carbon alloy woodworking bandsaw blade coils (ANIL, GANESH SUPER, ESI), tungsten carbide tipped (TCT) circular saw blades, marble cutters, and Garware PP ropes.',
    subtitleTa: 'அனில், கணேஷ் சூப்பர், ESI பேண்ட்சா பிளேடுகள், TCT வட்ட வடிவ பிளேடுகள் மற்றும் கார்வேர் கயிறுகள்.',
    subtitleHi: 'अनिल और गणेश सुपर हाई-कार्बन बैंडसॉ ब्लेड, टीसीटी सर्कुलर सॉ ब्लेड्स और गारवारे रस्सियां।',
    subCategories: [
      { id: 'all', label: 'All Blades & Ropes', labelTa: 'அனைத்து பிளேடுகள் & கயிறுகள்', labelHi: 'सभी ब्लेड्स और रस्सियां' },
      { id: 'bandsaw-blades', label: 'Woodworking Bandsaw Blades', labelTa: 'பேண்ட்சா பிளேடுகள்', labelHi: 'बैंडसॉ ब्लेड्स' },
      { id: 'fiber-ropes', label: 'Garware & Manila Ropes', labelTa: 'பிபி & மணிலா கயிறுகள்', labelHi: 'पीपी और मनीला रस्सियां' }
    ],
    faqs: [
      {
        q: "What brands of woodworking bandsaw blades do you stock?",
        a: "As listed on our official visiting card, we specialize in genuine ANIL, GANESH SUPER, ESI, and SAMSAW carbon spring steel bandsaw blade coils in widths from 1/2 inch to 6 inches for timber log saw mills and furniture workshops across Coimbatore and South India."
      },
      {
        q: "Do you supply customized welded loop bandsaw blades?",
        a: "Yes. We supply bandsaw blades either in 50m / 100m continuous coils or precision flash-butt welded into custom loop lengths ready to fit your exact vertical or horizontal saw machine wheels."
      },
      {
        q: "What tooth pitches (TPI) are suitable for hardwood versus softwood?",
        a: "For heavy log resawing of teak and rosewood, a coarser pitch of 2 TPI or 3 TPI provides ample gullet capacity to clear sawdust without heating. For precision curved cuts and furniture components, 4 TPI to 6 TPI delivers clean, chatter-free cuts."
      },
      {
        q: "Are Garware Garfil Danline PP ropes genuine with GST invoice?",
        a: "Yes. We supply authentic Garware Technical Fibres 3-strand polypropylene Danline ropes with official manufacturer batch tags and commercial GST tax invoice for agricultural borewells, marine mooring, and transport lashing."
      }
    ]
  }
};

export default function CategoryPage({
  categoryKey = 'rigging',
  currentLang = 'en',
  onSelectProduct,
  onToggleCart,
  cartItems = [],
  onOpenRfq,
  onNavigateHome,
  onNavigateContact,
  onNavigateCategory
}) {
  const config = CATEGORY_CONFIGS[categoryKey] || CATEGORY_CONFIGS.rigging;
  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Filter products for this specific category
  const filteredProducts = useMemo(() => {
    let list = PMT_PRODUCTS.filter(p => p.category === config.key);

    if (selectedSubCat !== 'all') {
      list = list.filter(p => p.subCategory === selectedSubCat);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        (p.nameTa && p.nameTa.toLowerCase().includes(q)) ||
        (p.nameHi && p.nameHi.toLowerCase().includes(q)) ||
        p.tagline.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'popular') {
      list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [config.key, selectedSubCat, searchQuery, sortBy]);

  return (
    <div className="pmt-category-page" style={{ backgroundColor: '#f8fafc', paddingBottom: '60px' }}>
      
      {/* Breadcrumb Navigation Bar & Category Tabs */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '10px 0' }}>
        <div className="pmt-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--pmt-blue)', cursor: 'pointer', fontWeight: 600 }}
            >
              Home
            </button>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a', fontWeight: 700 }}>
              {currentLang === 'ta' ? config.nameTa : currentLang === 'hi' ? config.nameHi : config.name}
            </span>
          </div>

          {/* Quick Category Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', padding: '2px 0' }}>
            {[
              { id: 'rigging', label: 'Rigging', href: '/rigging/' },
              { id: 'lifting', label: 'Lifting', href: '/lifting/' },
              { id: 'lashing', label: 'Lashing', href: '/lashing/' },
              { id: 'bandsaw-blades', label: 'Bandsaw Blades', href: '/bandsaw-blades/' }
            ].map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateCategory) onNavigateCategory(cat.id, 'category-products');
                }}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: cat.id === config.key ? 800 : 600,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  backgroundColor: cat.id === config.key ? 'var(--pmt-blue)' : '#f1f5f9',
                  color: cat.id === config.key ? '#ffffff' : '#475569',
                  textDecoration: 'none',
                  border: cat.id === config.key ? '1px solid var(--pmt-blue)' : '1px solid #e2e8f0',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Category Hero Banner with Rich Brand Styling */}
      <section style={{
        background: 'linear-gradient(135deg, #091a2f 0%, #034ea1 65%, #05264a 100%)',
        color: '#ffffff',
        padding: '48px 0 40px',
        borderBottom: '4px solid var(--pmt-red)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Decorative Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 10%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div className="pmt-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px' }}>
            {/* Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(198, 28, 26, 0.95)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '1px',
              padding: '4px 12px',
              borderRadius: '20px',
              marginBottom: '14px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              <Award size={14} />
              {config.badge}
            </div>

            {/* H1 Heading (Primary SEO Tag) */}
            <h1 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: '12px',
              color: '#ffffff'
            }}>
              {currentLang === 'ta' ? config.h1Ta : currentLang === 'hi' ? config.h1Hi : config.h1}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.92)',
              marginBottom: '24px',
              maxWidth: '820px'
            }}>
              {currentLang === 'ta' ? config.subtitleTa : currentLang === 'hi' ? config.subtitleHi : config.subtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRfq && onOpenRfq()}
                id="btn-category-rfq"
                style={{
                  backgroundColor: 'var(--pmt-red)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(198, 28, 26, 0.45)',
                  transition: 'transform 0.15s ease'
                }}
              >
                <FileText size={18} />
                {currentLang === 'ta' ? 'விலைப்பட்டியல் கோரிக்கை' : currentLang === 'hi' ? 'कोटेशन प्राप्त करें' : 'Request Price Quotation'}
              </button>

              <a
                href="https://wa.me/919487510127?text=Hello%20PMT%2C%20I%20am%20inquiring%20about%20products%20in%20your%20catalog."
                target="_blank"
                rel="noopener noreferrer"
                id="btn-category-whatsapp"
                style={{
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                }}
              >
                <MessageCircle size={18} />
                WhatsApp 94875 10127
              </a>

              <a
                href="tel:+919443230127"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <PhoneCall size={18} />
                Call 94432 30127
              </a>
            </div>

            {/* Industrial Trust Badges Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
              gap: '12px',
              marginTop: '32px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.18)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <CheckCircle2 size={18} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span>100% Proof Load Tested</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <ShieldCheck size={18} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span>GST Tax Invoice Supplied</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <Truck size={18} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span>All-India Transport Dispatch</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <Box size={18} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span>Ready Stock in Coimbatore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Subcategory Filters, Search, and Product Grid */}
      <div 
        id="category-products" 
        className="pmt-container" 
        style={{ 
          maxWidth: '1240px', 
          margin: '0 auto', 
          padding: '32px 16px 0',
          scrollMarginTop: '110px'
        }}
      >
        
        {/* Controls Bar: Sub-Category Tabs & Live Search */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '16px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
          border: '1px solid #e2e8f0',
          marginBottom: '28px'
        }}>
          {/* Subcategory Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '12px',
            borderBottom: '1px solid #f1f5f9',
            marginBottom: '16px'
          }}>
            {config.subCategories.map((sub) => {
              const isActive = selectedSubCat === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubCat(sub.id)}
                  style={{
                    backgroundColor: isActive ? 'var(--pmt-blue)' : '#f1f5f9',
                    color: isActive ? '#ffffff' : '#334155',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '24px',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {currentLang === 'ta' && sub.labelTa ? sub.labelTa : currentLang === 'hi' && sub.labelHi ? sub.labelHi : sub.label}
                </button>
              );
            })}
          </div>

          {/* Search and Sort Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            {/* Search Box */}
            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '450px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${config.name}...`}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count & Sort */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> certified products
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  color: '#334155',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="name">Sort: Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '48px 24px',
            textAlign: 'center',
            border: '1px dashed #cbd5e1'
          }}>
            <Info size={40} style={{ color: '#94a3b8', margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '8px' }}>No products found matching "{searchQuery}"</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px' }}>Try searching another keyword or clearing your filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedSubCat('all'); }}
              style={{
                backgroundColor: 'var(--pmt-blue)',
                color: '#ffffff',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '6px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(270px, 100%), 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map((product) => {
              const isCarted = cartItems.some(item => item.id === product.id);
              return (
                <div 
                  key={product.id}
                  className="pmt-product-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                >
                  {/* Image Container with Badges */}
                  <div style={{
                    position: 'relative',
                    height: '210px',
                    backgroundColor: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    borderBottom: '1px solid #f1f5f9'
                  }}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease'
                      }}
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'var(--pmt-red)',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '4px',
                        letterSpacing: '0.5px'
                      }}>
                        {product.badge}
                      </span>
                    )}

                    {/* Brand Tag */}
                    <span style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      backgroundColor: 'rgba(15, 23, 42, 0.75)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {product.brand}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      marginBottom: '6px'
                    }}>
                      {currentLang === 'ta' && product.nameTa ? product.nameTa : currentLang === 'hi' && product.nameHi ? product.nameHi : product.name}
                    </h3>

                    {/* Tagline */}
                    <p style={{
                      fontSize: '0.84rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      marginBottom: '14px',
                      flexGrow: 1
                    }}>
                      {product.tagline}
                    </p>

                    {/* Technical Specs List */}
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      marginBottom: '14px',
                      fontSize: '0.78rem',
                      color: '#475569'
                    }}>
                      {product.specs && Object.entries(product.specs).slice(0, 3).map(([k, v]) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ textTransform: 'capitalize', color: '#64748b' }}>
                            {k.replace(/([A-Z])/g, ' $1')}:
                          </span>
                          <strong style={{ color: '#0f172a', textAlign: 'right', marginLeft: '6px' }}>
                            {v}
                          </strong>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => onSelectProduct && onSelectProduct(product)}
                          style={{
                            flex: 1,
                            backgroundColor: '#f1f5f9',
                            color: 'var(--pmt-blue)',
                            border: '1px solid #cbd5e1',
                            padding: '8px',
                            borderRadius: '6px',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px'
                          }}
                        >
                          <Info size={14} />
                          Specs
                        </button>

                        <button
                          onClick={() => onToggleCart && onToggleCart(product)}
                          style={{
                            flex: 1,
                            backgroundColor: isCarted ? '#15803d' : '#ffffff',
                            color: isCarted ? '#ffffff' : '#334155',
                            border: `1px solid ${isCarted ? '#15803d' : '#cbd5e1'}`,
                            padding: '8px',
                            borderRadius: '6px',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px'
                          }}
                        >
                          {isCarted ? <Check size={14} /> : <FileText size={14} />}
                          {isCarted ? 'In List' : 'Inquire'}
                        </button>
                      </div>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/919487510127?text=Hello%20PMT%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20pricing%20and%20availability.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#25D366',
                          color: '#ffffff',
                          border: 'none',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          fontWeight: 700,
                          fontSize: '0.84rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          textDecoration: 'none'
                        }}
                      >
                        <MessageCircle size={15} />
                        WhatsApp Quote
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Technical Buyer Guide & Category FAQs */}
        <section style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '36px 30px',
          marginTop: '48px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
        }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span style={{ color: 'var(--pmt-blue)', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1px' }}>
                TECHNICAL BUYER GUIDE & ENGINEERING STANDARDS
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', marginTop: '6px' }}>
                {config.name} Specification & Ordering FAQs
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {config.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: isOpen ? '#f8fafc' : '#ffffff'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '0.98rem',
                        color: isOpen ? 'var(--pmt-blue)' : '#1e293b'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(90deg)' : 'none',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0,
                          marginLeft: '12px'
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 18px', color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Contact & Order Banner */}
        <section style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          marginTop: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Need Bulk Supply or Custom Rigging Specifications?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0 }}>
              Speak directly with our technical sales engineers at our Coimbatore office. GST invoice and mill test certificates supplied.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="tel:+919487510127"
              style={{
                backgroundColor: 'var(--pmt-red)',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <PhoneCall size={16} />
              Call 94875 10127
            </a>

            <button
              onClick={() => onNavigateContact && onNavigateContact()}
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #475569',
                padding: '10px 18px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer'
              }}
            >
              Contact Office
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
