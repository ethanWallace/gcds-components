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
var gcds_breadcrumbs_item_exports = {};
__export(gcds_breadcrumbs_item_exports, {
  GcdsBreadcrumbsItem: () => GcdsBreadcrumbsItem,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_breadcrumbs_item_exports);
var import_gcds_breadcrumbs_item2 = require("./gcds-breadcrumbs-item2.js");
const GcdsBreadcrumbsItem = import_gcds_breadcrumbs_item2.G;
const defineCustomElement = import_gcds_breadcrumbs_item2.d;
