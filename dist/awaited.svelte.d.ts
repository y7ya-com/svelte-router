import type { DeferredPromise } from '@tanstack/router-core';
export type AwaitOptions<T> = {
    promise: Promise<T>;
};
/**
 * Synchronously read a deferred promise's resolved value, or throw to suspend.
 * Throws the promise if still pending, throws
 * the error if errored, returns [data, deferredPromise] when ready.
 */
export declare function useAwaited<T>({ promise: _promise, }: AwaitOptions<T>): [T, DeferredPromise<T>];
