import type { AnyRouter } from '@tanstack/router-core';
export declare const renderRouterToString: ({ router, responseHeaders, }: {
    router: AnyRouter;
    responseHeaders: Headers;
    children?: () => unknown;
}) => Promise<Response>;
