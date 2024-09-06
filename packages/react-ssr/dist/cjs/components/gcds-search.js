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
var gcds_search_exports = {};
__export(gcds_search_exports, {
  GcdsSearch: () => GcdsSearch2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_search_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_button2 = require("./gcds-button2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_label2 = require("./gcds-label2.js");
var import_gcds_sr_only2 = require("./gcds-sr-only2.js");
const I18N = {
  en: {
    search: "Search",
    searchLabel: "Search {$}"
  },
  fr: {
    search: "Recherche",
    searchLabel: "Rechercher dans {$}"
  }
};
const gcdsSearchCss = "@layer reset, default, focus;@layer reset{:host{display:block}:host .gcds-search input{background-image:none;box-sizing:border-box}:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer default{:host .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}:host .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}:host .gcds-search input{background-color:var(--gcds-search-default-background);border:var(--gcds-search-border-width) solid;border-radius:var(--gcds-search-border-radius);color:var(--gcds-search-default-text);font:var(--gcds-search-font);height:auto;min-height:var(--gcds-search-min-width-and-height);padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}:host .gcds-search ::part(button){border-end-start-radius:0;border-start-start-radius:0;height:100%;margin:0}}@layer focus{:host .gcds-search input:focus{border-color:var(--gcds-search-focus-text);border-radius:var(--gcds-search-focus-border-radius);box-shadow:var(--gcds-search-focus-box-shadow);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-text);outline-offset:var(--gcds-search-border-width);z-index:30}:host .gcds-search ::part(button):focus{border-radius:var(--gcds-search-focus-border-radius);box-shadow:var(--gcds-search-focus-box-shadow)}}";
const GcdsSearchStyle0 = gcdsSearchCss;
const GcdsSearch$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsSearch extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsInput = (0, import_stencil.createEvent)(this, "gcdsInput", 7);
    this.gcdsChange = (0, import_stencil.createEvent)(this, "gcdsChange", 7);
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsSubmit = (0, import_stencil.createEvent)(this, "gcdsSubmit", 7);
    this.handleInput = (e, customEvent) => {
      const input = e.target;
      this.value = input.value;
      customEvent.emit(this.value);
    };
    this.placeholder = "Canada.ca";
    this.action = "/sr/srb.html";
    this.method = "get";
    this.name = "q";
    this.searchId = "search";
    this.value = void 0;
    this.suggested = void 0;
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
  }
  render() {
    const { placeholder, action, method, name, value, lang, searchId, suggested } = this;
    const labelText = `${I18N[lang].searchLabel.replace("{$}", placeholder)}`;
    const attrsInput = {
      name,
      placeholder: labelText
    };
    const formAction = action === "/sr/srb.html" ? `https://www.canada.ca/${lang}/sr/srb.html` : action;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: "gcds-search" }, (0, import_stencil.h)("gcds-sr-only", { tag: "h2" }, I18N[lang].search), (0, import_stencil.h)("form", { action: formAction, method, role: "search", onSubmit: (e) => (0, import_utils.e)(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, (0, import_stencil.h)("gcds-label", { label: labelText, "label-for": searchId, "hide-label": true }), (0, import_stencil.h)("input", Object.assign({ type: "search", id: searchId, list: "search-list", size: 34, maxLength: 170, onInput: (e) => this.handleInput(e, this.gcdsInput), onChange: (e) => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value })), suggested && (0, import_stencil.h)("datalist", { id: "search-list" }, suggested.map((k, v) => (0, import_stencil.h)("option", { value: k, key: v }))), (0, import_stencil.h)("gcds-button", { type: "submit", class: "gcds-search__button", exportparts: "button" }, (0, import_stencil.h)("gcds-icon", { name: "search", label: I18N[lang].search, "fixed-width": true })))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsSearchStyle0;
  }
}, [1, "gcds-search", {
  "placeholder": [1],
  "action": [1],
  "method": [1],
  "name": [1],
  "searchId": [1, "search-id"],
  "value": [1025],
  "suggested": [16],
  "lang": [32]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-search", "gcds-button", "gcds-icon", "gcds-label", "gcds-sr-only"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-search":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsSearch$1);
        }
        break;
      case "gcds-button":
        if (!customElements.get(tagName)) {
          (0, import_gcds_button2.d)();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
      case "gcds-label":
        if (!customElements.get(tagName)) {
          (0, import_gcds_label2.d)();
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
const GcdsSearch2 = GcdsSearch$1;
const defineCustomElement = defineCustomElement$1;
