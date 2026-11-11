// Loaded with a dynamic import() from the <script> in src/pages/chunk-test.astro,
// so Vite emits it as its own client chunk under /_astro/. The marker string
// lets the framework-regression harness find this chunk in the build output
// and check that it is served.
export const CLIENT_LAZY_MARKER = 'chunk-test:client-lazy:ok';

export function markClientLoaded(el: HTMLElement): void {
  el.textContent = CLIENT_LAZY_MARKER;
  el.dataset.loaded = 'true';
}
