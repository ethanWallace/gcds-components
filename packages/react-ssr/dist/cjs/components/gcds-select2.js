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
var gcds_select2_exports = {};
__export(gcds_select2_exports, {
  G: () => GcdsSelect,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_select2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_validator_factory = require("./validator.factory.js");
var import_gcds_error_message2 = require("./gcds-error-message2.js");
var import_gcds_hint2 = require("./gcds-hint2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_label2 = require("./gcds-label2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const gcdsSelectCss = `@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-select-wrapper{border:0;margin:0;padding:0}:host .gcds-select-wrapper select{box-sizing:border-box}:host .gcds-select-wrapper slot{display:initial}}@layer default{:host .gcds-select-wrapper{color:var(--gcds-select-default-text);font:var(--gcds-select-font);max-width:75ch;transition:color .15s ease-in-out}:host .gcds-select-wrapper select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url("data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin)!important;max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding)!important;transition:all .15s ease-in-out}}@layer disabled{:host .gcds-select-wrapper.gcds-disabled{color:var(--gcds-select-disabled-text)}:host .gcds-select-wrapper.gcds-disabled select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-select-wrapper.gcds-error:not(:focus-within) select{border-color:var(--gcds-select-danger-border)}}@layer focus{:host .gcds-select-wrapper:focus-within{color:var(--gcds-select-focus-text)}:host .gcds-select-wrapper:focus-within select:focus{border-color:var(--gcds-select-focus-text);box-shadow:var(--gcds-select-focus-box-shadow);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-text);outline-offset:var(--gcds-select-border-width)}}`;
const GcdsSelectStyle0 = gcdsSelectCss;
const GcdsSelect = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsSelect2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsChange = (0, import_stencil.createEvent)(this, "gcdsChange", 7);
    this.gcdsInput = (0, import_stencil.createEvent)(this, "gcdsInput", 7);
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsError = (0, import_stencil.createEvent)(this, "gcdsError", 7);
    this.gcdsValid = (0, import_stencil.createEvent)(this, "gcdsValid", 7);
    this.internals = this.attachInternals();
    this._validator = import_validator_factory.d;
    this.handleInput = (e, customEvent) => {
      const val = e.target && e.target.value;
      this.value = val;
      this.internals.setFormValue(val);
      if (e.type === "change") {
        const changeEvt = new e.constructor(e.type, e);
        this.el.dispatchEvent(changeEvt);
      }
      customEvent.emit(this.value);
    };
    this.onBlur = () => {
      if (this.validateOn === "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.selectId = void 0;
    this.label = void 0;
    this.name = void 0;
    this.required = false;
    this.disabled = false;
    this.defaultValue = void 0;
    this.value = void 0;
    this.errorMessage = void 0;
    this.hint = void 0;
    this.validator = void 0;
    this.validateOn = void 0;
    this.hasError = void 0;
    this.inheritedAttributes = {};
    this.lang = void 0;
    this.options = void 0;
  }
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
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
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Watch HTML attribute aria-invalid to inherit changes
   */
  ariaInvalidWatcher() {
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
  }
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.selectId}`,
        message: `${this.label} - ${this.errorMessage}`
      });
    } else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.selectId}` });
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
  /**
   * Check if an option is selected or value matches an option's value
   */
  checkValueOrSelected(option) {
    const value = option.getAttribute("value");
    if (this.value === value) {
      option.setAttribute("selected", "true");
      this.internals.setFormValue(value);
      this.initialValue = this.value;
    }
    if (option.hasAttribute("selected")) {
      this.value = value;
      this.initialValue = this.value ? this.value : null;
    }
  }
  /*
   * Form internal functions
   */
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
    }
  }
  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.value = state;
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
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    (0, import_validator_factory.r)(this.el, "select");
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
    if (this.el.children) {
      this.options = Array.from(this.el.children);
      this.options.forEach((option) => {
        if (option.nodeName === "OPTION") {
          this.checkValueOrSelected(option);
        } else if (option.nodeName === "OPTGROUP") {
          const subOptions = Array.from(option.children);
          subOptions.map((sub) => {
            this.checkValueOrSelected(sub);
          });
        }
      });
    }
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
  }
  render() {
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError, name, options } = this;
    const attrsSelect = Object.assign({
      name,
      disabled,
      required,
      value
    }, inheritedAttributes);
    const attrsLabel = {
      label,
      required
    };
    if (hint || errorMessage) {
      const hintID = hint ? `hint-${selectId} ` : "";
      const errorID = errorMessage ? `error-message-${selectId} ` : "";
      attrsSelect["aria-describedby"] = `${hintID}${errorID}${attrsSelect["aria-describedby"] ? `${attrsSelect["aria-describedby"]}` : ""}`;
    }
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: `gcds-select-wrapper ${disabled ? "gcds-disabled" : ""} ${hasError ? "gcds-error" : ""}` }, (0, import_stencil.h)("gcds-label", Object.assign({}, attrsLabel, { "label-for": selectId, lang })), hint ? (0, import_stencil.h)("gcds-hint", { "hint-id": selectId }, hint) : null, errorMessage ? (0, import_stencil.h)("gcds-error-message", { messageId: selectId }, errorMessage) : null, (0, import_stencil.h)("select", Object.assign({}, attrsSelect, { id: selectId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (e) => this.handleInput(e, this.gcdsInput), onChange: (e) => this.handleInput(e, this.gcdsChange), "aria-invalid": inheritedAttributes["aria-invalid"] === "true" ? inheritedAttributes["aria-invalid"] : errorMessage ? "true" : "false", part: "select", ref: (element) => this.shadowElement = element }), defaultValue ? (0, import_stencil.h)("option", { value: "", disabled: true, selected: true }, defaultValue) : null, options.map((opt) => {
      if (opt.nodeName === "OPTION") {
        const selected = opt.hasAttribute("selected") ? { selected: true } : null;
        return (0, import_stencil.h)("option", Object.assign({ value: opt.getAttribute("value") }, selected), opt.innerHTML);
      } else if (opt.nodeName === "OPTGROUP") {
        const optGroupChildren = Array.from(opt.children).map((sub) => {
          const selected = sub.hasAttribute("selected") ? { selected: true } : null;
          return (0, import_stencil.h)("option", Object.assign({ value: sub.getAttribute("value") }, selected), sub.innerHTML);
        });
        return (0, import_stencil.h)("optgroup", { label: opt.getAttribute("label") }, optGroupChildren);
      }
    }))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "disabled": ["validateDisabledSelect"],
      "errorMessage": ["validateErrorMessage"],
      "validator": ["validateValidator"],
      "hasError": ["validateHasError"],
      "aria-invalid": ["ariaInvalidWatcher"],
      "aria-description": ["ariaDescriptiondWatcher"]
    };
  }
  static get style() {
    return GcdsSelectStyle0;
  }
}, [81, "gcds-select", {
  "selectId": [1537, "select-id"],
  "label": [513],
  "name": [513],
  "required": [516],
  "disabled": [1540],
  "defaultValue": [513, "default-value"],
  "value": [1025],
  "errorMessage": [1537, "error-message"],
  "hint": [513],
  "validator": [1040],
  "validateOn": [1025, "validate-on"],
  "hasError": [32],
  "inheritedAttributes": [32],
  "lang": [32],
  "options": [32],
  "validate": [64]
}, [[4, "submit", "submitListener"]], {
  "disabled": ["validateDisabledSelect"],
  "errorMessage": ["validateErrorMessage"],
  "validator": ["validateValidator"],
  "hasError": ["validateHasError"],
  "aria-invalid": ["ariaInvalidWatcher"],
  "aria-description": ["ariaDescriptiondWatcher"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-select", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-select":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsSelect);
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
      case "gcds-label":
        if (!customElements.get(tagName)) {
          (0, import_gcds_label2.d)();
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
