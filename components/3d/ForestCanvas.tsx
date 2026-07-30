"use client";
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import Forest, { ForestProps } from './Forest';
import { gsap } from 'gsap';

export interface ForestCanvasProps extends ForestProps {
  interactive?: boolean;
}

export default function ForestCanvas({
  healthScore,
  season,
  fireRisk,
  canopyDensity,
  interactive = false
}: ForestCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      // Initial camera animation
      gsap.from(cameraRef.current.position, {
        z: 30,
        y: 15,
        duration: 2.5,
        ease: "power3.inOut"
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full relative">
      <Canvas shadows className="h-full w-full">
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 5, 15]}
          fov={45}
        />
        <Suspense fallback={null}>
          <Forest 
            healthScore={healthScore}
            season={season}
            fireRisk={fireRisk}
            canopyDensity={canopyDensity}
          />
        </Suspense>
        <OrbitControls 
          enableZoom={interactive} 
          enablePan={interactive}
          minDistance={5}
          maxDistance={30}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={interactive ? 0.5 : 0.3}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/30 pointer-events-none" />
    </div>
  );
}
