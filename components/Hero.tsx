
import React from 'react';
import videoSrc from '../media/Cinematic_Tech_Video_Generation.mp4';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-blue/10 rounded-full blur-3xl animate-subtle-glow"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            End the Groundhog Day of Debugging
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400">
            BugWise is the intelligent AI partner for your dev team. We proactively detect, predict, and resolve recurring bugs, so you can focus on building what's next.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#cta" className="bg-brand-blue hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105">
              Request a Demo
            </a>
            <a href="#features" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-brand-blue/20 border border-slate-700/50">
            <video 
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
