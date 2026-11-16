import React from 'react';
import { Shield, Sparkles, Eye, Activity } from 'lucide-react';

export const MATERIAL_MODES = [
  {
    id: 'grills',
    label: 'SS 316 Invisible Grills',
    sub: 'Marine-grade steel cables',
    badge: '400kg Rating',
    icon: Sparkles,
    color: 'from-amber-400 to-amber-600',
    borderColor: 'border-amber-400/50',
    stat: 'Tensile: 400kg | Spacing: 2" | SS 316 Marine Cable'
  },
  {
    id: 'garware',
    label: 'Garware HDPE Net',
    sub: 'Wind-ripple diamond mesh',
    badge: 'ISO 9001',
    icon: Shield,
    color: 'from-cyan-400 to-blue-600',
    borderColor: 'border-cyan-400/50',
    stat: 'Heat-set Knots | 300+ KLY UV Stabilized | Zero Sag'
  },
  {
    id: 'transparent',
    label: 'Transparent Monofilament',
    sub: '100% view preservation',
    badge: 'Near Invisible',
    icon: Eye,
    color: 'from-sky-300 to-teal-400',
    borderColor: 'border-sky-300/50',
    stat: '0.8mm Japanese Monofilament | 98% Light Transmission'
  },
  {
    id: 'loadtest',
    label: 'Load & Strength Test',
    sub: 'Interactive 3D stress pins',
    badge: 'Simulate',
    icon: Activity,
    color: 'from-rose-500 to-amber-500',
    borderColor: 'border-rose-500/50',
    stat: 'Click glowing 3D pins to inspect anchors & pull-out ratings'
  }
];

export default function MaterialSwitcherBar({ activeState, onChangeState }) {
  const current = MATERIAL_MODES.find(m => m.id === activeState) || MATERIAL_MODES[0];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Floating Glassmorphic Container */}
      <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/60 p-2 sm:p-2.5 rounded-2xl shadow-2xl shadow-black/60">
        {/* Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {MATERIAL_MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = activeState === mode.id;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => onChangeState(mode.id)}
                className={`relative flex flex-col items-start p-2.5 sm:p-3 rounded-xl transition-all duration-300 text-left ${
                  isActive
                    ? `bg-slate-800/95 border ${mode.borderColor} shadow-lg shadow-black/40 scale-[1.02]`
                    : 'bg-slate-800/30 border border-white/5 hover:bg-slate-800/60 hover:border-white/10'
                }`}
              >
                {/* Active Indicator Top Light */}
                {isActive && (
                  <span className="absolute top-1.5 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                )}

                <div className="flex items-center gap-2 mb-1">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-700/40 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {mode.badge}
                  </span>
                </div>

                <div className={`text-xs sm:text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {mode.label}
                </div>

                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {mode.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live 3D Status Bar */}
        <div className="mt-2 pt-2 border-t border-white/5 flex flex-wrap items-center justify-between px-2 text-[11px] text-slate-300 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">Interactive 3D Engine:</span>
            <span className="font-semibold text-cyan-300">{current.label}</span>
          </div>
          <div className="text-slate-400 font-mono text-[10px] bg-slate-950/60 px-2 py-0.5 rounded border border-white/5">
            {current.stat}
          </div>
        </div>
      </div>
    </div>
  );
}
