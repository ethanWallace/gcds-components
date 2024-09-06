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
var gcds_error_summary_exports = {};
__export(gcds_error_summary_exports, {
  GcdsErrorSummary: () => GcdsErrorSummary2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_error_summary_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_heading2 = require("./gcds-heading2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_link2 = require("./gcds-link2.js");
const I18N = {
  en: {
    heading: "There was a problem",
    subheading: "Errors were found on this page:"
  },
  fr: {
    heading: "Un probl\xE8me est survenu",
    subheading: "Des erreurs ont \xE9t\xE9 trouv\xE9es sur cette page :"
  }
};
const gcdsErrorSummaryCss = "@layer reset, default, compact;@layer reset{:host{display:block}}@layer default{:host{container:component summary/inline-size}:host .gcds-error-summary{border:var(--gcds-error-summary-border-width) solid var(--gcds-error-summary-border-color);color:var(--gcds-error-summary-text);display:none;margin:var(--gcds-error-summary-margin);padding:var(--gcds-error-summary-padding);transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out}:host .gcds-error-summary.gcds-show{display:block}:host .gcds-error-summary .summary__errorlist{margin:var(--gcds-error-summary-list-margin);padding:0}:host .gcds-error-summary .summary__errorlist .summary__listitem{max-width:var(--gcds-error-summary-max-width)}:host .gcds-error-summary .summary__errorlist .summary__listitem:not(:last-child){padding:var(--gcds-error-summary-list-item-padding)}:host .gcds-error-summary .summary__errorlist .summary__listitem gcds-link::part(link):not(:focus){color:var(--gcds-error-summary-link-color)}}@layer compact{@container summary (width < 24em){:host .gcds-error-summary{padding:var(--gcds-error-summary-mobile-padding)}}}";
const GcdsErrorSummaryStyle0 = gcdsErrorSummaryCss;
const GcdsErrorSummary$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsErrorSummary extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.errorLinksObject = {};
    this.heading = void 0;
    this.listen = true;
    this.errorLinks = void 0;
    this.lang = void 0;
    this.errorQueue = {};
    this.hasSubmitted = false;
  }
  listenChanged() {
    if (this.errorLinks) {
      this.listen = false;
    }
  }
  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  errorLinksChanged(newErrorLinks) {
    if (typeof newErrorLinks == "string") {
      this.errorLinks = JSON.parse(newErrorLinks);
    } else if (typeof newErrorLinks == "object") {
      this.errorLinks = newErrorLinks;
    }
    this.errorQueue = this.errorLinks;
    if (this.listen) {
      this.listen = false;
    }
  }
  errorListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      this.errorLinksObject[e.detail.message] = e.target;
    }
  }
  validListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      for (const [key, value] of Object.entries(this.errorLinksObject)) {
        if (value == e.target) {
          delete this.errorLinksObject[key];
        }
      }
      if (this.errorQueue) {
        const sortedErrorList = this.sortErrors();
        this.errorQueue = Object.assign({}, sortedErrorList);
      }
    }
  }
  submitListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      this.hasSubmitted = true;
      setTimeout(() => {
        const sortedErrorList = this.sortErrors();
        this.errorQueue = Object.assign({}, sortedErrorList);
        setTimeout(() => {
          this.shadowElement.focus();
        }, 50);
      }, 100);
    }
  }
  /*
   * Sort error object based on the order form compoennts appear in the form
   */
  sortErrors() {
    const sortable = Object.entries(this.errorLinksObject).map(([key, value]) => [
      key,
      value,
      value.getBoundingClientRect().y
    ]);
    sortable.sort(function(a, b) {
      return a[2] - b[2];
    });
    const objSorted = {};
    sortable.forEach(function(item) {
      objSorted[item[0]] = item[1];
    });
    return objSorted;
  }
  /*
   * Focus element on error link click with label visible
   */
  focusElement(id) {
    const element = document.querySelector(id);
    let target = `[for=${id.replace("#", "")}]`;
    if (element.nodeName == "FIELDSET") {
      target = `#legend-${id.replace("#", "")}`;
    }
    element.closest("form").querySelector(target).scrollIntoView();
    element.focus();
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
    this.listenChanged();
    if (this.errorLinks && typeof this.errorLinks == "string") {
      this.errorQueue = Object.assign({}, JSON.parse(this.errorLinks));
    } else if (this.errorLinks && typeof this.errorLinks == "object") {
      this.errorQueue = Object.assign({}, this.errorLinks);
    }
  }
  render() {
    const { heading, errorQueue, lang, hasSubmitted, errorLinks } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { role: "alert", tabindex: "-1", ref: (element) => this.shadowElement = element, class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0 ? "gcds-show" : ""}` }, (0, import_stencil.h)("gcds-heading", { tag: "h2", "margin-top": "0", "margin-bottom": "300" }, heading !== null && heading !== void 0 ? heading : I18N[lang].heading), (0, import_stencil.h)("ol", { class: "summary__errorlist" }, (hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0 && Object.keys(errorQueue).map((key) => {
      return (0, import_stencil.h)("li", { class: "summary__listitem" }, (0, import_stencil.h)("gcds-link", { size: "regular", href: errorLinks ? key : "#", onClick: (e) => {
        e.preventDefault();
        errorLinks ? this.focusElement(key) : errorQueue[key].focus();
      } }, errorLinks ? errorQueue[key] : key));
    }))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "listen": ["listenChanged"],
      "errorLinks": ["errorLinksChanged"]
    };
  }
  static get style() {
    return GcdsErrorSummaryStyle0;
  }
}, [1, "gcds-error-summary", {
  "heading": [513],
  "listen": [1028],
  "errorLinks": [1025, "error-links"],
  "lang": [32],
  "errorQueue": [32],
  "hasSubmitted": [32]
}, [[4, "gcdsError", "errorListener"], [4, "gcdsValid", "validListener"], [4, "submit", "submitListener"]], {
  "listen": ["listenChanged"],
  "errorLinks": ["errorLinksChanged"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-error-summary", "gcds-heading", "gcds-icon", "gcds-link"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-error-summary":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsErrorSummary$1);
        }
        break;
      case "gcds-heading":
        if (!customElements.get(tagName)) {
          (0, import_gcds_heading2.d)();
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
const GcdsErrorSummary2 = GcdsErrorSummary$1;
const defineCustomElement = defineCustomElement$1;
