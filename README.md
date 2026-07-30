# ForestTwin: Digital Twin Carbon Asset Dashboard

[![Netlify Status](https://api.netlify.com/api/v1/badges/686b2a57adb0e69328d412ef/deploy-status)](https://app.netlify.com/sites/sustainable-forest-website/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=flat&logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance B2B SaaS Digital Twin platform for corporate ESG portfolios. ForestTwin provides an interactive 3D digital replica of physical forest assets with real-time telemetry, carbon ledger tracking, and scenario simulation capabilities.

![ForestTwin Dashboard](/images/foresttwin-hero.jpg "ForestTwin Digital Twin Dashboard")

## Core Capabilities

ForestTwin transforms standard carbon offset reporting into a live, interactive data experience. Corporate sponsors can view a highly accurate 3D digital replica of their specific forest assets instead of static PDF reports.

*   **Interactive 3D Digital Twin**: Built with React Three Fiber, featuring dynamic mesh properties that react to live health scores, seasonal changes, and environmental risks.
*   **Real-Time Data Overlays**: A Framer Motion powered Heads-Up Display (HUD) provides live metrics on carbon sequestration rates, canopy density, and total biomass.
*   **Scenario Simulation Engine**: An interactive control panel allowing stakeholders to model temperature increases, drought severity, and deforestation rates to project carbon yields.
*   **Verifiable Carbon Ledger**: A tabular view representing the verifiable carbon credit ledger to ensure transparent, audit-ready ESG reporting.
*   **Automated Alert Feed**: Real-time environmental alerts for deforestation, fire risks, and drought conditions.

## System Architecture

The application is built on a modern **Next.js 16 App Router** architecture with a focus on high-performance 3D rendering and responsive glassmorphism UI. All sub-routes (Analytics, CMS, Settings, Ledger, Components, Systems) are seamlessly integrated as nested route groups under the `(dashboard)` layout.

```mermaid
graph TD
    A[Client Browser] -->|Next.js App Router| B(Dashboard UI)
    B --> C{State Management}
    
    subgraph Frontend Components
        C -->|useForestTelemetry| D[3D Digital Twin Canvas]
        C -->|useCarbonLedger| E[Carbon Ledger Table]
        C --> F[Scenario Simulator]
        C --> G[Metric Cards & Alert Feed]
    end
    
    subgraph 3D Pipeline
        D -->|React Three Fiber| H[Forest Mesh Generation]
        H --> I[Dynamic Lighting & Materials]
        I --> J[DataHUD Overlay]
    end
    
    subgraph Data Layer
        C -.->|Fetch| K[API Routes]
        K --> L[Mock Telemetry Service]
        K --> M[Mock Ledger Service]
    end
```

## Release Highlights

The latest release package includes the fully built out production-ready dashboard suite migrated from standard React standard to Next.js App Router:

*   **App Directory Structure**: Full Next.js 16 App Router implementation (`/analytics`, `/cms`, `/settings`, `/3d`, etc.).
*   **Production Build**: Verified clean Next.js build with strict TypeScript checking and ESLint enforcement.
*   **Optimized Assets**: Next.js image optimization and raw shader loading configured for Three.js.
*   **Netlify Integration**: Pre-configured `netlify.toml` for seamless deployment natively via Next.js Runtime v5.

## Local Setup and Deployment

### Prerequisites

*   Node.js v20+
*   npm or pnpm

### Quick Start

1.  Clone the repository:
    ```bash
    git clone https://github.com/TechTideOhio/SustainableFW.git
    cd SustainableFW
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

### Netlify Deployment

This repository is pre-configured for deployment on Netlify. It leverages Netlify's native Next.js integration.

When connecting to Netlify, the build settings will automatically be detected:
*   **Build command**: `npm run build`
*   **Publish directory**: `.next`

No manual configuration is required. The `netlify.toml` acts as a fail-safe configuration block for deployments.
