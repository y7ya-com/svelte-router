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
        // Phase 1 — synchronous check at hook-call time is the ONLY throw site
        // (mirrors solid-router). The reactive selector below must never throw,
        // otherwise a transiently-undefined match during a navigation / view
        // transition would crash instead of resolving to the next match.
        const initial = store.get();
        if (initial === undefined &&
            !router.stores.pendingRouteIds.get()[safeOpts.from] &&
            !router.stores.isTransitioning.get() &&
            (safeOpts.shouldThrow ?? true)) {
            if (process.env.NODE_ENV !== 'production') {
                throw new Error(`Invariant failed: Could not find an active match from "${safeOpts.from}"`);
            }
            invariant();
        }
        // Phase 2 — reactive selector. Never throws; keeps the previous value while
        // the route is pending or the router is transitioning, else `undefined`.
        let prev = initial !== undefined
            ? (safeOpts.select ? safeOpts.select(initial) : initial)
            : undefined;
        const sel = useSelector(store, (m) => {
            if (m === undefined) {
                const hasPendingMatch = !!router.stores.pendingRouteIds.get()[safeOpts.from];
                if (prev !== undefined &&
                    (hasPendingMatch || router.stores.isTransitioning.get())) {
                    return prev;
                }
                return undefined;
            }
            prev = (safeOpts.select ? safeOpts.select(m) : m);
            return prev;
        });
        return sel;
    }
    // From-context case: read via nearestMatch.match() which is reactive.
    // Compute initial value synchronously so consumers reading `.current` on
    // first render see the right shape (avoids `.current.x` crashes before
    // the effect first fires).
    const initialMatch = nearestMatch.match();
    // Phase 1 — synchronous throw check (the only throw site; see the `from`
    // branch above for why the reactive effect must not throw).
    if (initialMatch === undefined &&
        !nearestMatch.hasPending() &&
        !router.stores.isTransitioning.get() &&
        (safeOpts.shouldThrow ?? true)) {
        if (process.env.NODE_ENV !== 'production') {
            throw new Error('Invariant failed: Could not find a nearest match!');
        }
        invariant();
    }
    let value = $state(initialMatch !== undefined
        ? safeOpts.select
            ? safeOpts.select(initialMatch)
            : initialMatch
        : undefined);
    // Phase 2 — reactive effect. Never throws; keeps the previous value while the
    // nearest match is pending or the router is transitioning, else `undefined`.
    $effect(() => {
        const m = nearestMatch.match();
        if (m === undefined) {
            if (value !== undefined &&
                (nearestMatch.hasPending() || router.stores.isTransitioning.get())) {
                return;
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
