export const defaultNearestMatchContext = {
    matchId: () => undefined,
    routeId: () => undefined,
    match: () => undefined,
    hasPending: () => false,
};
export const nearestMatchContextKey = Symbol('tsr.nearestMatchContext');
