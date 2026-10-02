import { useRouter } from './useRouter.js';
export function useNavigate(_defaultOpts) {
    const router = useRouter();
    return ((options) => {
        return router.navigate({
            ...options,
            from: options.from ?? _defaultOpts?.from,
        });
    });
}
