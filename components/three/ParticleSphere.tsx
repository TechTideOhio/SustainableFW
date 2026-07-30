"use client";
import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { WebGLCanvas } from './WebGLCanvas';
import { cn } from '@/lib/utils';

function generateSpherePoints(count: number, radius: number): Float32Array {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / count);
    const phi = Math.PI * (1 + Math.sqrt(5)) * i;
    points[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = radius * Math.cos(theta);
  }
  return points;
}

interface ParticleSphereSceneProps {
  count?: number;
  radius?: number;
  color?: string;
  speed?: number;
}

function ParticleSphereScene({
  count = 5000,
  radius = 2,
  color = '#d9ff00',
  speed = 0.3,
}: ParticleSphereSceneProps) {
  const ref = React.useRef<THREE.Points>(null);
  const positions = React.useMemo(
    () => generateSpherePoints(count, radius),
    [count, radius]
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x += delta * speed * 0.3;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

interface ParticleSphereProps extends ParticleSphereSceneProps {
  className?: string;
}

function ParticleSphere({ className, ...sceneProps }: ParticleSphereProps) {
  return (
    <WebGLCanvas className={cn('h-[400px] w-full', className)}>
      <ParticleSphereScene {...sceneProps} />
    </WebGLCanvas>
  );
}

export { ParticleSphere, ParticleSphereScene, type ParticleSphereProps };
