import { isNotFound } from '@tanstack/router-core';
/**
 * Unwrap a notFound error. Some frameworks (e.g. Solid) wrap non-Error throws,
 * exposing the original on `cause`. This helper handles both cases.
 */
export function getNotFound(error) {
    if (isNotFound(error)) {
        return error;
    }
    if (isNotFound(error?.cause)) {
        return error.cause;
    }
    return undefined;
}
