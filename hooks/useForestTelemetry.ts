'use client';

import { useState, useEffect } from 'react';
import type {
  ForestParcel,
  ForestTelemetry,
  DashboardSummary,
  CarbonHistory,
  EnvironmentalAlert,
} from '@/lib/types/forest-data';

interface ParcelWithTelemetry extends ForestParcel {
  telemetry: ForestTelemetry;
}

interface TelemetryResponse {
  parcels: ParcelWithTelemetry[];
  summary: DashboardSummary;
  carbonHistory: CarbonHistory;
  alerts: EnvironmentalAlert[];
}

export function useForestTelemetry() {
  const [data, setData] = useState<TelemetryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch('/api/forest-telemetry');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setLoading(false);
        }
      }
    }

    fetchData();

    // Poll every 30 seconds to simulate real-time telemetry
    const interval = setInterval(fetchData, 30_000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return { data, loading, error };
}
