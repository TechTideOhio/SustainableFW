'use client';

import { useState, useEffect } from 'react';
import type { CarbonCredit } from '@/lib/types/forest-data';

interface LedgerResponse {
  credits: CarbonCredit[];
  summary: {
    totalCredits: number;
    activeCredits: number;
    totalTonnes: number;
    totalValue: number;
  };
}

export function useCarbonLedger() {
  const [data, setData] = useState<LedgerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch('/api/carbon-ledger');
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
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}
