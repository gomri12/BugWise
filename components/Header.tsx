
import React, { useState } from 'react';

const BugWiseLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 7L12 12" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 7L12 12" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 4.5L7 9.5" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-2xl font-bold text-white">BugWise</span>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Vision', href: '#vision' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-sm border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BugWiseLogo />
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-brand-blue transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#cta" className="hidden sm:inline-block bg-brand-blue hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Request Demo
            </a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-300 hover:text-brand-blue transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#cta" onClick={() => setIsMenuOpen(false)} className="bg-brand-blue hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-center">
                Request Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
