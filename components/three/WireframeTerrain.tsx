"use client";
import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { WebGLCanvas } from './WebGLCanvas';
import { cn } from '@/lib/utils';

interface WireframeTerrainSceneProps {
  color?: string;
  speed?: number;
  amplitude?: number;
}

function WireframeTerrainScene({
  color = '#d9ff00',
  speed = 1,
  amplitude = 0.5,
}: WireframeTerrainSceneProps) {
  const geoRef = React.useRef<THREE.PlaneGeometry>(null);
  const originalPositions = React.useRef<Float32Array | null>(null);

  React.useEffect(() => {
    if (geoRef.current) {
      originalPositions.current = new Float32Array(
        geoRef.current.attributes.position.array
      );
    }
  }, []);

  useFrame(({ clock }) => {
    if (!geoRef.current || !originalPositions.current) return;
    const time = clock.getElapsedTime() * speed;
    const pos = geoRef.current.attributes.position;
    const orig = originalPositions.current;
    for (let i = 0; i < pos.count; i++) {
      const x = orig[i * 3];
      const y = orig[i * 3 + 1];
      pos.setZ(
        i,
        Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * amplitude
      );
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry ref={geoRef} args={[20, 20, 60, 60]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  );
}

interface WireframeTerrainProps extends WireframeTerrainSceneProps {
  className?: string;
}

function WireframeTerrain({ className, ...sceneProps }: WireframeTerrainProps) {
  return (
    <WebGLCanvas className={cn('h-[400px] w-full', className)}>
      <ambientLight intensity={0.5} />
      <WireframeTerrainScene {...sceneProps} />
    </WebGLCanvas>
  );
}

export {
  WireframeTerrain,
  WireframeTerrainScene,
  type WireframeTerrainProps,
};
