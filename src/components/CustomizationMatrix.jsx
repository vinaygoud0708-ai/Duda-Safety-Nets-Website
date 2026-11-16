import React, { useState } from 'react';
import { Settings2, CheckCircle2, MessageCircle, Sparkles, Shield, Wrench } from 'lucide-react';
import { createWhatsAppLink } from '../data/companyData';

export default function CustomizationMatrix() {
  const [netType, setNetType] = useState('Garware HDPE');
  const [aperture, setAperture] = useState('30mm (Standard)');
  const [thickness, setThickness] = useState('2.0mm (Reinforced)');
  const [color, setColor] = useState('Pure White');
  const [hardware, setHardware] = useState('SS 304 Anchor Eye-Bolts');

  const customWhatsApp = createWhatsAppLink(
    `Hello Dúda Safety Nets! I configured a custom safety net specification on your website:\n\n` +
    `• Net Type: ${netType}\n` +
    `• Mesh Aperture: ${aperture}\n` +
    `• Thickness: ${thickness}\n` +
    `• Color: ${color}\n` +
    `• Hardware: ${hardware}\n\n` +
    `Please provide a price estimate per sq.ft and schedule a free doorstep measurement in Bangalore.`
  );

  return (
    <section id="customize" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Settings2 className="w-3.5 h-3.5" />
            <span>Interactive Net Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Custom Specification Matrix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every building in Bangalore has unique dimensions. Tailor your mesh aperture, twine gauge, color, and anchor hardware for a tailored fit.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Selector Columns */}
            <div className="lg:col-span-7 space-y-6">
              {/* Option 1: Net Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5 block">
                  1. Select Net Material
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Garware HDPE',
                    'HDPE Braided Nylon',
                    'Transparent Monofilament',
                    'SS 316 Invisible Grills'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setNetType(item)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                        netType === item
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                          : 'bg-slate-800/40 border-white/5 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Mesh Aperture */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5 block">
                  2. Mesh Aperture (Gap Size)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    '20mm (Small Birds & Kittens)',
                    '25mm (High-Rise Pigeons)',
                    '30mm (Standard Balcony)',
                    '40mm (Heavy Monkey Defense)',
                    '50mm (Sports & Field Netting)'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAperture(item)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                        aperture === item
                          ? 'bg-amber-500/20 border-amber-400 text-white'
                          : 'bg-slate-800/40 border-white/5 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Twine Gauge */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5 block">
                  3. Twine / Cable Gauge
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    '0.8mm (Ultra Light)',
                    '1.5mm (Medium Residential)',
                    '2.0mm (Reinforced)',
                    '3.0mm (Heavy Impact)'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setThickness(item)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                        thickness === item
                          ? 'bg-emerald-500/20 border-emerald-400 text-white'
                          : 'bg-slate-800/40 border-white/5 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Color & Hardware */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
                    4. Color Shade
                  </label>
                  <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Pure White">Pure White (Clean Look)</option>
                    <option value="Forest Green">Forest Green (Blends with plants)</option>
                    <option value="Translucent Clear">Translucent Clear (Invisible)</option>
                    <option value="Metallic Stainless Steel">Metallic Stainless Steel</option>
                    <option value="Jet Black">Jet Black (Low glare)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
                    5. Anchor Hardware
                  </label>
                  <select
                    value={hardware}
                    onChange={(e) => setHardware(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="SS 304 Anchor Eye-Bolts">SS 304 Anchor Eye-Bolts (Rust-Proof)</option>
                    <option value="Marine SS 316 Fasteners">Marine SS 316 Fasteners (Zero Rust)</option>
                    <option value="Heavy Brass Anchors">Heavy Brass Anchors</option>
                    <option value="Extruded Aluminium Track">Extruded Aluminium Track (Invisible Grills)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Config Summary Card */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950 p-6 border border-cyan-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-cyan-400">
                    Calculated Configuration
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    Custom Tailored
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  {netType} Specification
                </h3>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Aperture Size:</span>
                    <span className="font-semibold text-slate-200">{aperture}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Twine Gauge:</span>
                    <span className="font-semibold text-slate-200">{thickness}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Finish Color:</span>
                    <span className="font-semibold text-slate-200">{color}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Anchor System:</span>
                    <span className="font-semibold text-slate-200">{hardware}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Est. Breaking Load:</span>
                    <span className="font-semibold text-emerald-400">250kg - 400kg+</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-[11px] text-slate-300 space-y-1 mb-6">
                  <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Doorstep Laser Survey</span>
                  </div>
                  <p className="text-slate-400">
                    We will bring material samples of this exact specification directly to your Bangalore doorstep for physical inspection.
                  </p>
                </div>
              </div>

              {/* Action */}
              <a
                href={customWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Custom Spec to WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
