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
var gcds_label2_exports = {};
__export(gcds_label2_exports, {
  G: () => GcdsLabel,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_label2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
const I18N = {
  en: {
    required: "required"
  },
  fr: {
    required: "obligatoire"
  }
};
const gcdsLabelCss = "@layer reset, default;@layer reset{.sc-gcds-label-h{display:block}.sc-gcds-label-h .gcds-label{color:inherit}}@layer default{.sc-gcds-label-h .gcds-label{cursor:pointer;display:block;font:var(--gcds-label-font-desktop);margin:var(--gcds-label-margin)!important;max-width:100%}@media only screen and (width < 48em){.sc-gcds-label-h .gcds-label{font:var(--gcds-label-font-mobile)}}.sc-gcds-label-h .gcds-label.label--hidden{height:0;margin:0;opacity:0;overflow:hidden;width:0}.sc-gcds-label-h .gcds-label .label--required{font-weight:var(--gcds-label-required-font-weight);margin:var(--gcds-label-required-margin)!important}}";
const GcdsLabelStyle0 = gcdsLabelCss;
const GcdsLabel = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsLabel2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.onClick = (ev) => {
      if (ev.srcElement.tagName == "GCDS-LABEL") {
        this.clickEl();
      }
    };
    this.hideLabel = void 0;
    this.label = void 0;
    this.labelFor = void 0;
    this.required = void 0;
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
  /**
   * Click label if host element is clicked
   */
  clickEl() {
    if (this.focusEl) {
      this.focusEl.click();
    }
  }
  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    return (0, import_stencil.h)(import_stencil.Host, { id: `label-for-${labelFor}`, onClick: this.onClick }, (0, import_stencil.h)("label", { htmlFor: labelFor, class: `gcds-label ${hideLabel ? "label--hidden" : ""}`, ref: (focusEl) => this.focusEl = focusEl }, (0, import_stencil.h)("span", null, label), required ? (0, import_stencil.h)("span", { "aria-hidden": "true", class: "label--required" }, "(", I18N[lang].required, ")") : null));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsLabelStyle0;
  }
}, [2, "gcds-label", {
  "hideLabel": [4, "hide-label"],
  "label": [1],
  "labelFor": [1, "label-for"],
  "required": [4],
  "lang": [32]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-label"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-label":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsLabel);
        }
        break;
    }
  });
}
