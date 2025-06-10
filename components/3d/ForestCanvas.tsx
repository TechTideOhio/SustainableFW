import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Forest from './Forest';
import { gsap } from 'gsap';

export default function ForestCanvas() {
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
          <Forest />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.3}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/30 pointer-events-none" />
    </div>
  );
}
