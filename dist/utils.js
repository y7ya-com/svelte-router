const SNIPPET_SYMBOL = Symbol.for('svelte.snippet');
export function isSnippet(value) {
    return (typeof value === 'function' &&
        (SNIPPET_SYMBOL in value ||
            Object.getOwnPropertySymbols(value).some((s) => s.description?.includes('snippet'))));
}
export function isComponent(value) {
    return typeof value === 'function' && !isSnippet(value);
}
