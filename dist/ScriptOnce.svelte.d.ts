import type { Snippet } from 'svelte';
type Props = {
    children?: Snippet | string;
    log?: boolean;
    sync?: boolean;
};
declare const ScriptOnce: import("svelte").Component<Props, {}, "">;
type ScriptOnce = ReturnType<typeof ScriptOnce>;
export default ScriptOnce;
