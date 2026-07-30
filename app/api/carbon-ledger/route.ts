import { NextResponse } from 'next/server';
import { mockCarbonCredits } from '@/lib/mock-data';

export async function GET() {
  const summary = {
    totalCredits: mockCarbonCredits.length,
    activeCredits: mockCarbonCredits.filter((c) => c.status === 'active').length,
    totalTonnes: mockCarbonCredits.reduce((a, c) => a + c.tonnes, 0),
    totalValue: mockCarbonCredits.reduce((a, c) => a + c.tonnes * c.pricePerTonne, 0),
  };

  return NextResponse.json({
    credits: mockCarbonCredits,
    summary,
  });
}
