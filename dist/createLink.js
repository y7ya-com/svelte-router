import Link from './Link.svelte';
/**
 * Creates a custom Link variant that renders the given element/component
 * instead of `<a>`.
 *
 * `target` can be:
 *  - a string HTML element name (e.g. `'button'`) — rendered via `<svelte:element>`
 *  - a Svelte 5 component — rendered as `<Comp ... />` with link props spread
 */
export function createLink(target) {
    // A Svelte 5 component is a function called as `(internals, props)`; this
    // one renders `Link` with `_asChild` pre-bound to the target.
    const wrapped = (internals, props) => {
        return Link(internals, { ...props, _asChild: target });
    };
    return wrapped;
}
/**
 * Type-checks a link options object against the route tree without rendering
 * anything — an identity function at runtime.
 */
export const linkOptions = (options) => {
    return options;
};
