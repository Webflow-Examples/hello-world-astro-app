import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // A non-default, harmless build option. The Webflow Cloud builder must
  // preserve it when it generates astro.config.webflow.ts — it owns only
  // build.assetsPrefix, not the rest of the build block. `format: 'file'`
  // (default is 'directory') makes prerendered routes emit `<route>.html`
  // instead of `<route>/index.html`; the framework-regression harness asserts
  // on build-config-check.html below to prove the option survived.
  build: {
    format: 'file',
  },
});
