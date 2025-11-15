import React from 'react';

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const FeatureIcon: React.FC<{ icon: React.ReactElement }> = ({ icon }) => (
  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/10 text-brand-blue mb-4">
    {icon}
  </div>
);

const featureData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Smart Bug Correlation',
    description: 'Our AI connects disparate bug reports, logs, and metrics to reveal non-obvious patterns and duplicates that human analysis would miss.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Predictive Analytics',
    description: 'Leverage historical data to forecast bug recurrences and identify potential system hotspots before they impact your users.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Root Cause Analysis',
    description: "Go beyond symptoms. BugWise pinpoints the core issue behind a bug and recommends comprehensive fixes to prevent 'sister' bugs.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Intelligent Layer for Quality Software</h2>
          <p className="mt-4 text-lg text-slate-400">BugWise is more than a tool; it's a proactive partner in your development lifecycle.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((feature, index) => (
            <div key={index} className="bg-brand-light-dark p-8 rounded-xl border border-slate-700 hover:border-brand-blue/50 hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-1">
              <FeatureIcon icon={feature.icon} />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;