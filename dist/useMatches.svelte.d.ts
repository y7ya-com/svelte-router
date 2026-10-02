import type { Snippet } from 'svelte';
import type { AnyRouter, DeepPartial, Expand, MakeOptionalPathParams, MakeOptionalSearchParams, MakeRouteMatchUnion, MaskOptions, MatchRouteOptions, RegisteredRouter, ResolveRoute, ToSubOptionsProps } from '@tanstack/router-core';
export interface UseMatchesBaseOptions<TRouter extends AnyRouter, TSelected> {
    select?: (matches: Array<MakeRouteMatchUnion<TRouter>>) => TSelected;
}
export type UseMatchesResult<TRouter extends AnyRouter, TSelected> = unknown extends TSelected ? Array<MakeRouteMatchUnion<TRouter>> : TSelected;
export declare function useMatches<TRouter extends AnyRouter = RegisteredRouter, TSelected = unknown>(opts?: UseMatchesBaseOptions<TRouter, TSelected>): {
    readonly current: UseMatchesResult<TRouter, TSelected>;
};
export declare function useParentMatches<TRouter extends AnyRouter = RegisteredRouter, TSelected = unknown>(opts?: UseMatchesBaseOptions<TRouter, TSelected>): {
    readonly current: UseMatchesResult<TRouter, TSelected>;
};
export declare function useChildMatches<TRouter extends AnyRouter = RegisteredRouter, TSelected = unknown>(opts?: UseMatchesBaseOptions<TRouter, TSelected>): {
    readonly current: UseMatchesResult<TRouter, TSelected>;
};
export type UseMatchRouteOptions<TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''> = ToSubOptionsProps<TRouter, TFrom, TTo> & DeepPartial<MakeOptionalSearchParams<TRouter, TFrom, TTo>> & DeepPartial<MakeOptionalPathParams<TRouter, TFrom, TTo>> & MaskOptions<TRouter, TMaskFrom, TMaskTo> & MatchRouteOptions;
export declare function useMatchRoute<TRouter extends AnyRouter = RegisteredRouter>(): <const TFrom extends string = string, const TTo extends string | undefined = undefined, const TMaskFrom extends string = TFrom, const TMaskTo extends string = "">(opts: UseMatchRouteOptions<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>) => {
    readonly current: false | Expand<ResolveRoute<TRouter, TFrom, TTo>["types"]["allParams"]>;
};
export type MakeMatchRouteOptions<TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''> = UseMatchRouteOptions<TRouter, TFrom, TTo, TMaskFrom, TMaskTo> & {
    /** Rendered when the route matches. */
    children?: Snippet<[]>;
    /** Rendered with the matched params (or `false`) whether or not it matches. */
    match?: Snippet<[
        false | Expand<ResolveRoute<TRouter, TFrom, TTo>['types']['allParams']>
    ]>;
};
