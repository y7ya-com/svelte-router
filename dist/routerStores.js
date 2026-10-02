import { batch, createAtom } from '@tanstack/svelte-store';
import { createNonReactiveMutableStore, createNonReactiveReadonlyStore, } from '@tanstack/router-core';
import { isServer } from '@tanstack/router-core/isServer';
export const getStoreFactory = (opts) => {
    if (isServer ?? opts.isServer) {
        // `useSelector` subscribes from an `$effect`, which Svelte never runs
        // during SSR, so server stores only need `get`.
        return {
            createMutableStore: createNonReactiveMutableStore,
            createReadonlyStore: createNonReactiveReadonlyStore,
            batch: (fn) => fn(),
        };
    }
    return {
        createMutableStore: createAtom,
        createReadonlyStore: createAtom,
        batch,
    };
};
