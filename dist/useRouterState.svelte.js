import { isServer } from '@tanstack/router-core/isServer';
import { useSelector } from '@tanstack/svelte-store';
import { useRouter } from './useRouter';
export function useRouterState(opts) {
    const contextRouter = useRouter({
        warn: opts?.router === undefined,
    });
    const router = opts?.router || contextRouter;
    const _isServer = isServer ?? router.isServer;
    if (_isServer) {
        const state = router.stores.__store.get();
        const selected = (opts?.select ? opts.select(state) : state);
        return {
            get current() {
                return selected;
            },
        };
    }
    return useSelector(router.stores.__store, (opts?.select ?? ((s) => s)));
}
