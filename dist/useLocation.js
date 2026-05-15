import { useSelector } from '@tanstack/svelte-store';
import { useRouter } from './useRouter';
export function useLocation(opts) {
    const router = useRouter();
    return useSelector(router.stores.location, (opts?.select ?? ((s) => s)));
}
