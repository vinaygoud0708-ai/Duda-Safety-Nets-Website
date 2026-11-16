import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import BalconyScene from './BalconyScene';
import NetModel from './NetModel';
import * as THREE from 'three';
import { Move3d, Lock, Unlock, Sparkles } from 'lucide-react';

function CameraRig({ isTouchExploring }) {
  const vec = new THREE.Vector3();
  useFrame((state) => {
    if (!isTouchExploring) {
      // Subtle device / mouse parallax sway
      state.camera.position.lerp(
        vec.set(
          state.pointer.x * 0.45,
          state.pointer.y * 0.25,
          5.3
        ),
        0.05
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
  return null;
}

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-md z-20">
      <div className="w-10 h-10 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mb-3"></div>
      <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
        Loading 3D Balcony Architecture...
      </p>
    </div>
  );
}

export default function Hero3DCanvas({ activeState, onSelectHotspot, activeHotspot }) {
  const [touchExplore, setTouchExplore] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-950 via-midnight-900 to-slate-950 shadow-2xl shadow-cyan-950/30">
      {/* 360° Touch Explore Mode Toggle (Mobile Optimization) */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
        <button
          type="button"
          onClick={() => setTouchExplore(!touchExplore)}
          className={`pointer-events-auto select-none inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide backdrop-blur-xl border transition-all duration-300 shadow-lg ${
            touchExplore
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-emerald-500/20'
              : 'bg-slate-900/80 text-slate-300 border-white/15 hover:bg-slate-800'
          }`}
        >
          {touchExplore ? (
            <>
              <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              <span>360° Orbit Active (Swipe to Turn)</span>
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tap for 360° Touch Orbit</span>
            </>
          )}
        </button>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 border border-white/5 text-[10px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>60 FPS GPU</span>
        </span>
      </div>

      {/* R3F Canvas with mobile GPU capping & touch handling */}
      <div
        className="w-full h-full"
        style={{ touchAction: touchExplore ? 'none' : 'pan-y' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 5.3], fov: 46 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance'
            }}
            onPointerDown={() => setIsInteracting(true)}
            onPointerUp={() => setIsInteracting(false)}
          >
            {/* Ambient Lighting */}
            <ambientLight intensity={0.9} color="#0f172a" />

            {/* Golden-Hour Sunlight (From Top Right) */}
            <directionalLight
              position={[4.5, 4.2, 3.5]}
              intensity={2.3}
              color="#fbbf24"
              castShadow
            />

            {/* Cool Sky Cyan Fill Light (From Left) */}
            <directionalLight
              position={[-4, 2.5, 2]}
              intensity={2.6}
              color="#38bdf8"
            />

            {/* Recessed Warm Ceiling Pot Light */}
            <pointLight
              position={[0, 2, 0]}
              intensity={1.4}
              color="#fef08a"
              distance={4.5}
            />

            <CameraRig isTouchExploring={touchExplore || isInteracting} />

            {/* Float Wrap for cinematic drift */}
            <Float
              speed={isInteracting || touchExplore ? 0 : 1.1}
              rotationIntensity={isInteracting || touchExplore ? 0 : 0.07}
              floatIntensity={isInteracting || touchExplore ? 0 : 0.1}
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

            {/* OrbitControls enabled conditionally */}
            <OrbitControls
              enabled={touchExplore || isInteracting}
              enableZoom={false}
              enablePan={false}
              autoRotate={!touchExplore && !isInteracting}
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 2.6}
              maxPolarAngle={Math.PI / 1.75}
              minAzimuthAngle={-Math.PI / 3.6}
              maxAzimuthAngle={Math.PI / 3.6}
              dampingFactor={0.06}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* Touch Orbit Instructions Bottom Pill */}
      {touchExplore && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-400/40 text-[10px] text-emerald-300 font-semibold shadow-lg animate-bounce pointer-events-none">
          Swipe with 1 finger to rotate balcony
        </div>
      )}
    </div>
  );
}
