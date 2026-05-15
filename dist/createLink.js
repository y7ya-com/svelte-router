import Link from './Link.svelte';
/**
 * Creates a custom Link variant that renders the given element/component
 * instead of `<a>`. Mirrors solid-router's `createLink`.
 *
 * `target` can be:
 *  - a string HTML element name (e.g. `'button'`) — rendered via `<svelte:element>`
 *  - a Svelte 5 component — rendered as `<Comp ... />` with link props spread
 */
export function createLink(target) {
    // Svelte 5 components are functions with a specific call shape. We wrap
    // `Link` to pre-bind `_asChild`. The returned callable matches Svelte's
    // `Component` signature.
    const wrapped = (internals, props) => {
        return Link(internals, { ...props, _asChild: target });
    };
    return wrapped;
}
