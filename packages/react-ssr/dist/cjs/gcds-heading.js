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
var gcds_heading_exports = {};
__export(gcds_heading_exports, {
  GcdsHeading: () => GcdsHeading
});
module.exports = __toCommonJS(gcds_heading_exports);
var import_react = __toESM(require("react"));
var import_gcds_heading = require("./components/gcds-heading.js");
var import_utils = require("./lib/utils.js");
var import_native_props = require("./lib/native-props");
if (typeof customElements !== "undefined" && !customElements.get("gcds-heading")) {
  (0, import_gcds_heading.defineCustomElement)();
}
const customEvents = [];
const GcdsHeading = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = (0, import_native_props.toNativeProps)((0, import_utils.omitEventCallbacks)(customEvents, props));
  nativeProps = (0, import_utils.gcdsAttributeGenerator)("gcds-heading", nativeProps);
  if (typeof window !== "undefined") {
    const innerRef = (0, import_react.useRef)();
    (0, import_react.useImperativeHandle)(ref, () => innerRef.current);
    (0, import_utils.useEventListeners)(innerRef, customEvents, props);
    return import_react.default.createElement("gcds-heading", { ...nativeProps, ref: innerRef }, children);
  }
  return import_react.default.createElement("gcds-heading", { ...nativeProps, ref }, children);
});
