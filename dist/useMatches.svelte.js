import { getContext } from 'svelte';
import { useSelector } from '@tanstack/svelte-store';
import { useRouter } from './useRouter';
import { defaultNearestMatchContext, nearestMatchContextKey, } from './matchContext';
export function useMatches(opts) {
    const router = useRouter();
    return useSelector(router.stores.matches, (matches) => {
        return opts?.select ? opts.select(matches) : matches;
    });
}
export function useParentMatches(opts) {
    const ctx = getContext(nearestMatchContextKey) ?? defaultNearestMatchContext;
    return useMatches({
        select: (matches) => {
            const contextMatchId = ctx.matchId();
            const sliced = matches.slice(0, matches.findIndex((d) => d.id === contextMatchId));
            return opts?.select ? opts.select(sliced) : sliced;
        },
    });
}
export function useChildMatches(opts) {
    const ctx = getContext(nearestMatchContextKey) ?? defaultNearestMatchContext;
    return useMatches({
        select: (matches) => {
            const contextMatchId = ctx.matchId();
            const sliced = matches.slice(matches.findIndex((d) => d.id === contextMatchId) + 1);
            return opts?.select ? opts.select(sliced) : sliced;
        },
    });
}
export function useMatchRoute() {
    const router = useRouter();
    return (opts) => {
        const { pending, caseSensitive, fuzzy, includeSearch, ...rest } = opts;
        return useSelector(router.stores.matchRouteDeps, () => {
            return router.matchRoute(rest, {
                pending,
                caseSensitive,
                fuzzy,
                includeSearch,
            });
        });
    };
}
