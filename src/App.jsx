import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForEveryone from './components/ForEveryone';
import Features from './components/Features';
import LeaderboardCommunityFooter from './components/LeaderboardCommunityFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <HowItWorks />
      <ForEveryone />
      <Features />
      <LeaderboardCommunityFooter />
    </div>
  );
};

export default App;
