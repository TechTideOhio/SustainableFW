"use client";
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { cn } from '@/lib/utils';

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

interface WebGLCanvasProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const GradientFallback = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center',
      className
    )}
  >
    <p className="text-zinc-500 text-sm">3D preview unavailable</p>
  </div>
);

function WebGLCanvas({ children, className, fallback }: WebGLCanvasProps) {
  const [supported, setSupported] = React.useState(true);
  const reducedMotion = useReducedMotion();

  React.useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  const fb = fallback ?? <GradientFallback className={className} />;

  if (!supported || reducedMotion) return <>{fb}</>;

  return (
    <WebGLErrorBoundary fallback={fb}>
      <React.Suspense fallback={<GradientFallback className={className} />}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          className={cn('rounded-xl', className)}
        >
          {children}
        </Canvas>
      </React.Suspense>
    </WebGLErrorBoundary>
  );
}

export { WebGLCanvas, GradientFallback, type WebGLCanvasProps };
