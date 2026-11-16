import React from 'react';
import { Shield, Sparkles, Eye, Activity } from 'lucide-react';

export const MATERIAL_MODES = [
  {
    id: 'grills',
    label: 'SS 316 Grills',
    fullLabel: 'SS 316 Invisible Grills',
    sub: 'Marine steel cables',
    badge: '400kg Marine',
    icon: Sparkles,
    color: 'from-amber-400 to-amber-600',
    borderColor: 'border-amber-400/60',
    stat: 'Tensile: 400kg | Spacing: 2" | Marine SS 316 Cable'
  },
  {
    id: 'garware',
    label: 'Garware HDPE',
    fullLabel: 'Garware HDPE Net',
    sub: 'Breeze ripple mesh',
    badge: 'ISO 9001',
    icon: Shield,
    color: 'from-cyan-400 to-blue-600',
    borderColor: 'border-cyan-400/60',
    stat: '1.5mm Braided Diamond Weave | 300+ KLY UV | Zero Sag'
  },
  {
    id: 'transparent',
    label: 'Transparent',
    fullLabel: 'Transparent Net',
    sub: '99% unblocked view',
    badge: 'Clear View',
    icon: Eye,
    color: 'from-sky-300 to-teal-400',
    borderColor: 'border-sky-300/60',
    stat: '0.8mm Japanese Monofilament | 99% Unhindered Skyline'
  },
  {
    id: 'loadtest',
    label: 'Anchor X-Ray',
    fullLabel: 'Strength & Anchor Mode',
    sub: '150kg–400kg+ load',
    badge: '400kg Load',
    icon: Activity,
    color: 'from-rose-500 to-amber-500',
    borderColor: 'border-rose-500/60',
    stat: 'SS 304/316 Anchor Fasteners with AR Load Rating Pins'
  }
];

export default function MaterialSwitcherBar({ activeState, onChangeState }) {
  const current = MATERIAL_MODES.find(m => m.id === activeState) || MATERIAL_MODES[0];

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      {/* Mobile Thumb-Zone Floating Dock */}
      <div className="backdrop-blur-2xl bg-slate-900/85 border border-white/15 p-2 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80">
        {/* Buttons Grid (2 cols on small mobile, 4 cols on tablet/desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2">
          {MATERIAL_MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = activeState === mode.id;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => onChangeState(mode.id)}
                className={`relative flex flex-col items-start p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-300 text-left active:scale-95 ${
                  isActive
                    ? `bg-slate-800/95 border ${mode.borderColor} shadow-lg shadow-black/50 scale-[1.02]`
                    : 'bg-slate-950/40 border border-white/5 hover:bg-slate-800/50'
                }`}
              >
                {/* Active Indicator Top Light */}
                {isActive && (
                  <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                )}

                <div className="flex items-center gap-1.5 mb-1">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {mode.badge}
                  </span>
                </div>

                <div className={`text-xs sm:text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {mode.label}
                </div>

                <div className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">
                  {mode.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live 3D Status Bar */}
        <div className="mt-2 pt-2 border-t border-white/5 flex flex-wrap items-center justify-between px-2 text-[10px] sm:text-[11px] text-slate-300 gap-1.5">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="text-slate-400">Active Live 3D:</span>
            <span className="font-semibold text-cyan-300 truncate">{current.fullLabel}</span>
          </div>
          <div className="text-slate-400 font-mono text-[9px] sm:text-[10px] bg-slate-950/70 px-2 py-0.5 rounded border border-white/5 truncate max-w-full">
            {current.stat}
          </div>
        </div>
      </div>
    </div>
  );
}
