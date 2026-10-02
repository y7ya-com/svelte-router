import type { AnyRouter } from '@tanstack/router-core';
import type { Component, Snippet } from 'svelte';
export declare function isSnippet(value: unknown): value is Snippet<Array<unknown>>;
export declare function isComponent(value: unknown): value is Component<any>;
/**
 * Svelte boundaries hand over the raw thrown value; error components and
 * `onCatch` receive an `Error`, as in the other adapters.
 */
export declare function toError(thrown: unknown): Error;
/**
 * Whether a `<script>` with these attributes runs when inserted. Data blocks
 * (e.g. `application/ld+json`) only need to be present in the document.
 */
export declare function isExecutableScript(attrs?: Record<string, any>): boolean;
/**
 * Subscribe to a router store slice. A server router renders once, so it reads
 * the store directly instead of subscribing.
 */
export declare function useRouterSelector<TState, TSelected = TState>(router: AnyRouter, store: {
    get: () => TState;
}, selector?: (state: TState) => TSelected): {
    readonly current: TSelected;
};
