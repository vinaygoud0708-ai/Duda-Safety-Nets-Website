import React from 'react';
import { X, MessageCircle, ShieldCheck, CheckCircle2, Ruler, Award, Phone } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export default function ServiceDetailModal({ service, onClose }) {
  if (!service) return null;

  const modalWhatsApp = createWhatsAppLink(
    `Hello Dúda Safety Nets! I would like to get a quote and schedule a free site inspection for ${service.title} in Bangalore.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {service.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Technical Specifications Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Technical Specifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-950/60 p-4 rounded-2xl border border-white/5">
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">Material Standard</span>
                <span className="text-xs font-semibold text-white">{service.specs.material}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">Mesh Aperture</span>
                <span className="text-xs font-semibold text-white">{service.specs.meshSize}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">Twine / Wire Caliber</span>
                <span className="text-xs font-semibold text-white">{service.specs.twine}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">Warranty Coverage</span>
                <span className="text-xs font-semibold text-emerald-400">{service.specs.warranty}</span>
              </div>
              <div className="sm:col-span-2 flex flex-col pt-1 border-t border-white/5">
                <span className="text-[11px] text-slate-400">Best Suited For</span>
                <span className="text-xs font-medium text-slate-300">{service.specs.suitableFor}</span>
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/40 p-2 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={modalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Get WhatsApp Quote for This Net</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-600/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Technician</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
