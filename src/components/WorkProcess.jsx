import React from 'react';
import { WORK_PROCESS } from '../data/companyData';
import { MessageSquareText, Compass, Scissors, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "We assess your safety hazard, balcony architecture, and recommend optimal net polymers and mesh apertures.",
    duration: "10-Min Phone / WhatsApp",
    icon: MessageSquareText
  },
  {
    step: "02",
    title: "Free Laser Measurement",
    desc: "Certified field technician arrives at your Bangalore doorstep within 2 hours with digital lasers for pinpoint millimeter accuracy.",
    duration: "Same-Day Within 2 Hours",
    icon: Compass
  },
  {
    step: "03",
    title: "Border-Rope Preparation",
    desc: "Genuine Garware rolls or SS 316 cables are precision-cut and pre-tensioned to eliminate all sagging under body impact.",
    duration: "Factory Custom Finishing",
    icon: Scissors
  },
  {
    step: "04",
    title: "Anchor Installation & Handover",
    desc: "Heavy-duty SS 304/316 anchor eye-bolts are secured with rawlplugs, tension-tested, and accompanied by your 10-year warranty card.",
    duration: "2-3 Hours Rapid Fitment",
    icon: Wrench
  }
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-16 sm:py-20 relative bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>4-Step Installation Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            How Our Installation Works
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            From initial measurement to stamped warranty card handover — certified Bangalore technicians handle everything seamlessly.
          </p>
        </div>

        {/* Timeline Grid (Connected on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {TIMELINE_STEPS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.step}
                className="relative flex flex-col justify-between rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-5 sm:p-6 shadow-xl hover:border-cyan-400/50 hover:bg-slate-900/95 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-slate-600 font-mono">
                      {p.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-white/5 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
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
