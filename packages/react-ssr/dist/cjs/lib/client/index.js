var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var client_exports = {};
__export(client_exports, {
  GcdsWrapper: () => GcdsWrapper
});
module.exports = __toCommonJS(client_exports);
function GcdsWrapper({ children }) {
  if (typeof window === "undefined") {
    return import("./render.js").then(({ render }) => render(resolve(children)));
  }
  return children;
}
function resolve(children, result = []) {
  const nodes = [].concat(children !== null && children !== void 0 ? children : []);
  for (const node of nodes) {
    if (typeof node === "string") {
      result.push(node);
    } else if (typeof node.type === "string") {
      const copy = Object.assign(Object.assign({}, node), { props: Object.assign({}, node.props) });
      if (copy.props.children) {
        copy.props.children = [];
      }
      resolve(node.props.children, copy.props.children);
      result.push(copy);
    } else if (typeof node.type === "function") {
      if (/^\s*class\s+/.test(node.type.toString())) {
        const comp = new node.type(node.props);
        const vnode = comp.render();
        resolve(vnode, result);
      } else {
        resolve(node.type(node.props), result);
      }
    } else if (typeof node.type === "object" && typeof node.type.render === "function") {
      resolve(node.type.render(node.props), result);
    }
  }
  return result;
}
