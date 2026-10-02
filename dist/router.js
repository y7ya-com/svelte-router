import { RouterCore } from '@tanstack/router-core';
import { getStoreFactory } from './routerStores.js';
export const createRouter = (options) => {
    return new Router(options);
};
export class Router extends RouterCore {
    constructor(options) {
        super(options, getStoreFactory);
    }
}
