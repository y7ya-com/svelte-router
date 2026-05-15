import type { AssetCrossOriginConfig, RouterManagedTag } from '@tanstack/router-core';
/**
 * Build the list of head/link/meta/script tags to render for active matches.
 * Used internally by `HeadContent`.
 */
export declare function useTags(assetCrossOrigin?: AssetCrossOriginConfig): {
    readonly current: Array<RouterManagedTag>;
};
export declare function uniqBy<T>(arr: Array<T>, fn: (item: T) => string): T[];
