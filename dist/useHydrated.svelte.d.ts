/**
 * Return a reactive `{ current: boolean }` indicating if the JS has been hydrated.
 * On the server (or before mount), `current` is `false`. After mount, `current` is `true`.
 */
export declare function useHydrated(): {
    readonly current: boolean;
};
