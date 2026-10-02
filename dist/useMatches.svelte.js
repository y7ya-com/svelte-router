/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion --
   See the note in `useMatch.svelte.ts`: `getContext()` types differently under
   `svelte-check` than under plain `tsc`, so these assertions are load-bearing
   even though the rule reports them as redundant. */
import { getContext } from 'svelte';
import { useRouterSelector } from './utils.js';
import { useRouter } from './useRouter.js';
import { defaultNearestMatchContext, nearestMatchContextKey, } from './matchContext.js';
export function useMatches(opts) {
    const router = useRouter();
    return useRouterSelector(router, router.stores.matches, (matches) => {
        return opts?.select ? opts.select(matches) : matches;
    });
}
export function useParentMatches(opts) {
    const ctx = getContext(nearestMatchContextKey) ?? defaultNearestMatchContext;
    return useMatches({
        select: (matches) => {
            const contextRouteId = ctx.routeId();
            const sliced = matches.slice(0, matches.findIndex((d) => d.routeId === contextRouteId));
            return opts?.select ? opts.select(sliced) : sliced;
        },
    });
}
export function useChildMatches(opts) {
    const ctx = getContext(nearestMatchContextKey) ?? defaultNearestMatchContext;
    return useMatches({
        select: (matches) => {
            const contextRouteId = ctx.routeId();
            const sliced = matches.slice(matches.findIndex((d) => d.routeId === contextRouteId) + 1);
            return opts?.select ? opts.select(sliced) : sliced;
        },
    });
}
export function useMatchRoute() {
    const router = useRouter();
    // Re-evaluate whenever navigation state changes.
    const locationSel = useRouterSelector(router, router.stores.location);
    const resolvedLocationSel = useRouterSelector(router, router.stores.resolvedLocation);
    const statusSel = useRouterSelector(router, router.stores.status);
    return (opts) => {
        const value = $derived.by(() => {
            void locationSel.current;
            void resolvedLocationSel.current;
            void statusSel.current;
            const { pending, caseSensitive, fuzzy, includeSearch, ...rest } = opts;
            return router.matchRoute(rest, {
                pending,
                caseSensitive,
                fuzzy,
                includeSearch,
            });
        });
        return {
            get current() {
                return value;
            },
        };
    };
}
