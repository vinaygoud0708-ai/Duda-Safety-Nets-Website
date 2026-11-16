import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MaterialShowcase from './components/MaterialShowcase';
import ServiceCatalog from './components/ServiceCatalog';
import ServiceDetailModal from './components/ServiceDetailModal';
import CustomizationMatrix from './components/CustomizationMatrix';
import WorkProcess from './components/WorkProcess';
import InstallationGallery from './components/InstallationGallery';
import BangaloreAreas from './components/BangaloreAreas';
import LeadForm from './components/LeadForm';
import FAQSection from './components/FAQSection';
import GoogleMapsEmbed from './components/GoogleMapsEmbed';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToForm = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Main Content Layers */}
      <div className="relative z-10">
        <Navbar onOpenForm={scrollToForm} />

        <main id="top">
          <HeroSection onOpenForm={scrollToForm} />
          <MaterialShowcase />
          <ServiceCatalog onSelectService={setSelectedService} />
          <CustomizationMatrix />
          <WorkProcess />
          <InstallationGallery />
          <BangaloreAreas />
          <LeadForm id="quote-form" />
          <FAQSection />
          <GoogleMapsEmbed />
        </main>

        <Footer />
        <FloatingDock onOpenForm={scrollToForm} />

        {/* Modal for Service Specifications */}
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </div>
  );
}
