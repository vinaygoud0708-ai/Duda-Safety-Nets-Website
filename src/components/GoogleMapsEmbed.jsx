import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function GoogleMapsEmbed() {
  return (
    <section id="location" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Info Side */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[11px] font-bold uppercase tracking-wider mb-4 inline-block">
                  Bangalore Headquarters
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  Visit Our Base Office
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Walk in to view physical material rolls, load-test anchors, and speak with our senior safety engineers.
                </p>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Head Office Address</div>
                      <div className="text-slate-400 leading-normal">{COMPANY_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Operating Hours</div>
                      <div className="text-slate-400">{COMPANY_INFO.hours} (All 7 Days)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Direct Helpline</div>
                      <div className="text-slate-400">{COMPANY_INFO.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 transition-colors shadow-lg"
              >
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
              </a>
            </div>

            {/* Google Maps Iframe */}
            <div className="lg:col-span-7 h-72 lg:h-auto min-h-[320px] relative bg-slate-950">
              <iframe
                title="Dúda Safety Nets Google Maps Location"
                src={COMPANY_INFO.googleEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[1.05]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
