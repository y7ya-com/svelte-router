import type { AnyRouter, RegisteredRouter } from '@tanstack/router-core';
import type { Snippet } from 'svelte';
import { type BlockerResolver, type UseBlockerOpts } from './useBlocker.svelte';
declare function $$render<TRouter extends AnyRouter = RegisteredRouter, TWithResolver extends boolean = boolean>(): {
    props: UseBlockerOpts<TRouter, TWithResolver> & {
        children?: Snippet<[{
            readonly current: BlockerResolver<TRouter>;
        }]>;
    };
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<TRouter extends AnyRouter = RegisteredRouter, TWithResolver extends boolean = boolean> {
    props(): ReturnType<typeof $$render<TRouter, TWithResolver>>['props'];
    events(): ReturnType<typeof $$render<TRouter, TWithResolver>>['events'];
    slots(): ReturnType<typeof $$render<TRouter, TWithResolver>>['slots'];
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <TRouter extends AnyRouter = RegisteredRouter, TWithResolver extends boolean = boolean>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<TRouter, TWithResolver>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<TRouter, TWithResolver>['props']>, ReturnType<__sveltets_Render<TRouter, TWithResolver>['events']>, ReturnType<__sveltets_Render<TRouter, TWithResolver>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<TRouter, TWithResolver>['bindings']>;
    } & ReturnType<__sveltets_Render<TRouter, TWithResolver>['exports']>;
    <TRouter extends AnyRouter = RegisteredRouter, TWithResolver extends boolean = boolean>(internal: unknown, props: ReturnType<__sveltets_Render<TRouter, TWithResolver>['props']> & {}): ReturnType<__sveltets_Render<TRouter, TWithResolver>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any, any>['bindings']>;
}
declare const Block: $$IsomorphicComponent;
type Block<TRouter extends AnyRouter = RegisteredRouter, TWithResolver extends boolean = boolean> = InstanceType<typeof Block<TRouter, TWithResolver>>;
export default Block;
