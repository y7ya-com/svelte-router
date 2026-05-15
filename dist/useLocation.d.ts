import type { AnyRouter, RegisteredRouter, RouterState } from '@tanstack/router-core';
export interface UseLocationBaseOptions<TRouter extends AnyRouter, TSelected> {
    select?: (state: RouterState<TRouter['routeTree']>['location']) => TSelected;
}
export type UseLocationResult<TRouter extends AnyRouter, TSelected> = unknown extends TSelected ? RouterState<TRouter['routeTree']>['location'] : TSelected;
export declare function useLocation<TRouter extends AnyRouter = RegisteredRouter, TSelected = unknown>(opts?: UseLocationBaseOptions<TRouter, TSelected>): {
    readonly current: UseLocationResult<TRouter, TSelected>;
};
