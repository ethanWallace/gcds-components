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
var gcds_lang_toggle_exports = {};
__export(gcds_lang_toggle_exports, {
  GcdsLangToggle: () => GcdsLangToggle,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_lang_toggle_exports);
var import_gcds_lang_toggle2 = require("./gcds-lang-toggle2.js");
const GcdsLangToggle = import_gcds_lang_toggle2.G;
const defineCustomElement = import_gcds_lang_toggle2.d;
