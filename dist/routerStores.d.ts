import type { Readable } from '@tanstack/svelte-store';
import type { AnyRoute, GetStoreConfig } from '@tanstack/router-core';
declare module '@tanstack/router-core' {
    interface RouterReadableStore<TValue> extends Readable<TValue> {
    }
    interface RouterStores<in out TRouteTree extends AnyRoute> {
        /** Maps each active routeId to the matchId of its child in the match tree. */
        childMatchIdByRouteId: RouterReadableStore<Record<string, string>>;
        /** Maps each pending routeId to true for quick lookup. */
        pendingRouteIds: RouterReadableStore<Record<string, boolean>>;
    }
}
export declare const getStoreFactory: GetStoreConfig;
