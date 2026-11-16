import React from 'react';
import { CORE_MATERIALS, createWhatsAppLink } from '../data/companyData';
import { ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function MaterialShowcase() {
  return (
    <section id="materials" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authorized Manufacturing Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered Safety Materials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't sell generic nets. Choose from ISO-certified Garware polymers, heavy-duty braided nylon, ultra-clear monofilament, or marine-grade SS 316 invisible cables.
          </p>
        </div>

        {/* 4-Column Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_MATERIALS.map((mat) => {
            const matWhatsApp = createWhatsAppLink(
              `Hello Dúda Safety Nets! I want to inquire about ${mat.title} for my property in Bangalore.`
            );

            return (
              <div
                key={mat.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Glow Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-white/10 text-[11px] font-bold text-amber-400">
                      {mat.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {mat.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mb-3">
                    {mat.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {mat.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-2 mb-6 p-3 rounded-xl bg-slate-950/50 border border-white/5">
                    {mat.specs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="font-semibold text-slate-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {mat.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <a
                  href={matWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wide border border-white/10 hover:border-emerald-500 transition-all duration-200"
                >
                  <span>Select {mat.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
