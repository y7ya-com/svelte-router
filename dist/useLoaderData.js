import { useMatch } from './useMatch.svelte';
export function useLoaderData(opts) {
    const o = (opts ?? {});
    return useMatch({
        from: o.from,
        strict: o.strict,
        select: (s) => {
            return o.select ? o.select(s.loaderData) : s.loaderData;
        },
    });
}
