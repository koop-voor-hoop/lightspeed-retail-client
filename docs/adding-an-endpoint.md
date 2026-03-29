---
title: Adding an Endpoint
category: Introduction
---

# Adding an Endpoint

Use this checklist whenever you add support for a new Lightspeed endpoint.

## 1. Read and Extract Endpoint Requirements

1. Open the endpoint documentation in `docs/endpoints/*.md`.
2. Identify supported actions (`GET` query, `GET` single, `POST`, `PUT`, `DELETE`).
3. Record route shapes, for example:
   - `GET /API/V3/Entity.json`
   - `GET /API/V3/Account/{accountID}/Entity/{entityID}.json`
4. Record sortable fields and supported query parameters.
5. Record `load_relations` values if available.
6. Copy sample response fields and required/optional behavior.

## 2. Scaffold new Endpoint

1. Run `bun scaffold <endpoint>`
2. All required files will be created
3. Verify if there are no errors

## 3. Create or Update Zod Schemas

1. Update `src/schemas/<endpoint>.schema.ts`.
2. Define reusable sub-schemas first (currency, nested objects, etc.).
3. Define the core entity schema.
4. Define response wrapper schemas:
   - `<entity>ResponseSchema` for single record
   - `<entities>ResponseSchema` for query/list responses
5. Define mutation schema for writable endpoints (`POST`/`PUT`).
6. Reuse helper schemas from `src/schemas/helper.schema.ts` when possible:
   - `integerLikeSchema`
   - `numberLikeSchema`
   - `booleanLikeSchema`
   - `oneOrMany`
7. Export the new schema file from `src/schemas/index.ts`.

## 4. Add Type Inference Layer

1. Update `src/types/<endpoint>.ts`.
2. Infer all public types from schemas with `z.infer`.
3. Export key types, usually:
   - Entity type
   - Single response type
   - List response type
   - Mutation type
4. Export the types file from `src/types/index.ts`.

## 5. Implement Endpoint Functions

1. Update `src/endpoints/<endpoint>.ts`.
2. Import `requestJson` from `src/api.ts`.
3. Import schemas and inferred types from `src/schemas` and `src/types`.
4. Implement one function per supported action, for example:
   - `get<Entity>s`
   - `get<Entity>`
   - `create<Entity>`
   - `update<Entity>`
   - `delete<Entity>`
5. Keep function signatures consistent with existing endpoints:
   - `AccessToken`
   - `AccountId` when required by route
   - `PaginationParams<Relation, SortField>` for list/query endpoints
6. Use descriptive JSDoc comments for each exported function.
7. Export the endpoint from `src/endpoints/index.ts`.

## 6. Update Shared API Types (Only If Needed)

1. If the endpoint introduces new `load_relations`, add them to `RelationKey` in `src/types/api.types.ts`.
2. If this changes query typing constraints, update `PaginationParams` usage for the endpoint.

## 7. Add Integration Tests

1. Update `tests/<endpoint>.test.ts`.
2. Follow existing test style:
   - Read `TEST_ACCESS_TOKEN` from environment.
   - Skip cleanly if token is missing.
3. Add happy-path tests for supported reads:
   - List/query test
   - Single-record test
4. Add at least one error-path test (invalid token, missing ID, non-existent ID).
5. For account-scoped endpoints, resolve `accountID` from `getSession`.

## 8. Validate and Fix

1. Run checks:

```bash
bun run check
bun run typecheck
```

2. Fix issues

```bash
bun run check:fix
```

3. Refresh tokens in .env

```bash
bun run env
```

4. Run relevant tests:

```bash
bun test tests/<endpoint>.test.ts
```

5. Fix schema/type mismatches reported by runtime validation.
6. Confirm exported symbols are available from `src/index.ts` through existing barrel exports.

## 8. Final Verification Before Merge

1. Confirm docs, schemas, types, endpoint functions, and tests are all present.
2. Confirm no unrelated files were changed.
3. Ensure endpoint naming matches existing conventions.
4. Ensure response parsing uses schemas everywhere (no unvalidated `any` payloads).

This process keeps endpoint additions consistent, typed, and testable across the client.
