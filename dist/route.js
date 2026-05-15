import { BaseRootRoute, BaseRoute, BaseRouteApi, notFound, } from '@tanstack/router-core';
import { useMatch } from './useMatch.svelte';
import { useLoaderData } from './useLoaderData';
import { useLoaderDeps } from './useLoaderDeps';
import { useParams } from './useParams';
import { useSearch } from './useSearch';
import { useNavigate } from './useNavigate';
import { useRouteContext } from './useRouteContext';
import { useRouter } from './useRouter';
import LinkComponent from './Link.svelte';
export class Route extends BaseRoute {
    constructor() {
        super(...arguments);
        this.useMatch = (opts) => useMatch({ select: opts?.select, from: this.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.id });
        this.useSearch = (opts) => useSearch({ select: opts?.select, from: this.id });
        this.useParams = (opts) => useParams({ select: opts?.select, from: this.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.id });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.id });
        this.useNavigate = () => useNavigate({ from: this.fullPath });
        // Route-bound Link — equivalent to `<Link from={route.fullPath} ...>`.
        // Matches the `route.Link` shorthand found in solid-router and react-router.
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
        this.useMatch = (opts) => useMatch({ select: opts?.select, from: this.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.id });
        this.useSearch = (opts) => useSearch({ select: opts?.select, from: this.id });
        this.useParams = (opts) => useParams({ select: opts?.select, from: this.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.id });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.id });
        this.useNavigate = () => useNavigate({ from: this.fullPath });
        // Root-route-bound Link (rarely useful but matches solid/react parity).
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
        this.useMatch = (opts) => useMatch({ select: opts?.select, from: this.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.id });
        this.useSearch = (opts) => useSearch({ select: opts?.select, from: this.id });
        this.useParams = (opts) => useParams({ select: opts?.select, from: this.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.id, strict: false });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.id, strict: false });
        this.useNavigate = () => {
            const router = useRouter();
            return useNavigate({
                from: (router.routesById[this.id]?.fullPath ?? '/'),
            });
        };
        // Link bound to this route — equivalent to `<Link from={fullPath} ...>`.
        this.Link = ((internals, props) => {
            const router = useRouter();
            const fullPath = router.routesById[this.id]?.fullPath ?? '/';
            return LinkComponent(internals, { from: fullPath, ...props });
        });
        this.notFound = (opts) => {
            return notFound({ routeId: this.id, ...opts });
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
