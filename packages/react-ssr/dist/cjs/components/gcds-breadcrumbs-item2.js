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
var gcds_breadcrumbs_item2_exports = {};
__export(gcds_breadcrumbs_item2_exports, {
  G: () => GcdsBreadcrumbsItem,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_breadcrumbs_item2_exports);
var import_stencil = require("../lib/stencil");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_link2 = require("./gcds-link2.js");
const gcdsBreadcrumbsItemCss = `@layer reset, default, hover, focus, mobile;@layer reset{:host(.gcds-breadcrumbs-item){display:inline-block}:host(.gcds-breadcrumbs-item) gcds-link::part(link){display:inline-block;white-space:normal}:host(.gcds-breadcrumbs-item) slot{display:block}}@layer default{:host(.gcds-breadcrumbs-item){padding:var(--gcds-breadcrumbs-item-padding)!important;position:relative}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 8 14"><path fill="26374a" d="M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0z"/></svg>');left:var(--gcds-breadcrumbs-item-arrow-left);position:absolute;top:var(--gcds-breadcrumbs-item-arrow-top)}:host(.gcds-breadcrumbs-item) gcds-link::part(link){margin:var(--gcds-breadcrumbs-item-margin);padding:var(--gcds-breadcrumbs-item-link-padding)}}@layer mobile{@media screen and (max-width:30rem){:host(.gcds-breadcrumbs-item){display:block}:host(.gcds-breadcrumbs-item):before{top:var(--gcds-breadcrumbs-mobile-item-arrow-top)}:host(.gcds-breadcrumbs-item) gcds-link::part(link){margin:var(--gcds-breadcrumbs-mobile-item-margin);padding:var(--gcds-breadcrumbs-mobile-item-padding)}}}`;
const GcdsBreadcrumbsItemStyle0 = gcdsBreadcrumbsItemCss;
const GcdsBreadcrumbsItem = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsBreadcrumbsItem2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = void 0;
  }
  render() {
    const { href } = this;
    return (0, import_stencil.h)(import_stencil.Host, { role: "listitem", class: "gcds-breadcrumbs-item" }, (0, import_stencil.h)("gcds-link", { size: "regular", href }, (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsBreadcrumbsItemStyle0;
  }
}, [1, "gcds-breadcrumbs-item", {
  "href": [1]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-breadcrumbs-item", "gcds-icon", "gcds-link"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-breadcrumbs-item":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsBreadcrumbsItem);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
      case "gcds-link":
        if (!customElements.get(tagName)) {
          (0, import_gcds_link2.d)();
        }
        break;
    }
  });
}
