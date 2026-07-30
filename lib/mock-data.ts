// =============================================================================
// Mock Data Generator
// Generates realistic forest telemetry data for the Digital Twin dashboard
// =============================================================================

import type {
  ForestParcel,
  ForestTelemetry,
  CarbonCredit,
  EnvironmentalAlert,
  DashboardSummary,
  CarbonHistory,
  TimeSeriesPoint,
} from '@/lib/types/forest-data';

// Seed-based random for deterministic data
function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) & 0x7fffffff;
    return state / 0x7fffffff;
  };
}

const rng = seededRandom(42);

// Helper to generate dates
function daysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

function monthsAgo(months: number): string {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  return d.toISOString();
}

// ---------------------------------------------------------------------------
// Forest Parcels
// ---------------------------------------------------------------------------
export const mockParcels: ForestParcel[] = [
  {
    id: 'parcel-001',
    name: 'Emerald Ridge Reserve',
    region: 'Pacific Northwest, USA',
    coordinates: { lat: 46.8797, lng: -121.7269 },
    areaSqKm: 142.5,
    healthScore: 87,
    season: 'summer',
    fireRisk: 'moderate',
    lastUpdated: daysAgo(0),
  },
  {
    id: 'parcel-002',
    name: 'Cerrado Shield',
    region: 'Mato Grosso, Brazil',
    coordinates: { lat: -12.6819, lng: -56.9211 },
    areaSqKm: 310.8,
    healthScore: 72,
    season: 'winter',
    fireRisk: 'high',
    lastUpdated: daysAgo(0),
  },
  {
    id: 'parcel-003',
    name: 'Boreal Crown',
    region: 'British Columbia, Canada',
    coordinates: { lat: 54.7267, lng: -127.6476 },
    areaSqKm: 485.2,
    healthScore: 94,
    season: 'summer',
    fireRisk: 'low',
    lastUpdated: daysAgo(0),
  },
  {
    id: 'parcel-004',
    name: 'Black Forest Carbon Sink',
    region: 'Baden-Wurttemberg, Germany',
    coordinates: { lat: 48.3705, lng: 8.2318 },
    areaSqKm: 67.3,
    healthScore: 91,
    season: 'summer',
    fireRisk: 'low',
    lastUpdated: daysAgo(0),
  },
];

// ---------------------------------------------------------------------------
// Telemetry per parcel
// ---------------------------------------------------------------------------
export function generateTelemetry(parcel: ForestParcel): ForestTelemetry {
  const baseCarbon = parcel.areaSqKm * 28.5;
  const rate = parcel.areaSqKm * 0.042;
  return {
    parcelId: parcel.id,
    timestamp: new Date().toISOString(),
    carbonSequestered: Math.round(baseCarbon + rng() * 500),
    carbonRate: Math.round(rate * 100) / 100,
    biomass: Math.round(180 + rng() * 120),
    canopyDensity: Math.round(65 + rng() * 30),
    temperature: Math.round((18 + rng() * 14) * 10) / 10,
    humidity: Math.round(55 + rng() * 35),
    precipitation: Math.round(rng() * 25 * 10) / 10,
    soilMoisture: Math.round(40 + rng() * 45),
    biodiversityIndex: Math.round((5 + rng() * 4.5) * 10) / 10,
    treeCount: Math.round(parcel.areaSqKm * 4200 + rng() * 10000),
    deforestationAlerts: Math.round(rng() * 3),
  };
}

// ---------------------------------------------------------------------------
// Carbon Credit Ledger
// ---------------------------------------------------------------------------
const verificationStandards: CarbonCredit['verificationStandard'][] = [
  'VCS', 'Gold Standard', 'ACR', 'CAR',
];
const buyers = [
  'Microsoft Corp.',
  'Stripe Climate',
  'Shopify Fund',
  'JPMorgan Chase',
  'Apple Inc.',
  'Salesforce',
];

export const mockCarbonCredits: CarbonCredit[] = Array.from({ length: 24 }, (_, i) => {
  const parcel = mockParcels[i % mockParcels.length];
  const tonnes = Math.round(50 + rng() * 450);
  const status: CarbonCredit['status'] =
    i < 16 ? 'active' : i < 20 ? 'retired' : i < 22 ? 'pending' : 'expired';
  return {
    id: `CC-${String(i + 1).padStart(4, '0')}`,
    parcelId: parcel.id,
    parcelName: parcel.name,
    issueDate: monthsAgo(Math.round(rng() * 18)),
    expiryDate: monthsAgo(-Math.round(12 + rng() * 24)),
    tonnes,
    status,
    verificationStandard: verificationStandards[i % verificationStandards.length],
    serialNumber: `SFW-${parcel.id.slice(-3)}-${String(i + 1).padStart(6, '0')}`,
    pricePerTonne: Math.round((15 + rng() * 35) * 100) / 100,
    buyer: buyers[i % buyers.length],
  };
});

