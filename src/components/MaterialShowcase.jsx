import React from 'react';
import { CORE_MATERIALS, createWhatsAppLink } from '../data/companyData';
import { ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function MaterialShowcase() {
  return (
    <section id="materials" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Swipeable 3D Material Cards</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Engineered Safety Standards
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Swipe sideways on mobile to inspect each material's breaking load, UV stabilization grade, and warranty coverage.
          </p>
        </div>

        {/* Swipeable Snap Carousel on Mobile, 4-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {CORE_MATERIALS.map((mat) => {
            const matWhatsApp = createWhatsAppLink(
              `Hello Dúda Safety Nets! I want to inquire about *${mat.title}* for my property in Bangalore.`
            );

            return (
              <div
                key={mat.id}
                className="min-w-[82vw] sm:min-w-[320px] md:min-w-0 snap-center group relative flex flex-col justify-between rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 p-5 sm:p-6 hover:border-cyan-400/60 hover:bg-slate-900/95 transition-all duration-300 shadow-xl hover:shadow-cyan-950/40 transform hover:-translate-y-1.5"
              >
                {/* Specular Glare Highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/10 text-[10px] font-bold text-amber-300">
                      {mat.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                    {mat.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-cyan-400 mb-3">
                    {mat.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {mat.description}
                  </p>

                  {/* Specs Box */}
                  <div className="space-y-1.5 mb-5 p-3 rounded-2xl bg-slate-950/70 border border-white/5 text-[11px]">
                    {mat.specs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="font-semibold text-slate-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {mat.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <a
                  href={matWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-semibold text-xs border border-white/10 hover:border-emerald-500 transition-all duration-200 active:scale-95"
                >
                  <span>Select {mat.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-2 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <span>← Swipe horizontally to compare all 4 materials →</span>
        </div>
      </div>
    </section>
  );
}
