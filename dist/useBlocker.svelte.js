import { useRouter } from './useRouter';
const IDLE = {
    status: 'idle',
    current: undefined,
    next: undefined,
    action: undefined,
    proceed: undefined,
    reset: undefined,
};
function _resolveBlockerOpts(opts, condition) {
    if (opts === undefined) {
        return { shouldBlockFn: () => true, withResolver: false };
    }
    if (typeof opts === 'function') {
        const shouldBlock = Boolean(condition ?? true);
        const _customBlockerFn = async () => {
            if (shouldBlock)
                return await opts();
            return false;
        };
        return {
            shouldBlockFn: _customBlockerFn,
            enableBeforeUnload: shouldBlock,
            withResolver: false,
        };
    }
    if ('shouldBlockFn' in opts)
        return opts;
    const shouldBlock = Boolean(opts.condition ?? true);
    const _customBlockerFn = async () => {
        if (shouldBlock && opts.blockerFn !== undefined) {
            return await opts.blockerFn();
        }
        return shouldBlock;
    };
    return {
        shouldBlockFn: _customBlockerFn,
        enableBeforeUnload: shouldBlock,
        withResolver: opts.blockerFn === undefined,
    };
}
export function useBlocker(opts, condition) {
    const router = useRouter();
    let resolver = $state(IDLE);
    // Recompute resolved opts inside the effect so reactive `disabled`/etc.
    // properties on `opts` re-register the blocker when they change.
    const withResolver = _resolveBlockerOpts(opts, condition).withResolver ?? false;
    $effect(() => {
        const resolved = _resolveBlockerOpts(opts, condition);
        const enableBeforeUnload = resolved.enableBeforeUnload ?? true;
        const disabled = resolved.disabled ?? false;
        const blockerFnComposed = async (blockerFnArgs) => {
            function getLocation(location) {
                const parsedLocation = router.parseLocation(location);
                const matchedRoutes = router.getMatchedRoutes(parsedLocation.pathname);
                if (matchedRoutes.foundRoute === undefined) {
                    return {
                        routeId: '__notFound__',
                        fullPath: parsedLocation.pathname,
                        pathname: parsedLocation.pathname,
                        params: matchedRoutes.routeParams,
                        search: parsedLocation.search,
                    };
                }
                return {
                    routeId: matchedRoutes.foundRoute.id,
                    fullPath: matchedRoutes.foundRoute.fullPath,
                    pathname: parsedLocation.pathname,
                    params: matchedRoutes.routeParams,
                    search: parsedLocation.search,
                };
            }
            const current = getLocation(blockerFnArgs.currentLocation);
            const next = getLocation(blockerFnArgs.nextLocation);
            if (current.routeId === '__notFound__' &&
                next.routeId !== '__notFound__') {
                return false;
            }
            const shouldBlock = await resolved.shouldBlockFn({
                action: blockerFnArgs.action,
                current,
                next,
            });
            if (!withResolver)
                return shouldBlock;
            if (!shouldBlock)
                return false;
            const promise = new Promise((resolve) => {
                resolver = {
                    status: 'blocked',
                    current,
                    next,
                    action: blockerFnArgs.action,
                    proceed: () => resolve(false),
                    reset: () => resolve(true),
                };
            });
            const canNavigateAsync = await promise;
            resolver = IDLE;
            return canNavigateAsync;
        };
        if (disabled)
            return;
        return router.history.block({
            blockerFn: blockerFnComposed,
            enableBeforeUnload,
        });
    });
    if (!withResolver)
        return;
    return {
        get current() {
            return resolver;
        },
    };
}
