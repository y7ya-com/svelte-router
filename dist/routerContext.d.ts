import type { AnyRouter } from '@tanstack/router-core';
export declare const routerContextKey: symbol & {
    __brand: "tsr.routerContext";
    __value: AnyRouter;
};
export declare const headSlotContextKey: symbol & {
    __brand: "tsr.headSlot";
    __value: {
        used: boolean;
    };
};
