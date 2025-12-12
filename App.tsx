import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import OrderSection from './components/OrderSection';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import DeliveryAndWarranty from './components/DeliveryAndWarranty';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            Nappes<span className="text-blue-600">PVC</span>
          </div>
          <button 
            onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Commander
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        {/* New Order Calculator replaces static Pricing */}
        <OrderSection />
        <ProductShowcase />
        <HowItWorks />
        <DeliveryAndWarranty />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;