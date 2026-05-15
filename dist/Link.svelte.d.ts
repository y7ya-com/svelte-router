import type { AnyRouter, RegisteredRouter } from '@tanstack/router-core';
import type { Snippet } from 'svelte';
type LinkStateProps = {
    class?: string;
    style?: Record<string, unknown> | string;
    [key: string]: unknown;
};
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
declare function $$render<TRouter extends AnyRouter = RegisteredRouter>(): {
    props: $$ComponentProps;
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<TRouter extends AnyRouter = RegisteredRouter> {
    props(): ReturnType<typeof $$render<TRouter>>['props'];
    events(): ReturnType<typeof $$render<TRouter>>['events'];
    slots(): ReturnType<typeof $$render<TRouter>>['slots'];
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <TRouter extends AnyRouter = RegisteredRouter>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<TRouter>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<TRouter>['props']>, ReturnType<__sveltets_Render<TRouter>['events']>, ReturnType<__sveltets_Render<TRouter>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<TRouter>['bindings']>;
    } & ReturnType<__sveltets_Render<TRouter>['exports']>;
    <TRouter extends AnyRouter = RegisteredRouter>(internal: unknown, props: ReturnType<__sveltets_Render<TRouter>['props']> & {}): ReturnType<__sveltets_Render<TRouter>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Link: $$IsomorphicComponent;
type Link<TRouter extends AnyRouter = RegisteredRouter> = InstanceType<typeof Link<TRouter>>;
export default Link;
