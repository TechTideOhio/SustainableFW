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

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

function useReducedMotion(): boolean {
  return React.useSyncExternalStore(subscribeReducedMotion, () => window.matchMedia(reducedMotionQuery).matches, () => false);
}

let webGLAvailable: boolean | undefined;
const subscribeSupport = () => () => {};
function getWebGLSupport() {
  webGLAvailable ??= isWebGLAvailable();
  return webGLAvailable;
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
  const supported = React.useSyncExternalStore(subscribeSupport, getWebGLSupport, () => false);
  const reducedMotion = useReducedMotion();

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
