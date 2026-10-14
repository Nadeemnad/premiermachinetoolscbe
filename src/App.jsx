import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MachineCatalog from './components/MachineCatalog';
import MachineModal from './components/MachineModal';
import RoiCalculator from './components/RoiCalculator';
import IndustriesSection from './components/IndustriesSection';
import FacilitySection from './components/FacilitySection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import RfqModal from './components/RfqModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqPresetMachines, setRfqPresetMachines] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Cart item toggler
  const handleToggleCart = (machine) => {
    const exists = cartItems.some((item) => item.id === machine.id);
    if (exists) {
      setCartItems(cartItems.filter((item) => item.id !== machine.id));
      showToast(`Removed "${machine.name}" from your RFQ list.`);
    } else {
      setCartItems([...cartItems, machine]);
      showToast(`Added "${machine.name}" to your RFQ quotation list!`);
    }
  };

  // Open RFQ modal with specific machine or current cart
  const handleOpenRfqModal = (specificMachine = null) => {
    if (specificMachine) {
      setRfqPresetMachines([specificMachine]);
    } else if (cartItems.length > 0) {
      setRfqPresetMachines(cartItems);
    } else {
      setRfqPresetMachines([]);
    }
    setIsRfqOpen(true);
  };

  // Open Cart specifically
  const handleOpenCartDrawer = () => {
    setRfqPresetMachines(cartItems);
    setIsRfqOpen(true);
  };

  const handleRemoveFromCart = (machineId) => {
    setCartItems(cartItems.filter((item) => item.id !== machineId));
    setRfqPresetMachines(rfqPresetMachines.filter((item) => item.id !== machineId));
  };

  const handleClearCart = () => {
    setCartItems([]);
    setRfqPresetMachines([]);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleDownloadBrochure = (machineName) => {
    showToast(`Downloading technical specification PDF & CAD drawing for ${machineName}...`);
  };

  const handleScheduleVisit = () => {
    const facilityEl = document.getElementById('facility');
    if (facilityEl) {
      facilityEl.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Reserve your live test-cutting trial at our Coimbatore Demo Facility!');
  };

  const handleHeroSearch = (query) => {
    setHeroSearchQuery(query);
  };

  return (
    <div className="pmt-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        cartCount={cartItems.length}
        onOpenRfq={() => handleOpenRfqModal()}
        onOpenCart={handleOpenCartDrawer}
      />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero
          onSearchSubmit={handleHeroSearch}
          onOpenRfq={() => handleOpenRfqModal()}
          onScheduleVisit={handleScheduleVisit}
        />

        <MachineCatalog
          initialSearch={heroSearchQuery}
          onSelectMachine={(m) => setSelectedMachine(m)}
          cartItems={cartItems}
          onToggleCart={handleToggleCart}
          onDownloadBrochure={handleDownloadBrochure}
        />

        <RoiCalculator
          onOpenRfq={() => handleOpenRfqModal()}
          onShowToast={showToast}
        />

        <IndustriesSection
          onFilterByIndustry={(ind) => {
            const catalogEl = document.getElementById('catalog');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <FacilitySection
          onBookVisit={() => {
            showToast('Thank you! Our Coimbatore application engineering team will contact you to confirm your demo schedule.');
          }}
        />

        <FaqSection />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenRfq={() => handleOpenRfqModal()} />

      {/* Machine Full Technical Modal */}
      {selectedMachine && (
        <MachineModal
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
          onOpenRfqWithMachine={(m) => handleOpenRfqModal(m)}
          onToggleCart={handleToggleCart}
          isCarted={cartItems.some((item) => item.id === selectedMachine.id)}
          onDownloadBrochure={handleDownloadBrochure}
        />
      )}

      {/* RFQ & Quote Cart Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        selectedMachines={rfqPresetMachines}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Feedback Toast System */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
