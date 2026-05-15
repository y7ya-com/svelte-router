import type { Component } from 'svelte';
/**
 * Creates a custom Link variant that renders the given element/component
 * instead of `<a>`. Mirrors solid-router's `createLink`.
 *
 * `target` can be:
 *  - a string HTML element name (e.g. `'button'`) — rendered via `<svelte:element>`
 *  - a Svelte 5 component — rendered as `<Comp ... />` with link props spread
 */
export declare function createLink<TComp extends string | Component<any>>(target: TComp): Component<any>;
