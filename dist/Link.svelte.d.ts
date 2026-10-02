import type { AnyRouter, RegisteredRouter } from '@tanstack/router-core';
import type { LinkElementProps } from './link.js';
declare function $$render<TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''>(): {
    props: LinkElementProps<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>;
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''> {
    props(): ReturnType<typeof $$render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>>['props'];
    events(): ReturnType<typeof $$render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>>['events'];
    slots(): ReturnType<typeof $$render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>>['slots'];
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['props']>, ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['events']>, ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['bindings']>;
    } & ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['exports']>;
    <TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''>(internal: unknown, props: ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['props']> & {}): ReturnType<__sveltets_Render<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any, any, any, any, any>['bindings']>;
}
declare const Link: $$IsomorphicComponent;
type Link<TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''> = InstanceType<typeof Link<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>>;
export default Link;
