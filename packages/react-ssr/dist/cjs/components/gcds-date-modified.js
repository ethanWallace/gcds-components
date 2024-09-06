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
var gcds_date_modified_exports = {};
__export(gcds_date_modified_exports, {
  GcdsDateModified: () => GcdsDateModified2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_date_modified_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_text2 = require("./gcds-text2.js");
const I18N = {
  en: {
    date: "Date modified:",
    version: "Version "
  },
  fr: {
    date: "Date de modification :",
    version: "Version "
  }
};
const gcdsDateModifiedCss = "@layer reset, default;@layer reset{:host{display:block}:host dl{margin:0}:host slot{display:initial}}@layer default{:host .gcds-date-modified{margin:var(--gcds-date-modified-margin)}:host .gcds-date-modified :is(dt,gcds-text,dd){display:inline}:host .gcds-date-modified dd{margin:var(--gcds-date-modified-description-margin)}}";
const GcdsDateModifiedStyle0 = gcdsDateModifiedCss;
const GcdsDateModified$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsDateModified extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "date";
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
    const { lang, type } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("dl", { class: "gcds-date-modified" }, (0, import_stencil.h)("dt", null, (0, import_stencil.h)("gcds-text", { display: "inline", "margin-bottom": "0" }, type === "version" ? I18N[lang].version : I18N[lang].date)), (0, import_stencil.h)("dd", null, (0, import_stencil.h)("gcds-text", { display: "inline", "margin-bottom": "0" }, type === "version" ? (0, import_stencil.h)("slot", null) : (0, import_stencil.h)("time", null, (0, import_stencil.h)("slot", null))))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsDateModifiedStyle0;
  }
}, [1, "gcds-date-modified", {
  "type": [1025],
  "lang": [32]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-date-modified", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-date-modified":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsDateModified$1);
        }
        break;
      case "gcds-text":
        if (!customElements.get(tagName)) {
          (0, import_gcds_text2.d)();
        }
        break;
    }
  });
}
const GcdsDateModified2 = GcdsDateModified$1;
const defineCustomElement = defineCustomElement$1;
