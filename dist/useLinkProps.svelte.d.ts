import type { ViewTransitionOptions } from '@tanstack/router-core';
export type LinkStateProps = {
    class?: string;
    style?: Record<string, unknown> | string;
    [key: string]: unknown;
};
export type UseLinkPropsOptions = {
    to?: string;
    from?: string;
    params?: Record<string, unknown> | true;
    search?: Record<string, unknown> | true | ((prev: Record<string, unknown>) => Record<string, unknown>);
    hash?: string | ((prev: string) => string);
    replace?: boolean;
    resetScroll?: boolean;
    preload?: 'intent' | 'viewport' | 'render' | false;
    preloadDelay?: number;
    activeOptions?: {
        exact?: boolean;
        includeHash?: boolean;
        includeSearch?: boolean;
        explicitUndefined?: boolean;
    };
    disabled?: boolean;
    target?: string;
    rel?: string;
    activeProps?: LinkStateProps | (() => LinkStateProps);
    inactiveProps?: LinkStateProps | (() => LinkStateProps);
    mask?: unknown;
    reloadDocument?: boolean;
    ignoreBlocker?: boolean;
    state?: unknown;
    unsafeRelative?: unknown;
    /** Declared by router-core; no framework port acts on it yet. */
    preloadIntentProximity?: number;
    hashScrollIntoView?: boolean | ScrollIntoViewOptions;
    startTransition?: boolean;
    viewTransition?: boolean | ViewTransitionOptions;
    /** Everything else — user attributes and handlers, merged into `rest`. */
    [key: string]: unknown;
};
/**
 * The link computations behind `<Link>`, exposed as a hook. Must be called
 * during component init (it subscribes to the router's location store);
 * `getOptions` is a getter so the computations track the caller's reactive
 * props. Returned values are getters over runes — read them in a template (or
 * a `$derived`) and they stay live. `attrs` is the complete spreadable prop
 * bag: `<a {...link.attrs}>`.
 */
export declare function useLinkProps(getOptions: () => UseLinkPropsOptions): {
    readonly href: any;
    readonly isActive: boolean;
    readonly isExternal: boolean;
    readonly effectivePreload: false | "intent" | "viewport" | "render" | undefined;
    readonly class: string | undefined;
    readonly style: string | undefined;
    readonly rest: Record<string, unknown>;
    handlers: {
        onclick: (e: Event) => void;
        onfocus: (e: Event) => void;
        onblur: (e: Event) => void;
        onmouseenter: (e: Event) => void;
        onmouseover: (e: Event) => void;
        onmouseleave: (e: Event) => void;
        onmouseout: (e: Event) => void;
        ontouchstart: (e: Event) => void;
    };
    preload: () => void;
    schedulePreload: () => void;
    cancelPreload: () => void;
    /** The complete spreadable prop bag: `<a {...link.attrs}>`. */
    readonly attrs: Record<string, unknown>;
};
