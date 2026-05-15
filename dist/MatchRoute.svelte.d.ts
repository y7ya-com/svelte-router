import type { Snippet } from 'svelte';
type Props = Record<string, unknown> & {
    children?: Snippet<[]>;
    match?: Snippet<[any]>;
};
declare const MatchRoute: import("svelte").Component<Props, {}, "">;
type MatchRoute = ReturnType<typeof MatchRoute>;
export default MatchRoute;
