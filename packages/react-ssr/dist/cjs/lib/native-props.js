var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var native_props_exports = {};
__export(native_props_exports, {
  toNativeAttributeValue: () => toNativeAttributeValue,
  toNativeProps: () => toNativeProps
});
module.exports = __toCommonJS(native_props_exports);
const REACT_PROP_TO_ATTRIBUTE_NAME_MAP = {
  className: "class",
  classname: "class",
  htmlFor: "for",
  crossOrigin: "crossorigin",
  viewBox: "viewBox"
};
const toNativeAttributeName = (name, value) => {
  if (name in REACT_PROP_TO_ATTRIBUTE_NAME_MAP) {
    return REACT_PROP_TO_ATTRIBUTE_NAME_MAP[name];
  }
  if (typeof value === "undefined" || value === false) {
    return void 0;
  }
  if (/[A-Z]/.test(name)) {
    return name.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (substring, offset) => `${offset ? "-" : ""}${substring.toLowerCase()}`);
  }
  return name;
};
const toNativeAttributeValue = (value) => typeof value === "boolean" ? "" : Array.isArray(value) ? value.join(" ") : value;
const toNativeProps = (props = {}) => Object.entries(props).reduce((transformedProps, [name, value]) => {
  const attributeName = toNativeAttributeName(name, value);
  if (attributeName) {
    transformedProps[attributeName] = toNativeAttributeValue(value);
  }
  return transformedProps;
}, {});
