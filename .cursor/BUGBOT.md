# Bugbot Review Rules (Project-wide)

- Multi-tenant org scoping must be enforced on every endpoint/query.
- Offline queue must include ONLY CreateInvoice.
- Inventory must be ledger-only (movements); never update current stock columns.
- Money is IRR integer; rounding must match the spec.
- Invoice must be immutable: no edits; only void (online-only, supervisor/admin).
- Changes to money/inventory/sync must include tests.