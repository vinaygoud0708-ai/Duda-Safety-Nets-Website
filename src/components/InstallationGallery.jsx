import React, { useState } from 'react';
import { Camera, MapPin, Eye, CheckCircle2, Sparkles, X } from 'lucide-react';

const REAL_PROJECTS = [
  {
    id: 1,
    title: "Indoor Staircase Safety Net Installation",
    location: "Villas, Sahakara Nagar, Bengaluru",
    type: "Child Safety",
    image: "./images/staircase-terrace-nets.jpg",
    desc: "Seamless white high-tensile safety net anchored along interior open marble staircase void."
  },
  {
    id: 2,
    title: "Commercial High-Rise Duct Area Covering",
    location: "Luxury Apartments, Hebbal, Bengaluru",
    type: "Duct Pigeon Proofing",
    image: "./images/duct-area-nets.jpg",
    desc: "Certified abseiling technician installing continuous vertical pigeon-proof barrier down building shaft."
  },
  {
    id: 3,
    title: "Complete House Exterior Facade Encapsulation",
    location: "Independent Residence, Yelahanka, Bengaluru",
    type: "Whole House Netting",
    image: "./images/house-covering-nets.jpg",
    desc: "Full building envelope preventing monkey and pigeon perching while keeping architecture pristine."
  },
  {
    id: 4,
    title: "Apartment Building Shaft & Window Protection",
    location: "Residential Complex, MS Palya, Bengaluru",
    type: "Pigeon Protection",
    image: "./images/building-pigeon-covering.jpg",
    desc: "Heavy-duty UV stabilized netting installed across all window shafts to prevent nesting."
  },
  {
    id: 5,
    title: "Ground Perimeter Shade & Driveway Compound Net",
    location: "Gated Community, Vidyaranyapura, Bengaluru",
    type: "Garden & Shade Netting",
    image: "./images/sports-compound-net.jpg",
    desc: "High canopy green shade net over driveway and play court to block harsh sun and stray balls."
  },
  {
    id: 6,
    title: "High-Rise Balcony SS 316 Invisible Grills",
    location: "Prestige High-Rise, Whitefield, Bengaluru",
    type: "SS 316 Invisible Grills",
    image: "./images/invisible-grills-cityview.jpg",
    desc: "Marine-grade stainless steel cables maintaining uninterrupted 24th-floor Bangalore skyline views."
  },
  {
    id: 7,
    title: "Staircase Railing On-Site Net Tensioning",
    location: "Duplex Home, HSR Layout, Bengaluru",
    type: "Technician Craftsmanship",
    image: "./images/staircase-installation-work.jpg",
    desc: "Precision tensioning with diamond knot fasteners along stainless steel banister."
  },
  {
    id: 8,
    title: "Commercial Sports Turf High-Altitude Netting",
    location: "Football Arena, Hennur Road, Bengaluru",
    type: "Sports Turf",
    image: "./images/turf-sports-netting.jpg",
    desc: "Full 30ft perimeter and ceiling netting with high-impact shock absorption for box cricket & football."
  }
];

export default function InstallationGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Verified Bangalore Installations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real On-Site Project Gallery
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every photo shown below is from actual customer installations completed by Dúda Safety Nets across Bangalore homes, apartments, and sports venues.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedPhoto(proj)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-amber-300">
                    {proj.type}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                    <span className="p-2.5 rounded-full bg-cyan-500 text-white shadow-lg">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{proj.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified 100% On-Site Installation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] bg-slate-950 overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold mb-2 inline-block">
                {selectedPhoto.type}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-cyan-400 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedPhoto.location}</span>
              </p>
              <p className="text-sm text-slate-300">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
