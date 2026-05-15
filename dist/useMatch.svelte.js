import { getContext } from 'svelte';
import { useSelector } from '@tanstack/svelte-store';
import { invariant } from '@tanstack/router-core';
import { useRouter } from './useRouter';
import { defaultNearestMatchContext, nearestMatchContextKey, } from './matchContext';
export function useMatch(opts) {
    const safeOpts = (opts ?? {});
    const router = useRouter();
    const nearestMatch = safeOpts.from
        ? undefined
        : (getContext(nearestMatchContextKey) ?? defaultNearestMatchContext);
    if (safeOpts.from) {
        const store = router.stores.getRouteMatchStore(safeOpts.from);
        const sel = useSelector(store, (m) => {
            if (m === undefined) {
                if (!router.stores.pendingRouteIds.get()[safeOpts.from] &&
                    !router.stores.isTransitioning.get() &&
                    (safeOpts.shouldThrow ?? true)) {
                    if (process.env.NODE_ENV !== 'production') {
                        throw new Error(`Invariant failed: Could not find an active match from "${safeOpts.from}"`);
                    }
                    invariant();
                }
                return undefined;
            }
            return (safeOpts.select ? safeOpts.select(m) : m);
        });
        return sel;
    }
    // From-context case: read via nearestMatch.match() which is reactive.
    // Compute initial value synchronously so consumers reading `.current` on
    // first render see the right shape (avoids `.current.x` crashes before
    // the effect first fires).
    const initialMatch = nearestMatch.match();
    let value = $state(initialMatch !== undefined
        ? safeOpts.select
            ? safeOpts.select(initialMatch)
            : initialMatch
        : undefined);
    $effect(() => {
        const m = nearestMatch.match();
        if (m === undefined) {
            if (!nearestMatch.hasPending() &&
                !router.stores.isTransitioning.get() &&
                (safeOpts.shouldThrow ?? true)) {
                if (process.env.NODE_ENV !== 'production') {
                    throw new Error('Invariant failed: Could not find a nearest match!');
                }
                invariant();
            }
            value = undefined;
            return;
        }
        value = safeOpts.select ? safeOpts.select(m) : m;
    });
    return {
        get current() {
            return value;
        },
    };
}
