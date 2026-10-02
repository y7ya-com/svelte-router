import type { AnyRoute } from '@tanstack/router-core';
import type { Component } from 'svelte';
type $$ComponentProps = {
    route: AnyRoute;
    error: unknown;
};
declare const RouteNotFound: Component<$$ComponentProps, {}, "">;
type RouteNotFound = ReturnType<typeof RouteNotFound>;
export default RouteNotFound;
