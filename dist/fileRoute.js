import { createRoute } from './route.js';
import { useMatch } from './useMatch.svelte.js';
import { useLoaderDeps } from './useLoaderDeps.js';
import { useLoaderData } from './useLoaderData.js';
import { useSearch } from './useSearch.js';
import { useParams } from './useParams.js';
import { useNavigate } from './useNavigate.js';
import { useRouter } from './useRouter.js';
import { useRouteContext } from './useRouteContext.js';
export function createFileRoute(path) {
    return new FileRoute(path, {
        silent: true,
    }).createRoute;
}
/**
 * @deprecated It's no longer recommended to use the `FileRoute` class directly.
 * Instead, use `createFileRoute('/path/to/file')(options)` to create a file route.
 */
export class FileRoute {
    constructor(path, _opts) {
        this.path = path;
        this.createRoute = (options) => {
            if (process.env.NODE_ENV !== 'production') {
                if (!this.silent) {
                    console.warn('Warning: FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.');
                }
            }
            const route = createRoute(options);
            route.isRoot = false;
            return route;
        };
        this.silent = _opts?.silent;
    }
}
/**
 * @deprecated It's recommended not to split loaders into separate files.
 */
export function FileRouteLoader(_path) {
    if (process.env.NODE_ENV !== 'production') {
        console.warn("Warning: FileRouteLoader is deprecated and will be removed in the next major version. Please place the loader function in the main route file, inside the `createFileRoute('/path/to/file')(options)` options");
    }
    return (loaderFn) => loaderFn;
}
export class LazyRoute {
    constructor(opts) {
        this.useMatch = (opts) => useMatch({ ...opts, from: this.options.id });
        this.useRouteContext = (opts) => useRouteContext({ ...opts, from: this.options.id });
        this.useSearch = (opts) => useSearch({ ...opts, from: this.options.id });
        this.useParams = (opts) => useParams({ ...opts, from: this.options.id });
        this.useLoaderDeps = (opts) => useLoaderDeps({ ...opts, from: this.options.id });
        this.useLoaderData = (opts) => useLoaderData({ ...opts, from: this.options.id });
        this.useNavigate = () => {
            const router = useRouter();
            return useNavigate({
                from: router.routesById[this.options.id]?.fullPath,
            });
        };
        this.options = opts;
    }
}
export function createLazyRoute(id) {
    return (opts) => {
        return new LazyRoute({ id: id, ...opts });
    };
}
export function createLazyFileRoute(id) {
    if (typeof id === 'object') {
        return new LazyRoute(id);
    }
    return (opts) => new LazyRoute({ id, ...opts });
}
