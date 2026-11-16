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
    <section id="services" className="py-20 relative bg-slate-950/60">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete 16-Service Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Safety Nets for Every Application
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-tensile fall arrest, invisible grills, pigeon deterrents, and heavy sports netting across residential apartments, standalone villas, and commercial properties.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 16-Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const cardWhatsApp = createWhatsAppLink(
              `Hello Dúda Safety Nets! I want an instant quote for ${service.title} in Bangalore.`
            );

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:bg-slate-900/90 overflow-hidden shadow-xl hover:shadow-cyan-950/40 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Service Photo with Genuine Bangalore Installation badge */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    {/* Warranty pill */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[10px] font-bold text-emerald-300">
                        {service.specs.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Mini Spec Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="text-[10px] font-medium bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                        {service.specs.meshSize}
                      </span>
                      <span className="text-[10px] font-medium bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                        {service.specs.twine.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </button>

                  <a
                    href={cardWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-700/20"
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
