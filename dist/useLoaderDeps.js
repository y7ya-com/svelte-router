import { useMatch } from './useMatch.svelte';
export function useLoaderDeps(opts) {
    const o = (opts ?? {});
    return useMatch({
        ...o,
        select: (s) => {
            return o.select ? o.select(s.loaderDeps) : s.loaderDeps;
        },
    });
}
