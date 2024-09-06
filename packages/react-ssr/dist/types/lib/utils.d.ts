import { RefObject } from 'react';
export declare const NATIVE_GLOBAL_EVENTS: (keyof GlobalEventHandlersEventMap)[];
export declare const omitEventCallbacks: (customEvents: string[], props: unknown) => {
    [k: string]: any;
};
export declare const toPascalCase: (kebabText: string) => string;
export declare const useEventListeners: (ref: RefObject<HTMLElement>, customEvents: string[], props: unknown) => void;
export declare const gcdsAttributeGenerator: (tagName: string, props: object) => object;
