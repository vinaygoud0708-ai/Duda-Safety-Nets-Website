import React, { useState } from 'react';
import Hero3DCanvas from './Hero3D/Hero3DCanvas';
import MaterialSwitcherBar from './Hero3D/MaterialSwitcherBar';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenForm }) {
  const [activeMaterial, setActiveMaterial] = useState('grills');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const heroWhatsApp = createWhatsAppLink(
    `Hello Dúda Safety Nets! I want a free doorstep inspection and price quote for ${
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
    <section className="relative min-h-[92vh] pt-28 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>★ ISO-Certified Garware & SS 316 Dealers in Bangalore</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Garware, HDPE, Nylon &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
                Invisible Safety Nets
              </span>{' '}
              in Bangalore
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Weather-resistant, UV-stabilized fall protection with unblocked views for balconies, windows, sports turfs, and commercial buildings. Genuine factory rolls &amp; SS 304 fasteners.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full py-1">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>12,000+ Fitted</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>10-Yr Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>2-Hr Free Visit</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Instant WhatsApp Quote</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600/60 text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Free Visit Banner Card */}
            <div className="w-full max-w-lg p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-slate-300">Free Laser Measurement Across All Bangalore</span>
              </div>
              <button
                onClick={onOpenForm}
                className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
              >
                Book Visit
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Balcony Architecture */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <Hero3DCanvas
              activeState={activeMaterial}
              activeHotspot={activeHotspot}
              onSelectHotspot={setActiveHotspot}
            />
          </div>
        </div>

        {/* Floating 3D Material Switcher Bar */}
        <div className="mt-8 lg:mt-12">
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
