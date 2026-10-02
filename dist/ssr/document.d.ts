import type { AnyRouter } from '@tanstack/router-core';
/**
 * Wraps Svelte's `{ head, body }` render output in an `<html>` document
 * (without the doctype, which the router transport adds). Svelte components
 * cannot render `<html>`/`<body>`, so their attributes come from the root
 * route's `htmlAttrs` / `bodyAttrs` options. The document ends with the exact
 * `</body></html>` close that the stream transform recognises.
 */
export declare function buildDocument(router: AnyRouter, head: string, body: string): string;
