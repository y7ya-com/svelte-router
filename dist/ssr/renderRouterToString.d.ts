import type { AnyRouter } from '@tanstack/router-core';
export declare const renderRouterToString: ({ router, responseHeaders, children, }: {
    router: AnyRouter;
    responseHeaders: Headers;
    children?: () => unknown;
}) => Response;
