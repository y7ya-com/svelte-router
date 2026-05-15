import { batch, createAtom } from '@tanstack/svelte-store';
import { createNonReactiveMutableStore, createNonReactiveReadonlyStore, } from '@tanstack/router-core';
import { isServer } from '@tanstack/router-core/isServer';
function initRouterStores(stores, createReadonlyStore) {
    stores.childMatchIdByRouteId = createReadonlyStore(() => {
        const ids = stores.matchesId.get();
        const obj = {};
        for (let i = 0; i < ids.length - 1; i++) {
            const parentStore = stores.matchStores.get(ids[i]);
            if (parentStore?.routeId) {
                obj[parentStore.routeId] = ids[i + 1];
            }
        }
        return obj;
    });
    stores.pendingRouteIds = createReadonlyStore(() => {
        const ids = stores.pendingIds.get();
        const obj = {};
        for (const id of ids) {
            const store = stores.pendingMatchStores.get(id);
            if (store?.routeId) {
                obj[store.routeId] = true;
            }
        }
        return obj;
    });
}
/**
 * Wrap a non-reactive store so it satisfies the `Readable` interface with a
 * no-op `subscribe`. Lets consumers call `useSelector` on it without crashing
 * in server / non-reactive contexts.
 */
function addNoopSubscribe(store) {
    if ('subscribe' in store)
        return store;
    return Object.assign(store, {
        subscribe: () => ({ unsubscribe: () => { } }),
    });
}
const ssrCreateMutableStore = (initialValue) => addNoopSubscribe(createNonReactiveMutableStore(initialValue));
const ssrCreateReadonlyStore = (read) => addNoopSubscribe(createNonReactiveReadonlyStore(read));
export const getStoreFactory = (opts) => {
    if (isServer ?? opts.isServer) {
        return {
            createMutableStore: ssrCreateMutableStore,
            createReadonlyStore: ssrCreateReadonlyStore,
            batch: (fn) => fn(),
            init: (stores) => initRouterStores(stores, ssrCreateReadonlyStore),
        };
    }
    return {
        createMutableStore: createAtom,
        createReadonlyStore: createAtom,
        batch,
        init: (stores) => initRouterStores(stores, createAtom),
    };
};
