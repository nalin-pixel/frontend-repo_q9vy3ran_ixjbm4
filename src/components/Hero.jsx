import React from 'react';
import Spline from '@splinetool/react-spline';
import { Wallet, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_12px] shadow-fuchsia-500"></span>
          Web3 Learn-to-Earn
        </div>

        <h1 className="mt-6 text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm md:text-6xl">
          Learn, Compete, and Earn in Web3 Quizzes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-200/90 md:text-lg">
          BrainDropHQ connects education and crypto rewards — turning learning into an exciting Web3 experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#how"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            Get Started
          </a>
          <button
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          >
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </button>
        </div>

        {/* Floating token chips */}
        <div className="pointer-events-none relative mt-10 flex flex-wrap justify-center gap-3">
          {['ETH', 'USDC', 'USDT', 'POL'].map((t, i) => (
            <span
              key={t}
              className={`rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur ${
                i % 2 ? 'shadow-[0_0_24px] shadow-sky-500/20' : 'shadow-[0_0_24px] shadow-fuchsia-500/20'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
