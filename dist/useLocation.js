import { useRouterSelector } from './utils.js';
import { useRouter } from './useRouter.js';
export function useLocation(opts) {
    const router = useRouter();
    return useRouterSelector(router, router.stores.location, (opts?.select ?? ((s) => s)));
}