// ---------------------------------------------------------------------------
// Environmental Alerts
// ---------------------------------------------------------------------------
export const mockAlerts: EnvironmentalAlert[] = [
  {
    id: 'alert-001',
    parcelId: 'parcel-002',
    type: 'fire',
    severity: 'critical',
    title: 'Elevated fire risk detected',
    description: 'Satellite imagery shows dry vegetation index above threshold in NE quadrant. Local temperature 38C with 12% humidity.',
    timestamp: daysAgo(0),
    resolved: false,
  },
  {
    id: 'alert-002',
    parcelId: 'parcel-001',
    type: 'pest',
    severity: 'warning',
    title: 'Bark beetle activity spike',
    description: 'NDVI anomaly in sector 7 suggests potential bark beetle infestation across 2.3 hectares.',
    timestamp: daysAgo(1),
    resolved: false,
  },
  {
    id: 'alert-003',
    parcelId: 'parcel-002',
    type: 'deforestation',
    severity: 'critical',
    title: 'GLAD deforestation alert',
    description: 'Tree cover loss detected: 0.8 hectares cleared in southern boundary. Pattern consistent with illegal logging.',
    timestamp: daysAgo(2),
    resolved: false,
  },
  {
    id: 'alert-004',
    parcelId: 'parcel-003',
    type: 'drought',
    severity: 'info',
    title: 'Below-average precipitation',
    description: 'Precipitation 23% below 10-year average for this period. Soil moisture adequate but monitor recommended.',
    timestamp: daysAgo(3),
    resolved: true,
  },
  {
    id: 'alert-005',
    parcelId: 'parcel-004',
    type: 'flood',
    severity: 'warning',
    title: 'Riverine flooding risk',
    description: 'Heavy upstream rainfall forecast. River gauge levels approaching alert threshold in the western corridor.',
    timestamp: daysAgo(5),
    resolved: true,
  },
];

// ---------------------------------------------------------------------------
// Dashboard Summary
// ---------------------------------------------------------------------------
export function generateDashboardSummary(): DashboardSummary {
  const activeCredits = mockCarbonCredits.filter((c) => c.status === 'active');
  return {
    totalParcels: mockParcels.length,
    totalAreaSqKm: mockParcels.reduce((a, p) => a + p.areaSqKm, 0),
    totalCarbonSequestered: 14823,
    carbonChangePercent: 12.4,
    activeCredits: activeCredits.length,
    totalCreditValue: activeCredits.reduce((a, c) => a + c.tonnes * c.pricePerTonne, 0),
    averageHealthScore:
      Math.round(
        (mockParcels.reduce((a, p) => a + p.healthScore, 0) / mockParcels.length) * 10
      ) / 10,
    unresolvedAlerts: mockAlerts.filter((a) => !a.resolved).length,
  };
}

// ---------------------------------------------------------------------------
// Carbon History (time-series)
// ---------------------------------------------------------------------------
export function generateCarbonHistory(): CarbonHistory {
  const daily: TimeSeriesPoint[] = [];
  const monthly: TimeSeriesPoint[] = [];
  const yearly: TimeSeriesPoint[] = [];

  // Daily: last 30 days
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    daily.push({
      date: d.toISOString().slice(0, 10),
      value: Math.round(480 + rng() * 40 + i * 0.5),
    });
  }

  // Monthly: last 12 months
  for (let i = 11; i >= 0; i--) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    monthly.push({
      date: d.toISOString().slice(0, 7),
      value: Math.round(12000 + rng() * 2000 + (11 - i) * 200),
    });
  }

  // Yearly: last 5 years
  for (let i = 4; i >= 0; i--) {
    const d = new Date();
    d.setFullYear(d.getFullYear() - i);
    yearly.push({
      date: String(d.getFullYear()),
      value: Math.round(10000 + rng() * 3000 + (4 - i) * 1200),
    });
  }

  return { daily, monthly, yearly };
}
