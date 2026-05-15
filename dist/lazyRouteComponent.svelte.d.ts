/**
 * Wraps a dynamic `import()` so the resulting Svelte component is loaded only
 * when first rendered. Returned value is itself a Svelte 5 component callable
 * — the route tree wires it as `component: lazyRouteComponent(...)`.
 *
 * Mirrors `lazyRouteComponent` from `react-router` / `solid-router`: a shared
 * load promise (so concurrent renders don't double-fetch), a `.preload()`
 * hook the router can call on intent/viewport hints, and a one-shot
 * recovery on `ModuleNotFoundError` (so stale-deploy URLs trigger a single
 * window reload instead of crashing the app).
 */
export declare function lazyRouteComponent<T extends Record<string, any>, TKey extends keyof T = 'default'>(importer: () => Promise<T>, exportName?: TKey): any;
