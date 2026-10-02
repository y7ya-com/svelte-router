import { getElementScrollRestorationEntry, setupScrollRestoration, } from '@tanstack/router-core';
import { useRouter } from './useRouter.js';
export function useElementScrollRestoration(options) {
    const router = useRouter();
    setupScrollRestoration(router, true);
    return getElementScrollRestorationEntry(router, options);
}
