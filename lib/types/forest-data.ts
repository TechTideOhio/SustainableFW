// =============================================================================
// Forest Telemetry Types
// Core data interfaces for the Digital Twin Carbon Asset Dashboard
// =============================================================================

/** Represents the overall health and status of a monitored forest parcel */
export interface ForestParcel {
  id: string;
  name: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  areaSqKm: number;
  healthScore: number; // 0-100
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  fireRisk: 'low' | 'moderate' | 'high' | 'critical';
  lastUpdated: string; // ISO 8601
}

/** Real-time telemetry reading from a forest sensor/satellite */
export interface ForestTelemetry {
  parcelId: string;
  timestamp: string;
  carbonSequestered: number; // tonnes CO2
  carbonRate: number; // tonnes CO2/day
  biomass: number; // tonnes/hectare
  canopyDensity: number; // 0-100 percentage
  temperature: number; // Celsius
  humidity: number; // 0-100 percentage
  precipitation: number; // mm
  soilMoisture: number; // 0-100 percentage
  biodiversityIndex: number; // 0-10 scale
  treeCount: number;
  deforestationAlerts: number;
}

/** Carbon credit ledger entry */
export interface CarbonCredit {
  id: string;
  parcelId: string;
  parcelName: string;
  issueDate: string;
  expiryDate: string;
  tonnes: number;
  status: 'active' | 'retired' | 'pending' | 'expired';
  verificationStandard: 'VCS' | 'Gold Standard' | 'ACR' | 'CAR';
  serialNumber: string;
  pricePerTonne: number;
  buyer: string;
}

/** Environmental alert from monitoring system */
export interface EnvironmentalAlert {
  id: string;
  parcelId: string;
  type: 'deforestation' | 'fire' | 'drought' | 'pest' | 'flood' | 'illegal_logging';
  severity: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  resolved: boolean;
}

/** Dashboard summary statistics */
export interface DashboardSummary {
  totalParcels: number;
  totalAreaSqKm: number;
  totalCarbonSequestered: number;
  carbonChangePercent: number;
  activeCredits: number;
  totalCreditValue: number;
  averageHealthScore: number;
  unresolvedAlerts: number;
}

/** Scenario simulation parameters */
export interface ScenarioParams {
  temperatureIncrease: number; // Celsius delta
  droughtSeverity: number; // 0-100
  deforestationRate: number; // percentage/year
  reforestationRate: number; // percentage/year
  timeHorizonYears: number;
}

/** Result of a scenario simulation */
export interface ScenarioResult {
  projectedCarbon: number[];
  projectedBiomass: number[];
  projectedHealthScore: number[];
  years: number[];
  riskAssessment: 'stable' | 'declining' | 'critical';
  recommendations: string[];
}

/** Time-series data point for charts */
export interface TimeSeriesPoint {
  date: string;
  value: number;
}

/** Carbon sequestration history for charting */
export interface CarbonHistory {
  daily: TimeSeriesPoint[];
  monthly: TimeSeriesPoint[];
  yearly: TimeSeriesPoint[];
}
