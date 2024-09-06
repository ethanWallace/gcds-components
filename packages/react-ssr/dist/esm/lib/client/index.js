export function GcdsWrapper({ children }) {
    if (typeof window === 'undefined') {
        return import('./render.js').then(({ render }) => render(resolve(children)));
    }
    return children;
}
function resolve(children, result = []) {
    const nodes = [].concat(children !== null && children !== void 0 ? children : []);
    for (const node of nodes) {
        if (typeof node === 'string') {
            result.push(node);
        }
        else if (typeof node.type === 'string') {
            const copy = Object.assign(Object.assign({}, node), { props: Object.assign({}, node.props) });
            if (copy.props.children) {
                copy.props.children = [];
            }
            resolve(node.props.children, copy.props.children);
            result.push(copy);
        }
        else if (typeof node.type === 'function') {
            if (/^\s*class\s+/.test(node.type.toString())) {
                const comp = new node.type(node.props);
                const vnode = comp.render();
                resolve(vnode, result);
            }
            else {
                resolve(node.type(node.props), result);
            }
        }
        else if (typeof node.type === 'object' && typeof node.type.render === 'function') {
            resolve(node.type.render(node.props), result);
        }
    }
    return result;
}
//# sourceMappingURL=index.js.map