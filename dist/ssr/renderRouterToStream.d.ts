import type { AnyRouter } from '@tanstack/router-core';
/**
 * Renders the document, then streams the router's hydration data after it —
 * deferred loader promises included, as they resolve — through router-core's
 * stream transform, so `<Await>` resolves on the client with no refetch.
 *
 * Svelte 5's `svelte/server` returns the whole document from one `render()`
 * call, with no primitive for flushing a shell and patching resolved subtrees
 * in later. The application output is therefore one eager record and, like
 * Vue, uses no renderer safe points beyond the boundary, the canonical
 * `</body></html>` close and EOF (see router-core's `ssr/STREAMING.md`).
 */
export declare const renderRouterToStream: ({ request, router, responseHeaders, }: {
    request: Request;
    router: AnyRouter;
    responseHeaders: Headers;
    children?: () => unknown;
}) => Promise<Response | {
    response: Response;
    serverSsrCleanup: "stream";
    dispose: (reason?: unknown) => undefined;
}>;
