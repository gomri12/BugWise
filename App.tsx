
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import DashboardPreview from './components/DashboardPreview';
import DeeperInsights from './components/DeeperInsights';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-slate-300 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <DeeperInsights />
        <Integrations />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;