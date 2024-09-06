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
var gcds_fieldset2_exports = {};
__export(gcds_fieldset2_exports, {
  G: () => GcdsFieldset,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_fieldset2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_validator_factory = require("./validator.factory.js");
var import_gcds_error_message2 = require("./gcds-error-message2.js");
var import_gcds_hint2 = require("./gcds-hint2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const I18N = {
  en: {
    required: "required"
  },
  fr: {
    required: "obligatoire"
  }
};
const gcdsFieldsetCss = "@layer reset, default, disabled, focus;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{font:var(--gcds-fieldset-font-desktop);margin:var(--gcds-fieldset-legend-margin)!important}@media only screen and (width < 48em){.gcds-fieldset legend{font:var(--gcds-fieldset-font-mobile)}}.gcds-fieldset legend .legend__required{font:var(--gcds-fieldset-legend-required-font-desktop);margin:var(--gcds-fieldset-legend-required-margin)!important;vertical-align:middle}@media only screen and (width < 48em){.gcds-fieldset legend .legend__required{font:var(--gcds-fieldset-legend-required-font-mobile)}}}@layer disabled{:host .gcds-fieldset:disabled{color:var(--gcds-fieldset-disabled-text)}}@layer focus{:host .gcds-fieldset:focus-within{color:var(--gcds-fieldset-focus-text)}}";
const GcdsFieldsetStyle0 = gcdsFieldsetCss;
const GcdsFieldset = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsFieldset2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsGroupError = (0, import_stencil.createEvent)(this, "gcdsGroupError", 7);
    this.gcdsGroupErrorClear = (0, import_stencil.createEvent)(this, "gcdsGroupErrorClear", 7);
    this.gcdsError = (0, import_stencil.createEvent)(this, "gcdsError", 7);
    this.gcdsValid = (0, import_stencil.createEvent)(this, "gcdsValid", 7);
    this.isDateInput = false;
    this._validator = import_validator_factory.d;
    this.fieldsetId = void 0;
    this.legend = void 0;
    this.required = void 0;
    this.errorMessage = void 0;
    this.hint = void 0;
    this.disabled = void 0;
    this.validator = void 0;
    this.validateOn = void 0;
    this.hasError = void 0;
    this.lang = void 0;
    this.inheritedAttributes = {};
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateDisabledFieldset() {
    if (this.required) {
      this.disabled = false;
    }
    if (this.disabled == true) {
      for (let i = 0; i < this.el.children.length; i++) {
        this.el.children[i].setAttribute("disabled", "");
      }
    }
  }
  handleDisabledChange(newValue, _oldValue) {
    if (_oldValue && newValue != _oldValue) {
      for (let i = 0; i < this.el.children.length; i++) {
        this.el.children[i].removeAttribute("disabled");
      }
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.fieldsetId) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsGroupError.emit(this.errorMessage);
      this.gcdsError.emit({
        id: `#${this.fieldsetId}`,
        message: `${this.legend} - ${this.errorMessage}`
      });
    } else {
      this.errorMessage = "";
      this.gcdsGroupErrorClear.emit();
      this.gcdsValid.emit({ id: `#${this.fieldsetId}` });
    }
  }
  blurValidate() {
    if (this.validator && this.validateOn == "blur" && !this.el.matches(":focus-within")) {
      this.validate();
    }
  }
  /**
   * Event listener for gcds-fieldset errors
   */
  gcdsParentGroupError(e) {
    if (e.srcElement == this.el && (0, import_validator_factory.v)(this.el, this.el.children).includes(false)) {
      this.hasError = true;
    }
  }
  gcdsParentGroupErrorClear(e) {
    if (e.srcElement == this.el && this.hasError) {
      this.hasError = false;
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
      }
    }
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
    this.validateDisabledFieldset();
    this.validateErrorMessage();
    this.validateValidator();
    if (this.el.getAttribute("data-date")) {
      this.isDateInput = true;
    } else {
      (0, import_validator_factory.r)(this.el, "fieldset");
    }
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
  }
  render() {
    const { lang, fieldsetId, legend, required, errorMessage, hasError, hint, disabled, inheritedAttributes } = this;
    const fieldsetAttrs = Object.assign({ disabled }, inheritedAttributes);
    if (errorMessage) {
      fieldsetAttrs["aria-describedby"] = `error-message-${fieldsetId} ${fieldsetAttrs["aria-describedby"] ? ` ${fieldsetAttrs["aria-describedby"]}` : ""}`;
    }
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("fieldset", Object.assign({ class: `gcds-fieldset ${hasError ? "gcds-fieldset--error" : ""}`, id: fieldsetId }, fieldsetAttrs, { "aria-labelledby": hint ? `legend-${fieldsetId} hint-${fieldsetId}` : `legend-${fieldsetId}`, tabindex: "-1", ref: (element) => this.shadowElement = element }), (0, import_stencil.h)("legend", { id: `legend-${fieldsetId}` }, legend, required ? (0, import_stencil.h)("span", { class: "legend__required" }, "(", I18N[lang].required, ")") : null), hint ? (0, import_stencil.h)("gcds-hint", { "hint-id": fieldsetId }, hint) : null, errorMessage ? (0, import_stencil.h)("gcds-error-message", { messageId: fieldsetId }, errorMessage) : null, (0, import_stencil.h)("slot", null)));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "errorMessage": ["validateErrorMessage"],
      "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
      "validator": ["validateValidator"]
    };
  }
  static get style() {
    return GcdsFieldsetStyle0;
  }
}, [17, "gcds-fieldset", {
  "fieldsetId": [513, "fieldset-id"],
  "legend": [513],
  "required": [516],
  "errorMessage": [1537, "error-message"],
  "hint": [513],
  "disabled": [1540],
  "validator": [1040],
  "validateOn": [1025, "validate-on"],
  "hasError": [32],
  "lang": [32],
  "inheritedAttributes": [32],
  "validate": [64]
}, [[0, "gcdsBlur", "blurValidate"], [16, "gcdsGroupError", "gcdsParentGroupError"], [16, "gcdsGroupErrorClear", "gcdsParentGroupErrorClear"], [4, "submit", "submitListener"]], {
  "errorMessage": ["validateErrorMessage"],
  "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
  "validator": ["validateValidator"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-fieldset", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-fieldset":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsFieldset);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(tagName)) {
          (0, import_gcds_error_message2.d)();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(tagName)) {
          (0, import_gcds_hint2.d)();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
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
