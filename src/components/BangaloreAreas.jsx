import React, { useState } from 'react';
import { BANGALORE_AREAS, createWhatsAppLink } from '../data/companyData';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';

export default function BangaloreAreas() {
  const [activeArea, setActiveArea] = useState('MS Palya');

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Navigation className="w-3.5 h-3.5" />
            <span>Bangalore-Wide Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Doorstep Service Across 24+ Localities
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Mobile installation vans stationed across North, South, East, and West Bengaluru for same-day free inspection.
          </p>
        </div>

        {/* Areas Interactive Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-8">
          {BANGALORE_AREAS.map((area) => {
            const isSelected = activeArea === area;
            return (
              <button
                key={area}
                type="button"
                onClick={() => setActiveArea(area)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-cyan-500 text-white border-cyan-400 shadow-md shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border-white/5 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                <MapPin className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                <span>{area}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Area Callout Glass Banner */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between text-xs text-slate-300 shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <div className="font-bold text-white">Technician Available in {activeArea}</div>
              <div className="text-[11px] text-slate-400">Response time: ~45 to 90 mins</div>
            </div>
          </div>

          <a
            href={createWhatsAppLink(`Hello Dúda Safety Nets! I am in ${activeArea}, Bangalore and need a technician to visit for safety nets quote.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0"
          >
            <span>Book in {activeArea}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
