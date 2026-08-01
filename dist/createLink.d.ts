import type { Component } from 'svelte';
import type { AnyRouter, RegisteredRouter } from '@tanstack/router-core';
import type { ValidateLinkOptions, ValidateLinkOptionsArray } from './typePrimitives';
/**
 * Creates a custom Link variant that renders the given element/component
 * instead of `<a>`.
 *
 * `target` can be:
 *  - a string HTML element name (e.g. `'button'`) — rendered via `<svelte:element>`
 *  - a Svelte 5 component — rendered as `<Comp ... />` with link props spread
 */
export declare function createLink<TComp extends string | Component<any>>(target: TComp): Component<any>;
export type LinkOptionsFnOptions<TOptions, TComp, TRouter extends AnyRouter = RegisteredRouter> = TOptions extends ReadonlyArray<any> ? ValidateLinkOptionsArray<TRouter, TOptions, string, TComp> : ValidateLinkOptions<TRouter, TOptions, string, TComp>;
export type LinkOptionsFn<TComp> = <const TOptions, TRouter extends AnyRouter = RegisteredRouter>(options: LinkOptionsFnOptions<TOptions, TComp, TRouter>) => TOptions;
/**
 * Type-checks a link options object against the route tree without rendering
 * anything — an identity function at runtime.
 */
export declare const linkOptions: LinkOptionsFn<'a'>;
