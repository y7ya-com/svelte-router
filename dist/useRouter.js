import { getContext } from 'svelte';
import { routerContextKey } from './routerContext';
export function useRouter(opts) {
    const value = getContext(routerContextKey);
    if (process.env.NODE_ENV !== 'production') {
        if ((opts?.warn ?? true) && !value) {
            console.warn('Warning: useRouter must be used inside a <RouterProvider> component!');
        }
    }
    return value;
}
