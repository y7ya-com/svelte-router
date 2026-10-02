import type { ParsedLocation, ScrollRestorationEntry } from '@tanstack/router-core';
export declare function useElementScrollRestoration(options: ({
    id: string;
    getElement?: () => Window | Element | undefined | null;
} | {
    id?: string;
    getElement: () => Window | Element | undefined | null;
}) & {
    getKey?: (location: ParsedLocation) => string;
}): ScrollRestorationEntry | undefined;
