/**
 * Pick the appropriate not-found component for the given route + error and return it.
 * The caller is responsible for rendering it.
 */
export function renderRouteNotFound(router, route, error) {
    const comp = route.options.notFoundComponent ??
        router.options.defaultNotFoundComponent;
    if (!comp)
        return undefined;
    return { component: comp, props: { ...(error ?? {}) } };
}
