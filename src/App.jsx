import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofStrip from './components/SocialProofStrip';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PricingTiers from './components/PricingTiers';
import FAQAccordion from './components/FAQAccordion';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <SocialProofStrip />
        <FeatureGrid />
        <HowItWorks />
        <Testimonials />
        <PricingTiers />
        <FAQAccordion />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
