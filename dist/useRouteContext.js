import { useMatch } from './useMatch.svelte';
export function useRouteContext(opts) {
    const o = (opts ?? {});
    return useMatch({
        ...o,
        select: (match) => o.select ? o.select(match.context) : match.context,
    });
}
