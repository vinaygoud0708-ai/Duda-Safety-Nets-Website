import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Award, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export default function ServiceBottomSheet({ service, onClose }) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [service]);

  if (!service) return null;

  const quoteWhatsApp = createWhatsAppLink(
    `Hello Dúda Safety Nets! I want a doorstep inspection and price quote for *${service.title}* in Bangalore.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Bottom Sheet Card */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-slate-900/95 border border-white/15 shadow-2xl z-10 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* iOS-Style Swipe Indicator / Drag Bar */}
          <div className="w-full flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-12 h-1.5 rounded-full bg-slate-700"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative h-52 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-950">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

            <div className="absolute bottom-4 left-5 right-5">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-wider mb-1.5 inline-block">
                {service.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Sheet Body Content */}
          <div className="p-5 sm:p-6 space-y-5 flex-1 overflow-y-auto">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Spec Matrix */}
            <div>
              <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Award className="w-4 h-4" />
                <span>Technical Specifications</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-3.5 rounded-2xl border border-white/5 text-xs">
                <div>
                  <div className="text-[10px] text-slate-400">Material Standard</div>
                  <div className="font-semibold text-slate-200">{service.specs.material}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Mesh Aperture</div>
                  <div className="font-semibold text-cyan-300">{service.specs.meshSize}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Twine / Cable Caliber</div>
                  <div className="font-semibold text-amber-300">{service.specs.twine}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Warranty Coverage</div>
                  <div className="font-semibold text-emerald-400">{service.specs.warranty}</div>
                </div>
                <div className="col-span-2 pt-1 border-t border-white/5">
                  <div className="text-[10px] text-slate-400">Best Suited For</div>
                  <div className="font-medium text-slate-300 text-[11px]">{service.specs.suitableFor}</div>
                </div>
              </div>
            </div>

            {/* Key Advantages */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Certified Features
              </div>
              <div className="space-y-1.5">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doorstep Assurance */}
            <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Free Doorstep Inspection within 2 Hours</span>
              </span>
              <span className="text-amber-400 font-bold">Bangalore-Wide</span>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-4 bg-slate-950/90 border-t border-white/10 flex items-center gap-2.5 shrink-0">
            <a
              href={quoteWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get WhatsApp Quote</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
