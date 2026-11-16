import React from 'react';
import * as THREE from 'three';

export default function BalconyScene() {
  return (
    <group position={[0, 0, 0]}>
      {/* 1. Balcony Floor Slab (Warm Architectural Decking) */}
      <mesh position={[0, -2.1, -0.6]} receiveShadow>
        <boxGeometry args={[4.8, 0.22, 2.8]} />
        <meshStandardMaterial
          color="#1e222d"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Decorative Warm Trim along edge */}
      <mesh position={[0, -2.0, 0.75]}>
        <boxGeometry args={[4.8, 0.04, 0.08]} />
        <meshStandardMaterial
          color="#d97706"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* 2. Concrete Lower Balcony Parapet Wall */}
      <mesh position={[0, -2.25, 0.05]} receiveShadow>
        <boxGeometry args={[4.2, 0.4, 0.15]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.7}
        />
      </mesh>

      {/* 3. Balcony Ceiling Slab */}
      <mesh position={[0, 2.15, -0.6]} receiveShadow>
        <boxGeometry args={[4.8, 0.2, 2.8]} />
        <meshStandardMaterial
          color="#111827"
          roughness={0.6}
        />
      </mesh>

      {/* Recessed Warm Ceiling Spotlight Casing */}
      {[-0.8, 0.8].map((x, idx) => (
        <group key={`light-${idx}`} position={[x, 2.05, -0.3]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
            <meshStandardMaterial color="#475569" metalness={0.9} />
          </mesh>
          <mesh position={[0, -0.02, 0]}>
            <circleGeometry args={[0.06, 16]} rotation={[Math.PI / 2, 0, 0]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        </group>
      ))}

      {/* 4. Left Architectural Support Pillar */}
      <mesh position={[-2.1, 0, -0.4]} receiveShadow castShadow>
        <boxGeometry args={[0.45, 4.4, 2.4]} />
        <meshStandardMaterial
          color="#182234"
          roughness={0.65}
          metalness={0.15}
        />
      </mesh>

      {/* Modern Accent Vertical Slat on Pillar */}
      {[-0.7, -0.3, 0.1].map((z, idx) => (
        <mesh key={`slat-${idx}`} position={[-1.87, 0, z]}>
          <boxGeometry args={[0.03, 4.1, 0.08]} />
          <meshStandardMaterial
            color="#d97706"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      ))}

      {/* 5. Right Balcony Frame Member */}
      <mesh position={[2.05, 0, 0]}>
        <boxGeometry args={[0.12, 4.2, 0.12]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* 6. Subtle Bengaluru Cityline Depth Backdrop Silhouette */}
      <group position={[0, -0.5, -3.8]}>
        {/* Soft skyline blocks */}
        {[-3, -1.8, -0.6, 0.7, 2, 3.2].map((x, i) => (
          <mesh key={`bldg-${i}`} position={[x, -0.5 + (i % 3) * 0.4, 0]}>
            <boxGeometry args={[0.9, 2.4 + (i % 3) * 0.8, 0.1]} />
            <meshBasicMaterial
              color="#070e1e"
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>

      {/* Ambient Floor Reflection Plate */}
      <mesh position={[0, -2.1, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.6, 2.6]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
}
