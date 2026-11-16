import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { createWhatsAppLink } from '../data/companyData';
import { Shield, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function ServiceCatalog({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-20 relative bg-slate-950/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full 16-Service Catalog</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Safety Nets for Every Application
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Tap any service card to open its technical specification bottom sheet with mesh aperture and twine gauge data.
          </p>
        </div>

        {/* Horizontal Swipeable Filter Chips (Mobile-First) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 16-Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service) => {
            const cardWhatsApp = createWhatsAppLink(
              `Hello Dúda Safety Nets! I want an instant quote for *${service.title}* in Bangalore.`
            );

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 overflow-hidden shadow-xl transition-all duration-300 active:scale-[0.99]"
              >
                <div onClick={() => onSelectService(service)} className="cursor-pointer">
                  {/* Image with Tag */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/10 text-[9px] font-bold text-amber-300 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    {/* Warranty */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[9px] font-bold text-emerald-300">
                        {service.specs.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                      {service.shortDesc}
                    </p>

                    {/* Spec Mini Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="text-[10px] font-medium bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                        Aperture: {service.specs.meshSize.split('/')[0]}
                      </span>
                      <span className="text-[10px] font-medium bg-slate-950 text-cyan-300 px-2 py-0.5 rounded border border-white/5">
                        Gauge: {service.specs.twine.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-colors active:scale-95"
                  >
                    <span>View Specs</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </button>

                  <a
                    href={cardWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
