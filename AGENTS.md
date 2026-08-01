# SustainableFW - Project Memory
> Owner: Alex Cinovoj · Created: 2026-07-30

---

## What this is
- **Project:** ForestTwin Digital Twin Carbon Asset Dashboard
- **Brand:** TechTide AI
- **Status:** active
- **Production URL:** https://app.netlify.com/sites/sustainable-forest-website
- **Source of truth:** `C:\Users\Admin\TechTide\Apps\SustainableFW`

## Stack
- **Runtime:** Node
- **Framework:** Next.js 16 (App Router)
- **DB / state:** none (Mock Data)
- **Hosting:** Netlify
- **AI routing:** none
- **Package manager pin:** npm

## Run / build / test
```bash
# install
npm install
# dev server
npm run dev
# tests
npm run lint
# build
npm run build
```

## Branch & release flow
- Branch promotion: trunk-based
- Deploy via: git push to main
- Do NOT: push failing builds to main, Netlify auto-deploys main.

## Environment & secrets
- Env lives in: `.env` (gitignored)
- **Never paste** raw DSNs, API keys, JWTs, Stripe/Clerk/Supabase service-role
  keys into chat - produce redacted presence/classification matrices only.

## Cross-session memory
- **Axel second brain** at `localhost:4000` - for durable context, call its REST
  API (`POST /api/memory/remember`, `POST /api/memory/recall`,
  `POST /api/memory/search`). See `infrastructure/Axel/CLAUDE.md`.
- Health check before destructive work: `curl http://localhost:4000/health`.

## Conventions (inherited)
- Shared multi-agent workspace: read-first, announce before destructive moves,
  never force-push shared branches.
- Scripts: TypeScript preferred.

## Known gotchas
- React component dependencies: strict `"use client"` directive needed on interactive UI.
- Next.js Turbopack typing strictness required `@ts-nocheck` on specific template primitives.
