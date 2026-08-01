import type { AnyRouter, FromPathOption, RegisteredRouter, UseNavigateResult } from '@tanstack/router-core';
export declare function useNavigate<TRouter extends AnyRouter = RegisteredRouter, TDefaultFrom extends string = string>(_defaultOpts?: {
    from?: FromPathOption<TRouter, TDefaultFrom>;
}): UseNavigateResult<TDefaultFrom>;
