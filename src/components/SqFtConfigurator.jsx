import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { createWhatsAppLink } from '../data/companyData';

const MATERIALS_PRICING = [
  {
    id: 'garware',
    name: 'Garware HDPE Net',
    rateRange: '₹18 – ₹24',
    min: 18,
    max: 24,
    badge: '10-Yr Warranty',
    color: 'border-cyan-400 text-cyan-300'
  },
  {
    id: 'nylon',
    name: 'Double-Knot Nylon',
    rateRange: '₹16 – ₹22',
    min: 16,
    max: 22,
    badge: 'Heavy Resilience',
    color: 'border-emerald-400 text-emerald-300'
  },
  {
    id: 'transparent',
    name: 'Transparent Net',
    rateRange: '₹24 – ₹32',
    min: 24,
    max: 32,
    badge: '99% Clear View',
    color: 'border-sky-300 text-sky-200'
  },
  {
    id: 'invisible-grill',
    name: 'SS 316 Invisible Grills',
    rateRange: '₹130 – ₹175',
    min: 130,
    max: 175,
    badge: '400kg Marine Cable',
    color: 'border-amber-400 text-amber-300'
  }
];

export default function SqFtConfigurator() {
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(7);
  const [selectedMat, setSelectedMat] = useState(MATERIALS_PRICING[0]);

  const sqft = width * height;
  const estimatedMin = sqft * selectedMat.min;
  const estimatedMax = sqft * selectedMat.max;

  const quoteWhatsApp = createWhatsAppLink(
    `Hello Dúda Safety Nets! I calculated my balcony dimensions on your website:\n\n` +
    `• Dimensions: ${width} ft (Width) × ${height} ft (Height)\n` +
    `• Total Area: ${sqft} Sq.Ft\n` +
    `• Selected Material: ${selectedMat.name}\n` +
    `• Est. Cost Range: ₹${estimatedMin.toLocaleString('en-IN')} – ₹${estimatedMax.toLocaleString('en-IN')}\n\n` +
    `Please confirm free doorstep laser measurement and availability at my Bangalore address.`
  );

  return (
    <section id="pricing-calculator" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Sq.Ft Price &amp; Material Configurator
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Drag the sliders to match your balcony or window dimensions for an instant estimate with zero hidden charges.
          </p>
        </div>

        {/* Configurator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Sliders & Material Selector */}
            <div className="lg:col-span-7 space-y-6">
              {/* Width Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Balcony Width
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-cyan-300 font-mono font-bold text-xs border border-white/5">
                    {width} Feet
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="1"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>4 ft (Window)</span>
                  <span>20 ft (Standard Balcony)</span>
                  <span>40 ft (Terrace)</span>
                </div>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Balcony / Grille Height
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-cyan-300 font-mono font-bold text-xs border border-white/5">
                    {height} Feet
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="1"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>3 ft (Railing)</span>
                  <span>7 ft (Ceiling-High)</span>
                  <span>15 ft (Double Height)</span>
                </div>
              </div>

              {/* Material Pill Buttons */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 block">
                  Select Net Solution
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {MATERIALS_PRICING.map((mat) => {
                    const isSelected = selectedMat.id === mat.id;
                    return (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setSelectedMat(mat)}
                        className={`p-3 rounded-2xl text-left transition-all border ${
                          isSelected
                            ? 'bg-slate-800 border-cyan-400 shadow-md shadow-cyan-500/10 scale-[1.02]'
                            : 'bg-slate-950/60 border-white/5 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${mat.color}`}>
                            {mat.badge}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white mb-0.5">
                          {mat.name}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {mat.rateRange} / sq.ft
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Live Calculation Estimate Display */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950 p-6 border border-white/10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Calculated Area
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {width} ft × {height} ft
                  </span>
                </div>

                <div className="text-3xl font-extrabold text-white mb-4">
                  {sqft}{' '}
                  <span className="text-sm font-normal text-slate-400">Sq.Ft</span>
                </div>

                {/* Estimated Price Range */}
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 mb-4">
                  <div className="text-[11px] text-emerald-400 uppercase font-bold tracking-wider mb-1">
                    Estimated Cost Range
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    ₹{estimatedMin.toLocaleString('en-IN')} – ₹{estimatedMax.toLocaleString('en-IN')}*
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    *Approx. Includes SS 304 Fasteners, Border Ropes &amp; Doorstep Installation.
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Free doorstep laser measurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>10-Year stamped replacement warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Rapid same-day fitment in 2 hours</span>
                  </div>
                </div>
              </div>

              {/* Send to WhatsApp CTA */}
              <a
                href={quoteWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send {sqft} Sq.Ft Estimate to WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
