import { useMatch } from './useMatch.svelte';
export function useSearch(opts) {
    const o = (opts ?? {});
    return useMatch({
        from: o.from,
        strict: o.strict,
        shouldThrow: o.shouldThrow,
        select: (match) => {
            const search = match.search;
            return o.select ? o.select(search) : search;
        },
    });
}
