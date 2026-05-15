import type { Snippet } from 'svelte';
import type { NotFoundError } from '@tanstack/router-core';
type Props = {
    fallback?: Snippet<[NotFoundError]>;
    onCatch?: (error: NotFoundError) => void;
    children?: Snippet;
};
declare const CatchNotFound: import("svelte").Component<Props, {}, "">;
type CatchNotFound = ReturnType<typeof CatchNotFound>;
export default CatchNotFound;
