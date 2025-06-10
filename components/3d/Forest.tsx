import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

// Simple tree model
const Tree = ({ position, scale, rotation, color = '#2d4c25' }) => {
  const treeRef = useRef();
  
  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh ref={treeRef} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.4, 1, 8]} />
        <meshStandardMaterial color="#5c3d2e" />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow>
        <coneGeometry args={[1.5, 3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

// Forest particles
const ForestParticles = ({ count = 100 }) => {
  const particles = useRef();
  
  const particlePositions = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        position: [
          (Math.random() - 0.5) * 30,
          Math.random() * 15,
          (Math.random() - 0.5) * 30
        ],
        scale: Math.random() * 0.5 + 0.1,
        rotation: [0, Math.random() * Math.PI, 0],
        color: Math.random() > 0.5 ? '#2d4c25' : '#3a5e30'
      });
    }
    return positions;
  }, [count]);

  useFrame((state) => {
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
          />
        </Float>
      ))}
    </group>
  );
};

// Ground plane
const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#2a3e1f" />
    </mesh>
  );
};

// Main Forest component
export default function Forest() {
  return (
    <>
      <ForestParticles count={50} />
      <Ground />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
      />
    </>
  );
}
