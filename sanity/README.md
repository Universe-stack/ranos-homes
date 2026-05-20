# Sanity Skeleton (Not Integrated Yet)

This folder prepares Sanity content modeling and query structure without connecting it to app routes yet.

## What is included

- Typed content models for products, services, portfolio, blogs, and FAQ.
- Schema blueprints for future Sanity Studio setup.
- API client and image URL helpers.
- Starter GROQ query strings.

## Current status

- No route in `app/` imports this folder yet.
- Demo content can continue in the UI without CMS dependency.

## Environment variables for later integration

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to `2025-01-01`)
- `SANITY_API_READ_TOKEN` (optional, for private datasets)

## Next step when you are ready

1. Add Sanity Studio (local or hosted).
2. Convert schema blueprints in `sanity/schema` into active Studio schema definitions.
3. Replace demo arrays/components with query-driven server components.
