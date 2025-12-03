import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Sectors from './components/Sectors';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-reusa-graphite antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Sectors />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;