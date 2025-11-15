
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 sm:py-24 bg-brand-light-dark/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-brand-blue rounded-full opacity-30 blur-2xl"></div>
              <svg className="relative w-full h-full text-brand-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1" />
                <path d="M2 7L12 12" stroke="currentColor" strokeWidth="1" />
                <path d="M12 22V12" stroke="currentColor" strokeWidth="1" />
                <path d="M22 7L12 12" stroke="currentColor" strokeWidth="1" />
                <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="1" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Vision</h2>
            <p className="mt-4 text-lg text-slate-400">
              We aim to be the essential intelligent layer in every software development process, shifting bug management from a reactive, time-consuming chore to a proactive, strategic advantage.
            </p>
            <p className="mt-4 text-slate-400">
              In the future we envision, development teams dedicate more time to innovation and less to fixing the same problems, leading to higher quality software, happier users, and accelerated business growth for our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
