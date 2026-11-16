import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import BalconyScene from './BalconyScene';
import NetModel from './NetModel';
import { Move3d, RotateCw, ZoomIn } from 'lucide-react';

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md z-20">
      <div className="w-12 h-12 border-3 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mb-3"></div>
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
        Loading 3D Balcony Architecture...
      </p>
    </div>
  );
}

export default function Hero3DCanvas({ activeState, onSelectHotspot, activeHotspot }) {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="relative w-full h-[480px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-950/90 via-midnight-900 to-slate-950 shadow-2xl shadow-cyan-950/30">
      {/* 3D Viewport Controls Hint */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[11px] text-slate-300 pointer-events-none select-none">
        <Move3d className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>Drag to Orbit 3D Scene</span>
      </div>

      {/* R3F Canvas */}
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, 5.4], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
        >
          {/* Ambient Foundation */}
          <ambientLight intensity={0.9} color="#0f172a" />

          {/* Warm Golden-Hour Sunlight (From Top Right) */}
          <directionalLight
            position={[4.5, 4.2, 3.5]}
            intensity={2.4}
            color="#fbbf24"
            castShadow
          />

          {/* Cool Cyan Architectural Rim Light (From Left) */}
          <directionalLight
            position={[-4, 2.5, 2]}
            intensity={2.8}
            color="#38bdf8"
          />

          {/* Balcony Ceiling Recessed Warm Glow */}
          <pointLight
            position={[0, 2, 0]}
            intensity={1.5}
            color="#fef08a"
            distance={4.5}
          />

          {/* Subtle Float Wrap */}
          <Float
            speed={isInteracting ? 0 : 1.2}
            rotationIntensity={isInteracting ? 0 : 0.08}
            floatIntensity={isInteracting ? 0 : 0.12}
          >
            <group position={[0, -0.1, 0]}>
              <BalconyScene />
              <NetModel
                activeState={activeState}
                onSelectHotspot={onSelectHotspot}
                activeHotspot={activeHotspot}
              />
            </group>
          </Float>

          {/* Smooth Constrained OrbitControls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={!isInteracting}
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2.6}
            maxPolarAngle={Math.PI / 1.75}
            minAzimuthAngle={-Math.PI / 3.8}
            maxAzimuthAngle={Math.PI / 3.8}
            dampingFactor={0.06}
          />
        </Canvas>
      </Suspense>

      {/* Floating 3D Specs Stamp */}
      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 bg-slate-900/70 backdrop-blur-md border border-white/5 px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span>Three.js Engine 60FPS</span>
      </div>
    </div>
  );
}
