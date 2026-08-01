import type { Component, Snippet } from 'svelte';
export declare function isSnippet(value: unknown): value is Snippet<Array<unknown>>;
export declare function isComponent(value: unknown): value is Component<any>;
