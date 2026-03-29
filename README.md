# lightspeed-retail-client

Type-safe Lightspeed Retail API client built with Bun and Zod.

## Requirements

- Bun (latest stable)

## Install

```bash
bun install
```

## Available Scripts

All scripts are defined in [package.json](package.json).

- `bun run env`: Launch interactive environment setup from [env.ts](env.ts).
- `bun run scaffold -- <endpoint>`: Scaffold files for a new endpoint using [scaffold.ts](scaffold.ts).
- `bun run typecheck`: Run TypeScript type checking (`tsc --noEmit`).
- `bun run check`: Run Biome checks.
- `bun run check:fix`: Run Biome checks and auto-fix supported issues.

Run tests with Bun directly:

```bash
bun test
```

Run a single test file:

```bash
bun test tests/vendor.test.ts
```

## Adding an Endpoint

Follow the complete checklist in [docs/adding-an-endpoint.md](docs/adding-an-endpoint.md).

Quick flow:

1. Read the endpoint docs in [docs/endpoints](docs/endpoints).
2. Scaffold files with `bun run scaffold <endpoint>`.
3. Implement/update schema in [src/schemas](src/schemas).
4. Add inferred types in [src/types](src/types).
5. Implement endpoint functions in [src/endpoints](src/endpoints).
6. Add exports to barrel files where needed.
7. Add integration tests in [tests](tests).
8. Validate:

```bash
bun run check
bun run typecheck
bun test tests/<endpoint>.test.ts
```

If auth tokens are stale, refresh env values with:

```bash
bun run env
```
