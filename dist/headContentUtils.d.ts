import type { AssetCrossOriginConfig, RouterManagedTag } from '@tanstack/router-core';
/**
 * Build the list of head/link/meta/script tags to render for active matches.
 * Used internally by `HeadContent`.
 *
 * Collects the current route tree's head tags against router-core's manifest
 * model: per-route `css` links + a single top-level `inlineStyle`, with script
 * preloads resolved via `getScriptPreloadAttrs`. User-authored tags (meta,
 * links, styles, scripts) are de-duplicated with `appendUniqueUserTags`.
 */
export declare function useTags(assetCrossOrigin?: AssetCrossOriginConfig): {
    readonly current: Array<RouterManagedTag>;
};
/**
 * Key tags by content so unchanged tags keep their DOM nodes across
 * navigations; identical tags get an occurrence suffix to stay unique.
 */
export declare function keyTags(tags: Array<RouterManagedTag>): Array<{
    key: string;
    tag: RouterManagedTag;
}>;
