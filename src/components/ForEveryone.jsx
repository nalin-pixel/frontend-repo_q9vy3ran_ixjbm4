import React from 'react';
import { GraduationCap, Presentation, ArrowRight } from 'lucide-react';

const ForEveryone = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(124,58,237,0.08),rgba(14,165,233,0.08))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="rounded-2xl bg-fuchsia-600/20 p-3 text-fuchsia-200">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">For Students</h3>
                <p className="mt-2 max-w-md text-slate-200/90">
                  Join quizzes, learn, and earn tokens. Track your progress and showcase your skills.
                </p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
            <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-sky-600/20 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="rounded-2xl bg-sky-600/20 p-3 text-sky-200">
                <Presentation className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">For Teachers</h3>
                <p className="mt-2 max-w-md text-slate-200/90">
                  Host quizzes, reward learners, and build your Web3 classroom with transparent results.
                </p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-fuchsia-600 px-4 py-2 text-sm text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110">
                  Host a Quiz <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEveryone;
