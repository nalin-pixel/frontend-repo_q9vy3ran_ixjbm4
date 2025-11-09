import React from 'react';
import { ShieldCheck, Zap, Bot, Wallet, Trophy, Boxes } from 'lucide-react';

const items = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Instant Rewards',
    desc: 'Claim USDT/USDC the moment you win — fast and seamless.'
  },
  {
    icon: <Boxes className="h-6 w-6" />,
    title: 'On-Chain Transparency',
    desc: 'Every result secured on blockchain for trust and fairness.'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Auto Wallets',
    desc: 'New users get a non-custodial wallet generated on the fly.'
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'AI Quiz Builder',
    desc: 'Create high-quality quizzes instantly using AI assistance.'
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'Global Leaderboards',
    desc: 'See where you stand across communities and classrooms.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Secure by Design',
    desc: 'Audited smart flows and verifiable randomness for fairness.'
  }
];

const Features = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Futuristic Features</h2>
          <p className="mt-3 text-slate-300">Everything you need to power a Web3 learning arcade.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600/80 to-fuchsia-600/80 text-white shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
