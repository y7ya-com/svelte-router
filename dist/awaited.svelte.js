import { TSR_DEFERRED_PROMISE, defer } from '@tanstack/router-core';
/**
 * Synchronously read a deferred promise's resolved value, or throw to suspend.
 * Mirrors solid-router's useAwaited: throws the promise if still pending, throws
 * the error if errored, returns [data, deferredPromise] when ready.
 */
export function useAwaited({ promise: _promise, }) {
    const promise = defer(_promise);
    if (promise[TSR_DEFERRED_PROMISE].status === 'pending') {
        throw promise;
    }
    if (promise[TSR_DEFERRED_PROMISE].status === 'error') {
        throw promise[TSR_DEFERRED_PROMISE].error;
    }
    return [promise[TSR_DEFERRED_PROMISE].data, promise];
}
