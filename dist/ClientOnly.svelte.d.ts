import type { Snippet } from 'svelte';
type Props = {
    children?: Snippet;
    fallback?: Snippet;
};
declare const ClientOnly: import("svelte").Component<Props, {}, "">;
type ClientOnly = ReturnType<typeof ClientOnly>;
export default ClientOnly;
