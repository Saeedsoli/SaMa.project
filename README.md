# Event POS (Offline-first)

## Stack
- Backend: NestJS + Prisma + Postgres
- Frontend: React + TypeScript + Vite + PWA
- Deploy: Docker + Liara

## Local dev
1) Copy env files
- backend/.env.example -> backend/.env
- frontend/.env.example -> frontend/.env

2) Start Postgres
- docker compose up -d

3) Install deps
- npm install

4) Run
- npm run dev

## Tests
- npm test

## Key Domain Rules (do not break)
- Multi-tenant: orgId always from JWT
- Inventory is ledger-only (movements)
- Offline queue stores only CreateInvoice
- No invoice edits; only void (online-only)
- Money is IRR integer; server is source of truth