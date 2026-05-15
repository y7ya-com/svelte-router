import type { NotFoundError } from '@tanstack/router-core';
/**
 * Unwrap a notFound error. Some frameworks (e.g. Solid) wrap non-Error throws,
 * exposing the original on `cause`. This helper handles both cases.
 */
export declare function getNotFound(error: unknown): (NotFoundError & {
    isNotFound: true;
}) | undefined;
