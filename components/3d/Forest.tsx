import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export interface ForestProps {
  healthScore?: number; // 0-100
  season?: 'spring' | 'summer' | 'autumn' | 'winter';
  fireRisk?: 'low' | 'moderate' | 'high' | 'critical';
  canopyDensity?: number; // 0-100
}

interface TreeProps {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  color?: string;
  season?: ForestProps['season'];
}

const Tree = ({ position, scale, rotation, color = '#2d4c25', season = 'summer' }: TreeProps) => {
  const treeRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.001;
    }
  });

  const isWinter = season === 'winter';
  const leafScale: [number, number, number] = isWinter ? [0.8, 1, 0.8] : [1, 1, 1];

  return (
    <group position={position} rotation={rotation} scale={scale} ref={treeRef}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.4, 1, 8]} />
        <meshStandardMaterial color="#5c3d2e" />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow scale={leafScale}>
        <coneGeometry args={[1.5, 3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {isWinter && (
        <mesh position={[0, 2.5, 0]} castShadow>
          <coneGeometry args={[0.5, 1, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      )}
    </group>
  );
};

const Flowers = ({ count = 30 }) => {
  const flowerPositions = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 2 + 0.1,
        (Math.random() - 0.5) * 30
      ] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05
    }));
  }, [count]);

  return (
    <group>
      {flowerPositions.map((f, i) => (
        <mesh key={i} position={f.position} scale={f.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color="#ff99cc" />
        </mesh>
      ))}
    </group>
  );
};

const Embers = ({ count = 50, critical = false }) => {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.5) * 40,
      y: Math.random() * 15,
      z: (Math.random() - 0.5) * 40,
      speedY: Math.random() * 0.05 + 0.02,
      speedX: (Math.random() - 0.5) * 0.02,
      color: critical ? (Math.random() > 0.5 ? '#ff0000' : '#ff4400') : '#ff8800'
    }));
  }, [count, critical]);

  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        const p = particles[i];
        child.position.y += p.speedY;
        child.position.x += p.speedX;
        if (child.position.y > 15) {
          child.position.y = 0;
          child.position.x = (Math.random() - 0.5) * 40;
        }
      });
    }
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.08, 4, 4]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}
    </group>
  );
};

const ForestParticles = ({ count = 100, healthScore = 100, season = 'summer' }: { count?: number; healthScore?: number; season?: ForestProps['season'] }) => {
  const particles = useRef<THREE.Group>(null);
  
  const particlePositions = useMemo(() => {
    const getColors = () => {
      if (season === 'autumn') return ['#ea580c', '#ca8a04', '#dc2626'];
      if (season === 'spring') return ['#4ade80', '#22c55e'];
      
      if (healthScore >= 80) return ['#2d4c25', '#3a5e30'];
      if (healthScore >= 60) return ['#5a6e25', '#4a5e20'];
      if (healthScore >= 40) return ['#6e5a25', '#5e4a20'];
      return ['#6e2525', '#5e2020'];
    };
    const colors = getColors();

    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 15,
        (Math.random() - 0.5) * 30
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.1,
      rotation: [0, Math.random() * Math.PI, 0] as [number, number, number],
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }, [count, healthScore, season]);

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={particles}>
      {particlePositions.map((particle, i) => (
        <Float key={i} speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <Tree 
            position={particle.position}
            scale={[particle.scale, particle.scale, particle.scale]}
            rotation={particle.rotation}
            color={particle.color}
            season={season}
          />
        </Float>
      ))}
    </group>
  );
};

const Ground = ({ season, fireRisk }: { season: ForestProps['season'], fireRisk: ForestProps['fireRisk'] }) => {
  const isWinter = season === 'winter';
  const isCritical = fireRisk === 'critical';
  
  let color = '#2a3e1f';
  if (isWinter) color = '#d4e0d9';
  else if (isCritical) color = '#1a1a1a';

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default function Forest({
  healthScore = 100,
  season = 'summer',
  fireRisk = 'low',
  canopyDensity = 50
}: ForestProps) {
  
  const treeCount = Math.floor(20 + (canopyDensity / 100) * 60);

  const lightColor = fireRisk === 'moderate' ? '#ffcc88' : '#ffffff';
  
  return (
    <>
      {fireRisk === 'critical' && <fog attach="fog" args={['#880000', 10, 40]} />}
      
      <ForestParticles count={treeCount} healthScore={healthScore} season={season} />
      {season === 'spring' && <Flowers count={50} />}
      
      {(fireRisk === 'high' || fireRisk === 'critical') && (
        <Embers count={fireRisk === 'critical' ? 100 : 40} critical={fireRisk === 'critical'} />
      )}
      
      <Ground season={season} fireRisk={fireRisk} />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={1} 
        color={lightColor}
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
      />
    </>
  );
}
