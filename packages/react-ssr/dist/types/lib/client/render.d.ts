import 'element-internals-polyfill';
declare global {
    interface HTMLElement {
        connectedCallback(): void;
    }
}
export declare function render(children: any): Promise<any>;
