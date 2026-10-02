import { BaseRootRoute, BaseRoute, BaseRouteApi, notFound, } from '@tanstack/router-core';
import { useMatch } from './useMatch.svelte.js';
import { useLoaderData } from './useLoaderData.js';
import { useLoaderDeps } from './useLoaderDeps.js';
import { useParams } from './useParams.js';
import { useSearch } from './useSearch.js';
import { useNavigate } from './useNavigate.js';
import { useRouteContext } from './useRouteContext.js';
import { useRouter } from './useRouter.js';
import LinkComponent from './Link.svelte';
export class Route extends BaseRoute {
    constructor() {
        super(...arguments);
        this.useMatch = (opts) => useMatch({ ...opts, from: this.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.id });
        this.useSearch = (opts) => useSearch({ ...opts, from: this.id });
        this.useParams = (opts) => useParams({ ...opts, from: this.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.id });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.id });
        this.useNavigate = () => useNavigate({ from: this.fullPath });
        // A Link pre-bound to this route: `<Route.Link to="./child">`.
        this.Link = ((internals, props) => LinkComponent(internals, {
            from: this.fullPath,
            ...props,
        }));
    }
}
export function createRoute(options) {
    return new Route(options);
}
export class RootRoute extends BaseRootRoute {
    constructor() {
        super(...arguments);
        this.useMatch = (opts) => useMatch({ ...opts, from: this.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.id });
        this.useSearch = (opts) => useSearch({ ...opts, from: this.id });
        this.useParams = (opts) => useParams({ ...opts, from: this.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.id });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.id });
        this.useNavigate = () => useNavigate({ from: this.fullPath });
        this.Link = ((internals, props) => LinkComponent(internals, {
            from: this.fullPath,
            ...props,
        }));
    }
}
export function getRouteApi(id) {
    return new RouteApi({ id });
}
export class RouteApi extends BaseRouteApi {
    /** @deprecated Use the `getRouteApi` function instead. */
    constructor({ id }) {
        super({ id });
        this.useMatch = (opts) => useMatch({ ...opts, from: this.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.id });
        this.useSearch = (opts) => useSearch({ ...opts, from: this.id });
        this.useParams = (opts) => useParams({ ...opts, from: this.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.id, strict: false });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.id, strict: false });
        this.useNavigate = () => {
            const router = useRouter();
            return useNavigate({
                from: router.routesById[this.id]?.fullPath ?? '/',
            });
        };
        this.Link = ((internals, props) => {
            const router = useRouter();
            const fullPath = router.routesById[this.id]?.fullPath ?? '/';
            return LinkComponent(internals, { from: fullPath, ...props });
        });
        this.notFound = (opts) => {
            return notFound({
                routeId: this.id,
                ...opts,
            });
        };
    }
}
export function createRootRouteWithContext() {
    return (options) => createRootRoute(options);
}
export const rootRouteWithContext = createRootRouteWithContext;
export function createRootRoute(options) {
    return new RootRoute(options);
}
export function createRouteMask(opts) {
    return opts;
}
/**
 * A special route that renders when no other route matches: fixed `'/404'`
 * path/id, no params, and the options that don't apply to a catch-all (path,
 * id, caseSensitive, params parsing) omitted.
 */
export class NotFoundRoute extends Route {
    constructor(options) {
        super({
            ...options,
            id: '404',
        });
    }
}
