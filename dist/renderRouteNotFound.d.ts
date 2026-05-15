import type { AnyRoute, AnyRouter, NotFoundError } from '@tanstack/router-core';
/**
 * Pick the appropriate not-found component for the given route + error and return it.
 * The caller is responsible for rendering it.
 */
export declare function renderRouteNotFound(router: AnyRouter, route: AnyRoute, error: NotFoundError | undefined): {
    component: any;
    props: Record<string, unknown>;
} | undefined;
