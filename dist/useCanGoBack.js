import { useSelector } from '@tanstack/svelte-store';
import { useRouter } from './useRouter';
export function useCanGoBack() {
    const router = useRouter();
    return useSelector(router.stores.location, (loc) => loc.state.__TSR_index !== 0);
}
