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
var gcds_checkbox_exports = {};
__export(gcds_checkbox_exports, {
  GcdsCheckbox: () => GcdsCheckbox2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_checkbox_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_validator_factory = require("./validator.factory.js");
var import_gcds_error_message2 = require("./gcds-error-message2.js");
var import_gcds_hint2 = require("./gcds-hint2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_label2 = require("./gcds-label2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const gcdsCheckboxCss = '@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-checkbox{padding:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before{box-sizing:border-box;content:"";cursor:pointer}}@layer default{:host .gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin)!important;max-width:var(--gcds-checkbox-max-width);min-height:calc(var(--gcds-checkbox-input-height-and-width) - var(--gcds-checkbox-padding));padding:var(--gcds-checkbox-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-checkbox :is(gcds-label,gcds-hint,gcds-error-message){padding:var(--gcds-checkbox-label-padding)!important}:host .gcds-checkbox gcds-hint::part(hint){margin:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{position:absolute}:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{height:var(--gcds-checkbox-input-height-and-width);left:0;top:0;width:var(--gcds-checkbox-input-height-and-width)}:host .gcds-checkbox input{opacity:0}:host .gcds-checkbox gcds-label{width:fit-content}:host .gcds-checkbox gcds-label:before{border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-checkbox gcds-label:after{border:var(--gcds-checkbox-check-border-width) solid;border-block-start:0!important;border-inline-start:0!important;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);transition:opacity .2s ease-in-out;width:var(--gcds-checkbox-check-width)}:host .gcds-checkbox input:checked+gcds-label:after{opacity:1}}@layer disabled{:host .gcds-checkbox.gcds-checkbox--disabled{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label:after,:host .gcds-checkbox.gcds-checkbox--disabled gcds-label:before{cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor}}@layer error{:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label:before{border-color:var(--gcds-checkbox-danger-border)}:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label:after{color:var(--gcds-checkbox-danger-border)}}@layer focus{:host .gcds-checkbox:focus-within{color:var(--gcds-checkbox-focus-text)}:host .gcds-checkbox:focus-within input:focus+gcds-label:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);outline:var(--gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}}';
const GcdsCheckboxStyle0 = gcdsCheckboxCss;
const GcdsCheckbox$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsCheckbox extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsChange = (0, import_stencil.createEvent)(this, "gcdsChange", 7);
    this.gcdsError = (0, import_stencil.createEvent)(this, "gcdsError", 7);
    this.gcdsValid = (0, import_stencil.createEvent)(this, "gcdsValid", 7);
    this.internals = this.attachInternals();
    this._validator = import_validator_factory.d;
    this.onBlur = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.onChange = (e) => {
      this.checked = !this.checked;
      this.internals.setFormValue(e.target.value, "checked");
      if (!this.checked) {
        this.internals.setFormValue(null, "checked");
      }
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
      this.gcdsChange.emit(this.checked);
    };
    this.checkboxId = void 0;
    this.label = void 0;
    this.name = void 0;
    this.required = void 0;
    this.disabled = void 0;
    this.value = void 0;
    this.checked = void 0;
    this.errorMessage = void 0;
    this.hint = void 0;
    this.validator = void 0;
    this.validateOn = void 0;
    this.parentError = void 0;
    this.inheritedAttributes = {};
    this.hasError = void 0;
    this.lang = void 0;
  }
  validateDisabledCheckbox() {
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
  /**
   * Event listener for gcds-fieldset errors
   */
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el) && (0, import_utils.b)(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    } else if (!(0, import_utils.b)(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.checked) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.checkboxId}`,
        message: `${this.label} - ${this.errorMessage}`
      });
    } else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.checkboxId}` });
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
   * Form internal functions
   */
  formResetCallback() {
    if (this.checked != this.initialState) {
      this.checked = this.initialState;
    }
  }
  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.checked = state;
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
    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    (0, import_validator_factory.r)(this.el, "checkbox");
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
    this.internals.setFormValue(this.checked ? this.value : null);
    this.initialState = this.checked ? this.checked : null;
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
  }
  render() {
    const { lang, checkboxId, label, name, required, disabled, value, checked, hint, errorMessage, hasError, parentError, inheritedAttributes } = this;
    const attrsInput = Object.assign({
      name,
      disabled,
      required,
      value,
      checked
    }, inheritedAttributes);
    const attrsLabel = {
      label,
      required
    };
    if (hint || errorMessage || parentError) {
      const hintID = hint ? `hint-${checkboxId} ` : "";
      const errorID = errorMessage ? `error-message-${checkboxId} ` : "";
      const parentErrorID = parentError ? `parent-error-${checkboxId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${parentErrorID}${attrsInput["aria-describedby"] ? `${attrsInput["aria-describedby"]}` : ""}`;
    }
    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: `gcds-checkbox ${disabled ? "gcds-checkbox--disabled" : ""} ${hasError ? "gcds-checkbox--error" : ""}` }, (0, import_stencil.h)("input", Object.assign({ id: checkboxId, type: "checkbox" }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onChange: (e) => this.onChange(e), onClick: (e) => (0, import_utils.e)(e, this.gcdsClick), ref: (element) => this.shadowElement = element })), (0, import_stencil.h)("gcds-label", Object.assign({}, attrsLabel, { "label-for": checkboxId, lang })), hint ? (0, import_stencil.h)("gcds-hint", { "hint-id": checkboxId }, hint) : null, errorMessage ? (0, import_stencil.h)("gcds-error-message", { messageId: checkboxId }, errorMessage) : null, parentError ? (0, import_stencil.h)("span", { id: `parent-error-${checkboxId}`, hidden: true }, parentError) : null));
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
      "disabled": ["validateDisabledCheckbox"],
      "errorMessage": ["validateErrorMessage"],
      "validator": ["validateValidator"],
      "hasError": ["validateHasError"]
    };
  }
  static get style() {
    return GcdsCheckboxStyle0;
  }
}, [81, "gcds-checkbox", {
  "checkboxId": [1537, "checkbox-id"],
  "label": [513],
  "name": [513],
  "required": [516],
  "disabled": [1540],
  "value": [513],
  "checked": [1540],
  "errorMessage": [1537, "error-message"],
  "hint": [513],
  "validator": [1040],
  "validateOn": [1025, "validate-on"],
  "parentError": [32],
  "inheritedAttributes": [32],
  "hasError": [32],
  "lang": [32],
  "validate": [64]
}, [[16, "gcdsGroupError", "gcdsGroupError"], [16, "gcdsGroupErrorClear", "gcdsGroupErrorClear"], [4, "submit", "submitListener"]], {
  "disabled": ["validateDisabledCheckbox"],
  "errorMessage": ["validateErrorMessage"],
  "validator": ["validateValidator"],
  "hasError": ["validateHasError"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-checkbox", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-checkbox":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsCheckbox$1);
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
const GcdsCheckbox2 = GcdsCheckbox$1;
const defineCustomElement = defineCustomElement$1;
