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
var gcds_phase_banner_exports = {};
__export(gcds_phase_banner_exports, {
  GcdsPhaseBanner: () => GcdsPhaseBanner2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_phase_banner_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_container2 = require("./gcds-container2.js");
const I18N = {
  en: {
    label: "Banner"
  },
  fr: {
    label: "Banni\xE8re"
  }
};
const gcdsPhaseBannerCss = "@layer reset, default, fixed, role, wide, compact;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-phase-banner{container:component banner/inline-size;font:var(--gcds-phase-banner-font);line-height:var(--gcds-phase-banner-line-height)}:host .gcds-phase-banner .banner__content{padding:var(--gcds-phase-banner-padding)}:host .gcds-phase-banner .banner__icon{display:flex;margin:0}:host .gcds-phase-banner .banner__icon.icon--left{margin-inline-end:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon.icon--right{margin-inline-start:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon ::slotted(img),:host .gcds-phase-banner .banner__icon ::slotted(svg){max-height:var(--gcds-phase-banner-icon-max-height)}:host .gcds-phase-banner .banner__details{align-items:baseline;display:flex;flex-wrap:wrap}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(gcds-button){flex:0 0 auto}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(small),:host .gcds-phase-banner .banner__details ::slotted(span){font-size:80%!important}:host .gcds-phase-banner .banner__details ::slotted(p){font:var(--gcds-phase-banner-font);margin:0}:host .gcds-phase-banner .banner__details ::slotted(a){color:inherit}:host .gcds-phase-banner .banner__details ::slotted(gcds-button){margin:var(--gcds-phase-banner-details-cta-margin);transform:scale(90%)}}@layer fixed{:host .gcds-phase-banner.banner-is-fixed{position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-phase-banner.banner--role-primary{background-color:var(--gcds-phase-banner-primary-background);color:var(--gcds-phase-banner-primary-text)}:host .gcds-phase-banner.banner--role-secondary{background-color:var(--gcds-phase-banner-secondary-background);color:var(--gcds-phase-banner-secondary-text)}}@layer wide{@container banner (width >= 36em){:host .gcds-phase-banner .banner__content{display:flex}}}@layer compact{@container banner (width < 36em){:host .gcds-phase-banner .banner__content .banner__icon{display:none}}}";
const GcdsPhaseBannerStyle0 = gcdsPhaseBannerCss;
const GcdsPhaseBanner$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsPhaseBanner extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.bannerRole = "primary";
    this.container = "xl";
    this.isFixed = void 0;
    this.lang = void 0;
  }
  /**
   * Events
   */
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
    const { bannerRole, container, isFixed, lang } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? "banner--is-fixed" : ""}`, role: "status", "aria-label": I18N[lang].label }, (0, import_stencil.h)("gcds-container", { size: container, centered: true }, (0, import_stencil.h)("div", { class: "banner__content" }, (0, import_stencil.h)("figure", { class: "banner__icon icon--left" }, (0, import_stencil.h)("slot", { name: "banner-icon-left" })), (0, import_stencil.h)("div", { class: "banner__details" }, (0, import_stencil.h)("slot", { name: "banner-text" }), (0, import_stencil.h)("slot", { name: "banner-cta" })), (0, import_stencil.h)("figure", { class: "banner__icon icon--right" }, (0, import_stencil.h)("slot", { name: "banner-icon-right" }))))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsPhaseBannerStyle0;
  }
}, [1, "gcds-phase-banner", {
  "bannerRole": [1, "banner-role"],
  "container": [1],
  "isFixed": [4, "is-fixed"],
  "lang": [32]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-phase-banner", "gcds-container"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-phase-banner":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsPhaseBanner$1);
        }
        break;
      case "gcds-container":
        if (!customElements.get(tagName)) {
          (0, import_gcds_container2.d)();
        }
        break;
    }
  });
}
const GcdsPhaseBanner2 = GcdsPhaseBanner$1;
const defineCustomElement = defineCustomElement$1;
