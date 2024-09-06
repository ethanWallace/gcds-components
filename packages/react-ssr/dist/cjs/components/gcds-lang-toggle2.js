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
var gcds_lang_toggle2_exports = {};
__export(gcds_lang_toggle2_exports, {
  G: () => GcdsLangToggle,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_lang_toggle2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_link2 = require("./gcds-link2.js");
var import_gcds_sr_only2 = require("./gcds-sr-only2.js");
const I18N = {
  en: {
    abbreviation: "fr",
    heading: "Language selection",
    language: "Fran\xE7ais"
  },
  fr: {
    abbreviation: "en",
    heading: "S\xE9lection de la langue",
    language: "English"
  }
};
const gcdsLangToggleCss = "@layer reset, default, desktop;@layer reset{:host{display:block}:host .gcds-lang-toggle h2{margin:0;overflow:hidden;position:absolute;width:0}}@layer default{:host .gcds-lang-toggle gcds-link::part(link){padding:var(--gcds-lang-toggle-padding)}:host .gcds-lang-toggle span{display:none}:host .gcds-lang-toggle abbr{text-decoration:none;text-transform:uppercase}}@layer desktop{@media screen and (width >= 64em){:host .gcds-lang-toggle gcds-link::part(link){padding:0}:host .gcds-lang-toggle span{display:initial}:host .gcds-lang-toggle abbr{display:none}}}";
const GcdsLangToggleStyle0 = gcdsLangToggleCss;
const GcdsLangToggle = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsLangToggle2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = void 0;
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
    const { lang, href } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: "gcds-lang-toggle" }, (0, import_stencil.h)("gcds-sr-only", { id: "lang-toggle__heading", tag: "h2" }, I18N[lang].heading), (0, import_stencil.h)("gcds-link", { size: "regular", href, lang: I18N[lang].abbreviation }, (0, import_stencil.h)("span", null, I18N[lang].language), (0, import_stencil.h)("abbr", { title: I18N[lang].language }, I18N[lang].abbreviation))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsLangToggleStyle0;
  }
}, [1, "gcds-lang-toggle", {
  "href": [513],
  "lang": [32]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-lang-toggle", "gcds-icon", "gcds-link", "gcds-sr-only"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-lang-toggle":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsLangToggle);
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
      case "gcds-sr-only":
        if (!customElements.get(tagName)) {
          (0, import_gcds_sr_only2.d)();
        }
        break;
    }
  });
}
