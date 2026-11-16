import React, { useState } from 'react';
import Hero3DCanvas from './Hero3D/Hero3DCanvas';
import MaterialSwitcherBar from './Hero3D/MaterialSwitcherBar';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2, Clock, Sparkles, MapPin } from 'lucide-react';

export default function HeroSection({ onOpenForm, onOpenCalculator }) {
  const [activeMaterial, setActiveMaterial] = useState('grills');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const heroWhatsApp = createWhatsAppLink(
    `Hello Dúda Safety Nets! I want a free same-day site survey and price quote for ${
      activeMaterial === 'grills'
        ? 'SS 316 Invisible Grills'
        : activeMaterial === 'garware'
        ? 'Garware HDPE Safety Nets'
        : activeMaterial === 'transparent'
        ? 'Transparent Monofilament Nets'
        : 'Safety Net Installation'
    } in Bangalore.`
  );

  return (
    <section className="relative min-h-[88vh] pt-24 sm:pt-28 pb-12 overflow-hidden flex flex-col justify-between">
      {/* Background Radial Light Flares */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Brand & High-Conversion Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4 sm:space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>★ ISO-Certified Garware &amp; SS 316 Dealers in Bangalore</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Garware, HDPE, Nylon &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
                Invisible Safety Nets
              </span>{' '}
              in Bangalore
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl">
              Weather-resistant, UV-stabilized fall protection with unblocked views for balconies, windows, sports turfs, and commercial buildings. Genuine factory rolls &amp; SS 304 fasteners.
            </p>

            {/* Mobile Key Trust Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full py-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>12,000+ Fitted</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>10-Yr Warranty</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] text-slate-200">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>2-Hour Doorstep Inspection</span>
              </div>
            </div>

            {/* Hero Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto pt-1">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Get Instant WhatsApp Quote</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-white/10 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Free Same-Day Survey Pill */}
            <div className="w-full max-w-lg p-2.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between text-[11px] text-slate-300">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="truncate">Free Same-Day Doorstep Survey (Bengaluru)</span>
              </div>
              <button
                type="button"
                onClick={onOpenForm}
                className="text-cyan-400 hover:text-cyan-300 font-bold shrink-0 ml-2 underline underline-offset-4"
              >
                Book Visit
              </button>
            </div>
          </div>

          {/* Right Column: 3D Balcony Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center w-full mt-4 lg:mt-0">
            <Hero3DCanvas
              activeState={activeMaterial}
              activeHotspot={activeHotspot}
              onSelectHotspot={setActiveHotspot}
            />
          </div>
        </div>

        {/* Bottom Thumb-Zone Floating Dock */}
        <div className="mt-6 sm:mt-10">
          <MaterialSwitcherBar
            activeState={activeMaterial}
            onChangeState={(state) => {
              setActiveMaterial(state);
              setActiveHotspot(null);
            }}
          />
        </div>
      </div>
    </section>
  );
}
