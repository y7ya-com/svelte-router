import type { AnyRouteMatch } from '@tanstack/router-core';
export type NearestMatchContextValue = {
    matchId: () => string | undefined;
    routeId: () => string | undefined;
    match: () => AnyRouteMatch | undefined;
    hasPending: () => boolean;
};
export declare const defaultNearestMatchContext: NearestMatchContextValue;
export declare const nearestMatchContextKey: symbol & {
    __brand: "tsr.nearestMatchContext";
};
