# hello-world-astro7-app

A minimal **Astro 7** starter deployed on [**Webflow Cloud**](https://webflow.com/cloud).

This is the vanilla variant — styled with a branded landing page and a few doc links. Uses Tailwind v4 via the Vite plugin.

> Looking for the variant with Cloudflare bindings (D1, R2, KV)?
> See [`hello-world-astro7-app-bindings`](https://github.com/Webflow-Examples/hello-world-astro7-app-bindings).

[![Deploy to Webflow](https://webflow.com/img/deploy-dark.svg)](https://webflow.com/dashboard/cloud/deploy?repo=https://github.com/Webflow-Examples/hello-world-astro7-app)

## Requirements

- Node **22.12+** (see `engines`).

## Quickstart

```bash
nvm use          # picks up required Node version
npm install
npm run dev
# → http://localhost:4321
```

## Deploy to Webflow Cloud

1. Fork this repo.
2. In your Webflow site, open **Apps → Webflow Cloud → Create new app** and select this repo.
3. Pick a mount path and click **Deploy**.

Full walkthrough: <https://developers.webflow.com/webflow-cloud/quickstart>.

## What's included

- Astro 7 (no framework islands)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Branded landing page with Webflow Cloud doc links

## Customizing

The landing page lives in `src/pages/index.astro`. Styles are in
`src/styles/global.css` under the `wf-*` prefix.

## Learn more

- [Webflow Cloud docs](https://developers.webflow.com/webflow-cloud)
- [Astro on Webflow Cloud](https://developers.webflow.com/webflow-cloud/frameworks/astro)
- [Astro documentation](https://docs.astro.build)

---

Built with Astro · Deployed on Webflow Cloud.

## Branch naming convention

This repo is the canonical `hello-world-<framework>-app` example. Every framework
version and variant lives on a branch here, not in a separate repo:

| Branch | Contents |
| --- | --- |
| `main` | Current default example. Advances to the latest framework version once dependent pipelines are updated. |
| `vN` | Framework major version N, no storage bindings (for example `v6`). |
| `vN-with-bindings` | Version N plus D1, R2, and KV bindings and a `/api/binding-status` health check. |
| `sentry` | Latest version with bindings, plus a working Sentry setup. |

### Adding a new framework version

When a new major version M ships:

1. Create `vM` from the new plain app and `vM-with-bindings` from its bindings variant.
2. Point `sentry` at the latest version with bindings.
3. Leave `main` until the pipelines that consume this repo (webflow-cli,
   infrastructure/cosmic-builder, cosmic-test) are updated, then advance `main` to `vM`.
4. Keep older `vN` / `vN-with-bindings` branches so pinned references keep working.

Version branches (`vN`, `vN-with-bindings`, `sentry`) are protected: they can't be
deleted or force-pushed.
