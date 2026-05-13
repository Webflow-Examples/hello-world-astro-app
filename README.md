# hello-world-astro-app

A minimal **Astro 5** starter deployed on [**Webflow Cloud**](https://webflow.com/cloud).

This is the vanilla variant — the exact output of `npm create astro@latest`, styled with a branded landing page and a few doc links to get you going.

> Looking for the variant with Cloudflare bindings (D1, R2, KV)?
> See [`hello-world-astro-app-bindings`](https://github.com/Webflow-Examples/hello-world-astro-app-bindings).

[![Deploy to Webflow](https://webflow.com/img/deploy-dark.svg)](https://webflow.com/dashboard/cloud/deploy?repo=https://github.com/Webflow-Examples/hello-world-astro-app)

## Quickstart

```bash
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

- Astro 5 (static, no framework islands)
- Tailwind CSS v3 via `@astrojs/tailwind`
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
