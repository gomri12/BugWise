
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-brand-light-dark rounded-2xl p-12 shadow-2xl shadow-brand-blue/10 border border-slate-700">
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="relative text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Transform Your Debugging Process?</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Join the waitlist and be the first to experience how BugWise can save your team countless hours and help you build more reliable software.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-block bg-brand-blue hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
