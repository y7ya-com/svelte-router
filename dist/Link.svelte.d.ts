import type { Component, Snippet } from 'svelte';
import type { LinkStateProps } from './useLinkProps.svelte';
type Props = {
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
    startTransition?: boolean;
    viewTransition?: unknown;
    children?: Snippet<[{
        isActive: boolean;
    }]> | Snippet<[]>;
    [key: string]: unknown;
};
type $$ComponentProps = Props & {
    _asChild?: any;
};
declare const Link: Component<$$ComponentProps, {}, "">;
type Link = ReturnType<typeof Link>;
export default Link;
