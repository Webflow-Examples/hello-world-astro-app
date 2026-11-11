// Loaded with a dynamic import() from src/pages/chunk-test.astro, so the server
// build emits it as its own chunk. The marker string lets the
// framework-regression harness prove this chunk reached the deployed worker.
export const SERVER_LAZY_MARKER = 'chunk-test:server-lazy:ok';

export function serverLazyMarker(): string {
  return SERVER_LAZY_MARKER;
}
