import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export default function FloatingDock({ onOpenForm }) {
  return (
    <div className="fixed bottom-3 left-3 right-3 sm:hidden z-40">
      <div className="bg-slate-950/90 backdrop-blur-2xl border border-white/10 p-2 rounded-2xl shadow-2xl shadow-black/80 flex items-center justify-between gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={createWhatsAppLink("Hello Dúda Safety Nets! I want a free quote.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-700/40 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Free Inspection CTA */}
        <button
          type="button"
          onClick={onOpenForm}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Free Visit</span>
        </button>
      </div>
    </div>
  );
}
