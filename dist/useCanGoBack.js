import { useRouterSelector } from './utils.js';
import { useRouter } from './useRouter.js';
export function useCanGoBack() {
    const router = useRouter();
    return useRouterSelector(router, router.stores.location, (loc) => loc.state.__TSR_index !== 0);
}
