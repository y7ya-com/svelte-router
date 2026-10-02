import { BaseRootRoute, BaseRoute, BaseRouteApi } from '@tanstack/router-core';
import type { AnyContext, AnyRoute, AnyRouter, ConstrainLiteral, ErrorComponentProps, NotFoundError, NotFoundRouteProps, Register, RegisteredRouter, ResolveFullPath, ResolveId, ResolveParams, RootRouteOptions, RouteConstraints, RouteIds, RouteMask, RouteOptions, RouteTypesById, RouterCore, ToMaskOptions, UseNavigateResult } from '@tanstack/router-core';
import type { Component, Snippet } from 'svelte';
import type { UseLoaderDataRoute } from './useLoaderData.js';
import type { UseLoaderDepsRoute } from './useLoaderDeps.js';
import type { UseMatchRoute } from './useMatch.svelte.js';
import type { UseParamsRoute } from './useParams.js';
import type { UseRouteContextRoute } from './useRouteContext.js';
import type { UseSearchRoute } from './useSearch.js';
import type { LinkComponentRoute } from './link.js';
declare module '@tanstack/router-core' {
    interface ErrorBoundaryTypes {
        error: Error;
    }
    interface UpdatableRouteOptionsExtensions {
        component?: RouteComponent;
        errorComponent?: false | null | undefined | ErrorRouteComponent;
        notFoundComponent?: NotFoundRouteComponent;
        pendingComponent?: RouteComponent;
    }
    interface RootRouteOptionsExtensions {
        /** Wraps the whole route tree; the Svelte analogue of React/Solid's document shell. */
        shellComponent?: Component<{
            children: Snippet;
        }>;
        /**
         * Attributes for the document's `<html>` element during SSR. Svelte
         * components cannot render `<html>`/`<body>` themselves, so the shell
         * takes them here.
         */
        htmlAttrs?: Record<string, string | boolean | undefined>;
        /** Attributes for the document's `<body>` element during SSR. */
        bodyAttrs?: Record<string, string | boolean | undefined>;
    }
    interface RouteExtensions<in out TId extends string, in out TFullPath extends string> {
        useMatch: UseMatchRoute<TId>;
        useRouteContext: UseRouteContextRoute<TId>;
        useSearch: UseSearchRoute<TId>;
        useParams: UseParamsRoute<TId>;
        useLoaderDeps: UseLoaderDepsRoute<TId>;
        useLoaderData: UseLoaderDataRoute<TId>;
        useNavigate: () => UseNavigateResult<TFullPath>;
        Link: LinkComponentRoute<TFullPath>;
    }
}
export type SvelteNode = Snippet | Component<any>;
export type RouteComponent = Component<any> | Snippet<[]>;
export type ErrorRouteComponent = Component<ErrorComponentProps> | Snippet<[ErrorComponentProps]>;
export type NotFoundRouteComponent = Component<NotFoundRouteProps> | Snippet<[NotFoundRouteProps]>;
export type AsyncRouteComponent<TProps extends Record<string, any>> = Component<TProps> | Snippet<[TProps]>;
export interface DefaultRouteTypes<TProps extends Record<string, any>> {
    component: Component<TProps> | Snippet<[TProps]>;
}
export interface RouteTypes<TProps extends Record<string, any>> extends DefaultRouteTypes<TProps> {
}
export declare class Route<in out TRegister = unknown, in out TParentRoute extends RouteConstraints['TParentRoute'] = AnyRoute, in out TPath extends RouteConstraints['TPath'] = '/', in out TFullPath extends RouteConstraints['TFullPath'] = ResolveFullPath<TParentRoute, TPath>, in out TCustomId extends RouteConstraints['TCustomId'] = string, in out TId extends RouteConstraints['TId'] = ResolveId<TParentRoute, TCustomId, TPath>, in out TSearchValidator = undefined, in out TParams = ResolveParams<TPath>, in out TRouterContext = AnyContext, in out TRouteContextFn = AnyContext, in out TBeforeLoadFn = AnyContext, in out TLoaderDeps extends Record<string, any> = {}, in out TLoaderFn = undefined, in out TChildren = unknown, in out TFileRouteTypes = unknown, in out TSSR = unknown, in out TMiddlewares = unknown, in out THandlers = undefined> extends BaseRoute<TRegister, TParentRoute, TPath, TFullPath, TCustomId, TId, TSearchValidator, TParams, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, TChildren, TFileRouteTypes, TSSR, TMiddlewares, THandlers> {
    useMatch: UseMatchRoute<TId>;
    useRouteContext: UseRouteContextRoute<TId>;
    useSearch: UseSearchRoute<TId>;
    useParams: UseParamsRoute<TId>;
    useLoaderDeps: UseLoaderDepsRoute<TId>;
    useLoaderData: UseLoaderDataRoute<TId>;
    useNavigate: () => UseNavigateResult<TFullPath>;
    Link: LinkComponentRoute<TFullPath>;
}
export declare function createRoute<TRegister = unknown, TParentRoute extends RouteConstraints['TParentRoute'] = AnyRoute, TPath extends RouteConstraints['TPath'] = '/', TFullPath extends RouteConstraints['TFullPath'] = ResolveFullPath<TParentRoute, TPath>, TCustomId extends RouteConstraints['TCustomId'] = string, TId extends RouteConstraints['TId'] = ResolveId<TParentRoute, TCustomId, TPath>, TSearchValidator = undefined, TParams = ResolveParams<TPath>, TRouteContextFn = AnyContext, TBeforeLoadFn = AnyContext, TLoaderDeps extends Record<string, any> = {}, TLoaderFn = undefined, TChildren = unknown, TSSR = unknown, THandlers = undefined>(options: RouteOptions<TRegister, TParentRoute, TId, TCustomId, TFullPath, TPath, TSearchValidator, TParams, TLoaderDeps, TLoaderFn, AnyContext, TRouteContextFn, TBeforeLoadFn, TSSR, THandlers>): Route<TRegister, TParentRoute, TPath, TFullPath, TCustomId, TId, TSearchValidator, TParams, AnyContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, TChildren, unknown, TSSR, unknown, THandlers>;
export type AnyRootRoute = RootRoute<any, any, any, any, any, any, any, any, any, any>;
type RootRouteId = '__root__';
export declare class RootRoute<in out TRegister = Register, in out TSearchValidator = undefined, in out TRouterContext = {}, in out TRouteContextFn = AnyContext, in out TBeforeLoadFn = AnyContext, in out TLoaderDeps extends Record<string, any> = {}, in out TLoaderFn = undefined, in out TChildren = unknown, in out TFileRouteTypes = unknown, in out TSSR = unknown, in out THandlers = undefined> extends BaseRootRoute<TRegister, TSearchValidator, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, TChildren, TFileRouteTypes, TSSR, THandlers> {
    useMatch: UseMatchRoute<RootRouteId>;
    useRouteContext: UseRouteContextRoute<RootRouteId>;
    useSearch: UseSearchRoute<RootRouteId>;
    useParams: UseParamsRoute<RootRouteId>;
    useLoaderDeps: UseLoaderDepsRoute<RootRouteId>;
    useLoaderData: UseLoaderDataRoute<RootRouteId>;
    useNavigate: () => UseNavigateResult<"/">;
    Link: LinkComponentRoute<'/'>;
}
export declare function getRouteApi<const TId, TRouter extends AnyRouter = RegisteredRouter>(id: ConstrainLiteral<TId, RouteIds<TRouter['routeTree']>>): RouteApi<TId, TRouter>;
export declare class RouteApi<TId, TRouter extends AnyRouter = RegisteredRouter> extends BaseRouteApi<TId, TRouter> {
    /** @deprecated Use the `getRouteApi` function instead. */
    constructor({ id }: {
        id: TId;
    });
    useMatch: UseMatchRoute<TId>;
    useRouteContext: UseRouteContextRoute<TId>;
    useSearch: UseSearchRoute<TId>;
    useParams: UseParamsRoute<TId>;
    useLoaderDeps: UseLoaderDepsRoute<TId>;
    useLoaderData: UseLoaderDataRoute<TId>;
    useNavigate: () => UseNavigateResult<RouteTypesById<TRouter, TId>["fullPath"]>;
    Link: LinkComponentRoute<RouteTypesById<TRouter, TId>['fullPath']>;
    notFound: (opts?: NotFoundError) => NotFoundError;
}
export declare function createRootRouteWithContext<TRouterContext extends {}>(): <TRegister = Register, TRouteContextFn = AnyContext, TBeforeLoadFn = AnyContext, TSearchValidator = undefined, TLoaderDeps extends Record<string, any> = {}, TLoaderFn = undefined, TSSR = unknown, THandlers = undefined>(options?: RootRouteOptions<TRegister, TSearchValidator, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, TSSR, THandlers>) => RootRoute<TRegister, TSearchValidator, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, unknown, unknown, TSSR, THandlers>;
export declare const rootRouteWithContext: typeof createRootRouteWithContext;
export declare function createRootRoute<TRegister = Register, TSearchValidator = undefined, TRouterContext = {}, TRouteContextFn = AnyContext, TBeforeLoadFn = AnyContext, TLoaderDeps extends Record<string, any> = {}, TLoaderFn = undefined, TSSR = unknown, THandlers = undefined>(options?: RootRouteOptions<TRegister, TSearchValidator, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, TSSR, THandlers>): RootRoute<TRegister, TSearchValidator, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, unknown, unknown, TSSR, THandlers>;
export declare function createRouteMask<TRouteTree extends AnyRoute, TFrom extends string, TTo extends string>(opts: {
    routeTree: TRouteTree;
} & ToMaskOptions<RouterCore<TRouteTree, 'never', false>, TFrom, TTo>): RouteMask<TRouteTree>;
/**
 * A special route that renders when no other route matches: fixed `'/404'`
 * path/id, no params, and the options that don't apply to a catch-all (path,
 * id, caseSensitive, params parsing) omitted.
 */
export declare class NotFoundRoute<TRegister, TParentRoute extends AnyRootRoute, TRouterContext = AnyContext, TRouteContextFn = AnyContext, TBeforeLoadFn = AnyContext, TSearchValidator = undefined, TLoaderDeps extends Record<string, any> = {}, TLoaderFn = undefined, TChildren = unknown, TSSR = unknown, THandlers = undefined> extends Route<TRegister, TParentRoute, '/404', '/404', '404', '404', TSearchValidator, {}, TRouterContext, TRouteContextFn, TBeforeLoadFn, TLoaderDeps, TLoaderFn, TChildren, unknown, TSSR, unknown, THandlers> {
    constructor(options: Omit<RouteOptions<TRegister, TParentRoute, string, string, string, string, TSearchValidator, {}, TLoaderDeps, TLoaderFn, TRouterContext, TRouteContextFn, TBeforeLoadFn, TSSR, THandlers>, 'caseSensitive' | 'parseParams' | 'stringifyParams' | 'path' | 'id' | 'params'>);
}
export {};
