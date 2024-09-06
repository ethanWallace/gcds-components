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
var gcds_breadcrumbs_exports = {};
__export(gcds_breadcrumbs_exports, {
  GcdsBreadcrumbs: () => GcdsBreadcrumbs2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_breadcrumbs_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_breadcrumbs_item2 = require("./gcds-breadcrumbs-item2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_link2 = require("./gcds-link2.js");
const I18N = {
  en: {
    label: "Breadcrumb",
    link: "https://www.canada.ca/en.html"
  },
  fr: {
    label: "Chemin de navigation",
    link: "https://www.canada.ca/fr.html"
  }
};
const gcdsBreadcrumbsCss = "@layer reset, default;@layer reset{:host{display:block}:host .gcds-breadcrumbs ol{list-style:none;overflow-x:hidden}}@layer default{:host .gcds-breadcrumbs ol{margin:var(--gcds-breadcrumbs-margin);padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child){margin:var(--gcds-breadcrumbs-item-first-child-margin)!important}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}}";
const GcdsBreadcrumbsStyle0 = gcdsBreadcrumbsCss;
const GcdsBreadcrumbs$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsBreadcrumbs extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hideCanadaLink = false;
    this.lang = void 0;
  }
  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, import_utils.o);
  }
  async componentWillLoad() {
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
  }
  render() {
    const { hideCanadaLink, lang } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("nav", { "aria-label": I18N[lang].label, class: "gcds-breadcrumbs" }, (0, import_stencil.h)("ol", { class: hideCanadaLink ? "" : "has-canada-link" }, !hideCanadaLink ? (0, import_stencil.h)("gcds-breadcrumbs-item", { href: I18N[lang].link }, "Canada.ca") : null, (0, import_stencil.h)("slot", null))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsBreadcrumbsStyle0;
  }
}, [1, "gcds-breadcrumbs", {
  "hideCanadaLink": [4, "hide-canada-link"],
  "lang": [32]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-breadcrumbs", "gcds-breadcrumbs-item", "gcds-icon", "gcds-link"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-breadcrumbs":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsBreadcrumbs$1);
        }
        break;
      case "gcds-breadcrumbs-item":
        if (!customElements.get(tagName)) {
          (0, import_gcds_breadcrumbs_item2.d)();
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
const GcdsBreadcrumbs2 = GcdsBreadcrumbs$1;
const defineCustomElement = defineCustomElement$1;
