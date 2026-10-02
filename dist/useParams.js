import { useMatch } from './useMatch.svelte.js';
export function useParams(opts) {
    const o = (opts ?? {});
    return useMatch({
        from: o.from,
        strict: o.strict,
        shouldThrow: o.shouldThrow,
        select: (match) => {
            const params = o.strict === false ? match.params : match._strictParams;
            return o.select ? o.select(params) : params;
        },
    });
}
