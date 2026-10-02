import { useRouter } from './useRouter.js';
import { useRouterSelector } from './utils.js';
export function useRouterState(opts) {
    const contextRouter = useRouter({
        warn: opts?.router === undefined,
    });
    const router = opts?.router || contextRouter;
    return useRouterSelector(router, router.stores.__store, (opts?.select ?? ((s) => s)));
}
