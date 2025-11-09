import React from 'react';
import { Brain, Trophy, Wallet, ListChecks, Users } from 'lucide-react';

const steps = [
  {
    icon: <ListChecks className="h-6 w-6" />,
    title: 'Choose or Host a Quiz',
    desc: 'Pick from community quizzes or create your own challenge.'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Answer Questions in Real Time',
    desc: 'Fast-paced rounds keep the energy high and brains buzzing.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Climb the Leaderboard',
    desc: 'Compete with learners worldwide and flex your knowledge.'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Earn Crypto Rewards',
    desc: 'Win USDT/USDC instantly with transparent on-chain records.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/10 via-slate-900 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-300">Four simple steps to start learning, competing, and earning.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600/80 to-sky-600/80 text-white shadow-lg">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-1 w-6 -translate-y-1/2 rounded bg-gradient-to-r from-fuchsia-500/60 to-sky-500/60 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
