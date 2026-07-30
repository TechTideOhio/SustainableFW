import { Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import { WebGLCanvas } from './WebGLCanvas';
import { cn } from '@/lib/utils';

interface FloatingHeroSceneProps {
  color?: string;
  distort?: number;
  speed?: number;
}

function FloatingHeroScene({
  color = '#a8d946',
  distort = 0.4,
  speed = 2,
}: FloatingHeroSceneProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            distort={distort}
            speed={speed}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
      <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={10} blur={2} />
      <Environment preset="city" />
    </>
  );
}

interface FloatingHeroProps extends FloatingHeroSceneProps {
  className?: string;
}

function FloatingHero({ className, ...sceneProps }: FloatingHeroProps) {
  return (
    <WebGLCanvas className={cn('h-[400px] w-full', className)}>
      <FloatingHeroScene {...sceneProps} />
    </WebGLCanvas>
  );
}

export { FloatingHero, FloatingHeroScene, type FloatingHeroProps };
