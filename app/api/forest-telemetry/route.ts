import { NextResponse } from 'next/server';
import {
  mockParcels,
  generateTelemetry,
  generateDashboardSummary,
  generateCarbonHistory,
  mockAlerts,
} from '@/lib/mock-data';

export async function GET() {
  const parcels = mockParcels.map((parcel) => ({
    ...parcel,
    telemetry: generateTelemetry(parcel),
  }));

  return NextResponse.json({
    parcels,
    summary: generateDashboardSummary(),
    carbonHistory: generateCarbonHistory(),
    alerts: mockAlerts,
  });
}
