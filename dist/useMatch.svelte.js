/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion --
   Svelte's `getContext()` is untyped (it returns `unknown`), and `svelte-check`
   resolves it to `{}` where plain `tsc` infers something narrower. The rule
   therefore reports these assertions as redundant, but removing them breaks
   `pnpm test:types`. Keep them; do not let `eslint --fix` strip them. */
import { getContext } from 'svelte';
import { invariant } from '@tanstack/router-core';
import { useRouterSelector } from './utils.js';
import { useRouter } from './useRouter.js';
import { defaultNearestMatchContext, nearestMatchContextKey, } from './matchContext.js';
export function useMatch(opts) {
    const safeOpts = (opts ?? {});
    const router = useRouter();
    const nearestMatch = safeOpts.from
        ? undefined
        : (getContext(nearestMatchContextKey) ?? defaultNearestMatchContext);
    const select = (m) => (safeOpts.select ? safeOpts.select(m) : m);
    // The only throw site is this synchronous check at hook-call time. The
    // reactive reads below never throw: a match can be transiently `undefined`
    // while a navigation is in flight, and that must resolve, not crash.
    const throwIfMissing = (m) => {
        if (m !== undefined || !(safeOpts.shouldThrow ?? true)) {
            return;
        }
        if (router.stores.status.get() === 'pending') {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            throw new Error(`Invariant failed: Could not find ${safeOpts.from ? `an active match from "${safeOpts.from}"` : 'a nearest match!'}`);
        }
        invariant();
    };
    if (safeOpts.from) {
        const store = router.stores.getMatchStore(safeOpts.from);
        throwIfMissing(store.get());
        // While a navigation is pending the route may be briefly absent from the
        // pool; keep the last value until it either re-enters or the router
        // settles without it (the status is read too, since the store does not
        // emit again when the router settles).
        const matchSel = useRouterSelector(router, store);
        const statusSel = useRouterSelector(router, router.stores.status);
        let prev;
        const value = $derived.by(() => {
            const m = matchSel.current;
            if (m === undefined) {
                return statusSel.current === 'pending' ? prev : undefined;
            }
            prev = select(m);
            return prev;
        });
        return {
            get current() {
                return value;
            },
        };
    }
    // Nearest match from context. The initial value is computed synchronously
    // so a consumer reading `.current` during its first render sees it.
    const initialMatch = nearestMatch.match();
    throwIfMissing(initialMatch);
    let value = $state(initialMatch !== undefined ? select(initialMatch) : undefined);
    $effect(() => {
        const m = nearestMatch.match();
        // An outgoing component re-runs its effects during the flush that unmounts
        // it, after its match has left the pool; it keeps the value it had.
        if (m === undefined) {
            return;
        }
        value = select(m);
    });
    return {
        get current() {
            return value;
        },
    };
}
