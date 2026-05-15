import type { Component, Snippet } from 'svelte';
import type { ErrorComponentProps } from '@tanstack/router-core';
type Props = {
    getResetKey: () => unknown;
    children?: Snippet;
    onCatch?: (error: Error, info?: {
        componentStack: string;
    }) => void;
    errorComponent?: Component<ErrorComponentProps> | Snippet<[ErrorComponentProps]>;
};
declare const CatchBoundary: Component<Props, {}, "">;
type CatchBoundary = ReturnType<typeof CatchBoundary>;
export default CatchBoundary;
