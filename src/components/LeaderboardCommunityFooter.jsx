import React from 'react';
import { Crown, Coins, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const LeaderboardPreview = () => {
  const entries = [
    { name: '0xNova', tokens: '120 USDC' },
    { name: 'Sage.eth', tokens: '95 USDT' },
    { name: 'LearnerX', tokens: '80 USDC' }
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
      <div className="mb-4 flex items-center gap-2">
        <Crown className="h-5 w-5 text-yellow-400" />
        <h3 className="text-lg font-semibold">Top Players</h3>
      </div>
      <ul className="space-y-3">
        {entries.map((e, i) => (
          <li key={i} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-sky-600 text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-slate-200">{e.name}</span>
            </div>
            <div className="flex items-center gap-1 text-sky-200"><Coins className="h-4 w-4" />{e.tokens}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CommunityCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-sky-900/40 to-fuchsia-900/40 p-8 text-white">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-sky-600/20 blur-3xl" />
      <div className="relative flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Join the BrainDropHQ Community</h3>
          <p className="mt-1 text-slate-200/90">Web3 vibes, alpha drops, and quiz nights with rewards.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/15">
            <Share2 className="h-4 w-4" /> Follow Updates
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/15">
            <MessageCircle className="h-4 w-4" /> Join Chat
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-sky-600 px-4 py-2 text-sm shadow-lg transition hover:brightness-110">
            <ExternalLink className="h-4 w-4" /> Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm">Powered by Web3. Built for Learners.</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {['About', 'Docs', 'FAQ', 'Twitter', 'Discord'].map((i) => (
            <a key={i} href="#" className="hover:text-white/90">{i}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

const LeaderboardCommunityFooter = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <LeaderboardPreview />
          </div>
          <div className="lg:col-span-2">
            <CommunityCTA />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LeaderboardCommunityFooter;
