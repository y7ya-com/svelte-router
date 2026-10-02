type $$ComponentProps = {
    error: Error;
    reset?: () => void;
    info?: {
        componentStack: string;
    };
};
declare const ErrorComponent: import("svelte").Component<$$ComponentProps, {}, "">;
type ErrorComponent = ReturnType<typeof ErrorComponent>;
export default ErrorComponent;
