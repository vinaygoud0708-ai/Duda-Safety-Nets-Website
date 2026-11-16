import React from 'react';
import { WORK_PROCESS } from '../data/companyData';
import { MessageSquareText, Compass, Scissors, Wrench, ArrowRight, ShieldCheck } from 'lucide-react';

const ICONS = [MessageSquareText, Compass, Scissors, Wrench];

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 relative bg-slate-950/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Professional Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our 4-Step Work Process
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From your first message to handover of your stamped 10-year warranty card, our certified Bangalore rope technicians ensure zero disruption and flawless fit.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((p, idx) => {
            const Icon = ICONS[idx] || Wrench;
            return (
              <div
                key={p.step}
                className="relative flex flex-col justify-between rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:bg-slate-900/90 transition-all duration-300 group shadow-lg shadow-black/40"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-slate-600 font-mono">
                      {p.step}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-800 border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* Duration Badge */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-amber-400">{p.duration}</span>
                  {idx < 3 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
