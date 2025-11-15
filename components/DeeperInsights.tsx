
import React from 'react';

const CodeSuggestion: React.FC = () => (
  <div className="bg-slate-900/70 rounded-xl border border-slate-700 overflow-hidden h-full flex flex-col">
    <div className="p-2 border-b border-slate-700 flex items-center space-x-2 bg-slate-800/50">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <p className="text-xs text-slate-400 pl-2">/services/api/controllers/userController.js</p>
    </div>
    <div className="p-4 md:p-6 text-sm font-mono text-slate-300 flex-grow">
      <code>
        <span className="text-purple-400">async</span> <span className="text-sky-400">function</span> <span className="text-yellow-300">getUsersWithPosts</span>(req, res) {'{'}
        <br />
        {'  '}<span className="text-purple-400">const</span> users = <span className="text-purple-400">await</span> User.findAll();
        <br />
        {'  '}<span className="text-purple-400">const</span> result = [];
        <br />
        <br />
        <div className="relative bg-red-500/10 border-l-2 border-red-400 pl-4 py-2 my-2">
            {'  '}<span className="text-sky-400">for</span> (<span className="text-purple-400">const</span> user <span className="text-sky-400">of</span> users) {'{'}
            <br />
            {'    '}<span className="text-purple-400">const</span> posts = <span className="text-purple-400">await</span> Post.findAll({'{'} where: {'{'} userId: user.id {'}'} {'}'});
            <br />
            {'    '}result.push({'{'}...user.dataValues, posts{'}'});
            <br />
            {'  '}{'}'}
            <div className="absolute top-0 -right-4 translate-x-full w-64 bg-brand-light-dark p-3 rounded-lg border border-slate-700 shadow-lg hidden lg:block">
                <p className="flex items-center text-xs font-sans text-yellow-300 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.706-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-1.414 8.486a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" /></svg>
                    BugWise AI Suggestion
                </p>
                <p className="text-xs font-sans text-slate-300">N+1 query detected. This loop makes a separate DB call for each user, causing performance issues.</p>
                <p className="text-xs font-sans text-slate-400 mt-2">Consider eager loading with an `include` statement.</p>
            </div>
        </div>
        <br />
        {'  '}res.json(result);
        <br />
        {'}'}
      </code>
    </div>
  </div>
);

const BugCluster: React.FC = () => (
    <div className="bg-brand-light-dark rounded-xl border border-slate-700 p-6 h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_100%)]"></div>
        <div className="relative z-10 text-center">
            <h4 className="text-lg font-semibold text-white">Automated Bug Clustering</h4>
            <p className="text-sm text-slate-400 mt-1">3 issues linked to one root cause</p>
        </div>
        <div className="relative z-10 mt-8 grid grid-cols-3 gap-4 items-center">
            <div className="flex flex-col gap-4 items-end">
                <div className="bg-slate-700 p-2 rounded-lg text-right w-full">
                    <p className="text-xs font-bold text-white">JIRA-123</p>
                    <p className="text-xs text-slate-400">Login fails on mobile</p>
                </div>
                <div className="bg-slate-700 p-2 rounded-lg text-right w-full">
                    <p className="text-xs font-bold text-white">Sentry-456</p>
                    <p className="text-xs text-slate-400">API 504 Timeout</p>
                </div>
            </div>
            
            <div className="flex justify-center items-center">
                <div className="bg-brand-blue/10 border-2 border-brand-blue text-brand-blue rounded-full w-24 h-24 flex flex-col items-center justify-center text-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0L8 5.122A2 2 0 016.46 7.54l-1.938.534c-1.56.428-2.132 2.37-1.23 3.65l1.432 2.148a2 2 0 010 2.298l-1.432 2.148c-.902 1.28.37 3.223 1.938 2.795l1.938-.534a2 2 0 012.08.37l.504 1.952c.38 1.56 2.6 1.56 2.98 0l.504-1.952a2 2 0 012.08-.37l1.938.534c1.56.428 2.838-1.516 1.938-2.795l-1.432-2.148a2 2 0 010-2.298l1.432-2.148c.902-1.28-.37-3.223-1.938-2.795l-1.938.534a2 2 0 01-2.08-.37l-.504-1.952zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                    <p className="text-xs font-bold">Root Cause</p>
                    <p className="text-[10px] leading-tight">Auth Service DB Connection Pool Exhaustion</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-start">
                 <div className="bg-slate-700 p-2 rounded-lg text-left w-full">
                    <p className="text-xs font-bold text-white">User Report #882</p>
                    <p className="text-xs text-slate-400">Cannot update profile</p>
                </div>
            </div>
        </div>
    </div>
);


const DeeperInsights: React.FC = () => {
  return (
    <section id="insights" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Go Beyond the Dashboard</h2>
          <p className="mt-4 text-lg text-slate-400">
            BugWise provides actionable intelligence that integrates directly into your workflow, helping you fix bugs faster and prevent them entirely.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BugCluster />
            <CodeSuggestion />
        </div>
      </div>
    </section>
  );
};

export default DeeperInsights;
