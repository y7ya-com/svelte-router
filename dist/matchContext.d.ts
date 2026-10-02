import type { AnyRouteMatch } from '@tanstack/router-core';
export type NearestMatchContextValue = {
    routeId: () => string | undefined;
    match: () => AnyRouteMatch | undefined;
};
export declare const defaultNearestMatchContext: NearestMatchContextValue;
export declare const nearestMatchContextKey: symbol & {
    __brand: "tsr.nearestMatchContext";
};
