import type { Component } from 'svelte';
import type { AnyRouter, RegisteredRouter } from '@tanstack/router-core';
declare function $$render<TRouter extends AnyRouter = RegisteredRouter>(): {
    props: {
        [key: string]: unknown;
        router: TRouter;
        context?: Partial<TRouter["options"]["context"]>;
        Wrap?: Component<any>;
    };
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
declare const RouterProvider: $$IsomorphicComponent;
type RouterProvider<TRouter extends AnyRouter = RegisteredRouter> = InstanceType<typeof RouterProvider<TRouter>>;
export default RouterProvider;
