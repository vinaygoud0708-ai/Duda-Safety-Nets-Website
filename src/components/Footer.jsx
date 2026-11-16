import React from 'react';
import { Shield, Phone, MapPin, Clock, MessageCircle, Heart, Award } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-28 sm:pb-16 text-slate-400 text-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Certification (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg">
                <Shield className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight">
                  Dúda <span className="text-amber-400">Safety Nets</span>
                </span>
                <div className="text-[10px] text-slate-400">Bangalore Authorized Dealer</div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Bangalore's authorized dealers and manufacturers of ISO-certified Garware Nets, HDPE Nylon Nets, Transparent Monofilament Nets, and SS 316 Marine Invisible Grills.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/5 text-[11px] text-amber-400 font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>ISO 9001:2015 Quality Verified</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#top" className="hover:text-cyan-400 transition-colors">3D Balcony Scene</a></li>
              <li><a href="#materials" className="hover:text-cyan-400 transition-colors">Core Materials</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">16 Safety Services</a></li>
              <li><a href="#customize" className="hover:text-cyan-400 transition-colors">Net Configurator</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Work Process</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Real Installations</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Solutions
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Garware Balcony Nets</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">SS 316 Invisible Grills</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Pigeon Safety Nets</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Children Fall Protection</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Duct Area Shaft Nets</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cricket Practice Cages</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact &amp; Office
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-300 leading-normal">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[11px] text-white hover:text-cyan-400 font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] text-slate-400">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Dúda Safety Nets Bangalore. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#quote-form" className="hover:text-cyan-400">Free Doorstep Visit</a>
            <span>•</span>
            <a href={COMPANY_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Google Maps</a>
            <span>•</span>
            <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
