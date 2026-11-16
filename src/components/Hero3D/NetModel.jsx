import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function NetModel({ activeState, onSelectHotspot, activeHotspot }) {
  const meshRef = useRef();
  const waveRef = useRef();

  // Gentle real-time breeze flutter for Garware HDPE Net
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (waveRef.current && activeState === 'garware') {
      const position = waveRef.current.geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const u = position.getX(i);
        const v = position.getY(i);
        const z = Math.sin(u * 3.2 + time * 2.8) * 0.045 * Math.sin(v * 2.2 + time * 2.0);
        position.setZ(i, z);
      }
      position.needsUpdate = true;
    }
  });

  // AR Hotspot Pins for Strength & Anchor Mode
  const hotspots = [
    {
      id: "anchor-top",
      position: [-1.4, 1.85, 0],
      title: "SS 304 Anchor Eye-Bolt",
      desc: "Fastened with 10mm expansion rawlplug into RCC slab. Resists 350kg lateral pull.",
      metric: "Pull Load: 350kg"
    },
    {
      id: "cable-center",
      position: [0, 0, 0.05],
      title: "150kg–400kg+ Tested Load",
      desc: "High-grade virgin polymer core. Withstands heavy body impact with zero sag.",
      metric: "Tested: 400 kgf"
    },
    {
      id: "track-bottom",
      position: [1.3, -1.85, 0],
      title: "Extruded Aluminum Track",
      desc: "Zero-rust 2mm architectural frame with vibration-dampening nylon spacers.",
      metric: "10-Yr Guarantee"
    }
  ];

  // 30 vertical stainless steel cables for SS 316 Invisible Grills
  const cables = useMemo(() => {
    const count = 30;
    const items = [];
    const width = 3.6;
    const startX = -width / 2;
    const step = width / (count - 1);

    for (let i = 0; i < count; i++) {
      items.push({
        x: startX + i * step,
        key: `cable-${i}`
      });
    }
    return items;
  }, []);

  return (
    <group ref={meshRef} position={[0, 0.05, 0]}>
      {/* 1. SS 316 INVISIBLE GRILLS */}
      {activeState === 'grills' && (
        <group>
          {/* Top Extruded Aluminum Track */}
          <mesh position={[0, 1.95, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.85, 0.08, 0.12]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Bottom Extruded Aluminum Track */}
          <mesh position={[0, -1.95, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.85, 0.08, 0.12]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* High-Tensile Marine Steel Vertical Cables */}
          {cables.map((c) => (
            <mesh key={c.key} position={[c.x, 0, 0]}>
              <cylinderGeometry args={[0.007, 0.007, 3.85, 10]} />
              <meshStandardMaterial
                color="#e2e8f0"
                metalness={0.98}
                roughness={0.12}
                envMapIntensity={2.5}
              />
            </mesh>
          ))}

          {/* Horizontal Cross-Spacers */}
          {[-0.9, 0, 0.9].map((y, idx) => (
            <mesh key={`spacer-${idx}`} position={[0, y, 0]}>
              <cylinderGeometry args={[0.005, 0.005, 3.8, 8]} rotation={[0, 0, Math.PI / 2]} />
              <meshStandardMaterial
                color="#94a3b8"
                metalness={0.9}
                roughness={0.2}
                transparent
                opacity={0.65}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* 2. GARWARE HDPE NET (WITH BREEZE RIPPLE) */}
      {activeState === 'garware' && (
        <group>
          {/* Heavy Border Roping */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(3.7, 3.85, 0.02)]} />
            <lineBasicMaterial color="#d97706" linewidth={3} />
          </lineSegments>

          {/* Dynamic Breeze Wave Plane */}
          <mesh ref={waveRef} position={[0, 0, 0]}>
            <planeGeometry args={[3.65, 3.8, 28, 28]} />
            <meshStandardMaterial
              color="#1e293b"
              wireframe={true}
              wireframeLinewidth={2}
              roughness={0.5}
              metalness={0.2}
            />
          </mesh>

          {/* Authentic Garware Diamond Weave Overlay */}
          <mesh position={[0, 0, 0.005]} rotation={[0, 0, Math.PI / 4]}>
            <planeGeometry args={[2.7, 2.7, 24, 24]} />
            <meshStandardMaterial
              color="#38bdf8"
              wireframe={true}
              transparent
              opacity={0.55}
              roughness={0.3}
            />
          </mesh>

          {/* Heat-set knots at anchor corners */}
          {[-1.8, 1.8].map((x) =>
            [-1.9, 1.9].map((y) => (
              <mesh key={`knot-${x}-${y}`} position={[x, y, 0]}>
                <sphereGeometry args={[0.035, 12, 12]} />
                <meshStandardMaterial color="#c9a24b" metalness={0.8} roughness={0.3} />
              </mesh>
            ))
          )}
        </group>
      )}

      {/* 3. TRANSPARENT NET (99% UNBLOCKED SKYLINE VIEW) */}
      {activeState === 'transparent' && (
        <group>
          {/* Subtle perimeter clear cable */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(3.68, 3.85, 0.01)]} />
            <lineBasicMaterial color="#38bdf8" transparent opacity={0.35} />
          </lineSegments>

          {/* Ultra-fine clear monofilament micro-grid */}
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[3.65, 3.8, 44, 44]} />
            <meshStandardMaterial
              color="#e0f2fe"
              wireframe={true}
              transparent
              opacity={0.2}
              roughness={0.05}
              metalness={0.9}
            />
          </mesh>

          {/* Fresnel Shimmering Sheen Layer */}
          <mesh position={[0, 0, 0.002]}>
            <planeGeometry args={[3.65, 3.8]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.05}
              roughness={0.1}
              transmission={0.98}
              ior={1.33}
              clearcoat={1}
            />
          </mesh>
        </group>
      )}

      {/* 4. STRENGTH & ANCHOR X-RAY MODE */}
      {activeState === 'loadtest' && (
        <group>
          {/* Tensioned mesh under downward deflection */}
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[3.65, 3.8, 26, 26]} />
            <meshStandardMaterial
              color="#f59e0b"
              wireframe={true}
              wireframeLinewidth={2}
              emissive="#78350f"
              emissiveIntensity={0.35}
            />
          </mesh>

          {/* Test load simulated weight block */}
          <group position={[0, -0.4, 0.25]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.3, 0.35, 0.5, 24]} />
              <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.35, 0]}>
              <torusGeometry args={[0.12, 0.025, 12, 24]} />
              <meshStandardMaterial color="#f59e0b" metalness={0.9} />
            </mesh>
            {/* Tension test strap */}
            <mesh position={[0, 0.7, -0.1]} rotation={[0.4, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, 12]} />
              <meshStandardMaterial color="#dc2626" />
            </mesh>
          </group>

          {/* Glowing AR Hotspot Pins */}
          {hotspots.map((h) => {
            const isSelected = activeHotspot === h.id;
            return (
              <group
                key={h.id}
                position={h.position}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectHotspot?.(h.id);
                }}
              >
                {/* Glowing Core */}
                <mesh>
                  <sphereGeometry args={[0.07, 16, 16]} />
                  <meshStandardMaterial
                    color={isSelected ? "#10b981" : "#38bdf8"}
                    emissive={isSelected ? "#059669" : "#0284c7"}
                    emissiveIntensity={2.0}
                  />
                </mesh>

                {/* Pulsing Aura */}
                <mesh scale={isSelected ? [1.6, 1.6, 1.6] : [1.25, 1.25, 1.25]}>
                  <ringGeometry args={[0.08, 0.12, 24]} />
                  <meshBasicMaterial
                    color={isSelected ? "#34d399" : "#38bdf8"}
                    transparent
                    opacity={0.7}
                    side={THREE.DoubleSide}
                  />
                </mesh>

                {/* AR HTML Tooltip Badge */}
                <Html position={[0.15, 0.15, 0]} distanceFactor={6} zIndexRange={[100, 0]}>
                  <div
                    className={`cursor-pointer transition-all duration-300 pointer-events-auto select-none rounded-2xl border backdrop-blur-xl px-3 py-2 shadow-2xl ${
                      isSelected
                        ? "bg-slate-900/95 border-emerald-400/60 shadow-emerald-500/20 scale-105"
                        : "bg-slate-950/85 border-cyan-400/40 hover:border-cyan-300 hover:scale-105"
                    }`}
                    style={{ width: "220px" }}
                    onClick={() => onSelectHotspot?.(h.id)}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400">
                        Anchor X-Ray
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                        {h.metric}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white leading-snug">{h.title}</div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-normal">{h.desc}</div>
                  </div>
                </Html>
              </group>
            );
          })}
        </group>
      )}
    </group>
  );
}
