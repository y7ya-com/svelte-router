import type { Component } from 'svelte';
type $$ComponentProps = {
    load: () => Promise<unknown>;
    getComp: () => Component<any> | undefined;
    childProps: Record<string, unknown>;
};
declare const LazyComponent: Component<$$ComponentProps, {}, "">;
type LazyComponent = ReturnType<typeof LazyComponent>;
export default LazyComponent;
