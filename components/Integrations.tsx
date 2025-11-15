import React from 'react';

const IntegrationLogo: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
  <div className="flex items-center justify-center p-4 bg-slate-800 rounded-lg">
    <img className="h-10 w-auto" src={src} alt={alt} />
  </div>
);

const integrations = [
    { name: 'Jira', src: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
    { name: 'GitHub', src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
    { name: 'Datadog', src: 'https://www.svgrepo.com/show/353635/datadog.svg' },
    { name: 'Splunk', src: 'https://cdn.worldvectorlogo.com/logos/splunk-1.svg' },
    { name: 'Sentry', src: 'https://cdn.worldvectorlogo.com/logos/sentry-3.svg' },
    { name: 'GitLab', src: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg' },
    { name: 'New Relic', src: 'https://cdn.worldvectorlogo.com/logos/new-relic-1.svg' },
    { name: 'ELK Stack', src: 'https://cdn.worldvectorlogo.com/logos/elastic-stack.svg' },
];

const Integrations: React.FC = () => {
    return (
        <section id="integrations" className="py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Integrates With Your Existing Workflow</h2>
                    <p className="mt-4 text-lg text-slate-400">
                        BugWise plugs into the tools you already use, enriching your ecosystem without disrupting it.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
                    {integrations.map(integration => (
                        <div key={integration.name} className="flex justify-center items-center p-6 bg-brand-light-dark rounded-xl border border-slate-700 hover:border-brand-blue/50 transition-colors duration-300">
                           <img
                            className="h-10 object-contain transition-all duration-300"
                            src={integration.src}
                            alt={integration.name}
                           />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;